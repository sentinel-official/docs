---
title: Register the Node On-Chain
sidebar_label: "⛓ Register On-Chain"
sidebar_position: 5
---

# Register the Node On-Chain

Run these commands **on your computer**, not on the server. They use the owner key from [Prepare Your Computer](/solana/node-operators/computer).

You need `id` and `public_key` from [Configure the Node](/solana/node-operators/setup). `public_key` is the operator key; the steps call it `<OPERATOR_PUBLIC_KEY>`.

:::tip
If a command fails with `429` or `rate limits exceeded`, wait a few seconds and run it again.
:::

## 1. Fund the operator key

The operator key pays the node's fees. Get devnet SOL for `<OPERATOR_PUBLIC_KEY>` from the [Solana faucet](https://faucet.solana.com), for example 0.1 SOL. Check it:

```bash
sentinel-dvpn wallet balance --owner <OPERATOR_PUBLIC_KEY>
```

## 2. Open the node

Use the same country, port, and prices as `init`.

```bash
sentinel-dvpn node open-node \
  --node-id <ID_FROM_INIT> \
  --country <COUNTRY_CODE> \
  --uri "https://<SERVER_IP>:8443" \
  --protocols <PROTOCOL_NUMBER> \
  --bond 10000000 \
  --prices.channel-price-per-gb 50000000 \
  --prices.channel-price-per-hour 50000000 \
  --prices.lease-price-per-hour 50000000
```

`<PROTOCOL_NUMBER>` is the number for your protocol:

| Protocol | `--protocols` |
| --- | --- |
| `wireguard` | `1` |
| `v2ray` | `2` |
| `openvpn` | `4` |
| `amneziawg` | `8` |
| `xray` | `16` |
| `hysteria2` | `32` |

`--bond` is in base units (`10000000` = 10 tDVPN). It must be at least `min_node_bond` from `sentinel-dvpn program params`.

## 3. Find the node address

```bash
sentinel-dvpn node search --owner <OWNER_PUBLIC_KEY>
```

Copy the `address` of the entry whose `node_id` matches your `id`. The next steps call it `<NODE_ADDRESS>`.

## 4. Let the operator key run the node

```bash
sentinel-dvpn grant open-grant \
  --grantee <OPERATOR_PUBLIC_KEY> \
  --target <NODE_ADDRESS> \
  --permissions 6 \
  --never-expires \
  --allowance 0
```

`6` lets the server update and list the node. `--allowance 0` means it can't spend your tokens.

## 5. Check

```bash
sentinel-dvpn node show <NODE_ADDRESS>
```

Check the `uri`, `protocols`, and prices. The node lists itself for clients when you start it.

Next: [start the node](/solana/node-operators/start).
