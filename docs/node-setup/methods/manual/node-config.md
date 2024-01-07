---
title: Node Configuration
description: config.toml, wireguard.toml, and v2ray.toml
sidebar_position: 4
---

# Node Configuration

During the procedure, when you are asked to fill some fields as country or e-mail, you can leave them blank.

## Configuration File

Initialize the application configuration (the below command creates and populate `config.toml` file)

```bash
sudo docker run --rm \
    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \
    sentinel-dvpn-node process config init
```

Open the configuration `config.toml` file

```bash
sudo nano ${HOME}/.sentinelnode/config.toml
```

Edit the required fields

:::danger Important
Do not copy and paste the entire code block as it may disrupt the configuration file!!! Only copy the necessary fields or add them manually!
:::

<details>
<summary>config.toml</summary>
<p>

```bash
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
rpc_addresses = "https://rpc.sentinel.co:443,https://rpc.sentinel.quokkastake.io:443,https://rpc.trinityvalidator.com"
# Find below some alternative ones
# https://rpc.mathnodes.com:443
# https://rpc-sentinel.whispernode.com:443
# https://rpc.sentinel.chaintools.tech:443
# https://sentinel-rpc.publicnode.com:443

# Timeout seconds for querying the data from the RPC server
rpc_query_timeout = 10

# Timeout seconds for broadcasting the transaction through RPC server
rpc_tx_timeout = 30

# Calculate the transaction fee by simulating it
simulate_and_execute = true

[handshake]
# Enable Handshake DNS resolver (if you use v2ray set enable = false)
enable = true

# Number of peers
peers = 8

[keyring]
# Underlying storage mechanism for keys
backend = "file"
# To run the node with autorestart function, write the word "test". Alternatively, you can use the word "file"

# Name of the key with which to sign
from = "operator"
# replace "operator" with your preferred name, but ensure that the value is NOT left empty

[node]
# Time interval between each set_sessions operation
interval_set_sessions = "10s"

# Time interval between each update_sessions transaction
interval_update_sessions = "1h55m0s"

# Time interval between each set_status transaction
interval_update_status = "55m0s"

# IPv4 address to replace the public IPv4 address with
ipv4_address = ""

# API listen-address (tcp port)
listen_on = "0.0.0.0:<tcp_port>" #for example 0.0.0.0:7777
# this is the TCP port. You can change and ensure to write it down as needed for later use

# Name of the node (replace "your_node_name" with your desired name)
moniker = "your_node_name"

# Prices for one gigabyte of bandwidth provided
gigabyte_prices = "52573ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,9204ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1180852ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,122740ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,15342624udvpn"

# Prices for one hour
hourly_prices = "18480ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,770ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1871892ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,18897ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,13557200udvpn"

# Public URL of the node
remote_url = "https://<ip_node>:<tcp_port>"
# replace ip_node with your host ip and tcp_port with 7777
# example: https://123.456.78.90:7777

# Type of node (you can choose between wireguard and v2ray)
type = "wireguard"

# Limit max number of concurrent peers
[qos]
max_peers = 250
```

</p>
</details>

The fields `gigabyte_prices` and `hourly_prices` **must** encompass the entire string, including the IBC coins as well separated by commas. Merely incorporating the udvpn price will not suffice. Please refer to the list below for the supported IBC coins:

```bash
ATOM
9204ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477

OSMOSIS
122740ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518

SECRET
52573ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8

DECENTR
1180852ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
```

## Node Type

Depending on the node type you specified in the `config.toml` file, use the corresponding configuration settings.

### Wireguard

Initialize the WireGuard configuration

```bash
sudo docker run --rm \
    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \
    sentinel-dvpn-node process wireguard config init
```

Open the `wireguard.toml` file

```bash
sudo nano ${HOME}/.sentinelnode/wireguard.toml
```

Take note of the WireGuard port

<details>
<summary>wireguard.toml</summary>
<p>

```bash
# Name of the network interface
interface = "wg0"

# Port number to accept the incoming connections
listen_port = <wireguard_udp_port> #for example listen_port = 8888
# this is the WireGuard UDP port, you can change it and write it down as you need it later

# Server private key
private_key = "TwkdSO6cax3Sbo06mvmMyd2X452usVeVDTK/hdkfOmI="
```

</p>
</details>

### V2Ray

Initialize the V2Ray configuration

```bash
sudo docker run --rm \
    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \
    sentinel-dvpn-node process v2ray config init
```

Open the `v2ray.toml` file

```bash
sudo nano ${HOME}/.sentinelnode/v2ray.toml
```

Take note of the V2Ray port

<details>
<summary>v2ray.toml</summary>
<p>

```bash
[vmess]
# Port number to accept the incoming connections
listen_port = <v2ray_tcp_port> #for example 9999
# this is the V2Ray TCP port, you can change it and write it down as you need it later

# Name of the transport protocol
transport = "grpc"
```

</p>
</details>

## Add a Mnemonic

Add an account key (the one in `config.toml` file)

```bash
docker run --rm \
    --interactive \
    --tty \
    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \
    sentinel-dvpn-node process keys add
```

if you already have a mnemonic and simply want to recover your account, type this

```bash
docker run --rm \
    --interactive \
    --tty \
    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \
    sentinel-dvpn-node process keys add --recover
```

You will be prompet to select a passphrase

You will be provided with an operator address (sent1), a node address (sentnode1), and a mnemonic phrase that you should write down and store in a secure location.

## Move created TLS keys

```bash
sudo mv ${HOME}/tls.crt ${HOME}/.sentinelnode/tls.crt && \
sudo mv ${HOME}/tls.key ${HOME}/.sentinelnode/tls.key

sudo chown root:root ${HOME}/.sentinelnode/tls.crt && \
sudo chown root:root ${HOME}/.sentinelnode/tls.key
```

## Enable Firewall Ports

Enable TCP port on Firewall (check file `config.toml`)

```bash
sudo ufw allow <tcp_port>/tcp #for example sudo ufw allow 7777/tcp
```

**(Wireguard)** Enable UDP port on Firewall (check file `wireguard.toml`)

```bash
sudo ufw allow <udp_port>/udp #for example sudo ufw allow 8888/tcp
```

**(V2RAY)** Enable TCP port on Firewall (check file `v2ray.toml`)

```bash
sudo ufw allow <tcp_port>/tcp #for example sudo ufw allow 9999/tcp
```

## Enable Port Forwarding (for Residential Nodes)

If you're hosting your node from home, make sure to enable port forwarding on your router to allow external access. To do this, access your router settings and navigate to WAN services, then add the following two IPv4 Port forwarding table entries:

```bash
Name            ProtocolWAN     Port    LAN port    Destination IP
TCP_PORT        TCP             7777    7777        your_local_ip
WIREGUARD_PORT  UDP             8888    8888        your_local_ip
V2RAY_PORT      TCP             9999    9999        your_local_ip
```
