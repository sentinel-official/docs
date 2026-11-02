---
title: Connect to a Node
sidebar_label: "🔌 Connect"
sidebar_position: 3
---

# Connect to a Node

Before you connect, find a node and check it.

## 1. Find a node

These commands read the chain and don't need `--instance`:

```bash
sentinel-dvpn node search --help
sentinel-dvpn node show <NODE_ADDRESS>
```

Check a node's signed metadata and health before you pay it:

```bash
sentinel-dvpn node inspect <NODE_ADDRESS>
```

`inspect` verifies the node's signed metadata and checks its health over a pinned connection.

## 2. Start a session

Choose the route that matches how you pay. See [Ways to pay](/solana/clients#ways-to-pay) on the overview page. `client` commands go through your client daemon, so they need `--instance c0`. `--node` is required, and you must pick one of `--new-channel`, `--channel`, `--ticket`, or `--ticket-hash`.

**New channel, paid by voucher:**

```bash
sentinel-dvpn client start \
  --instance c0 \
  --node <NODE_ADDRESS> \
  --new-channel \
  --mode voucher \
  --escrow-base-units <BASE_UNITS>
```

**Existing channel:**

```bash
sentinel-dvpn client start --instance c0 --node <NODE_ADDRESS> --channel <CHANNEL_ADDRESS>
```

**Provider ticket:**

```bash
sentinel-dvpn client start \
  --instance c0 \
  --node <NODE_ADDRESS> \
  --provider <PROVIDER_ADDRESS> \
  --subscription <SUBSCRIPTION_ADDRESS> \
  --ticket
```

Use `--mode stream` for pay-as-you-go streaming instead of vouchers.

## 3. Check and stop the session

```bash
sentinel-dvpn client sessions --instance c0
sentinel-dvpn client status <SESSION_ID> --instance c0
sentinel-dvpn client watch <SESSION_ID> --instance c0
sentinel-dvpn client stop <SESSION_ID> --instance c0
```

`client watch` streams updates until you stop it. To list your channels and the tickets the daemon holds:

```bash
sentinel-dvpn client channels --instance c0
sentinel-dvpn client tickets --instance c0
```

## 4. Tickets

Tickets are access proofs issued by a provider. These commands don't need `--instance`:

```bash
sentinel-dvpn ticket request --help
sentinel-dvpn ticket show <ENCODED_TICKET>
sentinel-dvpn ticket verify <ENCODED_TICKET>
```

`ticket verify` checks the ticket against the provider's on-chain owner.

## 5. Leases, subscriptions, and balances

Leases rent a node by the hour. These are chain commands, so they don't take `--instance`. Run `--help` for the flags:

```bash
sentinel-dvpn lease open-lease --help
sentinel-dvpn lease fund-leases --help
sentinel-dvpn lease redeem-lease-vouchers --help
sentinel-dvpn lease start-close-lease --help
sentinel-dvpn lease close-lease --help
```

Withdraw any unused user balance:

```bash
sentinel-dvpn user withdraw-user-balance --help
```

Close a subscription when you no longer need it:

```bash
sentinel-dvpn subscription close-subscription --help
```
