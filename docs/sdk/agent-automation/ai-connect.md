---
title: AI Connect
sidebar_label: "🤖 AI Connect"
sidebar_position: 1
slug: /ai-connect
---

# Sentinel AI Connect

Sentinel AI Connect (`blue-agent-connect`) is a community-maintained JavaScript library that gives AI agents one-call decentralized VPN connectivity. Zero accounts, zero servers, zero centralized dependencies. One function call to an encrypted P2P tunnel - no API keys, no terms of service, no human approval required. It is built on top of the [Blue JavaScript SDK](/sdk/blue-js).

You can access Sentinel AI Connect from:
- [GitHub repository](https://github.com/Sentinel-Autonomybuilder/blue-agent-connect)
- [NPM package](https://www.npmjs.com/package/sentinel-ai-connect)
- [Libraries.io](https://libraries.io/npm/sentinel-ai-connect)

:::info
This library is community-built and not officially maintained by the Sentinel team.
:::

## Installation

```bash
npm install blue-agent-connect
```

## Quick Start

```javascript
import { connect, disconnect } from 'blue-agent-connect';

const vpn = await connect({ mnemonic: process.env.MNEMONIC });
console.log(`Connected via ${vpn.protocol} - IP: ${vpn.ip}`);
await disconnect();
```

That's the full happy path: connect, do work, disconnect.

## CLI

```bash
npx blue-agent-connect setup              # Check environment
npx blue-agent-connect wallet create      # Generate wallet
npx blue-agent-connect wallet balance     # Check P2P balance
npx blue-agent-connect connect            # Connect to VPN
npx blue-agent-connect disconnect         # Disconnect
npx blue-agent-connect status             # Connection status
npx blue-agent-connect nodes              # List available nodes
```

## What This Does

An AI agent installs this package, funds a wallet with P2P tokens, and gets private internet access through 900+ peer-to-peer nodes across 90+ countries. No signup, no API key, no human in the loop.

```
AI Agent -> blue-agent-connect -> blue-js-sdk -> Blockchain TX -> P2P Node -> Encrypted Tunnel -> Internet
```

## Features

- **One function call** from zero to encrypted tunnel
- **WireGuard** (kernel-level, full device encryption) and **V2Ray** (SOCKS5 proxy, per-app split tunnel)
- **Split tunneling** - encrypt only what needs encrypting, leave everything else direct
- **900+ nodes** across 90+ countries on live Sentinel mainnet
- **No API keys, no accounts** - just a wallet and P2P tokens
- **20 exports** covering connect, disconnect, verify, recommend, discover, estimate, and more

## Split Tunnel for AI Agents

V2Ray creates a local SOCKS5 proxy. Only traffic you explicitly route through it goes through the VPN. Chain queries, npm installs, and other operations stay on the direct internet - fast and unaffected.

```javascript
import { connect, disconnect } from 'blue-agent-connect';
import { SocksProxyAgent } from 'socks-proxy-agent';
import axios from 'axios';

const vpn = await connect({ mnemonic: process.env.MNEMONIC, protocol: 'v2ray' });

// This goes through the VPN (shows VPN IP)
const agent = new SocksProxyAgent(`socks5h://127.0.0.1:${vpn.socksPort}`);
const res = await axios.get('https://api.ipify.org', { httpAgent: agent, httpsAgent: agent, adapter: 'http' });

// This goes direct (shows real IP) - your SDK operations stay fast
const direct = await axios.get('https://api.ipify.org', { adapter: 'http' });

await disconnect();
```

## API

| Function                   | What It Does |
|----------------------------|--------------|
| `connect(opts)`            | Connect to VPN. Returns `{ sessionId, protocol, ip, socksPort }`. |
| `disconnect()`             | Tear down the tunnel. |
| `verify()`                 | Confirm the tunnel works. |
| `verifySplitTunnel()`      | Confirm split tunnel (proxy IP != direct IP). |
| `status()`                 | Current connection state. |
| `isVpnActive()`            | Boolean tunnel check. |
| `createWallet()`           | Generate a new wallet. |
| `importWallet(m)`          | Import an existing wallet. |
| `getBalance(m)`            | Check the P2P token balance. |
| `discoverNodes(opts)`      | Find available nodes. |
| `getNodeInfo(addr)`        | Specific node details. |
| `getNetworkStats()`        | Network overview. |
| `estimateCost(opts)`       | Estimate session cost. |
| `recommend(prefs)`         | AI decision engine - picks the best node. |
| `onEvent(cb)`              | Subscribe to lifecycle events. |
| `setup()`                  | Check the environment (V2Ray, WireGuard, Node.js). |
| `getEnvironment()`         | Synchronous environment snapshot. |
| `PRICING`                  | Reference pricing constants. |
| `AiPathError`              | Typed errors with machine-readable codes. |
| `AiPathErrorCodes`         | Error code constants. |

## Requirements

- **Node.js** >= 20.0.0
- **V2Ray** 5.2.1 (auto-downloaded on setup)
- **WireGuard** (optional, requires admin - without it, V2Ray nodes still work)
- **P2P tokens** for node payment (acquire from [swap.sentinel.co](https://swap.sentinel.co) or Osmosis DEX)
