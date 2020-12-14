# Start

## Step 1 - Add/Recover an account key

### Add a new account key

``` sh
docker run --rm \
    --volume ${HOME}/.sentinel:/root/.sentinel \
    node sentinel-dvpn-node keys add KEY_NAME
```

### Recover an account key

``` sh
docker run --rm \
    --volume ${HOME}/.sentinel:/root/.sentinel \
    node sentinel-dvpn-node keys add KEY_NAME --recover MNEMONIC
```

## Step 2 - Initialize/Edit the configuration

1. Initialize the application configuration

    ``` sh
    docker run --rm \
        --volume ${HOME}/.sentinel:/root/.sentinel \
        node sentinel-dvpn-node config init
    ```

2. Edit the configuration file _${HOME}/.sentinel/node/config.toml_ if required

    Contents of the sample configuration file

    ``` text
    [chain]
    fees = ""
    gas_adjustment = 0
    gas = 100000
    gas_prices = "0.01tsent"
    id = "sentinel-turing-3a"
    rpc_address = "https://rpc.turing.sentinel.co:443"
    trust_node = false

    [handshake]
    enable = true
    peers = 8

    [node]
    from = "key_1"
    interval_sessions = 480000000000
    interval_status = 240000000000
    listen_on = "127.0.0.1:8585"
    moniker = "1.wireguard"
    price = "50tsent"
    provider = ""
    remote_url = "https://1.wireguard.sentinel.co:8585"
    type = "WireGuard"
    ```

3. Initialize the WireGuard configuration

    ``` sh
    docker run --rm \
        --volume ${HOME}/.sentinel:/root/.sentinel \
        node sentinel-dvpn-node wireguard config init
    ```

4. Edit the configuration file _${HOME}/.sentinel/node/wireguard.toml_ if required

    Contents of the sample configuration file

    ``` text
    device = "wg0"
    listen_port = 60299
    private_key = "O9efCDKZO8hS0U+4iZWkZp6fyfU3Kb3ReytcREFq3s0="
    ```

## Step 3 - Move created TLS keys

``` sh
mv ${HOME}/tls.crt ${HOME}/.sentinel/node/tls.crt
mv ${HOME}/tls.key ${HOME}/.sentinel/node/tls.key
```

## Step 4 - Run the node

``` sh
docker run --rm \
    --volume ${HOME}/.sentinel:/root/.sentinel \
    --cap-add=NET_ADMIN \
    --publish 8585:8585/tcp \
    --publish 60299:60299/udp \
    --sysctl net.ipv4.ip_forward=1 \
    --sysctl net.ipv6.conf.all.forwarding=1 \
    --sysctl net.ipv6.conf.all.disable_ipv6=0 \
    --sysctl net.ipv6.conf.default.forwarding=1 \
    node sentinel-dvpn-node start
```
