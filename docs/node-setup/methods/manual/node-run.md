---
title: Run the Node
description: Start your node
sidebar_position: 5
---

Running a node can be done in two ways: with or without the autorestart function. If you do not want to use it, you need to use a screen session to detach from the node after launching the docker run command.

:::danger Important
 Before starting the node, remember to send a few DVPN (**50** should suffice) to the operator address otherwise the node will not start!
:::

## Enabling Autorestart Function
To use autorestart function you must have set `backend='test'` on `config.toml` file. This is the easiest way, as it doesn't require the passphrase to be entered every time the node stops for any reason. However, it's worth noting that this solution is not recommended.

### Wireguard

To run the node, use the following command and remember to include the ports you chose in your `config.toml` and `wireguard.toml` files (in this example, replace `<API_PORT>` with `7777` and `<WIREGUARD_PORT>` with `8888` (without the `'<'` and `'>'`):

<details>
<summary>Run Command with Autorestart</summary>
<p>

```bash
docker run -d \
    --name sentinel-dvpn-node \
    --restart unless-stopped \
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

</p>
</details>

### V2Ray

To run the node, use the following command and remember to include the ports you chose in your `config.toml` and `v2ray.toml` files (in this example, replace `<API_PORT>` with `7777` and `<V2RAY_PORT>` with `9999` (without the `'<'` and `'>'`):

<details>
<summary>Run Command with Autorestart</summary>
<p>

```bash
docker run -d \
    --restart unless-stopped \
    --volume "${HOME}/.sentinelnode:/root/.sentinelnode" \
    --publish <API_PORT>:<API_PORT>/tcp \
    --publish <V2RAY_PORT>:<V2RAY_PORT>/tcp \
    sentinel-dvpn-node process start
```

</p>
</details>

## Without Autorestart Function

If you prefer not to initiate your node using the autorestart function, you should employ a screen session to detach from the node after executing the docker run command.

### Create a Screen session

Before running the node, we recommend starting a screen session to run the Docker command. First, install the screen package

```bash
sudo apt-get install screen
```

Open a new screen session with the following command ("dvpn' is the session name)

```bash
screen -t dvpn -S dvpn
```

Use the appropriate command to run the node based on the node type specified in the config.toml file. Wireguard To run the node, use the following command and remember to include the TCP and UDP ports

### Run the Node

Depending on the protocol you have selected, run the corresponding command

**Wireguard**

To run the node, use the following command and remember to include the ports you chose in your `config.toml` and `wireguard.toml` files (in this example, replace `<API_PORT>` with `7777` and `<WIREGUARD_PORT>` with `8888` (without the `'<'` and `'>'`):

<details>
<summary>Run Command without Autorestart</summary>
<p>

```bash
docker run --rm \
    --name sentinel-dvpn-node \
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

</p>
</details>

**V2Ray**

To run the node, use the following command and remember to include the ports you chose in your `config.toml` and `v2ray.toml` files (in this example, replace `<API_PORT>` with `7777` and `<V2RAY_PORT>` with `9999` (without the `'<'` and `'>'`):

<details>
<summary>Run Command without Autorestart</summary>
<p>

```bash
docker run --rm \
    --interactive \
    --tty \
    --volume "${HOME}/.sentinelnode:/root/.sentinelnode" \
    --publish <API_PORT>:<API_PORT>/tcp \
    --publish <V2RAY_PORT>:<V2RAY_PORT>/tcp \
    sentinel-dvpn-node process start
```

</p>
</details>

### Detach from the screen session

Detach from the node screen session

```bash
ctrl+a+d
```

To re-attach to the session type

```bash
screen -x dvpn
```

## Post Node Run Commands

Check if the node is running and visible to everyone. Open your browser and type the following URL

```bash
https://ip_node:tcp_port/status
```

Node logs. You can specify a different number of logs if you need to view more or fewer entries

```bash
docker logs -f -n 100 sentinel-dvpn-node
```

Container list/details

```bash
docker ps -a
```

Restart a node (it stops and starts the node)

```bash
docker restart sentinel-dvpn-node
```

Stop a node

```bash
docker stop sentinel-dvpn-node
```

Start a stopped node

```bash
docker start sentinel-dvpn-node
```

Remove a node

```bash
docker rm -f sentinel-dvpn-node
```