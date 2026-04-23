---
title: Blue JavaScript
sidebar_label: "🟦 Blue JavaScript"
sidebar_position: 2
slug: /blue-js
---

# Blue JavaScript SDK

Blue JS SDK is a community-maintained JavaScript/TypeScript SDK for the Sentinel decentralized VPN network. It supports WireGuard and V2Ray tunnels, talks to the Cosmos blockchain, and works against the live network of 900+ nodes. Queries are RPC-based, events are typed, and the package is CosmJS compatible.

You can access the Blue JavaScript SDK from:
- [GitHub repository](https://github.com/Sentinel-Autonomybuilder/blue-js-sdk)
- [NPM package](https://www.npmjs.com/package/blue-js-sdk)

:::info
This SDK is community-built and not officially maintained by the Sentinel team. For AI agent use cases that just need a one-call `connect()`, use the higher-level [AI Connect](/sdk/ai-connect) wrapper instead.
:::

## Platform Support

| Platform    | Status       | Notes |
|-------------|--------------|-------|
| **Windows** | **Verified** | Full E2E on mainnet. WireGuard via `wireguard.exe /installtunnelservice`, V2Ray with native Windows service management. |
| **macOS**   | Untested     | Code exists (pfctl kill switch, launchctl tunnel, `wg-quick`). Needs mainnet verification. |
| **Linux**   | Untested     | Code exists (iptables kill switch, `wg-quick` tunnel). Needs mainnet verification. |

:::warning
The official `@sentinel-official/sentinel-js-sdk` does not work on Windows because it shells out to `wg-quick` (Unix-only). Blue JS SDK is the only Sentinel JS SDK currently verified on Windows.

Chain queries, wallet operations, and session management are pure JS and work on every platform. Only tunnel setup (the WireGuard/V2Ray binary interaction) is platform-specific.
:::

## Installation

```bash
npm install blue-js-sdk
```

## Quick Start

```javascript
import { connectAuto, disconnect, registerCleanupHandlers } from 'sentinel-dvpn-sdk';

registerCleanupHandlers();

const result = await connectAuto({
  mnemonic: process.env.MNEMONIC,
  serviceType: 'wireguard',
  onProgress: (step, detail) => console.log(`[${step}] ${detail}`),
});

console.log(`Connected: session ${result.sessionId}, IP changed`);

await disconnect();
```

## For AI Agents

If your use case is an autonomous AI agent that needs encrypted connectivity with no setup, use [`blue-agent-connect`](/sdk/ai-connect) instead. It is a zero-config wrapper around this SDK that gets you from zero to encrypted tunnel in a single function call.

## Features

- **WireGuard** kernel-level encrypted tunnels (requires admin)
- **V2Ray** SOCKS5 proxy with transport obfuscation (no admin needed)
- **Split tunneling**: per-app via V2Ray SOCKS5 or per-destination via WireGuard `AllowedIPs`
- **276 exports** covering wallet, chain, handshake, tunnel, security, pricing, and state
- **Cosmos blockchain** integration with on-chain sessions and P2P token payments
- **4 LCD + 5 RPC failover endpoints**, no single point of failure
- **AES-256-GCM** encrypted credential storage
- **TOFU TLS** certificate pinning
- **Verify-before-capture** for safe WireGuard activation without dropping internet

## Security

- All private keys are zeroed with `Buffer.fill(0)` after use
- Credentials are encrypted at rest using AES-256-GCM
- File permissions are set to `0o600` on every sensitive file
- Full security policy: [SECURITY.md](https://github.com/Sentinel-Autonomybuilder/blue-js-sdk/blob/master/SECURITY.md)

For protocol specs, the full export reference, and additional examples, see the [GitHub repository](https://github.com/Sentinel-Autonomybuilder/blue-js-sdk).
