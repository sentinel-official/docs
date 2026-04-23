---
title: Golang
sidebar_label: "🔧 Golang"
sidebar_position: 1
slug: /golang
---

# Golang SDK

The Go SDK is the most complete of the three - it covers the full stack from blockchain client operations down to native VPN tunnel management. Built on [Cosmos SDK](https://docs.cosmos.network/) and [CometBFT](https://docs.cometbft.com/), it provides everything needed to query chain state, sign transactions, communicate with nodes, and run WireGuard, V2Ray, or OpenVPN tunnels. This is the SDK used by node operators and service builders.

You can access the Sentinel Go SDK from:
- [GitHub repository](https://github.com/sentinel-official/sentinel-go-sdk)
- [Go Package Reference](https://pkg.go.dev/github.com/sentinel-official/sentinel-go-sdk)

:::warning
Please note that this SDK is still under development.
:::

## Architecture

The SDK is organized into the following packages:

- **`core/`** - Blockchain client with query, transaction, and domain-specific operations (node, session, subscription, provider, deposit, auth, bank)
- **`node/`** - Direct node communication, information retrieval, and cryptographic handshake
- **`wireguard/`** - WireGuard VPN client and server implementation (platform-specific for Unix/Windows)
- **`v2ray/`** - V2Ray proxy client and server implementation
- **`openvpn/`** - OpenVPN server implementation with peer management
- **`process/`** - Process lifecycle management with state machine
- **`types/`** - Core type definitions, service interfaces, and API structures
- **`utils/`** - Utility functions for crypto, addresses, events, templates, and encoding
- **`libs/`** - Standalone library packages (cron, crypto, encoding, geoip, logging, speedtest, and more)

## Installation

```bash
go get github.com/sentinel-official/sentinel-go-sdk
```

## Client

The `core` package provides the main blockchain client. It uses a builder pattern for configuration, allowing you to chain method calls to set up the client.

### Builder Configuration

```go
import (
    "github.com/sentinel-official/sentinel-go-sdk/core"
)

client := core.NewClient().
    WithRPCAddr("https://rpc.sentinel.co:443").
    WithRPCChainID("sentinelhub-2").
    WithTxFromName("my-key").
    WithTxGasAdjustment(1.15).
    WithTxFees("100000udvpn").
    WithKeyring(keyring)

client.Seal() // Prevent further modifications
```

The full set of builder methods includes:

| Method | Description |
|--------|-------------|
| `WithRPCAddr` | RPC endpoint address |
| `WithRPCChainID` | Chain identifier |
| `WithRPCHeaders` | Custom RPC headers |
| `WithRPCTimeout` | RPC request timeout |
| `WithTxFromName` | Signing key name |
| `WithTxGas` | Gas limit |
| `WithTxGasAdjustment` | Gas estimation multiplier |
| `WithTxFees` | Transaction fees |
| `WithTxMemo` | Transaction memo |
| `WithTxBroadcastRetryAttempts` | Number of broadcast retries |
| `WithTxAuthzGranterAddr` | Authz granter address |
| `WithKeyring` | Keyring for signing |
| `WithProtoCodec` | Protocol buffer codec |
| `WithQueryProve` | Enable query proofs |
| `WithQueryRetryAttempts` | Number of query retries |

### Configuration from File

Alternatively, you can create a client from a structured configuration object using the `core/config` sub-package:

```go
import (
    "github.com/sentinel-official/sentinel-go-sdk/core"
    "github.com/sentinel-official/sentinel-go-sdk/core/config"
)

cfg := config.DefaultConfig()

// Customize as needed
// cfg.RPC, cfg.Tx, cfg.Keyring, cfg.Query are sub-configs

if err := cfg.Validate(); err != nil {
    log.Fatal(err)
}

client, err := core.NewClientFromConfig(cfg)
if err != nil {
    log.Fatal(err)
}
```

The `Config` struct is composed of four sub-configurations:

- **`KeyringConfig`** - Key management backend and settings
- **`QueryConfig`** - Query parameters and retry behavior
- **`RPCConfig`** - RPC connection settings (addresses, chain ID, timeout)
- **`TxConfig`** - Transaction parameters (gas, fees, from name, retry logic)

Each sub-config has its own `SetForFlags(*pflag.FlagSet)` method for CLI integration with Cobra.

## Query

The SDK supports querying blockchain state through gRPC. Available query domains include **node**, **session**, **subscription**, **provider**, **deposit**, **auth**, **bank**, and **block**.

### Querying Nodes

```go
import (
    "context"

    v1 "github.com/sentinel-official/sentinelhub/v12/types/v1"
    "github.com/cosmos/cosmos-sdk/types/query"
)

// Query active nodes with pagination
nodes, pageRes, err := client.Nodes(
    context.Background(),
    v1.StatusActive,
    &query.PageRequest{
        Limit:      10,
        CountTotal: true,
    },
)
if err != nil {
    log.Fatal(err)
}

fmt.Printf("Found %d nodes (total: %d)\n", len(nodes), pageRes.Total)

// Query a specific node by address
node, err := client.Node(context.Background(), nodeAddr)

// Query nodes for a specific plan
nodes, pageRes, err := client.NodesForPlan(context.Background(), planID, v1.StatusActive, pageReq)

// Query node module parameters
params, err := client.NodeParams(context.Background())
```

### Querying Sessions

```go
// All sessions for an account
sessions, pageRes, err := client.SessionsForAccount(context.Background(), accAddr, pageReq)

// Sessions for a specific node
sessions, pageRes, err := client.SessionsForNode(context.Background(), nodeAddr, pageReq)

// Sessions for a subscription
sessions, pageRes, err := client.SessionsForSubscription(context.Background(), subscriptionID, pageReq)

// A single session by ID
session, err := client.Session(context.Background(), sessionID)
```

### Querying Subscriptions

```go
// All subscriptions for an account
subs, pageRes, err := client.SubscriptionsForAccount(context.Background(), accAddr, pageReq)

// Subscriptions for a plan
subs, pageRes, err := client.SubscriptionsForPlan(context.Background(), planID, pageReq)

// Subscription allocation
alloc, err := client.SubscriptionAllocation(context.Background(), subscriptionID, accAddr)
```

For pagination guidance, refer to:
- https://docs.cosmos.network/v0.45/core/proto-docs.html#cosmos-base-query-v1beta1-pagination-proto
- https://github.com/cosmos/cosmos-sdk/blob/main/types/query/pagination.pb.go#L32-L53

## Transaction

Once you've configured a client with signing capabilities, you can build, sign, and broadcast transactions. The SDK handles fee calculation, gas estimation, and automatic retry logic for deadline exceeded and sequence mismatch errors.

### Broadcasting Transactions

```go
import (
    "context"

    cosmossdk "github.com/cosmos/cosmos-sdk/types"
)

// Broadcast and return immediately (synchronous broadcast, async confirmation)
result, err := client.BroadcastTxSync(context.Background(), msg1, msg2)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Tx Hash: %s\n", result.Hash)

// Broadcast and wait for block inclusion
broadcastRes, txRes, err := client.BroadcastTxCommit(context.Background(), msg)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Tx Hash: %s, Height: %d\n", txRes.Hash, txRes.Height)
```

### Domain-Specific Helpers

The SDK provides convenience methods that construct the message, broadcast, and parse the result in a single call:

```go
// Start a session on a node - returns the new session ID
sessionID, err := client.NodeStartSession(
    context.Background(),
    nodeAddr,    // target node address
    10,          // gigabytes
    24,          // hours
    maxPrice,    // maximum acceptable price
)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Session ID: %d\n", sessionID)

// Start a session from an existing subscription
sessionID, err := client.SubscriptionStartSession(
    context.Background(),
    subscriptionID,
    nodeAddr,
)
```

### Querying a Transaction

```go
// Retrieve a transaction by hash
txResult, err := client.Tx(context.Background(), txHash)
```

## Node Communication

The `node` package handles direct communication with Sentinel nodes outside of blockchain transactions. The node client embeds the core blockchain client and adds node-specific configuration.

### Creating a Node Client

```go
import (
    "time"

    "github.com/sentinel-official/sentinel-go-sdk/node"
)

nodeClient := node.NewClient(coreClient).
    WithAddr(nodeAddr).
    WithFromName("my-key").
    WithInsecure(false).
    WithTimeout(10 * time.Second)
```

Or from configuration:

```go
nodeClient, err := node.NewClientFromConfig(cfg)
if err != nil {
    log.Fatal(err)
}
```

### Node Information

Retrieve metadata about a node, including its address, capacity, location, peer count, service type, and version:

```go
info, err := nodeClient.GetInfo()
if err != nil {
    log.Fatal(err)
}

fmt.Printf("Service Type: %s\n", info.GetServiceType())
```

### Handshake

After starting a session on-chain, perform a cryptographic handshake with the node to establish a VPN connection. The handshake uses asymmetric signatures to verify identity:

```go
// Prepare session data (e.g., WireGuard public key or V2Ray UUID)
data := []byte(`{"public_key": "..."}`)

result, err := nodeClient.InitHandshake(context.Background(), sessionID, data)
if err != nil {
    log.Fatal(err)
}

// result.Addrs contains the node's network addresses
// result.Data contains protocol-specific handshake response
```

## VPN Connection

The SDK includes built-in support for three VPN protocols: **WireGuard**, **V2Ray**, and **OpenVPN**. All VPN clients implement the `ClientService` interface, providing a consistent lifecycle API:

```go
type ClientService interface {
    Type() ServiceType
    IsRunning() (bool, error)
    Init(force bool) error
    Setup(ctx context.Context) error
    Start(parent context.Context) (context.Context, error)
    Stop() error
    Wait(ctx context.Context) error
    Cleanup() error
    Statistics(ctx context.Context) (int64, int64, error)
}
```

Service types are defined as constants:

```go
types.ServiceTypeWireGuard  // "wireguard"
types.ServiceTypeV2Ray      // "v2ray"
types.ServiceTypeOpenVPN    // "openvpn"
```

### WireGuard

```go
import (
    "github.com/sentinel-official/sentinel-go-sdk/wireguard"
)

wgClient := wireguard.NewClient("wg-client", appDir, wgConfig).
    WithDevice("wg0")

// Initialize configuration files
if err := wgClient.Init(false); err != nil {
    log.Fatal(err)
}

// Set up the interface
if err := wgClient.Setup(ctx); err != nil {
    log.Fatal(err)
}

// Start the VPN tunnel
ctx, err := wgClient.Start(context.Background())
if err != nil {
    log.Fatal(err)
}

// Get traffic statistics (rxBytes, txBytes)
rx, tx, err := wgClient.Statistics(ctx)
fmt.Printf("RX: %d bytes, TX: %d bytes\n", rx, tx)

// Stop and clean up
wgClient.Stop()
wgClient.Cleanup()
```

### V2Ray

```go
import (
    "github.com/sentinel-official/sentinel-go-sdk/v2ray"
)

v2rayClient := v2ray.NewClient("v2ray-client", appDir, v2rayConfig)

if err := v2rayClient.Init(false); err != nil {
    log.Fatal(err)
}

if err := v2rayClient.Setup(ctx); err != nil {
    log.Fatal(err)
}

ctx, err := v2rayClient.Start(context.Background())
if err != nil {
    log.Fatal(err)
}

// Same lifecycle: Stop(), Wait(), Cleanup(), Statistics()
```

### OpenVPN

The OpenVPN package provides a **server-side** implementation with peer management, implementing the `ServerService` interface:

```go
type ServerService interface {
    BaseService
    AddPeer(ctx context.Context, req any) (id string, res any, err error)
    HasPeer(ctx context.Context, id string) (bool, error)
    RemovePeer(ctx context.Context, id string) error
    PeersLen() int
    PeerStatistics() (map[string]*PeerStatistics, error)
}
```

## Process Management

The `process` package provides a state machine for managing long-running VPN service lifecycles. It is used internally by the WireGuard, V2Ray, and OpenVPN packages.

```go
import (
    "github.com/sentinel-official/sentinel-go-sdk/process"
)

manager := process.NewManager("my-service")
```

The manager enforces strict state transitions:

```
Unspecified → Starting → Started → Stopping → Stopped → Unspecified
                ↓                      ↓
           StartError             StopError
```

Key methods: `Start`, `Stop`, `Wait`, `Cleanup`, `Reset`, `IsRunning`, and `Go` (for launching goroutines within the process context).

## Libraries

The `libs/` directory contains standalone utility packages:

| Package | Description |
|---------|-------------|
| `libs/cmux` | Connection multiplexing |
| `libs/cron` | Scheduled task execution |
| `libs/crypto` | Cryptographic utilities |
| `libs/encoding` | Data encoding/decoding |
| `libs/geoip` | Geographic IP lookup |
| `libs/gin` | Gin web framework extensions |
| `libs/log` | Structured logging (zerolog) |
| `libs/netip` | Network/IP utilities |
| `libs/oracle` | Price oracle integration |
| `libs/safe` | Safe concurrent operations |
| `libs/speedtest` | Network speed testing |

## Protobuf

The SDK uses Protocol Buffers for all blockchain message types, built on the [Sentinel Hub](https://github.com/sentinel-official/hub) proto definitions (`sentinelhub/v12`). Proto types are compiled with the standard Go protobuf toolchain (`protoc` with `gogoproto`). The generated types are used throughout the `core/` and `types/` packages for queries and transactions.
