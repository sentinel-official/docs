---
title: Query
sidebar_position: 3
---

# Query

Query commands for fetching data from the Sentinel dVPN network. All query commands support the shared flags documented in the [command list](/dvpn-cli/commands/list).

## Pagination

Commands that return lists (`nodes`, `plans`, `sessions`, `subscriptions`, `deposits`, `providers`) support pagination flags:

```bash
--page.limit uint      maximum number of results to return (default 10)
--page.offset uint     number of results to skip
--page.count-total     include total count in the response
--page.reverse         return results in descending order
```

---

## Query All Nodes

Retrieve information about all registered nodes on the network.

```bash
sentinel-dvpncli query nodes \
  --rpc.addrs https://rpc.sentinel.co:443 \
  --page.limit 25
```

**Filter flags:**

| Flag | Description |
|---|---|
| `--status string` | Filter by status (`active`, `inactive`) |
| `--plan-id uint` | Filter nodes by plan identifier |

## Query a Node

Retrieve information about a specific node by address.

```bash
sentinel-dvpncli query node <sentnode_address> \
  --rpc.addrs https://rpc.sentinel.co:443
```

---

## Query All Plans

Retrieve information about all subscription plans.

```bash
sentinel-dvpncli query plans \
  --rpc.addrs https://rpc.sentinel.co:443 \
  --page.limit 25
```

**Filter flags:**

| Flag | Description |
|---|---|
| `--status string` | Filter by status (`active`, `inactive`) |
| `--provider-addr string` | Filter plans by provider address |

## Query a Plan

Retrieve information about a specific plan by ID.

```bash
sentinel-dvpncli query plan <plan_id> \
  --rpc.addrs https://rpc.sentinel.co:443
```

---

## Query All Subscriptions

Retrieve information about all subscriptions.

```bash
sentinel-dvpncli query subscriptions \
  --rpc.addrs https://rpc.sentinel.co:443 \
  --page.limit 25
```

**Filter flags:**

| Flag | Description |
|---|---|
| `--account-addr string` | Filter by account address |
| `--plan-id uint` | Filter by plan identifier |

## Query a Subscription

Retrieve information about a specific subscription by ID.

```bash
sentinel-dvpncli query subscription <subscription_id> \
  --rpc.addrs https://rpc.sentinel.co:443
```

---

## Query All Sessions

Retrieve information about all sessions.

```bash
sentinel-dvpncli query sessions \
  --rpc.addrs https://rpc.sentinel.co:443 \
  --page.limit 25
```

**Filter flags:**

| Flag | Description |
|---|---|
| `--account-addr string` | Filter by account address |
| `--node-addr string` | Filter by node address |
| `--subscription-id uint` | Filter by subscription identifier |

## Query a Session

Retrieve information about a specific session by ID.

```bash
sentinel-dvpncli query session <session_id> \
  --rpc.addrs https://rpc.sentinel.co:443
```

---

## Query All Deposits

Retrieve information about all deposits.

```bash
sentinel-dvpncli query deposits \
  --rpc.addrs https://rpc.sentinel.co:443 \
  --page.limit 25
```

## Query a Deposit

Retrieve information about a specific deposit by address.

```bash
sentinel-dvpncli query deposit <address> \
  --rpc.addrs https://rpc.sentinel.co:443
```

---

## Query All Providers

Retrieve information about all registered providers.

```bash
sentinel-dvpncli query providers \
  --rpc.addrs https://rpc.sentinel.co:443 \
  --page.limit 25
```

**Filter flags:**

| Flag | Description |
|---|---|
| `--status string` | Filter by status (`active`, `inactive`) |

## Query a Provider

Retrieve information about a specific provider by address.

```bash
sentinel-dvpncli query provider <provider_address> \
  --rpc.addrs https://rpc.sentinel.co:443
```

---

## Query Parameters

Retrieve all network parameters for the VPN module.

```bash
sentinel-dvpncli query params \
  --rpc.addrs https://rpc.sentinel.co:443
```
