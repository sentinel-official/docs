---
title: Node Configuration
description: config.toml, wireguard.toml, and v2ray.toml
sidebar_position: 4
---

## Node Configuration

## Set the Variables

Before creating the configuration files, set up a few variables by running the following commands:

```bash
# Define application directory
# Define application directory
APP_DIR="${HOME}/.sentinel-dvpnx"

# Get your public IP addresses
MY_IPv4_ADDR=$(curl --silent ipv4.icanhazip.com 2>/dev/null)
MY_IPv6_ADDR=$(curl --silent ipv6.icanhazip.com 2>/dev/null)

REMOTE_ADDRS_FLAGS=()
if [ -n "${MY_IPv4_ADDR}" ]; then REMOTE_ADDRS_FLAGS+=("--node.remote-addrs" \"${MY_IPv4_ADDR}\"); fi
if [ -n "${MY_IPv6_ADDR}" ]; then REMOTE_ADDRS_FLAGS+=("--node.remote-addrs" \"${MY_IPv6_ADDR}\"); fi

# Set Docker volume mapping
VOLUME="${APP_DIR}:/root/.sentinel-dvpnx"

# Set key name for transactions
TX_FROM_NAME="key-1"

# Display configuration for verification
echo "App Directory: $APP_DIR"
echo "Public IPv4: $MY_IPv4_ADDR"
echo "Public IPv6: $MY_IPv6_ADDR"
echo "Key Name: $TX_FROM_NAME"
```

You should see something like this:

```text
App Directory: /home/<you_user>/.sentinel-dvpnx
Public IPv4: <your_ip>
Key Name: key-1
```

## Initialize the Configuration

The following command creates the configuration files, which you can later customise.

Be sure to choose your preferred node type using the `--node.service-type` flag — options are `wireguard`, `v2ray`, or `openvpn`.

```bash
sudo docker run \
  --rm \
  --volume "${VOLUME}" \
  sentinel-dvpnx init \
  --keyring.backend "test" \
  --node.service-type "wireguard" \
  --tx.from-name "${TX_FROM_NAME}" \
  "${REMOTE_ADDRS_FLAGS[@]}"
```

Expected output:

```text
Validating configuration
Writing app config file=/root/.sentinel-dvpnx/config.toml
Initializing PKI with CA certificate and key dir=/root/.sentinel-dvpnx
Issuing certificate and key name=tls
Initializing service force=false type=wireguard
Configuration initialized successfully
```

### The created files are:

Main configuration file: `${APP_DIR}/config.toml`

<details>
<summary>config.toml</summary>
<p>

