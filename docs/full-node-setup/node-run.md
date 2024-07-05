---
title: Run the Full Node
sidebar_position: 5
---

# Run the Full Node

When setting up a validator and joining a blockchain network, there are typically two main states that a node needs to synchronize with the network: State Sync, Using a Snapshot, and Block Sync. In this guide we will cover `State Sync`, which is the preferable approach.

## State Sync

State Sync is the process of downloading the current state of the blockchain at a recent block height from other peers and then download and process blocks from that height onward. This method reduces the need to process all historical blocks by downloading the entire blockchain, thus speeding up the synchronization process.

State Sync is used to perform the following tasks that we will see in detail:
- Bootstrap a node
- Free up space on your hard disk

### Bootstrap The Node

To bootstrap your node with state sync, follow the steps below.

Create the file `state-sync.sh`

```bash
sudo nano state-sync.sh
```

Add the following code in it (to add your own or favourite RPC check this list [here](https://sentnodes.com/public-rpc)):

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

Start the node by running the following command:

```bash
sudo systemctl start sentinelhub.service
```

The final step is to check the [sync status](/full-node-setup/node-run#check-sync-status) to confirm when the node has completed synchronization.


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

Launch the script

```bash
./state-sync.sh
```

Start the node by running the following command:

```bash
sudo systemctl start sentinelhub.service
```

The final step is to check the [sync status](/full-node-setup/node-run#check-sync-status) to confirm when the node has completed synchronization.


## Using a Snapshot

Downloading a Blockchain Snapshot is a different method where you download a snapshot of the blockchain at a recent height. This snapshot includes the state of the blockchain at a specific point in time. After applying the snapshot, the node only needs to catch up with the blocks generated after the snapshot was taken, which can be significantly faster than starting from the genesis block.

Install the required packages:

```bash
sudo apt-get install lz4
```

### (Optional) Stop the Node

If you are already running the node and want to free up space, follow the below commands:

Stop the node

```bash
sudo systemctl stop sentinelhub.service
```

Rename the data folder

```bash
cd .sentinelhub
mv data data-old
```

### Apply the Snapshot

For this example, we will use a [Polkachu snapshot](https://www.polkachu.com/tendermint_snapshots/sentinel). To download and install the latest snapshot, follow these steps:

- Copy the snapshot file link.
- Run the following command in your terminal:

```bash
curl -o - -L https://snapshots.polkachu.com/snapshots/sentinel/sentinel_<block_height>.tar.lz4 | lz4 -c -d - | tar -x -C $HOME/.sentinelhub
```

This command will download and extract the snapshot, which is essentially a zipped `data` folder, directly into your `.sentinelhub` directory.

Start the node by running the following command:

```bash
sudo systemctl start sentinelhub.service
```

The final step is to check the [sync status](/full-node-setup/node-run#check-sync-status) to confirm when the node has completed synchronization.


## Block Sync

Block Sync involves starting from the genesis block of the blockchain and then sequentially downloading and validating every block until the node is fully synchronized with the current state of the blockchain. This process can be time-consuming because it requires processing every transaction in the blockchain's history.
Block sync is typically used when someone wants to host `archive nodes`, which are nodes that retain the full history of the blockchain, including all the blocks and their associated states from the genesis block to the current block. This means they have the entire blockchain's data and can provide historical data queries for any point in the blockchain's history. Detailed guidance on setting up and maintaining an archive node will be covered in the future.


## Check Sync Status

After starting your node, it will fully synchronize within a few minutes. Periodically check its status using the following command:

```bash
curl --silent "http://localhost:26657/status" | jq -S
```

If the value of `result.sync_info.catching_up` is `false`, it indicates that the node is synchronized and ready to start signing blocks.

To monitor the logs in real-time, use the following command:

```bash
sudo journalctl -u sentinelhub.service -f --output=cat
```

If you're not setting up a new node but just clearing space, after your node has finished syncing, you can safely delete the `.sentinel/data-old/` folder.

```bash
sudo rm -fr $HOME/.sentinelhub/data-old/