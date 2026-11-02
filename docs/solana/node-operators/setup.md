---
title: Set Up the Daemon
sidebar_label: "🛠 Set Up the Daemon"
sidebar_position: 2
---

# Set Up the Node Daemon

`sentinel-dvpnd` runs your node. `init` creates the instance folder, the config file, the operator key, and a TLS certificate.

Build the binaries first, as shown in [Build the binaries](/solana/node-operators#build-the-binaries).

## 1. Initialize the instance

Run as root. Node instance tags start with `n`.

```bash
sudo sentinel-dvpnd init \
  --instance n0 \
  --owner <OWNER_PUBLIC_KEY> \
  --country US \
  --api-hosts node.example.com \
  --prices.channel-per-gb <BASE_UNITS> \
  --prices.channel-per-hour <BASE_UNITS> \
  --prices.lease-per-hour <BASE_UNITS>
```

| Flag | Meaning |
| --- | --- |
| `--owner` | Owner wallet public key (base58). Required. |
| `--country` | Two-letter country code. |
| `--api-hosts` | Public hostname(s) where users reach the node API. |
| `--api-port` | Optional. Leave it out or pass `0` to let init pick a free port. The chosen port is written to the config and shown in the output. |
| `--service` | VPN service driver. Defaults to `wireguard`. Init saves a config for every driver. |
| `--plain-key` | Writes the operator key unencrypted. Leave it off to keep the key encrypted. |
| `--prices.*` | Prices in base units. Use the same units as `node open-node`. |
| `--force` | Overwrites an existing instance. |

Init also creates the `sentinel-dvpn` system group if it doesn't exist.

Init prints a JSON summary. Save the `id` and `public_key` values. `id` is the node ID for `open-node`. `public_key` is the operator key you fund in the next steps.

```json
{
  "api_port": <PORT_CHOSEN_BY_INIT>,
  "dir": "/var/lib/sentinel-dvpn/n0",
  "id": "<64 hex characters>",
  "key_name": "operator",
  "public_key": "<operator public key>",
  "role": "node",
  "tag": "n0",
  "tls_sha256": "<hex>"
}
```

## 2. Set the passphrase and RPC endpoint

The operator key is encrypted unless you passed `--plain-key`. The daemon never prompts for a passphrase. When it starts, it reads one of these:

- `passphrase_file`, a file readable by root. Set it in the `[key]` section of `config.toml`, as shown below.
- The `SENTINEL_DVPND_PASSPHRASE` environment variable.

The service needs `passphrase_file` because it can't prompt. Create the file with restricted permissions, and type the passphrase into the editor. Don't pass it on the command line, where it would end up in your shell history:

```bash
sudo mkdir -p /etc/sentinel-dvpn
sudo touch /etc/sentinel-dvpn/n0.pass
sudo chmod 600 /etc/sentinel-dvpn/n0.pass
sudoedit /etc/sentinel-dvpn/n0.pass
```

Then edit `/var/lib/sentinel-dvpn/n0/config.toml`:

```toml
[key]
name = "operator"
passphrase_file = "/etc/sentinel-dvpn/n0.pass"

[rpc]
url = "<SOLANA_RPC_URL>"
ws_url = "<SOLANA_WS_URL>"
```

For devnet builds, the RPC defaults to `https://api.devnet.solana.com` and `wss://api.devnet.solana.com`. Set `[rpc]` only if you use another endpoint.

## 3. Run the preflight checks

```bash
sudo sentinel-dvpnd doctor --instance n0
```

`doctor` runs the preflight checks without starting the daemon. Fix every failure it reports before you continue.

## 4. Run the daemon

For a test run in the foreground:

```bash
sudo sentinel-dvpnd run --instance n0
```

To run it as a system service:

```bash
sudo sentinel-dvpnd service install --instance n0
sudo sentinel-dvpnd service start --instance n0
sudo sentinel-dvpnd service status --instance n0
```

`service install` registers the service but does not start it. Keep the binary at the path where you installed it. If you move it, run `service install` again.

Daemon commands in the CLI take `--instance` too, for example `sentinel-dvpn node status --instance n0`.

Next: [open and manage the node on-chain](/solana/node-operators/on-chain).