```bash
# Keyring Configuration
[keyring]

# Storage backend for managing cryptographic keys and sensitive data.
# Different backends offer varying levels of security and OS integration.
# Allowed: file, kwallet, memory, os, pass, test
# Example: "file"
backend = "test"

# Unique identifier name for the keyring instance to distinguish it from other keyrings.
# Used internally to organize and retrieve stored cryptographic keys and credentials.
# Allowed: Any string
# Example: "my-node-keyring"
name = "sentinel"

# Query Configuration
[query]

# Whether to get cryptographic proofs for query results and verify the proof for data authenticity.
# Proofs increase security but add network overhead and processing time.
# Allowed: true, false
# Example: true
prove = false

# Maximum number of retry attempts for failed query operations before giving up.
# More retries improve reliability but may increase response times.
# Allowed: Any positive integer
# Example: 3
retry_attempts = 5

# Waiting period between consecutive retry attempts for failed queries.
# Longer delays reduce network load but increase total response time.
# Allowed: Duration string (e.g., 1s, 5m, 1h)
# Example: "2s"
retry_delay = "1s"

# RPC Configuration
[rpc]

# List of RPC server endpoints for blockchain communication.
# Multiple endpoints provide redundancy and load distribution for improved reliability.
# Allowed: Array of valid URLs
# Example: ["https://rpc.example.com:443", "https://backup-rpc.example.com:443"]
addrs = ["https://rpc.sentinel.co:443"]

# Unique identifier of the blockchain network to connect to.
# Ensures communication with the correct network and prevents accidental connections.
# Allowed: Valid chain identifier string
# Example: "testnet-1"
chain_id = "sentinelhub-2"

# Maximum time to wait for RPC requests before considering them failed.
# Balance between responsiveness and reliability based on network conditions.
# Allowed: Duration string (e.g., 1s, 5m, 1h)
# Example: "10s"
timeout = "5s"

# Transactions Configuration
[tx]

# Blockchain address that has granted authorization to submit transactions on behalf of this node.
# Enables delegated transaction signing for automated operations.
# Allowed: Valid address string
# Example: "sent1yftwk6a4h5fk4xzp3znk6puqj92uxw7jhxwd76"
authz_granter_addr = ""

# Number of retry attempts for broadcasting transactions if initial submission fails.
# Helps overcome temporary network issues but should be limited.
# Allowed: Any positive integer
# Example: 3
broadcast_retry_attempts = 1

# Waiting period between transaction broadcast retry attempts.
# Allows temporary network issues to resolve and prevents overwhelming the blockchain.
# Allowed: Duration string (e.g., 1s, 5m, 1h)
# Example: "10s"
broadcast_retry_delay = "5s"

# Address of an account that automatically pays transaction fees on behalf of this node.
# Enables gasless transactions while the fee granter covers costs.
# Allowed: Valid address string
# Example: "sent1yftwk6a4h5fk4xzp3znk6puqj92uxw7jhxwd76"
fee_granter_addr = ""

# Local account name used to sign and send transactions.
# Must exist in keyring with sufficient balance to cover transaction fees and deposits.
# Allowed: Any string
# Example: "node-operator"
from_name = "key-1"

# Maximum computational resources (gas) that can be consumed by a single transaction.
# Higher limits allow complex operations but cost more in fees.
# Allowed: Any positive integer
# Example: 300000
gas = 200000

# Multiplier applied to estimated gas usage to ensure sufficient allocation.
# Values above 1.0 add safety margin but increase transaction costs.
# Allowed: Any positive decimal number
# Example: 1.25
gas_adjustment = 1.15

# Price per unit of gas for transaction processing.
# Higher prices increase likelihood of fast inclusion but cost more in fees.
# Allowed: Valid price string with denomination
# Example: "0.2udvpn"
gas_prices = "0.1udvpn"

# Maximum attempts to query blockchain for transaction status after submission.
# More attempts improve detection chances but may delay error reporting.
# Allowed: Any positive integer
# Example: 50
query_retry_attempts = 30

# Time interval between consecutive transaction status queries.
# Balance between fast confirmation and blockchain load.
# Allowed: Duration string (e.g., 1s, 5m, 1h)
# Example: "2s"
query_retry_delay = "1s"

# Whether transactions are simulated before execution to estimate gas usage and detect failures.
# Improves success rates and cost accuracy but adds overhead.
# Allowed: true, false
# Example: false
simulate_and_execute = true

# Handshake DNS Configuration
[handshake_dns]

# Enables Handshake DNS daemon for decentralized domain name resolution.
# When enabled, both the node and its clients can resolve Handshake domain names through the decentralized network.
# Allowed: true, false
# Example: true
enable = false

# Number of peer connections to maintain within the Handshake DNS network.
# More peers provide better reliability but consume more network resources.
# Allowed: Any positive integer
# Example: 12
peers = 8

# Node Configuration
[node]

# TCP port for client communication as a single port number or <in_port:out_port> mapping format.
# The mapping format allows the node API to run internally on in_port while being available to clients on out_port.
# Enables clients to connect to the node's API for management and service access.
# Allowed: Single port or port mapping format
# Example: "8080" or "8080:8081"
api_port = "19781"

# Pricing per gigabyte in format <denomination:base_value,quote_value> where base_value is USD price and quote_value is
# equivalent token amount. Blockchain prioritizes base_value and converts to quote_value.
# Multiple denominations separated by semicolons.
# Allowed: Valid prices format string
# Example: "udvpn:0.05,2500000;atom:0.05,10000"
gigabyte_prices = "udvpn:0.0025,12_500_000"

# Pricing per hour in format <denomination:base_value,quote_value> where base_value is USD price and quote_value is
# equivalent token amount. Blockchain prioritizes base_value and converts to quote_value.
# Multiple denominations separated by semicolons.
# Allowed: Valid prices format string
# Example: "udvpn:0.10,5000000;atom:0.10,20000"
hourly_prices = "udvpn:0.005,25_000_000"

# Frequency for evaluating and switching to the best performing RPC endpoint.
# Regular switching ensures optimal blockchain connectivity and service quality.
# Allowed: Duration string (e.g., 1s, 5m, 1h)
# Example: "10m0s"
interval_best_rpc_addr = "5m0s"

# How often the node queries external services to determine its geographic location for service discovery and helping
# clients find nearby nodes.
# Allowed: Duration string (e.g., 1s, 5m, 1h)
# Example: "12h0m0s"
interval_geoip_location = "6h0m0s"

# Frequency for fetching updated pricing data from the specified oracle and publishing it to the blockchain.
# Ensures that on-chain pricing information remains accurate and reflects current market conditions.
# Allowed: Duration string (e.g., 1s, 5m, 1h)
# Example: "1h0m0s"
interval_prices_update = "6h0m0s"

# Frequency for synchronizing session usage data to the blockchain ledger.
# Records payment obligations and service consumption on-chain for transparency.
# Allowed: Duration string (e.g., 1s, 5m, 1h)
# Example: "2h0m0s"
interval_session_usage_sync_with_blockchain = "1h55m0s"

# How often session usage statistics are updated in the local database for real-time billing and monitoring purposes.
# Allowed: Duration string (e.g., 1s, 5m, 1h)
# Example: "5s"
interval_session_usage_sync_with_database = "2s"

# Frequency of validation checks to ensure recorded session usage data is accurate and consistent.
# Helps detect and prevent billing discrepancies.
# Allowed: Duration string (e.g., 1s, 5m, 1h)
# Example: "10s"
interval_session_usage_validate = "5s"

# How often the node verifies that active client sessions are still valid.
# Cleanup process helps free resources from abandoned sessions.
# Allowed: Duration string (e.g., 1s, 5m, 1h)
# Example: "2m0s"
interval_session_validate = "5m0s"

# Frequency for running automated network performance tests to measure bandwidth, latency, and connectivity quality for
# service optimization.
# Allowed: Duration string (e.g., 1s, 5m, 1h)
# Example: "24h0m0s"
interval_speedtest = "168h0m0s"

# How often the node broadcasts its status and service information to the network.
# Regular updates ensure discoverability and accurate client information.
# Allowed: Duration string (e.g., 1s, 5m, 1h)
# Example: "30m0s"
interval_status_update = "55m0s"

# Human-readable display name for this node in network listings and client applications.
# Choose a unique, descriptive name to distinguish your node.
# Allowed: Any string
# Example: "my-node-moniker"
moniker = "<your_node_moniket>"

# Addresses that clients use to reach this node for service connections.
# Can include IP addresses with ports or domain names with ports for flexible client connectivity.
# Allowed: Comma-separated address list
# Example: ["192.168.1.100:8080", "node.example.com:9090"]
remote_addrs = ["123.456.7.8"]

# Type of VPN or proxy service protocol this node provides.
# Each type has different capabilities, security features, and client compatibility.
# Allowed: openvpn, v2ray, wireguard
# Example: "wireguard"
service_type = "wireguard"

# Oracle Configuration
[oracle]

# Oracle provider used to fetch quote prices for base prices and update them on-chain.
# Leave empty to disable oracle functionality entirely.
# Allowed: "coingecko", "osmosis", or empty
# Example: "osmosis"
name = "coingecko"

# CoinGecko Oracle Configuration
[oracle.coingecko]

# API key for authenticating requests to the CoinGecko API.
# Some endpoints may require an API key for higher rate limits or premium features.
# Allowed: Any valid API key string
# Example: "your-coingecko-api-key"
api_key = ""

# Osmosis Oracle Configuration
[oracle.osmosis]

# REST API endpoint for accessing Osmosis market data.
# The oracle queries this endpoint to fetch token prices and liquidity pool information.
# Allowed: Valid URL string
# Example: "https://api.example.com:443"
api_addr = "https://lcd.osmosis.zone:443"

# QoS Configuration
[qos]

# Maximum number of simultaneous peer connections the node will accept.
# Helps prevent resource exhaustion and ensures stable performance under high load.
# Allowed: Any positive integer
# Example: 50
max_peers = 250
```

