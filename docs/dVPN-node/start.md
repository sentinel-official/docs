# Start

???+ note "Note"
    The account must have some $DVPN to start the node

???+ warning "Warning"
    Please write the Mnemonic phrase in a safe place. It is the only way to recover your account.

## With script

1. Download the script

    ``` sh
    wget -O "${HOME}/dvpn-node.sh" https://scripts.sentinel.co/dvpn-node.sh
    ```

2. Initialize the config and keys

    ???+ tip "Tip"
        Pass flag `--force` for forcing the initialization process in case of error

    ``` sh
    bash "${HOME}/dvpn-node.sh" init all
    ```

3. Start the node

    ``` sh
    bash "${HOME}/dvpn-node.sh" start --attach
    ```

## Without script

### Initialize the config

1. Initialize the application config

    ``` sh
    docker run --rm \
        --volume "${HOME}/.sentinelnode:/root/.sentinelnode" \
        sentinel-dvpn-node process config init
    ```

2. Edit the config file _${HOME}/.sentinelnode/config.toml_ if required

    ??? example "Example"
        ``` text
        [chain]
        gas = 200000
        gas_adjustment = 1.05
        gas_prices = "0.1udvpn"
        id = "sentinelhub-2"
        rpc_addresses = "https://rpc.sentinel.co:443,https://rpc.sentinel.quokkastake.io:443,https://sentinel-rpc.badgerbite.io:443"
        rpc_query_timeout = 10
        rpc_tx_timeout = 30
        simulate_and_execute = true

        [handshake]
        enable = true
        peers = 8

        [keyring]
        backend = "file"
        from = "operator"

        [node]
        interval_set_sessions = "10s"
        interval_update_sessions = "1h55m0s"
        interval_update_status = "55m0s"
        ipv4_address = ""
        listen_on = "0.0.0.0:8585"
        moniker = "Example"
        price = "1000000udvpn"
        provider = ""
        remote_url = "https://135.24.97.86:8585"
        type = "wireguard"

        [qos]
        max_peers = 250
        ```

3. Initialize the V2Ray config

    ``` sh
    docker run --rm \
        --volume "${HOME}/.sentinelnode:/root/.sentinelnode" \
        sentinel-dvpn-node process v2ray config init
    ```

4. Edit the config file _${HOME}/.sentinelnode/v2ray.toml_ if required

    ??? example "Example"
        ``` text
        [vmess]
        listen_port = 60299
        transport = "grpc"
        ```

5. Initialize the WireGuard config

    ``` sh
    docker run --rm \
        --volume "${HOME}/.sentinelnode:/root/.sentinelnode" \
        sentinel-dvpn-node process wireguard config init
    ```

6. Edit the config file _${HOME}/.sentinelnode/wireguard.toml_ if required

    ??? example "Example"
        ``` text
        device = "wg0"
        listen_port = 60299
        private_key = "O9efCDKZO8hS0U+4iZWkZp6fyfU3Kb3ReytcREFq3s0="
        ```

### Add an account key

???+ tip "Tip"
    Pass flag `--recover` to recover the key with Mnemonic

``` sh
docker run --rm \
    --interactive \
    --tty \
    --volume "${HOME}/.sentinelnode:/root/.sentinelnode" \
    sentinel-dvpn-node process keys add
```

Get the list of keys by executing the below command

``` sh
docker run --rm \
    --interactive \
    --tty \
    --volume "${HOME}/.sentinelnode:/root/.sentinelnode" \
    sentinel-dvpn-node process keys list
```

### Move created TLS keys

``` sh
mv "${HOME}/tls.crt" "${HOME}/.sentinelnode/tls.crt" && \
mv "${HOME}/tls.key" "${HOME}/.sentinelnode/tls.key"

sudo chown root:root "${HOME}/.sentinelnode/tls.crt" && \
sudo chown root:root "${HOME}/.sentinelnode/tls.key"
```

### Run the node

Use software like [GNU Screen](https://www.gnu.org/software/screen "GNU Screen")
or [Tmux](https://github.com/tmux/tmux/wiki "Tmux") to run the process in the background

???+ tip "Tip"
    - The `<API_PORT>` is the port number set for the field `remote_url` under the section `node` in the application config
    - The `<V2RAY_VMESS_PORT>` is the value set for the field `listen_port` under the secion `vmess` in the V2Ray config
    - The `<WIREGUARD_PORT>` is the value set for the field `listen_port` in the WireGaurd config

#### V2Ray

``` sh
docker run --rm \
    --interactive \
    --tty \
    --volume "${HOME}/.sentinelnode:/root/.sentinelnode" \
    --publish <API_PORT>:<API_PORT>/tcp \
    --publish <V2RAY_VMESS_PORT>:<V2RAY_VMESS_PORT>/tcp \
    sentinel-dvpn-node process start
```

#### WireGuard

``` sh
docker run --rm \
    --interactive \
    --tty \
    --volume /lib/modules:/lib/modules \
    --volume "${HOME}/.sentinelnode:/root/.sentinelnode" \
    --cap-drop ALL \
    --cap-add NET_ADMIN \
    --cap-add NET_BIND_SERVICE \
    --cap-add NET_RAW \
    --cap-add SYS_MODULE \
    --sysctl net.ipv4.ip_forward=1 \
    --sysctl net.ipv6.conf.all.disable_ipv6=0 \
    --sysctl net.ipv6.conf.all.forwarding=1 \
    --sysctl net.ipv6.conf.default.forwarding=1 \
    --publish <API_PORT>:<API_PORT>/tcp \
    --publish <WIREGUARD_PORT>:<WIREGUARD_PORT>/udp \
    sentinel-dvpn-node process start
```
