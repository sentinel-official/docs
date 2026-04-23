---
title: .NET / C#
sidebar_label: "🟦 .NET / C#"
sidebar_position: 1
slug: /dotnet
---

# .NET / C# SDK

The Blue C# SDK is a community-built protocol library for building decentralized VPN applications on the Sentinel network with C# and .NET 8. It covers WireGuard and V2Ray tunnels, wallet management, session handling, and every chain message type for Sentinel v3. The repository ships with 814+ tests, has zero external service dependencies, and includes a full WPF desktop client as a worked reference.

You can access the .NET / C# SDK from:
- [GitHub repository](https://github.com/Sentinel-Autonomybuilder/blue-csharp-sdk)
- [NuGet meta-package `Sentinel.SDK`](https://www.nuget.org/packages/Sentinel.SDK)

:::info
This SDK is community-built and not officially maintained by the Sentinel team.
:::

## Quick Start

```csharp
using var vpn = new SentinelVpnClient(SentinelWallet.FromMnemonic(mnemonic), new());
var result = await vpn.ConnectAutoAsync(new ConnectAutoOptions { Countries = ["DE", "US"] });
await vpn.DisconnectAsync(); // or let IDisposable handle it
```

## Installation

```bash
dotnet add package Sentinel.SDK          # Meta-package (all three)
dotnet add package Sentinel.SDK.Core     # Wallet + chain only
dotnet add package Sentinel.SDK.Node     # + handshake + VPN client
dotnet add package Sentinel.SDK.Tunnel   # + WireGuard/V2Ray
```

Requires .NET 8.0+. WireGuard nodes require administrative privileges; without admin you can still connect through V2Ray nodes (~70% of the network). V2Ray nodes require the V2Ray 5.2.1 binary - do **not** use 5.44.1+.

## NuGet Packages

| Package | Description |
|---------|-------------|
| **Sentinel.SDK.Core**   | Wallet, chain client, protobuf encoding, transaction building, error hierarchy, helpers, state persistence |
| **Sentinel.SDK.Node**   | Node discovery, V3 handshake, session management, the `SentinelVpnClient` orchestrator |
| **Sentinel.SDK.Tunnel** | WireGuard tunnel service, V2Ray process management, kill switch, DNS leak prevention |

## Architecture

```
                    ┌──────────────────────────────────────────┐
                    │           Your Application               │
                    └─────────────────┬────────────────────────┘
                                      │
                    ┌─────────────────▼────────────────────────┐
                    │         Sentinel.SDK.Node                │
                    │                                          │
                    │  SentinelVpnClient (orchestrator)        │
                    │    ConnectAsync          SessionManager  │
                    │    ConnectAutoAsync      Handshake       │
                    │    ConnectViaSubAsync    NodeClient      │
                    │    DisconnectAsync       DiagnoseAsync   │
                    │    Events: Progress, Connected,          │
                    │            Disconnected, Error           │
                    └──────┬───────────────────────┬───────────┘
                           │                       │
          ┌────────────────▼──────────┐  ┌─────────▼────────────────┐
          │    Sentinel.SDK.Core      │  │  Sentinel.SDK.Tunnel     │
          │                           │  │                          │
          │  SentinelWallet           │  │  WireGuard/              │
          │  ChainClient (LCD+RPC)    │  │    WireGuardTunnel       │
          │  TransactionBuilder       │  │    KillSwitch            │
          │  MessageBuilder (17 msgs) │  │    DnsLeakPrevention     │
          │  SentinelErrors (42 codes)│  │  V2Ray/                  │
          │  AutoReconnect            │  │    V2RayConfigBuilder    │
          │  CircuitBreaker           │  │    V2RayProcess          │
          │  NetworkMonitor           │  └──────────────────────────┘
          │  NodeCache, SpeedTest     │
          │  SessionTracker           │
          │  VpnSettings, Helpers     │
          │  ISdkLogger, StateManager │
          │  TofuTrustStore           │
          └───────────────────────────┘
```

## Full Example

```csharp
using Sentinel.SDK.Core;
using Sentinel.SDK.Node;

// 1. Create or restore wallet
using var wallet = SentinelWallet.FromMnemonic("your twelve word mnemonic phrase goes here ...");

// 2. Create VPN client with options
using var vpn = new SentinelVpnClient(wallet, new SentinelVpnOptions
{
    Gigabytes = 1,
    FullTunnel = true,
    Logger = new ConsoleSdkLogger(),
});

// 3. Subscribe to events for UI binding
vpn.Progress += (_, e) => Console.WriteLine($"[{e.Step}] {e.Detail}");
vpn.Connected += (_, e) => Console.WriteLine($"Connected to {e.NodeAddress}");
vpn.Disconnected += (_, e) => Console.WriteLine($"Disconnected: {e.Reason}");
vpn.Error += (_, e) => Console.WriteLine($"Error [{e.Code}]: {e.Message}");

// 4. Auto-pick best node and connect
var result = await vpn.ConnectAutoAsync(new ConnectAutoOptions
{
    Countries = ["DE", "US"],
    ServiceType = "wireguard",
    MaxAttempts = 3,
});

Console.WriteLine($"VPN active! Node: {result.NodeAddress}, Session: {result.SessionId}");

// 5. Verify traffic is routed through VPN
var verify = await vpn.VerifyConnectionAsync();
Console.WriteLine($"External IP: {verify.ExternalIp}");

// 6. Disconnect (or let Dispose handle it)
await vpn.DisconnectAsync();
```

## Key Features

- **`IDisposable` everywhere** - `SentinelWallet`, `SentinelVpnClient`, and `ChainClient` all implement `IDisposable` for deterministic cleanup. `using` statements guarantee tunnel teardown and key-material disposal.
- **Full `async/await`** - every network operation is async with `CancellationToken` support.
- **`ISdkLogger` interface** - plug in your logging framework (`Serilog`, `NLog`, `ILogger<T>` adapter). Ships with `ConsoleSdkLogger` and `NullSdkLogger`.
- **Event-driven** - `Progress`, `Connected`, `Disconnected`, and `Error` events for clean UI binding (WPF, MAUI, Avalonia).
- **Record types** - immutable options (`SentinelVpnOptions`, `ConnectAutoOptions`) and results (`ConnectionResult`, `ConnectionDiagnostics`).
- **Typed exception hierarchy** - `SentinelException` base with `WalletException`, `ChainException`, `NodeException`, `TunnelException`, `HandshakeException`, each carrying `.Code` and `.Details`.
- **Two tunnel protocols** - WireGuard (kernel-level, fastest) and V2Ray (userspace, no admin), with automatic fallback.
- **42 typed error codes** - machine-readable `.Code` on every exception, severity levels (`fatal`, `retryable`, `recoverable`), and human-friendly messages via `ErrorSeverity.UserMessage()`.
- **17 chain message types** - sessions, subscriptions, plans, providers, leases, fee grants, bank send.
- **Session reuse** - detects existing active sessions to avoid double-paying.
- **409 conflict recovery** - automatically creates a new session on handshake conflict.
- **Clock drift detection** - skips V2Ray nodes with >120s drift (VMess AEAD failure).
- **Auto-reconnect** - `AutoReconnect` class with exponential backoff and configurable retry policy.
- **Circuit breaker** - `CircuitBreaker` prevents repeated connections to failing nodes.
- **Kill switch** - firewall rules block all non-VPN traffic while connected.
- **DNS leak prevention** - forces DNS through the tunnel.
- **TOFU TLS** - trust-on-first-use certificate pinning per node.
- **LCD failover** - automatic rotation across 4 LCD endpoints.
- **State persistence** - save and load connection state across process restarts.

## Error Handling

Every SDK error extends `SentinelException` with a machine-readable `.Code`:

```csharp
using Sentinel.SDK.Core;

try
{
    var result = await vpn.ConnectAutoAsync(opts);
}
catch (NodeException ex) when (ErrorSeverity.Get(ex.Code) == "retryable")
{
    // Try another node
    logger.Warn($"Retryable: {ex.Code} -- {ErrorSeverity.UserMessage(ex.Code)}");
}
catch (ChainException ex)
{
    logger.Error($"Chain error [{ex.Code}]: {ex.Message}");
}
catch (TunnelException ex)
{
    logger.Error($"Tunnel error [{ex.Code}]: {ex.Message}");
}
```

Exception hierarchy: `SentinelException` -> `WalletException`, `ChainException`, `NodeException`, `TunnelException`, `HandshakeException`.

## Message Builder (17 Message Types)

| Category     | Messages                                                          |
|--------------|-------------------------------------------------------------------|
| Session      | `StartSession`, `EndSession`                                      |
| Subscription | `StartSubscription`, `SubStartSession`, `PlanStartSession`        |
| Plan         | `CreatePlan`, `UpdatePlanStatus`, `LinkNode`, `UnlinkNode`        |
| Provider     | `RegisterProvider`, `UpdateProviderDetails`, `UpdateProviderStatus` |
| Lease        | `StartLease`, `EndLease`                                          |
| Bank         | `Send`                                                            |
| Fee Grant    | `GrantFeeAllowance`, `RevokeFeeAllowance`                         |

## Security

| Feature                       | Description |
|-------------------------------|-------------|
| **Kill switch**               | Firewall rules block all traffic outside the VPN tunnel. |
| **DNS leak prevention**       | Overrides system DNS to keep queries inside the tunnel. |
| **TOFU TLS**                  | Pins node TLS certificates on first contact and alerts on change. |
| **On-chain sessions**         | Session start and end are recorded on the Sentinel blockchain. |
| **Key disposal**              | `IDisposable` ensures wallet key material is zeroed on cleanup. |
| **No accounts**               | Wallet-based authentication only - no servers, no sign-ups. |
| **No external dependencies**  | Connects directly to decentralized nodes - no relay servers. |
| **Credential store**          | Encrypted persistence for sensitive configuration. |

## Sentinel Chain v3

The SDK targets Sentinel chain v3. Key differences from v2:

- Nodes use `service_type` (not `type`) and a `remote_addrs` array (not a `remote_url` string)
- Sessions are wrapped in `base_session`
- Active node status is `status=1` (not `STATUS_ACTIVE`)
- Provider queries remain on v2 (`/sentinel/provider/v2/`)
- Token: **P2P** (chain denom `udvpn`, where 1 P2P = 1,000,000 udvpn)

LCD failover endpoints (rotated automatically):
1. `https://lcd.sentinel.co`
2. `https://api.sentinel.quokkastake.io`
3. `https://sentinel-api.polkachu.com`
4. `https://sentinel.api.trivium.network:1317`

| Property   | Value |
|------------|-------|
| Chain ID   | `sentinelhub-2` |
| Denom      | `udvpn` (1 P2P = 1,000,000 udvpn) |
| HD Path    | `m/44'/118'/0'/0/0` |
| Bech32     | `sent1` (account), `sentnode1` (node), `sentprov1` (provider) |
| Gas Price  | `0.2 udvpn` per gas unit |

## Dependencies

| Package           | Purpose |
|-------------------|---------|
| NBitcoin          | BIP39, BIP44, secp256k1, Bech32 |
| Google.Protobuf   | Protobuf message encoding |
| NSec.Cryptography | X25519 (Curve25519) for WireGuard key generation |

For a full WPF desktop client reference, the complete API catalog, edge cases, and protocol specs (V3 handshake, V2Ray config, WireGuard config, LCD API), see the [GitHub repository](https://github.com/Sentinel-Autonomybuilder/blue-csharp-sdk).
