---
title: Set Up the Wallet and Client Daemon
sidebar_label: "🛠 Set Up"
sidebar_position: 2
---

# Set Up the Wallet and Client Daemon

## 1. Build the binaries

Build both binaries for devnet. Run this in each source repo: `sentinel-dvpn` and `sentinel-dvpnd`. The Makefile sets the network and program ID, and its default network is `mainnet`, so pass devnet explicitly.

```bash
make build SENTINEL_NETWORK=devnet SENTINEL_PROGRAM_ID=<PROGRAM_ID_TBD> SENTINEL_MINT=<MINT_TBD>   # sentinel-dvpn
make build SENTINEL_NETWORK=devnet SENTINEL_PROGRAM_ID=<PROGRAM_ID_TBD>                           # sentinel-dvpnd
```

The outputs are `bin/sentinel-dvpn` and `bin/sentinel-dvpnd`. Move them onto your `PATH`.

## 2. Create a wallet key

```bash
sentinel-dvpn key new owner
sentinel-dvpn key show owner
```

`key new` encrypts the key by default. Use `--unencrypted` only on a test machine. The public key from `key show` is the owner wallet address. Pass it as `--owner` to the daemon below.

## 3. Get SOL and check the RPC endpoint

Your wallet needs SOL for fees before any of the next commands work. On devnet, request it from the [official Solana faucet](https://faucet.solana.com).

Devnet builds default to `https://api.devnet.solana.com`. To use another endpoint, create the CLI config and set it:

```bash
sentinel-dvpn config init
```

```toml
# ~/.sentinel-dvpn/config.toml
[rpc]
url = "<SOLANA_RPC_URL>"
ws_url = "<SOLANA_WS_URL>"
```

Check the result:

```bash
sentinel-dvpn config show
```

## 4. Prepare the token account

```bash
sentinel-dvpn wallet balance
sentinel-dvpn wallet create-token-account
sentinel-dvpn wallet approve-delegate --amount-base-units <BOUNDED_BASE_UNITS>
```

`approve-delegate` lets the program move dVPN tokens for your payments. Use a bounded amount in base units. `unlimited` also works, but a bounded amount limits the exposure. `revoke-delegate` removes the allowance.

## 5. Initialize the client daemon

Client instance tags start with `c`:

```bash
sudo sentinel-dvpnd init --instance c0 --owner <OWNER_PUBLIC_KEY>
```

Save the `public_key` value from the output. The client daemon signs channel transactions with that key, so fund it with SOL too.

## 6. Set the passphrase and run the daemon

Init encrypts the daemon key by default. The daemon never prompts, so create a passphrase file and point the client config at it, as in [Set up the daemon](/solana/node-operators/setup#2-set-the-passphrase-and-rpc-endpoint):

```toml
# /var/lib/sentinel-dvpn/c0/config.toml
[key]
name = "operator"
passphrase_file = "/etc/sentinel-dvpn/c0.pass"
```

Run it in the foreground for a first test:

```bash
sudo sentinel-dvpnd run --instance c0
```

To run it as a service, use `sudo sentinel-dvpnd service install --instance c0`, then `service start --instance c0`.

Check that the CLI can reach it. Daemon commands take `--instance`:

```bash
sentinel-dvpn daemon status --instance c0
```

Next: [connect to a node](/solana/clients/connect).
