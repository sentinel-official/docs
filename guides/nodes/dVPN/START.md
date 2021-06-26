# Start

## Step 1 - Initialize/Edit the configuration

1. Initialize the application configuration

    ``` sh
    docker run --rm \
        --volume ${HOME}/.sentinelnode:/root/.sentinelnode \
        sentinel-dvpn-node process config init
    ```

2. Edit the configuration file _${HOME}/.sentinelnode/config.toml_ if required

    Contents of the sample configuration file

    __DO NOT USE__

    ``` text
    [chain]
    gas_adjustment = 1.05
    gas = 200000
    gas_prices = "0.1udvpn"
    id = "sentinelhub-2"
    rpc_address = "https://rpc.sentinel.co:443"
    simulate_and_execute = true

    [handshake]
    enable = true
    peers = 8

    [keyring]
    backend = "file"
    from = "1.wireguard"

    [node]
    interval_set_sessions = "2m0s"
    interval_update_sessions = "1h48m0s"
    interval_update_status = "54m0s"
    listen_on = "0.0.0.0:8585"
    moniker = "1.wireguard"
    price = "250udvpn"
    provider = ""
    remote_url = "https://1.wireguard.sentinel.co"
    ```

3. Initialize the WireGuard configuration

    ``` sh
    docker run --rm \
        --volume ${HOME}/.sentinelnode:/root/.sentinelnode \
        sentinel-dvpn-node process wireguard config init
    ```

4. Edit the configuration file _${HOME}/.sentinelnode/wireguard.toml_ if required

    Contents of the sample configuration file

    __DO NOT USE__

    ``` text
    device = "wg0"
    listen_port = 60299
    private_key = "O9efCDKZO8hS0U+4iZWkZp6fyfU3Kb3ReytcREFq3s0="
    ```

## Step 2 - Add/Recover an account key

### Add a new account key

``` sh
docker run --rm \
    --interactive \
    --tty \
    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \
    sentinel-dvpn-node process keys add <KEY_NAME>
```

### Recover an account key

``` sh
docker run --rm \
    --interactive \
    --tty \
    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \
    sentinel-dvpn-node process keys add --recover <KEY_NAME>
```

## Step 3 - Move created TLS keys

``` sh
mv ${HOME}/tls.crt ${HOME}/.sentinelnode/tls.crt
mv ${HOME}/tls.key ${HOME}/.sentinelnode/tls.key
```

## Step 4 - Run the node

``` sh
docker run --rm \
    --interactive \
    --tty \
    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \
    --volume /lib/modules:/lib/modules \
    --cap-drop=ALL \
    --cap-add=NET_ADMIN \
    --cap-add=NET_RAW \
    --cap-add=SYS_MODULE \
    --publish <API_PORT>:<API_PORT>/tcp \
    --publish <WIREGUARD_PORT>:<WIREGUARD_PORT>/udp \
    --sysctl net.ipv4.ip_forward=1 \
    --sysctl net.ipv6.conf.all.disable_ipv6=0 \
    --sysctl net.ipv6.conf.all.forwarding=1 \
    --sysctl net.ipv6.conf.default.forwarding=1 \
    sentinel-dvpn-node process start
```
