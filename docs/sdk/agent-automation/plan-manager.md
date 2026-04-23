---
title: Plan Manager
sidebar_label: "📋 Plan Manager"
sidebar_position: 3
slug: /plan-manager
---

# Sentinel Plan Manager

Sentinel Plan Manager is a community-built commerce layer for the Sentinel decentralized VPN. It is a full-stack web studio for creating on-chain subscription plans, curating node pools, managing subscribers, and issuing fee grants - turning the raw Sentinel protocol into a revenue-generating bandwidth business that anyone can run from a laptop. It is built on top of the [Blue JavaScript SDK](/sdk/blue-js).

You can access Plan Manager from:
- [GitHub repository](https://github.com/Sentinel-Autonomybuilder/sentinel-plan-manager)
- [NPM package `sentinel-plan-manager`](https://www.npmjs.com/package/sentinel-plan-manager)

:::info
This project is community-built and not officially maintained by the Sentinel team.
:::

## What It Is

Sentinel gives you a tunnel, nodes, and a blockchain ledger. Plan Manager turns that infrastructure into a business studio:

- **Create plans** - one transaction, immutable pricing (Sentinel v3), with your choice of duration, data cap, and per-gigabyte price.
- **Curate node pools** - browse 900+ live nodes, filter by country and protocol, batch-link them to your plan in a single TX. Auto-leases nodes that need activation.
- **Manage subscribers** - see who subscribed, expiry dates, revenue in P2P and USD. The chain is the database.
- **Fund access with fee grants** - pay gas on behalf of subscribers so they never need to hold gas tokens. Batch-issue (5 per TX), revoke, and auto-grant on new subscriptions.
- **Monitor the network** - 39 RPC endpoints health-checked, plus node rankings by sessions, bandwidth, and unique users.

This is not an admin panel. It is a blockchain business studio - every feature exists to lower the gap between *"I want to run a bandwidth business"* and *"I am running one."*

## How Subscription Plans Work

Plan Manager operates Sentinel v3 subscription plans - the chain-native model where an operator creates a plan (duration + data cap + price), links nodes, and subscribers consume bandwidth across those nodes without paying each node per session. Operators can fee-grant subscribers so end users hold zero P2P tokens.

See [PLANS.md in the repo](https://github.com/Sentinel-Autonomybuilder/sentinel-plan-manager/blob/master/PLANS.md) for the full breakdown: plan lifecycle, plan-based vs P2P sessions, fee grants, operator economics, and when to use this dashboard versus the SDK directly.

## Who It's For

| You are…           | You get…                                                                                                              |
|--------------------|-----------------------------------------------------------------------------------------------------------------------|
| **An entrepreneur** | A working dVPN business in minutes - no paperwork, no telcos, no servers to host.                                     |
| **A developer**    | A reference implementation of every plan-related TX on Sentinel v3, with hand-rolled protobuf encoding you can copy. |
| **A provider**     | Batch node management, lease orchestration, fee-grant abstraction - the boring work, automated.                       |
| **An AI agent**    | A complete HTTP API (40+ endpoints) to create plans, link nodes, and grant subscribers programmatically.              |

## Quick Start

:::warning
This tool operates on Sentinel mainnet. Every transaction costs real P2P tokens. There is no testnet mode.
:::

### Option A - npm (recommended, one-shot)

```bash
npm install -g sentinel-plan-manager
plans --help                                # verify install
echo "MNEMONIC=word1 word2 ... word24" > .env
npx sentinel-plan-manager                   # or: node $(npm root -g)/sentinel-plan-manager/server.js
```

### Option B - git clone (for contributors)

```bash
git clone https://github.com/Sentinel-Autonomybuilder/sentinel-plan-manager.git
cd sentinel-plan-manager
npm install
cp .env.example .env    # then edit .env and paste your mnemonic
npm start
```

Open http://localhost:3003.

### Option C - Docker

```bash
docker build -t sentinel-plan-manager .
docker run -d --name plan-manager \
  -p 3003:3003 \
  -e MNEMONIC="word1 word2 ... word24" \
  -v plan-manager-data:/data \
  --restart unless-stopped \
  sentinel-plan-manager

# or with compose (includes named volume + auto-restart)
echo "MNEMONIC=word1 word2 ... word24" > .env
docker compose up -d
```

State (`.wallet.json`, `my-plans.json`, `nodes-cache.json`) lives in the `/data` volume so it survives container recreations. Leave `MNEMONIC` unset to create a wallet from the UI on first boot instead.

### Option D - Multi-user deploy (public domain)

Want to deploy this to a domain and let anyone sign in with their own mnemonic? Set `MULTI_USER=true`:

```bash
docker run -d --name plan-manager \
  -p 3003:3003 \
  -e MULTI_USER=true \
  -v plan-manager-data:/data \
  --restart unless-stopped \
  sentinel-plan-manager
```

In multi-user mode the server skips the `MNEMONIC` env / `.wallet.json` bootstrap, encrypts each user's mnemonic with AES-256-GCM into an httpOnly cookie, derives each request's wallet from the cookie via `AsyncLocalStorage`, and keys `my-plans.json` by wallet address so each operator only sees their own plans.

:::warning
Always serve multi-user deployments over HTTPS. The cookie is httpOnly but the login request still sends the mnemonic in plaintext over the wire.
:::

### Requirements

- **Node.js 20+**
- **A Cosmos wallet** - generate with Keplr or Leap browser extension, or any Cosmos SDK key tool. The mnemonic goes into `.env` as `MNEMONIC=...`.
- **P2P (udvpn) tokens on Sentinel mainnet** - acquire via [Osmosis DEX](https://app.osmosis.zone) or any Cosmos IBC bridge supporting Sentinel.
- **Minimum balance for full setup: ~5-10 P2P**, broken down:

| Operation                                  | Approximate P2P cost |
|--------------------------------------------|----------------------|
| Register as provider (one-time)            | ~0.5                 |
| Create a plan                              | ~0.5                 |
| Link one node (includes auto-lease deposit)| ~1-2                 |
| Batch-link 5 nodes                         | ~5-8                 |
| Issue one fee grant                        | ~0.1                 |
| Revoke one fee grant                       | ~0.1                 |
| Start a plan session (operator-funded)     | ~0.2                 |

A fresh operator registering, creating one plan, and linking 5 nodes should budget ~8 P2P to be safe.

### First Run - 0 to Live Plan in 6 Steps

After `npm start`, open http://localhost:3003 and go in order:

1. **Wallet tab** - paste mnemonic (or set `MNEMONIC=` in `.env` before start). Confirm balance shows >= 5 P2P.
2. **Provider tab** - click **Register Provider**. One-time. Creates your `sentprov1...` on-chain. ~0.5 P2P.
3. **Plans tab** - click **Create Plan**. Set GB, days, and price per GB. Pricing is immutable (v3). ~0.5 P2P.
4. **Plans tab** - set plan status to `active` (1). Subscribers can't join an inactive plan.
5. **Nodes tab** - filter by country and protocol, select nodes, click **Batch Link to Plan**. Auto-leases any node that needs it. ~1-2 P2P per node.
6. **Fee Grants tab** - once subscribers exist, click **Grant All Subscribers**. Batches 5 per TX so end users pay zero gas.

CLI equivalent:

```bash
plans wallet info
plans provider register
plans plan create --gb 10 --days 30 --price-udvpn 500000
plans plan status <id> 1
plans batch-link <id> sentnode1abc...,sentnode1def...
plans feegrant grant-subscribers <id> --spend-limit-dvpn 10 --expiration-days 30
```

## CLI

The Plan Manager includes a command-line interface (`cli.js`) that exposes every server endpoint as a subcommand. It is a thin HTTP client - it talks to a running server and requires no extra dependencies beyond Node 20+. AI agents can drive the full plan lifecycle (create plans, link nodes, issue fee grants, query state) from a shell or subprocess without touching the web UI.

```bash
# Server health
plans health

# Wallet
plans wallet info
plans wallet import "word1 word2 ... word12"
plans wallet logout

# Plans
plans plan list
plans plan mine
plans plan get 42
plans plan create --gb 10 --days 30 --price-udvpn 500000
plans plan status 42 1          # 1=active, 3=inactive (2 is chain-set only, never pass it)
plans plan subscribers 42

# Nodes
plans node list --country US --protocol wireguard
plans node list --limit 100 --page 2

# Linking nodes to a plan
plans link 42 sentnode1abc...
plans batch-link 42 sentnode1abc...,sentnode1def...

# Fee grants
plans feegrant list
plans feegrant grant-subscribers 42 --spend-limit-dvpn 10 --expiration-days 30
plans feegrant revoke-all
```

Pass `--json` to any command to receive raw JSON on stdout. Exit codes: 0 success, 1 client error, 2 server error, 3 server unreachable. Use `--base-url http://host:port` to target a remote server.

## Built On blue-js-sdk

Plan Manager is a consumer app of the [Blue JavaScript SDK](/sdk/blue-js). It is not a fork - it imports SDK modules directly to handle node discovery, disk caching, chain RPC, error taxonomy, and price lookups.

| SDK Export | Used For |
|------------|----------|
| `listNodes`, `registerCleanupHandlers`, `disconnect` | Full mainnet node scan (concurrency 30, ~900+ nodes) and graceful shutdown. |
| `cached`, `cacheInvalidate`, `cacheClear` | Stale-while-revalidate caching for node scans, subscriptions, fee-grant lookups. |
| `ErrorCodes`, `isRetryable`, `userMessage` | Typed error codes surfaced to the UI with human-readable messages. |
| `getDvpnPrice` | Live P2P -> USD pricing from CoinGecko. |
| `createRpcQueryClient`, `rpcQueryNode`, `rpcQueryNodes`, `rpcQueryNodesForPlan` | Direct protobuf node queries (~912x faster than LCD for single-node lookups). |

Everything outside those imports - plan creation, node linking, lease mechanics, fee-grant batching, the full HTTP API, the SPA frontend - is built on top in this repo.

## Architecture

```
┌──────────────────────────────────────────────────────────────┐
│  index.html (vanilla JS SPA, ~3600 lines)                    │
│  dark/light theme, grid+list views, batch pickers            │
└──────────────────────────────┬───────────────────────────────┘
                               │ fetch
┌──────────────────────────────▼───────────────────────────────┐
│  server.js (Express, ~2300 lines)                            │
│  ├── /api/wallet/*        import, logout, status             │
│  ├── /api/plans/*         create, list, status, subs         │
│  ├── /api/plan-manager/*  (batch) link, unlink               │
│  ├── /api/lease/*         start, end                         │
│  ├── /api/provider/*      register, status                   │
│  ├── /api/feegrant/*      grant, revoke, gas-costs, auto     │
│  ├── /api/nodes/*         all-nodes, progress, sessions      │
│  ├── /api/rpcs            39-endpoint health check           │
│  └── /api/node-rankings   session/bandwidth/UU leaderboards  │
└──────────────────────────────┬───────────────────────────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
┌───────▼────────┐   ┌─────────▼────────┐   ┌─────────▼────────┐
│  blue-js-sdk   │   │  lib/ (local)    │   │ CosmJS + protos  │
│  · listNodes   │   │  · protobuf.js   │   │  · stargate      │
│  · disk-cache  │   │  · chain.js      │   │  · proto-signing │
│  · errors      │   │  · wallet.js     │   │                  │
│  · chain/rpc   │   │  · cache/errors  │   │                  │
└────────────────┘   └──────────────────┘   └──────────────────┘
```

## On-Chain Operations

All transactions are Sentinel v3 unless noted.

| Operation              | Message                          | Notes                                                    |
|------------------------|----------------------------------|----------------------------------------------------------|
| Register as provider   | `MsgRegisterProviderRequest`     | One-time, same key as wallet.                            |
| Create plan            | `MsgCreatePlanRequest`           | Immutable pricing - create a new plan to change price.   |
| Start node lease       | `MsgStartLeaseRequest`           | Auto-issued before link if needed.                       |
| Link nodes to plan     | `MsgLinkNodeRequest`             | Batched - single TX for all selected nodes.              |
| Unlink nodes           | `MsgUnlinkNodeRequest`           | Batched.                                                 |
| Update plan status     | `MsgUpdatePlanStatusRequest`     | Activate / deactivate.                                   |
| Subscribe              | `MsgStartSubscriptionRequest`    | Consumer-side; also used in-app for testing.             |
| Start session          | `MsgStartSessionRequest`         | Plan-based session with handshake.                       |
| Grant fee allowance    | `MsgGrantAllowance` (Cosmos)     | Batched 5 per TX (gas limit).                            |
| Revoke allowance       | `MsgRevokeAllowance` (Cosmos)    | Batched.                                                 |

Critical sequencing:

- **Lease-before-link** - if a node has no active lease, `/api/plan-manager/link` auto-issues the lease TX first.
- **Sequence retry** - 5 attempts, exponential backoff (2s -> 6s max), signing client refresh between attempts. Handles mempool lag.
- **Fee grant batch ceiling** - 5 grants per TX to stay under gas limits.

## HTTP API

The backend exposes 40+ endpoints. A few of the most useful:

| Method | Path                                       | Purpose |
|--------|--------------------------------------------|---------|
| POST   | `/api/wallet/import`                       | Import a mnemonic into the session. |
| GET    | `/api/wallet`                              | Wallet summary: address, balance, provider status. |
| POST   | `/api/plan/create`                         | Create a new plan (price, duration, GB). |
| GET    | `/api/plans/:id/subscriptions`             | Paginated subscribers for a plan. |
| POST   | `/api/plan-manager/batch-link`             | Link many nodes to a plan in one TX. |
| POST   | `/api/plan-manager/batch-unlink`           | Unlink many nodes in one TX. |
| POST   | `/api/feegrant/grant-subscribers`          | Auto-issue fee grants to all current subscribers (batched). |
| GET    | `/api/feegrant/grant-subscribers-stream`   | Server-Sent Events progress for the above. |
| POST   | `/api/feegrant/revoke-all`                 | Revoke every outstanding grant. |
| GET    | `/api/node-rankings`                       | Leaderboard by sessions / bandwidth / unique users. |
| GET    | `/api/rpcs`                                | 39-endpoint RPC health check. |

For the full list, run the server and `GET /health`, then grep `server.js` for `app.get|app.post`.

## Configuration

```ini
# .env
MNEMONIC=your twelve or twenty four word mnemonic here
PORT=3003                    # optional, defaults to 3003
```

The mnemonic stays in memory only; `.wallet.json` persists the address for UI reconnect after restart.

Token display:
- Chain denom: **`udvpn`**
- Display: **P2P** (1 P2P = 1,000,000 udvpn)

## Known Constraints

- **Plan pricing is immutable** in Sentinel v3 - create a new plan to change pricing.
- **Session filtering** is computed in-memory (no per-node session endpoint on chain).
- **LCD fee-grant endpoint is slow** (~15-17s from Node.js). Default timeout is 30s with 4-endpoint failover. Do not lower it.
- **Node scan concurrency is 30** - can saturate connection pools; fee-grant operations use a 60s timeout to compensate.
- **Provider LCD path is still v2** (`/sentinel/provider/v2/...`) - everything else is v3.

## Security

- **Never commit** `.env`, `.wallet.json`, or `nodes-cache.json` - they are gitignored.
- Mnemonics are session-scoped; they never touch disk.
- `.wallet.json` stores the address only for UI reconnect.
- All broadcasts go through `safeBroadcast` with sequence retry and error normalization.
