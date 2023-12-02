---
title: Free Up Space with State Sync
description: When your HD space growing too much
sidebar_position: 8
---

# Free Up Space with State Sync

State Sync helps you free up space on your hard disk and should be performed regularly. You are encouraged to set up a monitoring structure to check when it is time to free up space.

We assume you have Cosmovisor installed, if you do not have it, follow the related [module](/validator-setup/category/cosmovisor).

## Create State Sync script file

If you still don't have it, create the file state-sync.sh

```bash
sudo nano state-sync.sh
```

Add the following code in it (to add your own or favourite RPC check this list [here](https://cosmos.directory/sentinel/nodes)):

```bash title="state-sinc.sh"
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

This script ensures that the new synchronization process starts from a point slightly before the absolute latest block. This provides a margin of safety and avoid potential synchronization issues that might occur due to due network delays or other factors.

Make the file executable

```bash
chmod +x state-sync.sh
```

Stop the node

```bash
sudo systemctl stop cosmovisor.service
```

Launch the state-sync script

```bash
./state-sync.sh
```

Reset the node

```bash
# On some tendermint chains
sentinelhub unsafe-reset-all

# On other tendermint chains
sentinelhub tendermint unsafe-reset-all --home $HOME/.sentinelhub --keep-addr-book
```

Start the node

```bash
sudo systemctl start cosmovisor.service
```

Use this command to check logs in real time

```bash
sudo journalctl -u cosmovisor.service -f
```

If everything goes well, your node should start syncing within 10 minutes.