</p>
</details>

Service-Specific Configurations:
- WireGuard: `${APP_DIR}/wireguard/config.toml`
- V2Ray: `${APP_DIR}/v2ray/config.toml`
- OpenVPN: `${APP_DIR}/openvpn/config.toml`

<details>
<summary>Wireguard</summary>
<p>

```bash
# Specifies the IPv4 address block for routing and networking.
# Used to define the network range that clients will be assigned addresses from for VPN connectivity.
# Allowed: Valid IPv4 CIDR notation
# Example: "10.0.0.1/24"
ipv4_addr = "10.0.0.1/24"

# Specifies the IPv6 address block for routing and networking.
# Used to define the IPv6 network range that clients will be assigned addresses from for VPN connectivity.
# Allowed: Valid IPv6 CIDR notation
# Example: "fd00::/64"
ipv6_addr = ""

# Specifies the outbound network interface for NAT and routing.
# Defines which network interface the VPN traffic should be routed through for internet access.
# Allowed: Valid network interface name
# Example: "eth0"
out_interface = "eth0"

# Port for incoming connections as a single port number or "in_port:out_port" mapping format.
# The mapping format allows the VPN service to run internally on in_port while being available to clients on out_port.
# Typically, UDP for WireGuard protocol.
# Allowed: Single port or port mapping format
# Example: "51820" or "51820:51820"
port = "25068"

# Specifies the private key for WireGuard encryption.
# The cryptographic private key used for establishing secure connections with clients.
# Allowed: Valid WireGuard private key
# Example: "AMuDADXXc5S1b8J6wxKhX29AiNKgNej6k6/Ol+Fof0g="
private_key = "# Example: "AMuDADXXc5S1b8J6wxKhX29AiNKgNej6k6/Ol+Fof0g="
```

