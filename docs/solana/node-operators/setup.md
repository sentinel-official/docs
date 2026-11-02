---
title: Configure the Node
sidebar_label: "🛠 Configure the Node"
sidebar_position: 4
---

# Configure the Node

Run these commands **on the server**, unless a step says **on your computer**. Finish [Prepare the Server](/solana/node-operators/server) first.

## 1. Choose a protocol

The node runs one protocol. Use the one you installed in [Prepare the Server, step 7](/solana/node-operators/server#7-install-the-vpn-software): `wireguard`, `amneziawg`, `v2ray`, `xray`, `openvpn`, or `hysteria2`. The next steps call it `<PROTOCOL>`.

## 2. Add the operator key (optional)

Skip this step to let `init` create a new key.

To use a key file you already have (a Solana keypair JSON), copy it in **before** `init`.

On your computer:

```bash
cd <FOLDER_WITH_OPERATOR_JSON>
scp operator.json <USER>@<SERVER_IP>:~/operator.json
```

On the server:

```bash
sudo install -d -m 700 /var/lib/sentinel-dvpn/n0/keys
sudo install -m 600 ~/operator.json /var/lib/sentinel-dvpn/n0/keys/operator.json
rm ~/operator.json
```

## 3. Initialize the node

`<OWNER_PUBLIC_KEY>` comes from [Prepare Your Computer](/solana/node-operators/computer). Prices are in base units: **1 tDVPN = 1,000,000**. The example sets every price to 50 tDVPN.

```bash
sudo sentinel-dvpnd init \
  --instance n0 \
  --owner <OWNER_PUBLIC_KEY> \
  --country <COUNTRY_CODE> \
  --api-hosts <SERVER_IP> \
  --api-port 8443 \
  --service <PROTOCOL> \
  --prices.channel-per-gb 50000000 \
  --prices.channel-per-hour 50000000 \
  --prices.lease-per-hour 50000000
```

- `<COUNTRY_CODE>`: two capital letters, for example `SG`.
- Write down `id` and `public_key` from the output. You need them on-chain.
- If `init` asks for a passphrase, choose one for a new key, or type your key file's passphrase. Then do step 4.

## 4. Save the passphrase

Skip this step if `init` didn't ask for a passphrase.

```bash
sudo mkdir -p /etc/sentinel-dvpn
sudo install -m 600 /dev/null /etc/sentinel-dvpn/n0.pass
sudoedit /etc/sentinel-dvpn/n0.pass
```

Type the passphrase. To save in `nano`, press `Ctrl+O`, `Enter`, then `Ctrl+X`. Point the config at the file:

```bash
sudo sed -i "s|^passphrase_file = ''|passphrase_file = '/etc/sentinel-dvpn/n0.pass'|" /var/lib/sentinel-dvpn/n0/config.toml
```

## 5. Back up the operator key

Keep a copy of the operator key off the server.

On the server:

```bash
sudo install -m 600 -o "$USER" /var/lib/sentinel-dvpn/n0/keys/operator.json ~/operator-n0.json
```

On your computer:

```bash
cd <FOLDER_FOR_BACKUPS>
scp <USER>@<SERVER_IP>:~/operator-n0.json .
```

On the server:

```bash
rm ~/operator-n0.json
```

If `init` asked for a passphrase, keep it with the backup.

## 6. Use your own RPC (optional)

The public devnet RPC limits requests. Your own RPC avoids `429` errors.

```bash
sudo sed -i \
  -e "s|^url = 'https://api.devnet.solana.com'|url = '<RPC_URL>'|" \
  -e "s|^ws_url = 'wss://api.devnet.solana.com'|ws_url = '<WS_URL>'|" \
  /var/lib/sentinel-dvpn/n0/config.toml
```

Next: [register the node on-chain](/solana/node-operators/on-chain).
