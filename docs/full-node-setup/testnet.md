---
title: Run on Testnet
sidebar_position: 12
sidebar_class_name: releaseSidebarHeading
---

# Testnet

To install a Full Node using the testnet, simply follow the Full Node guide for the [Mainnet](/full-node-setup), but adjust the setup and configuration slightly for the testnet environment.

## Install Sentinel Hub

To install the Sentinel Hub, please download the latest version from the [repository](https://github.com/sentinel-official/hub/releases) and proceed by executing the following commands:

```bash
git clone https://github.com/sentinel-official/hub.git "${HOME}/sentinelhub"
cd "${HOME}/sentinelhub"
git checkout v12.0.0-rc9
make install

# For Ubuntu installation
sudo ln -s "${GOBIN}/sentinelhub" /usr/bin/sentinelhub

# For manual installation
sudo ln -s "${GOBIN}/sentinelhub" /usr/local/bin/sentinelhub
```

## Configure Sentinel Hub

### Genesis File

Let's initialize the Sentinel Hub using the Genesis file, a JSON file which defines the initial state of Sentinel blockchain. The state defined in the genesis file contains all the necessary information, like initial coin allocation, genesis time, default parameters, and more

```bash
sentinelhub init --chain-id bluenet-2-1 "Your Full Node Name"
curl -fsLS -o "${HOME}/genesis.json" "https://raw.githubusercontent.com/sentinel-official/networks/main/bluenet-2-1/genesis.json"
cp "${HOME}/genesis.json" "${HOME}/.sentinelhub/config/genesis.json"
rm "${HOME}/genesis.json"
```

You will be asked to replace the genesis file, type `[A]ll`

In case you need a mirror because the official hosting site does not work, use this from `Busurnode`:

```bash
wget -O genesis.json https://storage.busurnode.com/testnet/sentinel/bluenet-2-1/genesis.json --inet4-only
mv genesis.json ~/.sentinelhub/config
```

### Set Seeds & Peers

Open the config.toml file

```bash
sudo nano ${HOME}/.sentinelhub/config/config.toml
```

Set seeds and peers separated by comma.

The following seeds and peers for the Testnet are provided by [Busurnode](https://busurnode.com/network/testnet/sentinel).

```bash title="${HOME}/.sentinelhub/config/config.toml"
[p2p]
seeds = "5765c3c58643dd640b642fcd7c1e9fa1e9fbb16f@ayumi.busur.net:51056"
persistent_peers = "5765c3c58643dd640b642fcd7c1e9fa1e9fbb16f@ayumi.busur.net:51056,25ef256b3e2f6857fdbaa9bf2c8340374421e248@hana.busur.net:51056"
```

## State Sync

To bootstrap your Full Node on Testnet or free up space using State Sync, follow these steps:

Create a reusable shell script, like `testnet-state-sync.sh`.

```bash
nano testnet-state-sync.sh
```

Add the code below.

<details>
<summary>testnet-state-sync.sh</summary>
<p>

```bash
#!/bin/bash

# Service Name (update this if you use service name other than 'sentinelhub', such as 'cosmovisor')
SERVICE_NAME=sentinelhub

SNAP_RPC="https://rpc-sentinel-testnet.busurnode.com:443"

# Fetch block data from RPC
echo "Fetching trusted block data from RPC..."
LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000)); \
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

echo "Update config with latest block from RPC..."
sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ; \
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"$SNAP_RPC,$SNAP_RPC\"| ; \
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

Next, grant execution permissions to the script:

```bash
chmod 700 testet-state-sync.sh
```

Run the script:

```bash
./testnet-state-sync.sh
```

The final step is to check the [sync status](/full-node-setup/node-run#check-sync-status) to confirm when the node has completed synchronization.