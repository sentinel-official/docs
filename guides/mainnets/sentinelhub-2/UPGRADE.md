# Upgrade

Hardfork upgrade from chain `sentinelhub-1` to `sentinelhub-2`

## Set halt block height

1. Open the file _${HOME}/.sentinelhubd/config/app.toml_

2. Set the value `halt-height = 901800`

3. Save and close the file

4. Restart the Sentinel Hub daemon

5. Wait until the chain halt

__NOTE: Follow the next steps only after chain halt!__

## Export the state

1. Verify the software version

    ``` sh
    sentinelhubd version --long
    ```

    Commit: `1aed4ffff291f6cec7e3768806bebef4e9f4442c`

2. Export the Blockchain state

    ``` sh
    sentinelhubd export --height 901800 > ${HOME}/901800.json
    ```

3. Verify the SHA256 of the JSON file

    ``` sh
    jq -cSM '' ${HOME}/901800.json | sha256sum
    ```

    Hash: `TBU`

## Install

1. Clone the source code from the official Sentinel hub repository

    ``` sh
    rm -rf ${GOPATH}/src/github.com/sentinel-official/hub && \
    mkdir -p ${GOPATH}/src/github.com/sentinel-official/ && \
    cd ${GOPATH}/src/github.com/sentinel-official/ && \
    git clone https://github.com/sentinel-official/hub.git
    ```

2. Navigate to the _hub_ folder

    ``` sh
    cd ${GOPATH}/src/github.com/sentinel-official/hub/
    ```

3. Checkout to the version that you want to install

    ``` sh
    git checkout v0.6.2
    ```

4. Build and install the software

    ``` sh
    make install
    ```

## Migrate the state

1. Verify the software version

    ``` sh
    sentinelhub version --long
    ```

    Commit: `4cd6b2bb3609b6ca86414d50216568e90b847c28`

2. Migrate the exported Blockchain state

    ``` sh
    sentinelhub migrate \
        --chain-id="sentinelhub-2" \
        --genesis-time="2021-05-29T15:00:00Z" \
        --initial-height=901801
        901800.json > ${HOME}/genesis.json
    ```

3. Verify the SHA256 of the JSON file

    ``` sh
    jq -cSM '' ${HOME}/genesis.json | sha256sum
    ```

    Hash: `TBU`

## Setup

1. Initialize the chain configuration files

    ``` sh
    sentinelhub init --chain-id sentinelhub-2 <moniker>
    ```

2. Copy validator node and consensus private keys

    ``` sh
    cp ${HOME}/.sentinelhubd/config/node_key.json ${HOME}/.sentinelhub/config/node_key.json
    cp ${HOME}/.sentinelhubd/config/priv_validator_key.json ${HOME}/.sentinelhub/config/priv_validator_key.json
    ```

3. Copy migrated Genesis file

    ``` sh
    cp ${HOME}/genesis.json ${HOME}/.sentinelhub/config/genesis.json
    ```

4. Set minimun gas prices

    * Open the file `${HOME}/.sentinelhub/config/app.toml`
    * Go to the line which contains the field `minimum-gas-prices = ""`
    * Change the value to `minimum-gas-prices = "0.1udvpn"`
    * Save the file

5. Set peers

    * Open the file `${HOME}/.sentinelhub/config/config.toml`
    * Go to the line which contains the field `persistent_peers = ""`
    * Insert the below node addresses

        ``` text
        TBU
        ```

    * Save the file

6. Create a virtual Terminal session

    ``` sh
    screen -S <name>
    ```

7. Start the chain

    ``` sh
    sentinelhub start
    ```

8. Detach from the virtual Terminal session by pressing Ctrl+A D
