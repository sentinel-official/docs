---
title: Overview
sidebar_label: "📘 Overview"
sidebar_position: 1
---

# Sentinel dVPN on Solana

The Sentinel dVPN protocol runs on Solana. Its on-chain logic is the `dvpn` Anchor program, which manages nodes, providers, plans, subscriptions, leases, channels, grants, and payments.

:::note
Pages in other sections, including [dVPN Nodes](/dvpn-nodes) and [dVPN CLI](/dvpn-cli), describe the earlier Sentinel Hub (Cosmos) flow. For the Solana flow, use the pages in this section.
:::

## Choose your guide

- **[Node Operators](/solana/node-operators):** run a dVPN node and manage it on-chain.
- **[Clients](/solana/clients):** connect to nodes with the `sentinel-dvpn` CLI and a client daemon.
- **[dVPN Program](/solana/dvpn-program):** the program's accounts and instructions.

## Components

| Binary | Role |
| --- | --- |
| `sentinel-dvpn` | Command-line tool for wallets, on-chain actions, and client sessions. |
| `sentinel-dvpnd` | Daemon. Runs a node, provider, or client instance. The instance tag sets the role: `n<N>` for node, `p<N>` for provider, `c<N>` for client. |

## Network status

These docs target **devnet**. Program IDs and RPC URLs are marked `TBD` until they are published. To get devnet SOL for fees, use the [official Solana faucet](https://faucet.solana.com).