</p>
</details>

<details>
<summary>V2Ray</summary>
<p>

```bash
# Port for incoming connections as a single port number or "in_port:out_port" mapping format.
# The mapping format allows the V2Ray service to run internally on in_port while being available to clients on out_port.
# Must be unique and not conflict with other services on the same machine.
# Allowed: Single port or port mapping format
# Example: "10086" or "10086:10086"

# Proxy protocol type for communication on the inbound connection.
# Determines the protocol used for establishing connections with clients connecting to this V2Ray instance.
# Allowed: vmess, vless
# Example: "vmess"

# Transport protocol type for handling incoming requests and data transmission.
# Determines the underlying transport mechanism used for communication between client and server.
# Allowed: domainsocket, gun, grpc, http, mkcp, quic, tcp, websocket
# Example: "tcp"

# Transport Security setting for the inbound connection encryption.
# Determines whether the connection uses encryption and what type of security protocol is applied.
# Allowed: none, tls
# Example: "tls"

[[inbounds]]
port = "54556"
proxy_protocol = "vmess"
transport_protocol = "quic"
transport_security = "tls"

[[inbounds]]
port = "13860"
proxy_protocol = "vless"
transport_protocol = "grpc"
transport_security = "none"
```

</p>
</details>

<details>
<summary>OpenVPN</summary>
<p>

```bash
# Specifies the IPv4 address block for routing and networking.
# Used to define the network range that clients will be assigned addresses from for VPN connectivity.
# Allowed: Valid IPv4 CIDR notation
# Example: "10.8.0.1/24"
ipv4_addr = "10.247.176.1/24"

# Specifies the IPv6 address block for routing and networking.
# Used to define the IPv6 network range that clients will be assigned addresses from for VPN connectivity.
# Allowed: Valid IPv6 CIDR notation
# Example: "fd00::/64"
ipv6_addr = ""

# Specifies the outbound network interface for NAT and routing.
# Defines which network interface the VPN traffic should be routed through for internet access.
# Allowed: Valid network interface name
# Example: "eth0"
out_interface = "eth0"

# Port for incoming connections as a single port number or "in_port:out_port" mapping format.
# The mapping format allows the server to run internally on in_port while being available to clients on out_port.
# Typically, UDP or TCP for OpenVPN protocol.
# Allowed: Single port or port mapping format
# Example: "1194" or "1194:1194"
port = "11608"

# Specifies the transport protocol for communication.
# Determines whether the service uses UDP for better performance or TCP for better reliability through firewalls.
# Allowed: udp, tcp
# Example: "udp"
protocol = "udp"
```

