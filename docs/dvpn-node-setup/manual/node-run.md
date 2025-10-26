---
title: Run the Node
description: Start your node
sidebar_position: 5
---

:::danger Important
 Before starting the node, remember to send a few P2P (**50** should suffice) to the operator address otherwise the node will not start!
 To accomplish this, import the seed you generated or recovered in [**this step**](/dvpn-node-setup/manual/node-config#add-a-mnemonic) into a wallet such as [**Leap**](/get-started/wallets/leap/import-seed) or [**Keplr**](/get-started/wallets/keplr/import-seed).
 
 If you are running your node for testing purposes you can use the [**Node Faucet**](https://busurnode.com/network/sentinel/faucet)
:::

## Run the Node Container

Start your node by running:

```bash
docker run -d \
  --rm \
  --cap-drop ALL \
  --cap-add NET_ADMIN \
  --cap-add NET_RAW \
  --cap-add SYS_MODULE \
  --device /dev/net/tun \
  --sysctl net.ipv4.ip_forward=1 \
  --sysctl net.ipv6.conf.all.disable_ipv6=0 \
  --sysctl net.ipv6.conf.all.forwarding=1 \
  --sysctl net.ipv6.conf.default.forwarding=1 \
  --volume "${VOLUME}" \
  --name "dvpnx" \
  --interactive \
  --tty \
  --sig-proxy=false \
  ${PUBLISH_PORT_ARGS} \
  sentinel-dvpnx start
```

## After Starting the Node

Check if the node is running and visible to everyone. Open your browser and type the following URL

```bash
https://ip_node:tcp_port
```

Node logs. You can specify a different number of logs if you need to view more or fewer entries

```bash
docker logs -f -n 100 dvpnx
```

<details>
<summary>Logs</summary>
<p>

```bash
2025-10-26T04:55:44Z INF Validating configuration
2025-10-26T04:55:44Z INF Setting up node
2025-10-26T04:55:44Z INF Setting up context
2025-10-26T04:55:44Z INF Initializing context
2025-10-26T04:55:44Z INF Setting up blockchain client
2025-10-26T04:55:44Z INF Initializing blockchain client keyring.backend=test keyring.name=sentinel rpc.addr=https://rpc.sentinel.co:443 rpc.chain_id=sentinelhub-2 tx.from_name=key-1
2025-10-26T04:55:44Z INF Setting up database
2025-10-26T04:55:44Z INF Initializing database file=/root/.sentinel-dvpnx/data.db
2025-10-26T04:55:44Z INF Setting up GeoIP client
2025-10-26T04:55:44Z INF Initializing GeoIP client
2025-10-26T04:55:44Z INF Setting up oracle client
2025-10-26T04:55:44Z INF Initializing oracle client name=coingecko
2025-10-26T04:55:44Z INF Setting up service
2025-10-26T04:55:44Z INF Initializing service type=wireguard
2025-10-26T04:55:44Z INF Checking service status
2025-10-26T04:55:44Z INF Setting up account addr
2025-10-26T04:55:44Z INF Retrieving addr for key name=key-1
2025-10-26T04:55:44Z INF Querying account information addr=sent1x4faeeu8lqjnnjywa89j9xv34h0wm2yre96uc
2025-10-26T04:55:45Z INF Setting up scheduler
2025-10-26T04:55:45Z INF Initializing scheduler
2025-10-26T04:55:45Z INF Registering scheduler worker interval=5m0s name=best_rpc_addr
2025-10-26T04:55:45Z INF Registering scheduler worker interval=6h0m0s name=geoip_location
2025-10-26T04:55:45Z INF Registering scheduler worker interval=6h0m0s name=node_prices_update
2025-10-26T04:55:45Z INF Registering scheduler worker interval=55m0s name=node_status_update
2025-10-26T04:55:45Z INF Registering scheduler worker interval=1h55m0s name=session_usage_sync_with_blockchain
2025-10-26T04:55:45Z INF Registering scheduler worker interval=2s name=session_usage_sync_with_database
2025-10-26T04:55:45Z INF Registering scheduler worker interval=5s name=session_usage_validate
2025-10-26T04:55:45Z INF Registering scheduler worker interval=5m0s name=session_validate
2025-10-26T04:55:45Z INF Registering scheduler worker interval=168h0m0s name=speedtest
2025-10-26T04:55:45Z INF Setting up API server
2025-10-26T04:55:45Z INF Initializing API server
2025-10-26T04:55:45Z INF Starting node
2025-10-26T04:55:45Z INF Node already registered addr=sentnode1x4faeeu8lqjnnjywa89j9xv34h0wm2y541aum2
2025-10-26T04:55:45Z INF Updating node details gigabyte_prices=udvpn:0.002500000000000000,12500000 hourly_prices=udvpn:0.005000000000000000,25000000 remote_addrs=["123.456.7.8:19781"]
2025-10-26T04:55:50Z INF Node details updated successfully addr=sentnode1x4faeeu8lqjnnjywa89j9xv34h0wm2y541aum2
2025-10-26T04:55:50Z INF Starting service
2025-10-26T04:55:50Z INF Starting scheduler
2025-10-26T04:55:50Z INF Starting API server
2025-10-26T04:55:50Z INF Node started successfully
```

</p>
</details>

To detach from logs, just press CTRL+C on your keyboard

Container list/details

```bash
docker ps -a
```

Restart a node (it stops and starts the node)

```bash
docker restart dvpnx
```

Stop a node

```bash
docker stop dvpnx
```

Start a stopped node

```bash
docker start dvpnx
```

Remove a node

```bash
docker rm -f dvpnx
```