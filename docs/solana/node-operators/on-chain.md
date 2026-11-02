---
title: Open and Manage the Node
sidebar_label: "⛓ On-Chain Management"
sidebar_position: 3
---

# Open and Manage the Node On-Chain

This page covers the owner wallet's on-chain actions: registering the node, granting the operator key, listing, managing, withdrawing revenue, and exiting.

Most of these commands take the node's on-chain address with `--node`. Save it when `open-node` reports it.

## 1. Prepare the owner wallet

Set the RPC endpoint first. For devnet builds it defaults to the public devnet endpoint, so you only need this step to use another one:

```bash
sentinel-dvpn config init
# then set [rpc] url and ws_url in ~/.sentinel-dvpn/config.toml
```

Check the balance. You need SOL for fees and rent, plus dVPN tokens for the bond. On devnet, request SOL from the [official Solana faucet](https://faucet.solana.com) first.

```bash
sentinel-dvpn wallet balance
```

Create the wallet's dVPN token account if it doesn't exist:

```bash
sentinel-dvpn wallet create-token-account
```

Allow the program to move dVPN tokens from the token account. A bounded amount is safer than `unlimited`, and you can revoke the allowance with `revoke-delegate`:

```bash
sentinel-dvpn wallet approve-delegate --amount-base-units <BOUNDED_BASE_UNITS>
```

## 2. Open the node

Use the `id` from `sentinel-dvpnd init` as the node ID. Pass the same prices you set during init.

```bash
sentinel-dvpn node open-node \
  --node-id <NODE_ID_64_HEX> \
  --country US \
  --uri "https://<API_HOST>:<API_PORT>" \
  --protocols <PROTOCOL_BIT> \
  --bond <BOND_BASE_UNITS> \
  --prices.channel-price-per-gb <BASE_UNITS> \
  --prices.channel-price-per-hour <BASE_UNITS> \
  --prices.lease-price-per-hour <BASE_UNITS> \
  --node-rent-recipient <OWNER_WALLET_PUBKEY>
```

| Flag | Rule |
| --- | --- |
| `--node-id` | The 64-character hex `id` from init. |
| `--uri` | `https://<api host>:<api port>`, using the host from `--api-hosts` and the port from init. |
| `--protocols` | The bit for the service the node runs. See the table below. The daemon sets this again on `sync`. |
| `--bond` | At least the program's minimum node bond. The bond is locked while the node is open. |
| `--node-rent-recipient` | Must be the signer or the rent payer. Use the owner wallet. |

Service bits (`--protocols` value is `1 << bit`):

| Service | Bit | Value |
| --- | --- | --- |
| `wireguard` | 0 | `1` |
| `v2ray` | 1 | `2` |
| `openvpn` | 2 | `4` |
| `amneziawg` | 3 | `8` |
| `xray` | 4 | `16` |
| `hysteria2` | 5 | `32` |

Run `sentinel-dvpn node open-node --help` for the full flag list.

## 3. Grant the operator key

The daemon signs listing and sync transactions with the operator key. The program accepts that signer only with a grant from the owner. Without it, the daemon can't list the node or refresh its metadata.

The owner opens the grant. Permission bits:

| Permission | Bit | Value |
| --- | --- | --- |
| Update node | 1 | `2` |
| List node | 2 | `4` |
| Delist node | 3 | `8` |

To let the operator key update and list the node, the value is `2 + 4 = 6`:

```bash
sentinel-dvpn grant open-grant \
  --grantee <OPERATOR_PUBLIC_KEY> \
  --target <NODE_ADDRESS> \
  --permissions 6 \
  --expires-at <UNIX_TIMESTAMP> \
  --allowance <ALLOWANCE>
```

Run `sentinel-dvpn grant open-grant --help` for the allowance and expiry rules. Fund the operator key with SOL too, since it pays the fees for the daemon's transactions.

## 4. List the node

A node opened with `open-node` is not visible to clients until it is listed. The owner can list it directly:

```bash
sentinel-dvpn node list-node --node <NODE_ADDRESS>
```

If the operator key is granted, the daemon also refreshes the listing itself while it runs. To hide the node, delist it:

```bash
sentinel-dvpn node delist-node --node <NODE_ADDRESS>
```

## 5. Manage the node

`update-node` needs `--node`. Change any of these fields later with the rest optional:

- `--protocols`, `--country`, `--uri`, `--grant`
- Prices: if you set any `--prices.*` flag, set all three.

```bash
sentinel-dvpn node update-node \
  --node <NODE_ADDRESS> \
  --prices.channel-price-per-gb <BASE_UNITS> \
  --prices.channel-price-per-hour <BASE_UNITS> \
  --prices.lease-price-per-hour <BASE_UNITS>
```

After you change `config.toml` on the server, restart the daemon first, then sync. The daemon pushes the config it loaded at start, so a restart is what makes the edit take effect:

```bash
sudo sentinel-dvpnd service restart --instance n0
sentinel-dvpn node sync --instance n0
```

Check the node's state. These are daemon commands, so they take `--instance`:

```bash
sentinel-dvpn node status --instance n0
sentinel-dvpn node sessions --instance n0
sentinel-dvpn node redemptions --instance n0
```

## 6. Earnings and fees

- **Revenue:** your earnings accrue on the node as `revenue`. Withdraw to your token account with `sentinel-dvpn node withdraw-node-revenue --node <NODE_ADDRESS> --amount <BASE_UNITS>`. The CLI fills in the vault, mint, and token accounts.
- **Protocol fees:** `sentinel-dvpn node sweep-node-fees` moves the protocol fees accrued on nodes (`fees_accrued`) to the program treasury. It does not pay you, and you don't need it to withdraw revenue. It needs the node accounts as `--remaining-account <NODE_ADDRESS>:w` and fails if they have no accrued fees.

## 7. Exit

1. Delist the node so new clients stop finding it: `sentinel-dvpn node delist-node --node <NODE_ADDRESS>`.
2. Close the node. Closing pays out the node's accrued revenue to your token account right away, and moves the node's accrued protocol fees into the program fee pool. It also moves the bond into an unbonding account:

   ```bash
   sentinel-dvpn node close-node \
     --node <NODE_ADDRESS> \
     --node-unbonding <UNBONDING_ADDRESS> \
     --node-unbonding-rent-recipient <OWNER_WALLET_PUBKEY>
   ```

3. Check the unbonding account: `sentinel-dvpn node unbonding show --help` lists the arguments.
4. Withdraw the bond after unbonding. It may fail until the unbonding period ends:

   ```bash
   sentinel-dvpn node withdraw-node-bond \
     --node-unbonding <UNBONDING_ADDRESS> \
     --rent-recipient <OWNER_WALLET_PUBKEY> \
     --owner <OWNER_WALLET_PUBKEY>
   ```

5. Stop and remove the service: `sudo sentinel-dvpnd service uninstall --instance n0`.
