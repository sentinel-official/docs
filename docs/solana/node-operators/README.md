---
title: Overview
sidebar_label: "📘 Overview"
sidebar_position: 1
---

# Node Operators on Solana

Run a Sentinel dVPN node that is registered and paid on Solana.

:::caution Draft
These pages come from the `sentinel-dvpnd` and `sentinel-dvpn` source and their `--help` output. The commands have not yet been run end to end on devnet. Program IDs and the dVPN token source are `TBD`.
:::

## What you need

- A Linux server with a public address and root access. `sentinel-dvpnd init`, `service install`, and the other `service` commands need root.
- A public hostname for the node API. Pass it with `--api-hosts`.
- A two-letter country code for the node (`--country`).
- An owner wallet with SOL for fees and rent, and dVPN tokens for the bond. On devnet, get SOL from the [official Solana faucet](https://faucet.solana.com). The dVPN token source is `TBD`.
- Binaries built for devnet. See [Build the binaries](#build-the-binaries).

## Build the binaries

A plain `go build` leaves the program ID and network unset, so every chain call fails with "build identity is not set". Build with the Makefile in each repo instead. Its default network is `mainnet`, so set devnet explicitly:

```bash
# in sentinel-dvpn (produces bin/sentinel-dvpn)
make build SENTINEL_NETWORK=devnet SENTINEL_PROGRAM_ID=<PROGRAM_ID_TBD> SENTINEL_MINT=<MINT_TBD>

# in sentinel-dvpnd (produces bin/sentinel-dvpnd)
make build SENTINEL_NETWORK=devnet SENTINEL_PROGRAM_ID=<PROGRAM_ID_TBD>
```

For devnet builds, the default RPC endpoints are `https://api.devnet.solana.com` and `wss://api.devnet.solana.com`. Set your own with `[rpc]` in `config.toml` if you need another.

## Keys

| Key | Created by | Used for |
| --- | --- | --- |
| Owner key | `sentinel-dvpn key new owner` | Owns the node on-chain. Signs owner actions: open, update, withdraw, close. Receives revenue. |
| Operator key | `sentinel-dvpnd init` (stored in the instance's `keys/` folder) | Runs the daemon. The daemon signs its own listing and sync transactions and pays their fees. |

Fund the operator key with SOL as well. Its public key is `public_key` in the init output.

The operator key can list or update the node only if the owner grants it permission. See [Grant the operator key](/solana/node-operators/on-chain#3-grant-the-operator-key).

`init` encrypts the operator key by default. `--plain-key` writes it unencrypted. Either way, the daemon needs the passphrase when it starts. See [Set up the daemon](/solana/node-operators/setup).

Back up the owner key and keep it off the server.

## Steps

1. [Set up the daemon](/solana/node-operators/setup): initialize, configure, check, and run the node.
2. [Open and manage the node on-chain](/solana/node-operators/on-chain): fund the wallet, register, grant, list, earn, and exit.
