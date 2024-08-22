---
title: Run the Full Node
sidebar_position: 5
---

# Run the Full Node

When setting up a validator and joining a blockchain network, there are three main methods to sync your node: Snapshot, State Sync, and Block Sync. If your node is already running and you've used a Snapshot or State Sync, it's important to regularly free up space since the hard drive can fill up over time. Setting up a monitoring system is recommended to alert you when it's time to clear out unnecessary data.


## Snapshot Sync

Downloading a blockchain snapshot allows you to sync your node much faster by using a recent copy of the blockchain. Instead of starting from scratch and processing the entire blockchain, the snapshot brings your node up to a specific point in time. After that, your node only needs to catch up with the new blocks added since the snapshot, significantly speeding up the syncing process.


To bootstrap your node or free up space, you can download and install the latest snapshot using the service provided by [Busurnode](https://busurnode.com/network/sentinel#service_snapshot). Follow these steps:

Create a reusable shell script, like `snapshot-sync.sh`.

```bash
nano snapshot-sync.sh
```

Add the code below. If you're using a service name other than `sentinelhub`, like `cosmovisor`, make sure to update the variable `SERVICE_NAME` accordingly.

<details>
<summary>snapshot-sync.sh</summary>
<p>

```bash
#!/bin/bash

# Service Name (update this if you use service name other than 'sentinelhub', such as 'cosmovisor')
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

Next, grant execution permissions to the script:

```bash
chmod 700 snapshot-sync.sh
```

Run the script:

```bash
./snapshot-sync.sh
```

The final step is to check the [sync status](/validator-setup/node-run#check-sync-status) to confirm when the node has completed synchronization.

If you're looking for other services that provide snapshots, here’s a list of Validators and RPC providers that offer them:

<details>
<summary>Available Snapshot Providers</summary>
<p>

- Autostake: [https://autostake.com/networks/sentinel/](https://autostake.com/networks/sentinel/)
- Busurnode: [https://busurnode.com/network/sentinel#service_snapshot](https://busurnode.com/network/sentinel#service_snapshot)
- Polkachu: [https://www.polkachu.com/tendermint_snapshots/sentinel](https://www.polkachu.com/tendermint_snapshots/sentinel)
- Roomit: [https://roomit.xyz/snapshot/mainnet/dvpn/](https://roomit.xyz/snapshot/mainnet/dvpn/)

</p>
</details>


## State Sync

State Sync is the process of downloading the current state of the blockchain at a recent block height from other peers and then download and process blocks from that height onward. This method reduces the need to process all historical blocks by downloading the entire blockchain, thus speeding up the synchronization process.

To bootstrap your node or free up space using State Sync, follow these steps:

Create a reusable shell script, like `state-sync.sh`.

```bash
nano state-sync.sh
```

Add the code below. If you're using a service name other than `sentinelhub`, like `cosmovisor`, make sure to update the variable `SERVICE_NAME` accordingly. To add your preferred RPC, you can check out this list [here](https://sentnodes.com/public-rpc):

<details>
<summary>state-sync.sh</summary>
<p>

```bash
#!/bin/bash

# Service Name (update this if you use service name other than 'sentinelhub', such as 'cosmovisor')
SERVICE_NAME=sentinelhub

SNAP_RPC1="https://rpc-sentinel.busurnode.com:443"
SNAP_RPC2="https://eu-rpc-sentinel.busurnode.com:443"

# Fetch block data from RPC
echo "Fetching trusted block data from RPC..."
LATEST_HEIGHT=$(curl -s $SNAP_RPC1/block | jq -r .result.block.header.height); \
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000)); \
TRUST_HASH=$(curl -s "$SNAP_RPC1/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

echo "Update config with latest block from RPC..."
sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ; \
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"$SNAP_RPC1,$SNAP_RPC2\"| ; \
s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ; \
s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"|" $HOME/.sentinelhub/config/config.toml

# Stop the sentinel service
echo "Stopping the sentinel service..."
sudo service $SERVICE_NAME stop

# Copy the validator state JSON file
echo "Backing up validator state..."
cd $HOME
cp ~/.sentinelhub/data/priv_validator_state.json ~/.sentinelhub/priv_validator_state.json

# Reset Tendermint state
sentinelhub tendermint unsafe-reset-all --home $HOME/.sentinelhub --keep-addr-book

# Replace priv_validator_state from backup
echo "Recover validator state from backup..."
cp ~/.sentinelhub/priv_validator_state.json ~/.sentinelhub/data/priv_validator_state.json

# Start the sentinel service
echo "Starting the sentinel service..."
sudo service $SERVICE_NAME start
echo "Process complete."
```

</p>
</details>

This script ensures that the new synchronization process starts from a point slightly before the absolute latest block. This provides a margin of safety and avoid potential synchronization issues that might occur due to due network delays or other factors.

Next, grant execution permissions to the script:

```bash
chmod 700 state-sync.sh
```

Run the script:

```bash
./state-sync.sh
```

The final step is to check the [sync status](/validator-setup/node-run#check-sync-status) to confirm when the node has completed synchronization.


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