</p>
</details>


## Add a Mnemonic

Now, add the account key specified in your `config.toml` file:

```bash
sudo docker run \
  --rm \
  --volume "${VOLUME}" \
  --interactive \
  --tty \
  sentinel-dvpnx keys add "${TX_FROM_NAME}"
```

You can either enter your existing BIP-39 mnemonic or generate a new one by pressing Enter.
You’ll then be prompted for an optional passphrase (press Enter again to skip).

This will generate an operator address (starting with `sent1`) and a mnemonic phrase.
Write the mnemonic down and store it securely, **you’ll need it to recover your key**.

<details>
<summary>Output</summary>
<p>

```bash
Enter your BIP-39 mnemonic, or hit enter to generate one:

Enter your BIP-39 passphrase, or hit enter to use the default:

####################################################################
WARNING: YOU MUST SAVE THE FOLLOWING MNEMONIC SECURELY!
THIS MNEMONIC IS REQUIRED TO RECOVER YOUR KEY.
IF YOU LOSE THIS MNEMONIC, YOU WILL NOT BE ABLE TO RECOVER YOUR KEY.
####################################################################

address: sent1x4faeeu8lqjnnjywa89j9xv34h0wm2yre96uc
mnemonic: kind smart guide build join dutch stairs chat frown camp capital glory allow van purity monster gauge impact title hand erupt surface scale december
name: key-1
pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AvOE9Fxzmtb5RMKQDvpBE3K1xih5qVPWshRWHth8Awfu"}'
type: local

Key created successfully
```

</p>
</details>


## Enable Firewall Ports

### Detect Required Ports Automatically

You can automatically find all the ports your node needs with:

```bash
# Automatically detect and configure required ports
PUBLISH_PORT_ARGS=$(find "${APP_DIR}" -name "config.toml" -exec tomljson {} \; |
  jq -sr '[.[] | .. | objects | to_entries[] | select(.key == "port" or (.key | endswith("_port"))) | .value] |
  flatten | unique | map("-p \(.):\(.)/tcp -p \(.):\(.)/udp") | join(" ")')

# Verify port configuration
echo "Port arguments: $PUBLISH_PORT_ARGS"
```

Example output:

```text
Port arguments: -p 11608:11608/tcp -p 11608:11608/udp -p 13860:13860/tcp -p 13860:13860/udp -p 19781:19781/tcp -p 19781:19781/udp -p 25068:25068/tcp -p 25068:25068/udp -p 54556:54556/tcp -p 54556:54556/udp
```

If you’re using zsh, also run:

```bash
PUBLISH_PORT_ARGS=("${(@s/ /)PUBLISH_PORT_ARGS}")
```

### Open the Ports with UFW

Once you have the required ports, open them in your firewall:

```bash
sudo ufw allow 11608,13860,19781,25068,54556/tcp
sudo ufw allow 11608,13860,19781,25068,54556/udp
```

## Enable Port Forwarding (for Residential Nodes)

If you’re running your node from home, you’ll need to enable port forwarding on your router so others can connect to it.

In your router’s WAN settings, add entries like this:

```bash
Name            ProtocolWAN     Port                    LAN port                Destination IP
TCP_PORT        TCP             <tcp_port>              <tcp_port>              your_local_ip
WIREGUARD_PORT  UDP             <wireguard_udp_port>    <wireguard_udp_port>    your_local_ip
V2RAY_PORT      TCP             <v2ray_tcp_port>        <v2ray_tcp_port>        your_local_ip
```
