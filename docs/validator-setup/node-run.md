---
title: Run the Full Node
sidebar_position: 5
---

# Run the Full Node

When setting up a validator and joining a blockchain network, there are typically two main states that a node needs to synchronize with the network: Block Sync and State Sync. In this guide we will cover `State Sync`, which is the preferable approach.

## State Sync

State Sync is the process of downloading the current state of the blockchain. When a validator joins a network, it needs to download the current state of the blockchain in order to validate new blocks. The current state includes all account balances, contract code, and contract storage. State sync is a more efficient way to get up to speed with the current state of the network, as it only downloads the necessary information rather than downloading the entire blockchain.

State Sync is used to perform the following tasks that we will see in detail:
- Bootstrap a node
- Free up space on your hard disk

### Bootstrap The Node

To bootstrap your node with state sync, follow the steps below.

Create the file `state-sync.sh`

```bash
sudo nano state-sync.sh
```

Add the following code in it (to add your own or favourite RPC check this list [here](https://cosmos.directory/sentinel/nodes)):

<details>
<summary>state-sync.sh</summary>
<p>

```bash
#!/bin/bash

SNAP_RPC="https://rpc.sentinel.co:443"
SNAP_RPC2="https://rpc-sentinel.whispernode.com:443"

LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \
BLOCK_HEIGHT=$((LATEST_HEIGHT - 1000)); \
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ; \
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"$SNAP_RPC,$SNAP_RPC2\"| ; \
s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ; \
s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"|" $HOME/.sentinelhub/config/config.toml
```

</p>
</details>

This script ensures that the new synchronization process starts from a point slightly before the absolute latest block. This provides a margin of safety and avoid potential synchronization issues that might occur due to due network delays or other factors.

Make the file executable

```bash
chmod +x state-sync.sh
```

Launch the script

```bash
./state-sync.sh
```

Start the node WITHOUT using systemd

```bash
sentinelhub start
```

Let the node sync fully and periodically check with this command

```bash
curl --silent "http://localhost:26657/status" | jq -S
```

if `result.sync_info.catching_up` value is `false` that means the node is synchronized, so you can now stop the node by pressing `CTRL+C`

Start the node WITH systemd

```bash
sudo systemctl start sentinelhub
```

Use this command to check logs in real time

```bash
sudo journalctl -u sentinelhub.service -f --output=cat
```

If everything goes well, your node should start syncing within 10 minutes.

### Free up space

This step should be performed regularly, as the hard disk tends to fill up over time. It is advisable to establish a monitoring structure to determine when it is necessary to free up space.

To get started, edit the `state-sync.sh` file and and include the final three lines

<details>
<summary>state-sync.sh</summary>
<p>

```bash
#!/bin/bash

SNAP_RPC="https://rpc.sentinel.co:443"
SNAP_RPC2="https://rpc-sentinel.whispernode.com:443"

LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \
BLOCK_HEIGHT=$((LATEST_HEIGHT - 1000)); \
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ; \
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"$SNAP_RPC,$SNAP_RPC2\"| ; \
s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ; \
s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"|" $HOME/.sentinelhub/config/config.toml

mv $HOME/.sentinelhub/data $HOME/.sentinelhub/data-old
mkdir -p $HOME/.sentinelhub/data
cp $HOME/.sentinelhub/data-old/priv_validator_state.json $HOME/.sentinelhub/data
```

</p>
</details>

Stop the node

```bash
sudo systemctl stop sentinelhub.service
```

Launch the state-sync script

```bash
./state-sync.sh
```

Start the node

```bash
sudo systemctl start sentinelhub.service
```

Use this command to check logs in real time

```bash
sudo journalctl -u sentinelhub.service -f --output=cat
```

If everything goes well, your node will commence syncing and should complete the process in approximately 10-15 minutes.

Once your node is fully synced, you may safely delete the `data-old/` folder.

```bash
sudo rm -fr ~/.sentinelhub/data-old
```