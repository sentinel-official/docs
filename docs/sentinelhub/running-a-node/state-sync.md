# State sync

## Install dependencies

1. Add the Golang PPA repository to get the latest version of Golang

    ``` sh
    sudo add-apt-repository ppa:longsleep/golang-backports
    ```

2. Update the packages list

    ``` sh
    sudo apt-get update
    ```

3. Install Golang and other required packages

    ``` sh
    sudo apt-get install --yes curl git golang-go jq make unzip
    ```

4. Export Golang environment variables

    ???+ tip "Tip"
        Append the above lines to the file `${HOME}/.bashrc` and execute the command `source ${HOME}/.bashrc` to reflect in the current Terminal session

    ``` sh
    export GOROOT=/usr/lib/go
    export GOPATH=${HOME}/go
    export GOBIN=${GOPATH}/bin
    export PATH=${PATH}:${GOROOT}/bin:${GOBIN}
    ```

## Install sentinelhub software

``` sh
git clone https://github.com/sentinel-official/hub.git "${HOME}/sentinelhub"
cd "${HOME}/sentinelhub"
git checkout v0.10.1
make install
sudo ln -s "${GOBIN}/sentinelhub" /usr/local/bin/sentinelhub
```

## Initialize the Sentinel Hub

``` sh
sentinelhub init --chain-id sentinelhub-2 "<SET_MONITER>"
curl -fsLS -o "${HOME}/genesis.zip" "https://raw.githubusercontent.com/sentinel-official/networks/main/sentinelhub-2/genesis.zip"
unzip -d "${HOME}/.sentinelhub/config/" "${HOME}/genesis.zip"
rm "${HOME}/genesis.zip"
```

## Update the node config

1. Open `config.toml` file with a text editor

    ``` sh
    vim ${HOME}/.sentinelhub/config/config.toml
    ```

2. Get the peers and seeds from [here](https://www.mintscan.io/sentinel/info) and set them

    ``` text
    [p2p]
    persistent_peers = "<SET_PEERS>"
    seeds = "<SET_SEEDS>"
    ```

3. Open `app.toml` file with a text editor

    ``` sh
    vim "${HOME}/.sentinelhub/config/app.toml"
    ```

4. Get minimum gas prices from [here](https://raw.githubusercontent.com/sentinel-official/networks/main/sentinelhub-2/minimum-gas-prices.txt) and set it

    ``` text
    minimum-gas-prices = "<SET_MINIMUM_GAS_PRICES>"
    ```

## Add a systemd unit file

1. Open the `sentinelhub.service` file with a text editor

    ``` sh
    sudo vim /etc/systemd/system/sentinelhub.service
    ```

2. Paste the below text

    ``` text
    [Unit]
    Description=Sentinel Hub Daemon
    After=network.target

    [Service]
    Type=simple
    ExecStart=sentinelhub start
    Restart=on-failure
    StartLimitInterval=0
    RestartSec=5
    LimitNOFILE=1048576
    LimitMEMLOCK=2048132

    [Install]
    WantedBy=multi-user.target
    ```

3. Reload the systemd Daemon

    ``` sh
    sudo systemctl daemon-reload
    ```

4. Enable autostart of Sentinel Hub service

    ``` sh
    sudo systemctl enable sentinelhub.service
    ```

## Sync the node

1. Get the trusted block height and hash

    ``` sh
    RPC_ADDRESS="https://rpc.sentinel.co:443"
    LATEST_HEIGHT=$(curl -s "$RPC_ADDRESS/block" | jq -r '.result.block.header.height')
    TRUST_HEIGHT=$((LATEST_HEIGHT - 3600))
    TRUST_HASH=$(curl -s "$RPC_ADDRESS/block?height=$TRUST_HEIGHT" | jq -r '.result.block_id.hash')

    # Print trusted block height and hash
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
