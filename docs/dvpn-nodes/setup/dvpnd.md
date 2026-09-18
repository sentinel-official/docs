---
title: dvpnd (Community Node)
description: An Apache-2.0 node built from the last open-source dvpn-node, installed on a VPS or at home with one script
sidebar_position: 4
---

# dvpnd (Community Node)

`dvpnd` is a third node program for the Sentinel network, next to the original `dvpn-node` and the current official `sentinel-dvpnx`. It is a community project, published under the Apache License 2.0 at [github.com/trinitystake/dvpnd](https://github.com/trinitystake/dvpnd), and it is not affiliated with or supported by the Sentinel team. Read this page first so you know which program you are installing and how it relates to the other two.

:::info Which node program is which
| | `dvpn-node` (original) | `sentinel-dvpnx` (official, current) | `dvpnd` (community) |
|---|---|---|---|
| Where it comes from | The first Sentinel node, developed in the open until January 2024 | The same repository continued by the Sentinel team; renamed from `dvpn-node` | A fork of `dvpn-node` taken at its last Apache-2.0 commit (January 2024) |
| Licence | Apache-2.0 | A non-open-source licence since March 2024 | Apache-2.0 |
| Chain protocol | Outdated: does not speak the current chain | Current | Current (`sentinelhub` v12 messages, node API level 9, the same level client apps read from `sentinel-dvpnx`) |
| Protocols | WireGuard, V2Ray | WireGuard, AmneziaWG, OpenVPN, V2Ray, Xray, Hysteria2 | WireGuard, AmneziaWG, OpenVPN, V2Ray, Xray, Hysteria2 |
| How it runs | Docker | Docker (see [Manual Setup](/dvpn-nodes/manual-setup)) | On the host as a systemd service, or Docker |
| Home directory | `~/.sentinelnode` | `~/.sentinel-dvpnx` | `~/.dvpnd` |
| Status | Superseded, do not run it | Maintained by the Sentinel team | Maintained by the community |
:::

The original `dvpn-node` no longer works on the network and must not be run. `sentinel-dvpnx` and `dvpnd` both work with today's client apps: they register the node on chain with the same messages, answer the same node API, and serve the same VPN protocols. Which one you run is your choice:

- Choose **`sentinel-dvpnx`** for the path the Sentinel team supports. Follow the [Manual Setup](/dvpn-nodes/manual-setup).
- Choose **`dvpnd`** if you want node software under an open-source licence you can read, modify and redistribute, an install without Docker, or a node on an ARM board at home built from source.

:::warning
`dvpnd` is community software. Report problems on its [GitHub issues](https://github.com/trinitystake/dvpnd/issues), not to the Sentinel team. Running a VPN node is regulated or prohibited in some places; you are responsible for the law where you run it.
:::

## Requirements

The [general requirements](/dvpn-nodes/setup/requirements) apply. In addition:

- **Operating system**: Ubuntu 22.04 or 24.04, or Debian 12 or 13. x86_64 is what the project builds and tests on; 64-bit ARM (a Raspberry Pi 4 or 5 with a 64-bit OS) builds from source and is expected to work, but is not tested by the project.
- **A public IPv4 address that reaches this machine.** On a VPS that is a given. At home it means two things: your provider gives your router a real public address (not carrier-grade NAT, see [Residential nodes](#residential-nodes)), and you forward two ports on the router to the node. The installer tells you which.
- **Root access** on the machine. The node runs as root: a WireGuard, AmneziaWG or OpenVPN node creates a tunnel interface and NAT rules on the host.
- **A dedicated machine.** The node keeps an unencrypted signing key and routes strangers' traffic out of the machine's address, so abuse complaints land on that address. Never run it on a validator or next to anything holding secrets.
- **A few P2P** for gas, sent to the operator wallet the installer creates. Every status update and usage report is a transaction. 50 P2P is a comfortable start; the [Node Faucet](https://busurnode.com/network/sentinel/faucet) covers a first test.

## Install with the script

The installer does what the project's [operator guide](https://github.com/trinitystake/dvpnd/blob/main/docs/operator.md) describes by hand: it installs Go and the build tools, builds `dvpnd` from source at the latest release, writes the configuration, creates the operator key and a self-signed TLS certificate, opens the firewall and starts the node as a systemd service. Read it before running it; it is a plain shell script.

```bash
curl -fsSL https://raw.githubusercontent.com/trinitystake/dvpnd/main/scripts/install.sh -o install.sh
less install.sh
sudo bash install.sh --moniker "My node"
```

The build takes a few minutes the first time. The script is safe to re-run: it keeps an existing configuration, key and certificate unless you pass `--force`, and re-running it later is how you upgrade.

### Options

Everything has a default; the moniker is asked for if you do not pass it.

| Flag | Meaning | Default |
|---|---|---|
| `--type` | `wireguard`, `amneziawg`, `openvpn`, `v2ray`, `xray` or `hysteria2` | `wireguard` |
| `--moniker` | Public name of the node, 4 to 32 characters | asked |
| `--gigabyte-price` | Price per GB in the chain's smallest unit (`udvpn`, one millionth of a P2P) | `40000000udvpn` |
| `--hourly-price` | Price per hour, same unit | `97500000udvpn` |
| `--api-port` | TCP port of the node API that client apps connect to | `8585` |
| `--listen-port` | Port of the VPN protocol itself | random, printed |
| `--recover` | Import an existing mnemonic instead of creating a new key | off |
| `--version` | Release tag to build, for example `v9.2.0` | latest release |
| `--no-firewall` | Leave `ufw` alone | off |
| `--no-start` | Install the service but do not start it | off |

Prices below the chain's minimum are rejected when the node registers; the log says so. Change them later in `/root/.dvpnd/config.toml` and restart.

### What the script prints at the end

- The **operator wallet** (`sent1...`) to fund. The node cannot register until it holds some P2P; until then it retries every 15 seconds and the log shows the error.
- The **node address** (`sentnode1...`) under which the node appears on chain and in the dashboards.
- The **ports** to open on your router if the machine is behind one.
- The **mnemonic** of the new key, shown once during the run. Write it down: it is the only backup of the wallet, and the key on the machine is stored unencrypted so that the node can sign unattended. Keep only working funds on it and sweep earnings to a wallet you hold offline.

### Check that it works

```bash
journalctl -u dvpnd -f                      # registration, status updates, sessions
curl -sk https://127.0.0.1:8585/ | head -c 400
```

The first start measures the link (one to two minutes, several gigabytes on a fast link; the result is reused for a week), then the node registers, marks itself active and starts serving. From a device outside your network, for example a phone on mobile data, open `https://<public-ip>:8585/status`: the browser warns about the self-signed certificate, which is expected, and shows the node document. Client apps list the node a few minutes after it is reachable. Check it on [Sentnodes](https://sentnodes.com) or [Suchnode](https://suchnode.net) like any other node.

## Residential nodes

A node at home earns on your own bandwidth and needs no server rental, but three things decide whether it can work at all.

1. **Carrier-grade NAT.** Look at your router's WAN or Internet address. If it is inside `100.64.0.0/10` (100.64.x.x to 100.127.x.x) or another private range, your provider shares one public address between several customers and nobody can reach your node from outside, whatever you forward. Ask the provider for a public IPv4 address (some sell it as a static IP add-on) or run the node on a VPS instead.
2. **Port forwarding.** Forward the node API port (TCP, `8585` by default) and the protocol port the installer printed (UDP for WireGuard, AmneziaWG, OpenVPN and Hysteria2, TCP for V2Ray and Xray) to the node's LAN address, and give the node a fixed LAN address with a DHCP reservation so the rule keeps working.
3. **A stable public address.** The node advertises its address on chain from `remote_url` in `config.toml`, which the installer sets to the public address it saw. If your provider changes it, clients cannot reach the node until you update `remote_url` and restart; the node then announces the new address. A static IP from the provider avoids this.

Also check your provider's terms about running servers, and expect the node to use your upload bandwidth: clients' traffic goes out through your connection at the speed you sell. IPv6 is used inside the tunnel when the machine reaches the IPv6 internet; the installer tests this and turns it off otherwise.

On a Raspberry Pi use a 64-bit OS. The installer builds `dvpnd`, and for AmneziaWG the userspace engine, from source on the board, which takes longer than on a VPS. Pinned Xray and Hysteria2 binaries exist for x86_64 only: on ARM put those binaries on the `PATH` yourself before running the script.

## Choosing a protocol

`--type wireguard` is the default and the path exercised most on the live network. The others are supported by current client apps too; the project's [protocol notes](https://github.com/trinitystake/dvpnd/blob/main/docs/protocols.md) record what each needs and what was verified. In short:

- **WireGuard**: kernel module in every kernel since 5.6, fastest, easiest.
- **AmneziaWG**: WireGuard with obfuscation for networks that block plain WireGuard. Every client app speaks the default tier; a second, opt-in AmneziaWG 3.1 tier on its own port serves clients that ask for it. The installer builds the tools and the userspace engine from source.
- **OpenVPN**: UDP or TCP; the node is its own certificate authority.
- **V2Ray**, **Xray**, **Hysteria2**: userspace proxies on one port, no tunnel interface. Xray offers REALITY, which makes the port look like a well-known site; Hysteria2 is QUIC with optional Salamander obfuscation.

One protocol per node. To offer several, run several nodes, each with its own operator key and address.

## Run with Docker instead

If Docker is how everything else on the machine runs, the project publishes an image for every release at `ghcr.io/trinitystake/dvpnd` (x86_64 only) with the proxy binaries and the AmneziaWG userspace engine bundled. Section 7 of the [operator guide](https://github.com/trinitystake/dvpnd/blob/main/docs/operator.md) has the `docker run` command for each node type, and `scripts/runner.sh` in the repository wraps them (`setup`, `init`, `start`, `stop`, `status`, `update`). The project recommends the host install above for tunnel nodes, because in a container a WireGuard node still needs the host's kernel modules and NET_ADMIN, and IPv6 needs a Docker daemon change.

## Operating the node

- **Logs**: `journalctl -u dvpnd -f`.
- **Restart** after changing `config.toml` or the protocol file: `sudo systemctl restart dvpnd`. Connected clients drop and reconnect on their own; sessions are kept.
- **Upgrade**: re-run the installer. It builds the latest release and keeps your configuration and key. Or pass `--version vX.Y.Z` for a specific one.
- **Move to another machine**: copy `/root/.dvpnd` (key, configuration, certificate, protocol file) to the new host, set `remote_url` to the new address, and start; the node announces the change.
- **Stop for good**: `sudo systemctl disable --now dvpnd`. The chain marks the node inactive after about an hour without a status update.
- **Earnings** accrue to the operator wallet as sessions settle; see [Earnings](/dvpn-nodes/earnings).

## Moving from sentinel-dvpnx or dvpn-node

`dvpnd` uses its own directory (`~/.dvpnd`) and never reads `~/.sentinel-dvpnx` or `~/.sentinelnode`. To keep your node's on-chain identity, stop the old node, then run the installer with `--recover` and paste the same mnemonic: the node address is derived from the operator key, so the node re-announces itself under the same address with its new details. Keep the old directory until you have seen the new node go active in the log, then remove it. Running both programs with the same key at the same time is not supported.

## Next steps

1. [Pass the Health Check](/dvpn-nodes/health-check/overview) to become eligible for rewards.
2. [Set up Node Monitoring](/node-monitoring) to track uptime and performance.
3. Join the [dVPN Node Network group](https://t.me/SentinelNodeNetwork) on Telegram; questions specific to `dvpnd` go to its [GitHub issues](https://github.com/trinitystake/dvpnd/issues).
