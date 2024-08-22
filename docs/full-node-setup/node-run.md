---
title: Run the Full Node
sidebar_position: 5
---

# Run the Full Node

When setting up a validator and joining a blockchain network, there are usually three key synchronization methods to get your node up to speed: using a Snapshot, State Sync, and Block Sync.


## Using a Snapshot

Downloading a Blockchain Snapshot is a different method where you download a snapshot of the blockchain at a recent height. This snapshot includes the state of the blockchain at a specific point in time. After applying the snapshot, the node only needs to catch up with the blocks generated after the snapshot was taken, which can be significantly faster than starting from the genesis block.


For this example, we will use a [Busurnode Snapshot](https://busurnode.com/network/sentinel#service_snapshot). To download and install the latest snapshot, follow the below steps:

Create a reusable shell script, like `snapshotsync.sh`, with the following code. If you're using a service name other than `sentinelhub`, such as `cosmovisor`, be sure to update `SERVICE_NAME` accordingly.

<details>
<summary>snapshotsync.sh</summary>
<p>

```bash
#!/bin/bash

# Service Name (update this if you use service name other than 'sentinelhub', for example 'cosmovisor')
SERVICE_NAME=sentinelhub

# Install required package
echo "Installing required package"
sudo apt install -y lz4 jq curl > /dev/null 2>&1

# Get Latest Snapshot URL
API_REQUEST=$(curl -s https://busurnode.com/api/v1/snapshot/mainnet/sentinel)
IS_SUCCESS=$(echo $API_REQUEST | jq -r '.success')
if [ "$IS_SUCCESS" = "true" ]; then
  SNAPSHOT_URL=$(echo $API_REQUEST | jq -r '.data.snapshot.url')
  echo "Latest Snapshot URL: $SNAPSHOT_URL"
else
  echo "Error fetching latest snapshot from Busurnode API"
  exit 1
fi

# Download the latest snapshot and save it as sentinel_snapshot.tar.lz4
echo "Downloading the latest snapshot..."
curl -L --progress-bar -o "$HOME/sentinel_snapshot.tar.lz4" "$SNAPSHOT_URL"
if [ $? -eq 0 ] && [ -f "$HOME/sentinel_snapshot.tar.lz4" ]; then
  echo "Download complete: $HOME/sentinel_snapshot.tar.lz4"
else
  echo "Error: Download failed."
  exit 1
fi

# Stop the sentinel service
echo "Stopping the sentinel service..."
sudo service $SERVICE_NAME stop

# Copy the validator state JSON file
cd $HOME
cp ~/.sentinelhub/data/priv_validator_state.json ~/.sentinelhub/priv_validator_state.json

# Reset Tendermint state
sentinelhub tendermint unsafe-reset-all --home $HOME/.sentinelhub --keep-addr-book

# Extract the snapshot
echo "Extracting snapshot..."
lz4 -c -d $HOME/sentinel_snapshot.tar.lz4 | tar -x -C $HOME/.sentinelhub

# Replace priv_validator_state from backup
cp ~/.sentinelhub/priv_validator_state.json ~/.sentinelhub/data/priv_validator_state.json

# Start the sentinel service
echo "Starting the sentinel service..."
sudo service $SERVICE_NAME start
echo "Process complete."
```

</p>
</details>

Next, grant execution permissions to the script and run it:

```bash
chmod 700 snapshotsync.sh
./snapshotsync.sh
```

The final step is to check the [sync status](/full-node-setup/node-run#check-sync-status) to confirm when the node has completed synchronization.

If you're looking for alternative services that provide snapshots, here is a list of Validators/RPC providers who offer them:

<details>
<summary>Available Snapshots</summary>
<p>

- Autostake: [https://autostake.com/networks/sentinel/](https://autostake.com/networks/sentinel/)
- Busurnode: [https://busurnode.com/network/sentinel#service_snapshot](https://busurnode.com/network/sentinel#service_snapshot)
- Polkachu: [https://www.polkachu.com/tendermint_snapshots/sentinel](https://www.polkachu.com/tendermint_snapshots/sentinel)
- Roomit: [https://roomit.xyz/snapshot/mainnet/dvpn/](https://roomit.xyz/snapshot/mainnet/dvpn/)

</p>
</details>

:::warning
If you're using a snapshot on a validator node during a chain halt and you're **NOT** using TMKMS, be sure to back up your `priv_validator_state.json` file from your recently renamed `data-old` folder. After extracting the snapshot, but before starting the node, replace the new `priv_validator_state.json` file with your backup. This step is essential to prevent double-signing.
:::

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

:::warning
Perform this step only if you already have a running validator that needs to free up space. If you are setting up a validator for the first time, refer to the `Bootstrap the Node` section above.
:::

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