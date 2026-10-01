---
title: dvpnd (Community Node)
description: Install the community-maintained, Apache-2.0 dvpnd node with one script on a VPS or at home, and how it differs from the Manual Setup
sidebar_position: 4
---

# dvpnd (Community Node)

`dvpnd` is a community-maintained node program for the Sentinel network, published under the Apache License 2.0 at [github.com/trinitystake/dvpnd](https://github.com/trinitystake/dvpnd). It does the same job as `sentinel-dvpnx`, the official node used in the [Manual Setup](/dvpn-nodes/manual-setup): it registers your node on chain, serves VPN sessions to the client apps and earns P2P. What differs is how you install and run it: one script instead of a Docker setup, and a system service instead of a container.

:::tip Coming from the Manual Setup?
Most of what you know still applies: the same chain, the same kind of wallet funded with P2P, the same client apps, a `config.toml` file, and a node API port plus a protocol port to open. What changes is the program, the commands and some file and setting names. [How dvpnd differs from the Manual Setup](#how-dvpnd-differs-from-the-manual-setup) lists every difference, and [Move an existing node to dvpnd](#move-an-existing-node-to-dvpnd) keeps your node address and wallet.
:::

:::warning
`dvpnd` is community software. It is not affiliated with or supported by the Sentinel team: report problems on its [GitHub issues](https://github.com/trinitystake/dvpnd/issues). Running a VPN node is regulated or prohibited in some places; you are responsible for the law where you run it.
:::

## Which node program is which

Three node programs share a history. Only the last two work on today's network.

| | `dvpn-node` (original) | `sentinel-dvpnx` (official) | `dvpnd` (community) |
|---|---|---|---|
| Where it comes from | The first Sentinel node, open source until January 2024 | The same repository, continued and renamed by the Sentinel team | A fork of `dvpn-node` taken at its last Apache-2.0 commit (January 2024) |
| Licence | Apache-2.0 | Not open source since March 2024 | Apache-2.0 |
| Works on today's network | No: it does not speak the current chain. Do not run it. | Yes | Yes |
| Protocols | WireGuard, V2Ray | WireGuard, AmneziaWG, OpenVPN, V2Ray, Xray, Hysteria2 | WireGuard, AmneziaWG, OpenVPN, V2Ray, Xray, Hysteria2 |
| Maintained by | Nobody | The Sentinel team | The community |

`sentinel-dvpnx` and `dvpnd` register the node with the same chain messages and answer the same node API, so client apps treat both the same way. Which one you run is your choice:

- Choose **`sentinel-dvpnx`** for the path the Sentinel team supports. Follow the [Manual Setup](/dvpn-nodes/manual-setup).
- Choose **`dvpnd`** for node software under an open-source licence you can read, modify and redistribute, a setup without Docker, or a one-script install at home.

## How dvpnd differs from the Manual Setup

If you have never followed the Manual Setup, skip to [Before you start](#before-you-start).

| | Manual Setup (`sentinel-dvpnx`) | `dvpnd` |
|---|---|---|
| Installing | Install Docker, get the image, run `init`, add the key, open the ports, start the container | Run one installer script, which does all of these |
| Docker | Required | Not used (an image exists, see [Run it with Docker instead](#run-it-with-docker-instead)) |
| How the node runs | A container named `dvpnx` | A system service named `dvpnd`, started at boot |
| Node files | `~/.sentinel-dvpnx`, in your user's home | `/root/.dvpnd`, owned by root (use `sudo`) |
| Main settings file | `config.toml` | `config.toml`, with different sections and key names ([where each setting went](#coming-from-sentinel-dvpnx-where-each-setting-went)) |
| Protocol settings file | `wireguard/config.toml`: a folder per protocol | `wireguard.toml`: a file next to `config.toml` |
| Node API port | `19781` in that guide | `8585` by default |
| Key name | `key-1` | `operator` |
| BIP-39 passphrase | Optional, asked when you add the key | Not supported: the key never has one |
| Firewall | You open every port for both TCP and UDP | The installer opens your SSH port, the API port (TCP) and the protocol port (its own transport only) |
| Funding the wallet | Before the first start, or the node does not start | Any time: until the wallet holds P2P, the node retries every 15 seconds |
| Logs | `docker logs -f dvpnx` | `sudo journalctl -u dvpnd -f` |

What stays the same:

- **The wallet.** An operator address starting with `sent1` that you fund with P2P and that collects earnings, and a node address starting with `sentnode1` under which the node is listed. Both come from the same key.
- **The key is stored unencrypted** (the `test` keyring) so that the node can sign transactions on its own.
- **Prices are in `udvpn`** (1 P2P = 1,000,000 udvpn), and both price formats you know are accepted.
- **The node API uses a self-signed TLS certificate.** Browsers warn about it; client apps expect it.
- **One protocol per node.**
- The [Health Check](/dvpn-nodes/health-check/overview), monitoring dashboards and [Earnings](/dvpn-nodes/earnings) work the same way.

## Before you start

You need:

- **A machine** that meets the [general requirements](/dvpn-nodes/setup/requirements), running Ubuntu 22.04 or 24.04, or Debian 12 or 13. The project builds and tests on x86_64. A Raspberry Pi 4 or 5 with a 64-bit OS also works but is not tested by the project (see [Home nodes](#home-nodes)).
- **A public IPv4 address that reaches the machine.** Every VPS has one. At home, read [Home nodes](#home-nodes) first: with some internet providers a home node cannot work at all.
- **Root access** (`sudo`). The node creates a tunnel interface and firewall rules, so it runs as root.
- **A dedicated machine.** The node keeps an unencrypted signing key and sends strangers' traffic out of the machine's IP address, so abuse complaints come to that address. Never run it on a validator or next to anything that holds secrets.
- **About 50 P2P** for transaction fees, sent after the install to the wallet the installer creates. For a first test, the [Node Faucet](https://busurnode.com/network/sentinel/faucet) is enough.

## Step 1: Prepare the server

Connect to the server over SSH. If you have not set up an SSH key yet, follow [Generate a SSH Key](/dvpn-nodes/setup/manual/preliminary#generate-a-ssh-key) in the Manual Setup, then come back here.

Make sure `curl` is installed (most servers already have it):

```bash
sudo apt update && sudo apt install -y curl
```

That is all the preparation. Skip the rest of the Manual Setup: the installer installs the packages and the firewall itself, and Docker is not needed.

## Step 2: Run the installer

Download the installer, read it (it is a plain shell script; press `q` to leave `less`), then run it with a public name for your node:

```bash
curl -fsSL https://raw.githubusercontent.com/trinitystake/dvpnd/main/scripts/install.sh -o install.sh
less install.sh
sudo bash install.sh --moniker "My node"
```

The moniker is the name client apps show, 4 to 32 characters. Without `--type` you get a WireGuard node; to run another protocol add, for example, `--type amneziawg` (see [Choosing a protocol](#choosing-a-protocol)).

What the installer does, in order:

1. Installs the system packages, Go, and the tools your protocol needs.
2. Downloads the latest `dvpnd` release and builds it. This takes a few minutes the first time.
3. Looks up your public IP address and writes `config.toml` and the protocol file in `/root/.dvpnd`.
4. Creates the operator key and shows its mnemonic (see [Step 3](#step-3-save-the-mnemonic-and-fund-the-wallet)).
5. Creates a self-signed TLS certificate for the node API.
6. Opens the firewall (`ufw`): your SSH port, the node API port and the protocol port.
7. Installs the `dvpnd` service and starts it.

It asks you two things at most: the moniker, if you did not pass `--moniker`, and to press Enter once you have written down the mnemonic.

The installer is safe to run again: it keeps an existing configuration, key and certificate unless you pass `--force`. Running it again later is also how you [upgrade](#everyday-commands).

<details>
<summary>All installer options</summary>
<p>

Every option has a default except the moniker, which is asked for if you do not pass it.

| Option | Meaning | Default |
|---|---|---|
| `--type` | `wireguard`, `amneziawg`, `openvpn`, `v2ray`, `xray` or `hysteria2` | `wireguard`, or the existing node's type when you run it again |
| `--moniker` | Public name of the node, 4 to 32 characters | asked |
| `--gigabyte-price` | Price per GB, in `udvpn` (1 P2P = 1,000,000 udvpn) | `40000000udvpn` (40 P2P) |
| `--hourly-price` | Price per hour, same unit | `97500000udvpn` (97.5 P2P) |
| `--api-port` | TCP port of the node API that client apps connect to | `8585` |
| `--listen-port` | Port of the VPN protocol itself | random between 10000 and 60000 |
| `--openvpn-proto` | OpenVPN only: `udp` or `tcp` | `udp` |
| `--v3-listen-port` | AmneziaWG only: port of the optional AmneziaWG 3.1 tier | random |
| `--recover` | Import an existing mnemonic instead of creating a new key | off |
| `--version` | Release to build, for example `v9.2.1` | latest release |
| `--force` | Rewrite `config.toml` and the protocol file; the key and certificate are kept | off |
| `--no-firewall` | Leave `ufw` alone | off |
| `--no-start` | Install the service without starting it | off |
| `--yes` | Never prompt, for unattended runs: pass `--moniker` too | off |

Prices are checked by the chain when the node registers: a price below the chain's minimum is rejected and the log says so. You can change prices later in `config.toml`.

</p>
</details>

At the end the installer prints a summary like this one:

```text
================================================================================
dvpnd is installed.

  node type        wireguard
  node API         https://203.0.113.10:8585   (tcp)
  wireguard port   48074/udp
  operator wallet  sent1...
  node address     sentnode1...
  home directory   /root/.dvpnd

What to do now:
...
```

## Step 3: Save the mnemonic and fund the wallet

During the run, the installer shows the new key's mnemonic, 24 words, once:

```text
**Important** write this mnemonic phrase in a safe place
word1 word2 word3 ... word24
```

Write it down before you press Enter. It is the only backup of the node's wallet and it is not shown again.

Then send P2P to the **operator wallet**: the address starting with `sent1` in the summary. 50 P2P is a comfortable start; every status update and usage report the node sends is a transaction with a small fee. The address starting with `sentnode1` is your node's address, the one dashboards and the Health Check show. It is not a wallet address: do not send P2P to it.

You can fund the wallet now or later. Until it holds P2P the node cannot register: the log shows `failed to register the node` and the service tries again every 15 seconds.

To see the balance and move earnings later, import the mnemonic into a wallet such as [Keplr](/get-started/wallets/keplr/import-seed). Because the key on the server is unencrypted, keep only working funds in this wallet and move earnings to a wallet you keep elsewhere.

To show both addresses again at any time:

```bash
sudo dvpnd --home /root/.dvpnd keys list
```

## Step 4: Forward ports on your router (home nodes only)

Skip this step on a VPS.

If the machine is behind a home router, the installer's summary ends with the ports to forward, for example:

```text
2. On your router, forward these ports to 192.168.1.50 (this machine):
     8585/tcp
     48074/udp
```

In your router's port forwarding settings, add one rule per port, with the protocol the installer printed:

```text
Name   Protocol   WAN Port   LAN Port   Destination IP
API    TCP        8585       8585       192.168.1.50
VPN    UDP        48074      48074      192.168.1.50
```

Unlike the Manual Setup, each port needs only the one protocol shown, not both TCP and UDP. An AmneziaWG node prints a third port, for its 3.1 tier: forward it too. Give the machine a fixed LAN address (a DHCP reservation in the router) so the rules keep pointing at it.

## Step 5: Check that the node is online

Follow the node's log:

```bash
sudo journalctl -u dvpnd -f
```

Press Ctrl+C to stop following; the node keeps running. On the first start, look for these lines, in this order:

| Log line | What it means |
|---|---|
| `Measuring the internet link` | The node runs a speed test to know which bandwidth to advertise. It takes one to two minutes and moves several gigabytes on a fast link. The result is reused for a week, so later starts show `Reusing the link measurement` instead. |
| `Starting the VPN service` | The WireGuard tunnel, or your protocol's server, is up. |
| `Registering the node...` | The node registers on chain. A node that already exists on chain shows `Updating the node info...` instead. |
| `Updating the node status...` | The node marks itself active. It repeats this at least once an hour. |

If you see `failed to register the node`, read the error after it: most often the operator wallet holds no P2P yet ([Step 3](#step-3-save-the-mnemonic-and-fund-the-wallet)), or a price is below the chain's minimum.

Then check that the node answers from outside your network, for example from a phone on mobile data. Open this address, with your public IP and API port:

```text
https://<your-public-ip>:8585/status
```

The browser warns about the self-signed certificate, which is expected; continue, and it shows your node's status as JSON. Client apps list the node a few minutes after it is reachable. You can also look it up on [Sentnodes](https://sentnodes.com) or [Suchnode](https://suchnode.net) by its `sentnode1` address.

## The configuration files

Everything the node uses is in `/root/.dvpnd`. The folder belongs to root, so use `sudo` to look inside: `sudo ls /root/.dvpnd`.

| File | What it holds |
|---|---|
| `config.toml` | The main settings: name, prices, API port, public address, key name, chain connection |
| `wireguard.toml`, or the file for your protocol | The protocol settings: port, tunnel keys, IPv6 |
| `keyring-test/` | The operator key, unencrypted |
| `tls.crt`, `tls.key` | The node API's self-signed certificate |
| `data.db` | The local database of sessions |
| `bandwidth.json` | The last speed test result |

### config.toml

The installer sets the keys below. Everything else can stay at its default.

| Key | What it does | The installer sets it to |
|---|---|---|
| `[node] moniker` | Public name of the node | `--moniker` |
| `[node] type` | Protocol the node serves | `--type` |
| `[node] gigabyte_prices`, `hourly_prices` | Your prices, in `udvpn` | `--gigabyte-price`, `--hourly-price` |
| `[node] listen_on` | Address and port the node API listens on | `0.0.0.0:8585` |
| `[node] remote_url` | Public address of the node API, published on chain; clients connect to it | `https://<public-ip>:8585` |
| `[keyring] backend`, `from` | Where the key is stored, and its name | `test`, `operator` |
| `[handshake] enable` | Handshake DNS, which needs the separate `hnsd` program | `false` |

Two more sections are worth knowing:

- **`[bandwidth]`**: leave both values at `0` and the node measures its link. If you know what your provider sells you, set `download_mbps` and `upload_mbps` (a 1 Gbit/s port is `1000`) and the speed test is skipped. Clients use this figure to choose a node and nothing verifies it, so do not overstate it.
- **`[geoip]`**: the node looks up its location from its IP address at each start. Only if the result is wrong, set `city`, `country`, `latitude` and `longitude` to the server's real location.

<details>
<summary>The full config.toml after the install</summary>
<p>

```toml
[bandwidth]
# Bandwidth this node advertises, in megabits per second.
# Leave both at 0 and the node measures its link: it picks speed test servers by
# measured latency, skips any that answer from inside its own datacenter (they
# measure the local network, not the internet), and reports the lowest of what two
# or three independent servers manage. The measurement takes one to two minutes,
# moves several gigabytes on a fast link, is kept in bandwidth.json and repeated
# once a week or when the public IP changes. It never overstates; on a multi-gigabit
# link it may understate, because public test servers cannot always keep up.
# Set both to what your provider actually sells you (a 1 Gbit/s port is 1000) and
# the measurement is skipped entirely. Nothing verifies the figure and clients use
# it to choose a node, so do not overstate it. Set both or neither.
download_mbps = 0
upload_mbps = 0

[chain]
# Gas limit to set per transaction
gas = 200000

# Gas adjustment factor
gas_adjustment = 1.05

# Gas prices to determine the transaction fee
gas_prices = "0.1udvpn"

# The network chain ID
id = "sentinelhub-2"

# Comma separated Tendermint RPC addresses for the chain
rpc_addresses = "https://sentinel-rpc.publicnode.com:443,https://sentinel-rpc.polkachu.com:443,https://rpc-sentinel.busurnode.com:443,https://rpc.sentineldao.com:443"

# Timeout seconds for querying the data from the RPC server
rpc_query_timeout = 10

# Timeout seconds for broadcasting the transaction through RPC server
rpc_tx_timeout = 30

# Calculate the transaction fee by simulating it
simulate_and_execute = true

[geoip]
# Service that discovers the node's public IP and location. All of them are free of
# charge; the free tiers of auto, ipwhois, ip2location and cloudflare allow commercial use.
#   auto        - (default) ipwho.is, then ip2location.io, until one returns a full location;
#                 the country is cross-checked against Cloudflare and a mismatch is logged.
#                 If neither answers: Cloudflare (country only), then ipify (IP only).
#                 Keyless; url and token must stay empty.
#   ipwhois     - ipwho.is: IP, city, country, coordinates. Keyless, 1000 lookups per day.
#   ip2location - ip2location.io: same fields. Keyless 1000 per day; a free key (token) raises it.
#   cloudflare  - IP and country code only.
#   ipify       - IP only.
#   ip-api      - IP, city, country, coordinates. Free tier is for NON-COMMERCIAL use only;
#                 a paid key goes in url.
#   ipinfo      - IP, country (free Lite plan, token required); city and coordinates need a
#                 paid plan (set url to its endpoint).
#   none        - no lookup; node.ipv4_address is used as the public IP.
provider = "auto"

# Optional endpoint override; only for a single provider, never with auto or none
url = ""

# API token: required for ipinfo, optional for ip2location, not accepted otherwise
token = ""

# Static location; when set, these override what the provider returns.
# Clients use the reported location to choose a node and nothing verifies it:
# enter the server's real physical location, never an invented one.
city = ""
country = ""
latitude = 0.000000
longitude = 0.000000

[handshake]
# Enable Handshake DNS resolver
enable = false

# Number of peers
peers = 8

[keyring]
# Underlying storage mechanism for keys
backend = "test"

# Name of the key with which to sign
from = "operator"

[node]
# Time interval between each set_sessions operation
interval_set_sessions = "10s"

# Time interval between each update_sessions transaction
interval_update_sessions = "1h55m0s"

# Time interval between each set_status transaction
interval_update_status = "55m0s"

# IPv4 address to replace the public IPv4 address with
ipv4_address = ""

# API listen-address
listen_on = "0.0.0.0:8585"

# Name of the node
moniker = "My node"

# Prices for one gigabyte of bandwidth provided. Either plain coins ("1000udvpn,5uatom")
# or the chain's price form "denom:base_value,quote_value" separated by ";"
# (a non-zero base_value lets the chain re-quote the price via its oracle)
gigabyte_prices = "40000000udvpn"

# Prices for one hour, same format
hourly_prices = "97500000udvpn"

# Public URL of the node (https://host:port); the chain records the host:port part
remote_url = "https://203.0.113.10:8585"

# Type of node
type = "wireguard"

[qos]
# Limit max number of concurrent peers
max_peers = 250
```

</p>
</details>

### The protocol file

Next to `config.toml` there is one file for the protocol you chose. The installer writes it with a random port and fresh keys, and usually nothing in it needs changing. The port is the one to open in the firewall and on your router:

| Protocol | File | Port setting | Transport |
|---|---|---|---|
| WireGuard | `wireguard.toml` | `listen_port` | UDP |
| AmneziaWG | `amneziawg.toml` | `listen_port`, and `listen_port` under `[v3]` | UDP |
| OpenVPN | `openvpn.toml` | `listen_port` | `proto`: UDP or TCP |
| V2Ray | `v2ray.toml` | `listen_port` under `[vmess]` | TCP |
| Xray | `xray.toml` | `listen_port` under `[vless]` | TCP |
| Hysteria2 | `hysteria.toml` | `listen_port` under `[server]` | UDP |

The files below are examples: on your machine the ports and keys are different.

<details>
<summary>WireGuard: wireguard.toml</summary>
<p>

```toml
# Name of the network interface
interface = "wg0"

# Port number to accept the incoming connections
listen_port = 48074

# Server private key
private_key = "<generated-by-the-installer>"

# Network interface that carries the node's internet traffic; peers are NAT-ed
# through it. Empty means detect it from the default route at start
uplink = ""

# Hand each peer an IPv6 tunnel address next to the IPv4 one (true, as every
# other node on the network does). It needs a host that can reach the IPv6
# internet; in Docker that means "ipv6": true in the daemon config, otherwise
# clients get "unreachable" on every IPv6 connection through the tunnel. Set it
# false for an IPv4-only tunnel: clients then exit with the node's IPv4 address.
enable_ipv6 = true
```

The installer sets `enable_ipv6` to `false` when the machine cannot reach the IPv6 internet.

</p>
</details>

<details>
<summary>AmneziaWG: amneziawg.toml</summary>
<p>

```toml
# Name of the network interface
interface = "awg0"

# Port number to accept the incoming connections
listen_port = 45250

# Server private key
private_key = "<generated-by-the-installer>"

# Network interface that carries the node's internet traffic; peers are NAT-ed
# through it. Empty means detect it from the default route at start
uplink = ""

# Hand each peer an IPv6 tunnel address next to the IPv4 one; the host must
# then reach the IPv6 internet. Set it false for an IPv4-only tunnel
enable_ipv6 = true

# Tunnel subnets peers get their addresses from. Empty (the default) gives this
# node subnets of its own, derived from private_key: a 10.x.y.0/24 and an IPv6
# unique local /120. Set a private network in CIDR form only if a derived one
# clashes with a network the host is on
ipv4_subnet = ""
ipv6_subnet = ""

[obfuscation]
# AmneziaWG parameters, generated by "dvpnd amneziawg config init". Clients
# receive s1-s4 and h1-h4 in the handshake and must use the same values;
# jc/jmin/jmax are the junk packets this node sends and are per side.
# Random junk packets before the handshake: count, minimum and maximum size
jc = 4
jmin = 40
jmax = 70

# Junk prepended to the handshake initiation (s1), response (s2), cookie
# reply (s3) and transport (s4) packets; s1 + 56 must differ from s2
s1 = 116
s2 = 42
s3 = 0
s4 = 0

# Message type values replacing WireGuard's 1-4; all distinct and above 4
h1 = 278394822
h2 = 478009250
h3 = 1304711126
h4 = 1939119816

# Optional signature packets sent before the handshake, in AmneziaWG's tag
# syntax (e.g. "<b 0x...><r 16>"); empty means none
i1 = ""
i2 = ""
i3 = ""
i4 = ""
i5 = ""

[v3]
# A second interface speaking AmneziaWG 3.1 (header protection, random
# trailers), handed only to clients that ask for awg_version 3 in the
# handshake; every other client gets the [obfuscation] tier above, unchanged.
# Set enabled to false to run the default tier only. The junk packets and
# signature packets above apply to both tiers
enabled = true
interface = "awg1"
listen_port = 34006
private_key = "<generated-by-the-installer>"

# Tunnel subnets as above, derived from this tier's private_key when empty;
# they must not overlap the default tier's
ipv4_subnet = ""
ipv6_subnet = ""

# Header protection key (base64, 32 bytes): encrypts the message type and
# header of every packet; clients receive it in the handshake
header_protection_key = "<generated-by-the-installer>"

# Junk prefixes as above, all four at least 12 (the header cipher's nonce
# rides in them); s1 + 56 must differ from s2
s1 = 20
s2 = 77
s3 = 25
s4 = 16

# Message type values as above
h1 = 1044855623
h2 = 558630452
h3 = 1195251149
h4 = 1971149887

# Random bytes appended to every packet; clients enable the same
random_trailers = true

# Random padding this side adds to its transport payloads, a range "min-max"
content_padding_addition = "0-64"
```

Changing any obfuscation value disconnects every client, so leave them as generated.

</p>
</details>

<details>
<summary>OpenVPN: openvpn.toml</summary>
<p>

```toml
# Name of the tunnel interface
interface = "ovpn0"

# Port number to accept the incoming connections
listen_port = 11561

# Transport: "udp" (recommended) or "tcp"
proto = "udp"

# Network interface that carries the node's internet traffic; peers are NAT-ed
# through it. Empty means detect it from the default route at start
uplink = ""

# Hand each peer an IPv6 tunnel address next to the IPv4 one; the host must
# then reach the IPv6 internet. Set it false for an IPv4-only tunnel
enable_ipv6 = true

[management]
# Loopback port of OpenVPN's management interface, over which the node admits
# clients and reads their traffic; nothing else may bind it
port = 58791
```

On the first start the node also creates its own certificate authority in `/root/.dvpnd/openvpn/`. Keep that folder: clients' profiles depend on it.

</p>
</details>

<details>
<summary>V2Ray: v2ray.toml</summary>
<p>

```toml
[vmess]
# Port number to accept the incoming connections
listen_port = 13301

# Enable or disable TLS for secure connections
tls = false

# Transport protocol for the VMess inbound (tcp is the only one confirmed with current client apps)
transport = "tcp"
```

</p>
</details>

<details>
<summary>Xray: xray.toml</summary>
<p>

```toml
[vless]
# Port number to accept the incoming connections (TCP)
listen_port = 36246

# Transport security: "tls" uses the node's tls.crt and tls.key and clients pin the
# certificate; "reality" needs no certificate and imitates the TLS handshake of the
# site named in [reality] server_name
security = "tls"

# XTLS Vision flow control (recommended; every current client supports it)
flow = true

[reality]
# Site whose TLS handshake is imitated: it must serve TLS 1.3 with HTTP/2 on port 443 and
# answer with a small certificate chain (www.apple.com and www.cloudflare.com are known to
# work with current xray; www.microsoft.com is not)
server_name = "www.apple.com"

# x25519 key pair, base64url, generated by "dvpnd xray config init"
private_key = "<generated-by-the-installer>"
public_key = "<generated-by-the-installer>"

# Short id, up to 16 hex characters; may be empty
short_id = "<generated-by-the-installer>"

# Browser TLS fingerprint clients are told to imitate
fingerprint = "chrome"

[api]
# Loopback port on which the node drives xray; nothing else may bind it
port = 59414
```

</p>
</details>

<details>
<summary>Hysteria2: hysteria.toml</summary>
<p>

```toml
[server]
# UDP port to accept the incoming connections (QUIC)
listen_port = 18037

# Salamander obfuscation password handed to clients; empty disables obfuscation
obfs_password = ""

# Bandwidth offered to each client, e.g. "100 mbps"; empty lets the client choose
up = ""
down = ""

[api]
# Loopback ports: hysteria calls auth_port to authenticate a client, and answers
# traffic queries on stats_port; nothing else may bind them
auth_port = 9432
stats_port = 15339
```

</p>
</details>

### Changing a setting

1. Open the file in an editor, for example to change your prices:

   ```bash
   sudo nano /root/.dvpnd/config.toml
   ```

2. Save, then restart the node so it reads the file again:

   ```bash
   sudo systemctl restart dvpnd
   ```

3. Check the log (`sudo journalctl -u dvpnd -f`) for `Updating the node info...`: at every start the node publishes its current prices and public address on chain.

Connected clients drop at the restart and reconnect on their own; their sessions are kept.

If you change a **port**, open the new one in the firewall (for example `sudo ufw allow 9000/tcp`) and on your router. For the **API port**, change it in both `listen_on` and `remote_url`. To switch to **another protocol**, run the installer again with the new `--type` and `--force`, passing your moniker and prices again: `--force` rewrites `config.toml` with the installer's defaults.

### Coming from sentinel-dvpnx: where each setting went

The two programs use different names for many of the same settings. If you are carrying values over from the Manual Setup, this is where each one lives in `dvpnd`.

| `sentinel-dvpnx`: `~/.sentinel-dvpnx/config.toml` | `dvpnd`: `/root/.dvpnd/config.toml` | Note |
|---|---|---|
| `[node] moniker` | `[node] moniker` | Same |
| `[node] service_type` | `[node] type` | Same values |
| `[node] gigabyte_prices`, `hourly_prices` | `[node] gigabyte_prices`, `hourly_prices` | Both formats are accepted: `udvpn:0.0025,12_500_000` and `12500000udvpn` |
| `[node] api_port = "19781"` | `[node] listen_on = "0.0.0.0:19781"` | Address and port the API listens on |
| `[node] remote_addrs = ["203.0.113.10"]` | `[node] remote_url = "https://203.0.113.10:19781"` | One full URL, including the API port |
| `[keyring] backend` | `[keyring] backend` | `test` in both |
| `[tx] from_name = "key-1"` | `[keyring] from = "operator"` | Name of the signing key |
| `[rpc] addrs`, a list | `[chain] rpc_addresses`, one comma-separated text | |
| `[rpc] chain_id` | `[chain] id` | `sentinelhub-2` |
| `[tx] gas`, `gas_adjustment`, `gas_prices` | `[chain] gas`, `gas_adjustment`, `gas_prices` | |
| `[handshake_dns] enable` | `[handshake] enable` | |
| `[qos] max_peers` | `[qos] max_peers` | Same |
| `[node] interval_status_update` | `[node] interval_update_status` | |
| `[node] interval_session_usage_sync_with_blockchain` | `[node] interval_update_sessions` | |
| `[node] interval_speedtest` | `[bandwidth]` | Measured once a week, or declared by you |
| `[node] interval_geoip_location` | `[geoip]` | Looked up at each start, or set by you |
| `[oracle]` | none | `dvpnd` does not fetch market prices itself |

For the protocol file, WireGuard as an example (AmneziaWG and OpenVPN follow the same pattern):

| `sentinel-dvpnx`: `wireguard/config.toml` | `dvpnd`: `wireguard.toml` |
|---|---|
| `port = "25068"`, text | `listen_port = 25068`, a number |
| `out_interface = "eth0"` | `uplink = ""`: empty means detected from the default route |
| `private_key` | `private_key` |
| `ipv4_addr`, `ipv6_addr` | No address settings in `wireguard.toml`; `enable_ipv6` turns IPv6 in the tunnel on or off |

## Everyday commands

| Task | `dvpnd` | Manual Setup equivalent |
|---|---|---|
| Follow the log | `sudo journalctl -u dvpnd -f -n 100` | `docker logs -f -n 100 dvpnx` |
| See whether it is running | `systemctl status dvpnd` | `docker ps -a` |
| Restart, for example after a settings change | `sudo systemctl restart dvpnd` | `docker restart dvpnx` |
| Stop | `sudo systemctl stop dvpnd` | `docker stop dvpnx` |
| Start | `sudo systemctl start dvpnd` | `docker start dvpnx` |
| Show the wallet and node address | `sudo dvpnd --home /root/.dvpnd keys list` | |
| Stop for good, also at boot | `sudo systemctl disable --now dvpnd` | `docker rm -f dvpnx` |

The service starts at boot and restarts on its own if it stops unexpectedly.

- **Upgrade**: download the installer again and run it. It reads the node type from your configuration, builds the latest release and keeps your configuration and key. Add `--version vX.Y.Z` for a specific release.

  ```bash
  curl -fsSL https://raw.githubusercontent.com/trinitystake/dvpnd/main/scripts/install.sh -o install.sh
  sudo bash install.sh
  ```

- **Move to another machine**: stop the node, copy `/root/.dvpnd` to the same place on the new machine, and run the installer there with `--no-start` (it keeps the copied files and reads the node type from them). Set `remote_url` to the new address, then `sudo systemctl start dvpnd`. The node publishes its new address on chain.
- **Stop for good**: after `disable --now`, the chain marks the node inactive within about an hour.
- **Earnings** collect in the operator wallet as sessions settle; see [Earnings](/dvpn-nodes/earnings).

## Move an existing node to dvpnd

This is for operators running `sentinel-dvpnx` from the Manual Setup who want to switch and keep the same node address, wallet and balance.

The node address comes from the operator key. Recover the same mnemonic in `dvpnd` and the node keeps its identity on chain: at the first start `dvpnd` updates the existing node's details instead of registering a new node.

:::warning Check this first: did you set a passphrase?
`dvpnd` can only recover a key that has **no BIP-39 passphrase**. If you typed a passphrase at "Enter your BIP-39 passphrase" when you added the key in the Manual Setup, recovering the mnemonic in `dvpnd` gives a different wallet and a different node. In that case stay on `sentinel-dvpnx`, or start `dvpnd` with a new key and keep the old wallet in Keplr for its funds.
:::

1. **Write down your current settings.** You will reuse the node type, moniker, prices and ports, so your firewall and router rules keep working:

   ```bash
   sudo grep -E 'service_type|moniker|gigabyte_prices|hourly_prices|api_port' "$HOME/.sentinel-dvpnx/config.toml"
   sudo grep -r --include=config.toml -E '^port' "$HOME/.sentinel-dvpnx"
   ```

2. **Stop the old node.** Running both programs with the same key at the same time is not supported.

   ```bash
   docker stop dvpnx
   ```

   The Manual Setup starts the container with `--rm`, so stopping it also removes it. Your files in `~/.sentinel-dvpnx` stay.

3. **Run the installer with `--recover`**, using the values from step 1:

   ```bash
   sudo bash install.sh --recover \
     --type wireguard \
     --moniker "My node" \
     --gigabyte-price "udvpn:0.0025,12_500_000" \
     --hourly-price "udvpn:0.005,25_000_000" \
     --api-port 19781 \
     --listen-port 25068
   ```

   Paste your mnemonic when asked. The summary at the end must show the same `sent1` and `sentnode1` addresses you had before. If they differ, stop the service (`sudo systemctl stop dvpnd`) and see the passphrase warning above. For V2Ray and Xray, which had several inbound ports in `sentinel-dvpnx`, pick one of them: a `dvpnd` node serves one port.

4. **Watch the log** with `sudo journalctl -u dvpnd -f`. `Updating the node info...`, not `Registering the node...`, confirms that `dvpnd` took over your existing node.

5. **Clean up** once the node shows as active again:
   - Delete the old files: `sudo rm -rf ~/.sentinel-dvpnx`. Your mnemonic remains the backup of the key.
   - The Manual Setup opened each port for both TCP and UDP. List the firewall rules with `sudo ufw status numbered` and remove the ones you no longer need with `sudo ufw delete <number>`.
   - Docker is no longer needed for the node. Remove it only if nothing else on the machine uses it.

The same steps work from the original `dvpn-node` (files in `~/.sentinelnode`): stop it, then run the installer with `--recover`.

## Home nodes

A node at home earns on your own internet connection and needs no server rental, but three things decide whether it can work at all.

1. **Carrier-grade NAT.** Look at your router's WAN or Internet address. If it is inside `100.64.0.0/10` (100.64.x.x to 100.127.x.x) or another private range, your provider shares one public address between several customers and nobody can reach your node from outside, whatever you forward. Ask the provider for a public IPv4 address (some sell it as a static IP option) or run the node on a VPS instead.
2. **Port forwarding.** Forward the ports the installer printed, as in [Step 4](#step-4-forward-ports-on-your-router-home-nodes-only).
3. **A stable public address.** The node publishes the address in `remote_url`, which the installer sets to the public address it found. If your provider changes that address, clients cannot reach the node until you update `remote_url` and restart. A static IP from the provider avoids this.

Also check your provider's terms about running servers, and expect the node to use your upload bandwidth: clients' traffic leaves through your connection. IPv6 is used inside the tunnel only when the machine reaches the IPv6 internet; the installer tests this and turns it off otherwise.

On a Raspberry Pi, use a 64-bit OS. The installer builds `dvpnd` (and, for AmneziaWG, its userspace engine) on the board, which takes longer than on a VPS. The installer downloads Xray and Hysteria2 for x86_64 only: on ARM, install the `xray` or `hysteria` program yourself before running it. The installer stops with a message saying which version is needed.

## Choosing a protocol

`--type wireguard` is the default and the protocol most tested on the live network. Current client apps support the others too; the project's [protocol notes](https://github.com/trinitystake/dvpnd/blob/main/docs/protocols.md) record what each needs and what was verified.

- **WireGuard**: fastest and simplest. Every kernel since 5.6 includes it.
- **AmneziaWG**: WireGuard with obfuscation, for networks that block plain WireGuard. Every client app speaks the default tier; a second, optional AmneziaWG 3.1 tier on its own port serves clients that ask for it. The installer builds the tools it needs.
- **OpenVPN**: over UDP or TCP (`--openvpn-proto`). The node is its own certificate authority.
- **V2Ray**, **Xray**, **Hysteria2**: proxies on a single port, with no tunnel interface. Xray offers REALITY, which makes the port look like a well-known website; Hysteria2 runs over QUIC with optional Salamander obfuscation. The installer downloads Xray and Hysteria2 itself. For V2Ray, install the `v2ray` program first: the installer stops and says where to get it.

A node serves one protocol. To offer several, run several nodes, each with its own key and address.

## Run it with Docker instead

If everything else on the machine runs in Docker, the project publishes an image for every release at `ghcr.io/trinitystake/dvpnd` (x86_64 only), with the protocol programs included. Section 7 of the project's [operator guide](https://github.com/trinitystake/dvpnd/blob/main/docs/operator.md) has the `docker run` command for each protocol, and `scripts/runner.sh` in the repository wraps them (`setup`, `init`, `start`, `stop`, `status`, `update`).

For WireGuard, AmneziaWG and OpenVPN the project recommends the installer instead: in a container the node still needs the host's kernel modules and network admin rights, and IPv6 needs a change to Docker's settings.

## Next steps

1. [Pass the Health Check](/dvpn-nodes/health-check/overview) to become eligible for rewards.
2. [Set up Node Monitoring](/node-monitoring) to track uptime and performance.
3. Join the [dVPN Node Network group](https://t.me/SentinelNodeNetwork) on Telegram. Questions specific to `dvpnd` go to its [GitHub issues](https://github.com/trinitystake/dvpnd/issues).
