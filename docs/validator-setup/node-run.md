---
title: Run the Full Node
sidebar_position: 5
---

# Running the Full Node

When setting up a validator and joining a blockchain network, there are typically two main states that a node needs to synchronize with the network: block sync and state sync


## Block Sync
Block sync is the process of downloading and verifying blocks from the blockchain. When a validator joins a network, it needs to download the entire blockchain starting from the genesis block to the most recent block in order to participate in block validation. Block sync involves downloading blocks from other nodes in the network, verifying the cryptographic signatures of those blocks, and storing them in local storage.

Start the node

```bash
sudo systemctl start sentinelhub
```

Use this command to check logs in real time

```bash
sudo journalctl -u sentinelhub.service -f
```

## State Sync

State sync is the process of downloading the current state of the blockchain. When a validator joins a network, it needs to download the current state of the blockchain in order to validate new blocks. The current state includes all account balances, contract code, and contract storage. State sync is a more efficient way to get up to speed with the current state of the network, as it only downloads the necessary information rather than downloading the entire blockchain. To to state sync there 2 options (I have used he second one).

### 1st Option (from Sentinel Guide)

Get the trusted block height and hash

```bash
RPC_ADDRESS="https://rpc.sentinel.co:443"
LATEST_HEIGHT=$(curl -s "$RPC_ADDRESS/block" | jq -r '.result.block.header.height')
TRUST_HEIGHT=$((LATEST_HEIGHT - 3600))
TRUST_HASH=$(curl -s "$RPC_ADDRESS/block?height=$TRUST_HEIGHT" | jq -r '.result.block_id.hash')

echo ${TRUST_HEIGHT}
echo ${TRUST_HASH}
```

Setup environment variables

```bash
export SENTINELHUB_P2P_MAX_NUM_OUTBOUND_PEERS=200
export SENTINELHUB_STATESYNC_ENABLE=true
export SENTINELHUB_STATESYNC_RPC_SERVERS="https://sentinel-rpc.badgerbite.io:443,https://rpc.mathnodes.com:443,https://rpc.sentinel.co:443"
export SENTINELHUB_STATESYNC_TRUST_HEIGHT=${TRUST_HEIGHT}
export SENTINELHUB_STATESYNC_TRUST_HASH=${TRUST_HASH}
```

Start the node

```bash
sudo systemctl start sentinelhub
```

Use this command to check logs in real time

```bash
sudo journalctl -u sentinelhub.service -f
```

### 2nd Option (from Community)

Copy this script that you can also find [here](https://github.com/MathNodes/state-sync/blob/main/state-sync.sh). This script ensures that the synchronization process starts from a point slightly before the absolute latest block. This provides a margin of safety and avoid potential synchronization issues that might occur due to due network delays or other factors.

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

cp $HOME/.sentinelhub/data/priv_validator_state.json $HOME/.sentinelhub/priv_validator_state.json.backup

rm -rf $HOME/.sentinelhub/data
mkdir $HOME/.sentinelhub/data
cp $HOME/.sentinelhub/priv_validator_state.json.backup $HOME/.sentinelhub/data/priv_validator_state.json
```

Create a file and paste the script in it

```bash
sudo nano state-sync.sh
```

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
sudo journalctl -u sentinelhub.service -f
```