---
title: Prepare Your Computer
sidebar_label: "💻 Prepare Your Computer"
sidebar_position: 2
---

# Prepare Your Computer

Run these commands **on your computer** (Linux or macOS), not on the server. The owner key lives here.

## 1. Install the tools

Install `git`, `make`, and [Go 1.27.3](https://go.dev/dl/).

## 2. Install the CLI

```bash
cd ~
git clone https://github.com/sentinel-official/sentinel-solana.git
cd ~/sentinel-solana
make -C sentinel-dvpn build \
  SENTINEL_NETWORK=devnet \
  SENTINEL_PROGRAM_ID=J52dyXW3a6mkatvrQct3fo6dA9vqUtcsdBt5gGqrTBXs \
  SENTINEL_MINT=Hen2LVP6KooGaXEvdSyCHWghsEY4gLLn7wix8z6zHFSa
sudo install -m 755 sentinel-dvpn/bin/sentinel-dvpn /usr/local/bin/
sentinel-dvpn version
```

The output must show `"network":"devnet"`.

## 3. Add the owner key

New key (it asks for a passphrase):

```bash
sentinel-dvpn key new owner
```

Or use a key file you already have (a Solana keypair JSON):

```bash
cd <FOLDER_WITH_OWNER_JSON>
install -d -m 700 ~/.sentinel-dvpn/keys
install -m 600 owner.json ~/.sentinel-dvpn/keys/owner.json
```

Print its public key. The next pages call it `<OWNER_PUBLIC_KEY>`:

```bash
sentinel-dvpn key show owner
```

Back up `~/.sentinel-dvpn/keys/owner.json` (and its passphrase) somewhere safe.

## 4. Fund the owner

- **SOL:** get devnet SOL for `<OWNER_PUBLIC_KEY>` from the [Solana faucet](https://faucet.solana.com).
- **tDVPN:** the node needs a bond. The examples use 10 tDVPN. The devnet tDVPN source is `TBD`.

Create the token account, then check the balance:

```bash
sentinel-dvpn wallet create-token-account
sentinel-dvpn wallet balance
```

`dvpn_base_units` is your tDVPN. 1 tDVPN = 1,000,000.

Next: [prepare the server](/solana/node-operators/server).
