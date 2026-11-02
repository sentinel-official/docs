---
title: Start the Node
sidebar_label: "▶️ Start the Node"
sidebar_position: 6
---

# Start the Node

Run these commands **on the server**. Finish [Register the Node On-Chain](/solana/node-operators/on-chain) first. The node can't start without its grant.

## 1. Open the firewall

A new Ubuntu server has no firewall turned on. Skip this step if your cloud provider has no firewall either. Otherwise, open these ports in your cloud provider's firewall:

- The API port, TCP (`8443`).
- The VPN ports from the protocol's config file:

```bash
sudo cat /var/lib/sentinel-dvpn/n0/<PROTOCOL>/config.toml
```

| Protocol | Ports to open |
| --- | --- |
| `wireguard`, `amneziawg`, `hysteria2` | `listen_port`, UDP |
| `openvpn` | `listen_port`, using its `protocol` (`udp` or `tcp`) |
| `v2ray`, `xray` | every `port` under `[[inbounds]]`, TCP |

Leave the other ports in the file closed.

## 2. Run the checks

Run this before you start the node:

```bash
sudo sentinel-dvpnd doctor --instance n0 --output table
```

Every row must show `ok`. Fix any that don't, then run it again. While the node is running, `api_port` always shows `error`.

## 3. Start the service

```bash
sudo sentinel-dvpnd service install --instance n0
sudo sentinel-dvpnd service start --instance n0
```

The service also starts on every reboot.

## 4. Check that it runs

```bash
sudo sentinel-dvpnd service status --instance n0
sudo sentinel-dvpn node status --instance n0
```

To watch the logs (press `Ctrl+C` to stop):

```bash
sudo journalctl -u sentinel-dvpnd@n0 -f
```

The log shows `service started` when the VPN is up.
