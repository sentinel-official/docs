# Start

## Initialize the configuration

1. Initialize the application configuration

    ``` sh
    docker run --rm \
        --volume ${HOME}/.sentinelnode:/root/.sentinelnode \
        sentinel-dvpn-node process config init
    ```

2. Edit the configuration file _${HOME}/.sentinelnode/config.toml_ if required

    ??? example "Example"

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
        from = "example"

        [node]
        interval_set_sessions = "2m0s"
        interval_update_sessions = "1h55m0s"
        interval_update_status = "55m0s"
        listen_on = "0.0.0.0:8585"
        moniker = "Example"
        price = "1000000udvpn"
        provider = ""
        remote_url = "https://135.24.97.86:8585"
        ```

3. Initialize the WireGuard configuration

    ``` sh
    docker run --rm \
        --volume ${HOME}/.sentinelnode:/root/.sentinelnode \
        sentinel-dvpn-node process wireguard config init
    ```

4. Edit the configuration file _${HOME}/.sentinelnode/wireguard.toml_ if required

    ??? example "Example"

        ``` text
        device = "wg0"
        listen_port = 60299
        private_key = "O9efCDKZO8hS0U+4iZWkZp6fyfU3Kb3ReytcREFq3s0="
        ```

## Add an account key

``` sh
docker run --rm \
    --interactive \
    --tty \
    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \
    sentinel-dvpn-node process keys add
```

Pass flag `--recover` to recover the key with Mnemonic

???+ warning "Warning"

    Please write the Mnemonic phrase in a safe place. It is the only way to recover your account.

???+ note "Note"

    The account must have some $DVPNs to start the node

You can get the list of keys by executing the below command

``` sh
docker run --rm \
    --interactive \
    --tty \
    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \
    sentinel-dvpn-node process keys list
```

## Move created TLS keys

``` sh
mv ${HOME}/tls.crt ${HOME}/.sentinelnode/tls.crt && \
mv ${HOME}/tls.key ${HOME}/.sentinelnode/tls.key

sudo chown root:root ${HOME}/.sentinelnode/tls.crt && \
sudo chown root:root ${HOME}/.sentinelnode/tls.key
```

## Run the node

Use software like [GNU Screen](https://www.gnu.org/software/screen "GNU Screen")
or [Tmux](https://github.com/tmux/tmux/wiki "Tmux") to run the process in the background

``` sh
docker run --rm \
    --interactive \
    --tty \
    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \
    --volume /lib/modules:/lib/modules \
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

???+ tip "Tip"

    The `<API_PORT>` is the port number set for the field `remote_url` under the section `node` in the application configuration

???+ tip "Tip"

    The `<WIREGUARD_PORT>` is the value set for the field `listen_port` in the WireGaurd configuration
