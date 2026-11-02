---
title: Overview
sidebar_label: "📘 Overview"
sidebar_position: 1
---

# Clients on Solana

Connect to a Sentinel dVPN node with the `sentinel-dvpn` CLI and a client daemon. Payments are on Solana.

:::caution Draft
These pages come from the `sentinel-dvpn` and `sentinel-dvpnd` source and their `--help` output. The commands have not yet been run end to end on devnet. Program IDs and the dVPN token source are `TBD`.
:::

## What you need

- The `sentinel-dvpn` CLI and the `sentinel-dvpnd` daemon, built for devnet with `make build SENTINEL_NETWORK=devnet SENTINEL_PROGRAM_ID=<PROGRAM_ID_TBD>`. A plain `go build` leaves the program ID unset, and every chain call fails.
- An owner wallet with SOL for fees and dVPN tokens for payment. On devnet, get SOL from the [official Solana faucet](https://faucet.solana.com).
- A client daemon with its own SOL balance. The daemon signs channel transactions and pays their fees with its operator key. Its public key is in the init output.

## How a session works

1. Your **owner wallet** holds the dVPN tokens and pays for on-chain actions.
2. Your **client daemon** (`sentinel-dvpnd`, instance tag `c<N>`) holds the session keys, signs channel transactions, and talks to nodes.
3. The **CLI** (`sentinel-dvpn`) starts and stops sessions through the daemon, with `--instance c<N>`.

## Ways to pay

| Route | Use it when | Command |
| --- | --- | --- |
| New channel | You pay a node directly, per GB or per hour, by voucher or stream. | `client start --instance c0 --node <NODE> --new-channel --mode voucher --escrow-base-units <N>` |
| Existing channel | You already have a channel with this node. | `client start --instance c0 --node <NODE> --channel <CHANNEL>` |
| Provider ticket | You hold a subscription from a provider. | `client start --instance c0 --node <NODE> --provider <PROVIDER> --subscription <SUB> --ticket` |

Setup, then connection, are in the next two pages:

1. [Set up the wallet and client daemon](/solana/clients/setup)
2. [Connect to a node](/solana/clients/connect)
