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

## Source code

Everything in this section is built from the [sentinel-solana](https://github.com/sentinel-official/sentinel-solana) monorepo:

| Folder | Contents |
| --- | --- |
| `sentinel-dvpn` | The `sentinel-dvpn` CLI. |
| `sentinel-dvpnd` | The `sentinel-dvpnd` daemon. |
| `sentinel-go-sdk` | Go SDK: VPN protocol integrations (WireGuard, AmneziaWG, OpenVPN, V2Ray, Xray, Hysteria2), node and provider APIs, and the on-chain program client. |
| `sentinel-programs` | The `dvpn` and `distributor` Anchor programs, their IDLs, and the generated Go client. |
| `sentinel-snapshot` | Chain snapshot tooling. |

The CLI and daemon need Go 1.27.3. The programs also need Rust 1.97.1, Anchor 1.2.2, and Solana (Agave) 4.3.2.

## Network status

These docs target **devnet**:

| Item | Devnet value |
| --- | --- |
| dVPN program ID | `J52dyXW3a6mkatvrQct3fo6dA9vqUtcsdBt5gGqrTBXs` |
| dVPN token mint (Token-2022) | `Hen2LVP6KooGaXEvdSyCHWghsEY4gLLn7wix8z6zHFSa` |
| RPC | `https://api.devnet.solana.com` (the default for devnet builds) |

To get devnet SOL for fees, use the [official Solana faucet](https://faucet.solana.com). The source of devnet dVPN tokens is `TBD`.
