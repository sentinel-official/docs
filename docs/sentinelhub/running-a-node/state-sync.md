# State sync

While following the [setup](../setup.md) process, please install the [latest](https://github.com/sentinel-official/hub/releases/latest) version.

## Sync the node

1. Get the trusted block height and hash

    ``` sh
    RPC_ADDRESS="https://rpc.sentinel.co:443"
    LATEST_HEIGHT=$(curl -s "$RPC_ADDRESS/block" | jq -r '.result.block.header.height')
    TRUST_HEIGHT=$((LATEST_HEIGHT - 3600))
    TRUST_HASH=$(curl -s "$RPC_ADDRESS/block?height=$TRUST_HEIGHT" | jq -r '.result.block_id.hash')

    echo ${TRUST_HEIGHT}
    echo ${TRUST_HASH}
    ```

2. Setup environment variables

    ``` sh
    export SENTINELHUB_P2P_MAX_NUM_OUTBOUND_PEERS=200
    export SENTINELHUB_STATESYNC_ENABLE=true
    export SENTINELHUB_STATESYNC_RPC_SERVERS="https://sentinel-rpc.badgerbite.io:443,https://rpc.mathnodes.com:443,https://rpc.sentinel.co:443"
    export SENTINELHUB_STATESYNC_TRUST_HEIGHT=${TRUST_HEIGHT}
    export SENTINELHUB_STATESYNC_TRUST_HASH=${TRUST_HASH}
    ```

3. Start the node without using systemd

    ``` sh
    sentinelhub start
    ```

4. Let the node sync fully till the `result.sync_info.catching_up` value is false

    ``` sh
    curl --silent "http://localhost:26657/status" | jq -S
    ```

5. Stop the node by pressing `Ctrl+C`

## Start the node

``` sh
sudo systemctl start sentinelhub
```
