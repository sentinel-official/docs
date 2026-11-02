---
title: Overview
sidebar_label: "📘 Overview"
sidebar_position: 1
---

# Node Operators on Solana

Run a Sentinel dVPN node that is registered and paid on Solana (devnet).

## What you need

- A new Linux server (Ubuntu 26.04, x86_64) with a public IP.
- Your own computer (Linux or macOS), to hold the owner key.
- Devnet SOL from the [Solana faucet](https://faucet.solana.com), and tDVPN for the bond. The devnet tDVPN source is `TBD`.

## Keys

| Key | Where it lives | What it does |
| --- | --- | --- |
| Owner | Your computer | Owns the node, pays the bond, receives revenue. Keep it off the server. |
| Operator | The server | Runs the node. Needs a little SOL for fees. |

## Steps

1. [Prepare Your Computer](/solana/node-operators/computer): install the CLI and create the owner key.
2. [Prepare the Server](/solana/node-operators/server): install the software.
3. [Configure the Node](/solana/node-operators/setup): create the node's config and operator key.
4. [Register the Node On-Chain](/solana/node-operators/on-chain): open the node and grant the operator key.
5. [Start the Node](/solana/node-operators/start): open the firewall, check, and run it.
6. [Manage the Node](/solana/node-operators/manage): change settings, update, withdraw, shut down.
