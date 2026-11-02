---
title: Overview
sidebar_label: "📘 Overview"
sidebar_position: 1
---

# Node Operators on Solana

Run a Sentinel dVPN node that is registered and paid on Solana.

:::caution Draft
These pages come from the `sentinel-dvpnd` and `sentinel-dvpn` source in [sentinel-solana](https://github.com/sentinel-official/sentinel-solana) and the binaries' `--help` output. The commands have not yet been run end to end on devnet. The source of devnet dVPN tokens is `TBD`.
:::

## What you need

- A Linux server with a public address and root access. `sentinel-dvpnd init`, `service install`, and the other `service` commands need root.
- A public hostname for the node API. Pass it with `--api-hosts`.
- A two-letter country code for the node (`--country`).
- An owner wallet with SOL for fees and rent, and dVPN tokens for the bond. On devnet, get SOL from the [official Solana faucet](https://faucet.solana.com). The dVPN token source is `TBD`.
- Binaries built for devnet. See [Build the binaries](#build-the-binaries).

## Build the binaries

Both binaries are built from the [sentinel-solana](https://github.com/sentinel-official/sentinel-solana) monorepo, in its `sentinel-dvpn` and `sentinel-dvpnd` folders. You need Go 1.27.3.

A plain `go build` leaves the program ID, mint, and network unset, so every chain call fails with "build identity is not set". Use each folder's Makefile instead. Its default network is `mainnet`, so set devnet and the devnet addresses explicitly:

```bash
git clone https://github.com/sentinel-official/sentinel-solana.git
cd sentinel-solana

for dir in sentinel-dvpn sentinel-dvpnd; do
  make -C "$dir" build \
    SENTINEL_NETWORK=devnet \
    SENTINEL_PROGRAM_ID=J52dyXW3a6mkatvrQct3fo6dA9vqUtcsdBt5gGqrTBXs \
    SENTINEL_MINT=Hen2LVP6KooGaXEvdSyCHWghsEY4gLLn7wix8z6zHFSa
done
```

This produces `sentinel-dvpn/bin/sentinel-dvpn` and `sentinel-dvpnd/bin/sentinel-dvpnd`. Move both onto your `PATH`. Check the build identity with `sentinel-dvpn version`: it should show `"network":"devnet"` and the program ID above.

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
