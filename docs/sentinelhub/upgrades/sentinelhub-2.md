# SentinelHub - 2

Hardfork upgrade from blockchain `sentinelhub-1` to `sentinelhub-2`

## Set halt block height

1. Open the file `${HOME}/.sentinelhubd/config/app.toml` with a text editor

2. Set the value `halt-height = 901800`

3. Save and close the file

4. Restart the Sentinel Hub daemon

5. Wait until the blockchain halt

???+ warning "Warning"

    Follow the next steps only after the blockchain halt!

## Export the state

1. Verify the software version

    ``` sh
    sentinelhubd version --long
    ```

    ???+ note "Note"

        Commit hash must be `1aed4ffff291f6cec7e3768806bebef4e9f4442c`

2. Export the Blockchain state

    ``` sh
    HALT_HEIGHT=901800

    sentinelhubd export --height ${HALT_HEIGHT} > ${HOME}/${HALT_HEIGHT}.json
    ```

3. Verify the SHA256 of the JSON file

    ``` sh
    jq -cSM '' ${HOME}/${HALT_HEIGHT}.json | sha256sum
    ```

    ???+ note "Note"

        Exported Genesis file hash must be `e519a0dbb7e7e177c72965c0f7cd8507a537548f56e696c44bd01360424137ad`

## Install the new software

1. Clone the source code

    ``` sh
    VERSION=v0.6.2
    BASE_DIRECTORY=${GOPATH}/src/github.com/sentinel-official

    rm -rf ${BASE_DIRECTORY}/hub/ && mkdir -p ${BASE_DIRECTORY} && cd ${BASE_DIRECTORY}/ && \
    git clone https://github.com/sentinel-official/hub.git && cd ${BASE_DIRECTORY}/hub/ && \
    git checkout ${VERSION}
    ```

2. Build and install the software

    ``` sh
    make install
    ```

## Migrate the state

1. Verify the software version

    ``` sh
    sentinelhub version --long
    ```

    ???+ note "Note"

        Commit hash must be `4cd6b2bb3609b6ca86414d50216568e90b847c28`

2. Migrate the exported Blockchain state

    ``` sh
    CHAIN_ID=sentinelhub-2
    GENESIS_TIME=2021-05-29T14:30:00Z
    INITIAL_HEIGHT=901801

    sentinelhub migrate \
        --chain-id=${CHAIN_ID} \
        --genesis-time=${GENESIS_TIME} \
        --initial-height=${INITIAL_HEIGHT} \
        ${HALT_HEIGHT}.json > ${HOME}/genesis.json
    ```

3. Verify the SHA256 of the JSON file

    ``` sh
    jq -cSM '' ${HOME}/genesis.json | sha256sum
    ```

    ???+ note "Note"

        Migreated Genesis file hash must be `1dbcd7d58845b4b0696d31daafa2096bb3d729e51f8e8fa17e9e73eda1376382`

## Setup

1. Initialize the chain configuration files

    ``` sh
    MONIKER=

    sentinelhub init ${MONIKER} \
        --chain-id ${CHAIN_ID}
    ```

2. Copy validator node and consensus private keys

    ``` sh
    FROM_DIR=${HOME}/.sentinelhubd/config
    TO_DIR=${HOME}/.sentinelhub/config

    cp ${FROM_DIR}/node_key.json ${TO_DIR}/node_key.json
    cp ${FROM_DIR}/priv_validator_key.json ${TO_DIR}/priv_validator_key.json
    ```

3. Copy migrated Genesis file

    ``` sh
    cp ${HOME}/genesis.json ${TO_DIR}/genesis.json
    ```

4. Set minimun gas prices

    * Open the file `${HOME}/.sentinelhub/config/app.toml`
    * Go to the line which contains the field `minimum-gas-prices = ""`
    * Change the value to `minimum-gas-prices = "0.1udvpn"`
    * Save the file

5. Set peers and seeds

    * Open the file `${HOME}/.sentinelhub/config/config.toml`
    * Go to the line which contains the field `persistent_peers = ""`
    * Insert the below node addresses

        ``` text
        05fe2a7847fd27345250915fd06752c424f40651@85.222.234.135:26656,387027e3b1180d3a619cbbf3462704a490785963@54.176.90.228:26656,63bd9cfce0f0d274aad5b166dd06d829021aec43@121.78.247.243:56656,855807cc6a919c22ec943050ebb5c80b23724ed0@3.239.11.246:26656,8caefbf8f4318ecc93f2c901cf11470e4a16c818@161.97.135.122:26656,9174af5f16f74660cccf49f893d243949af45f7f@54.177.29.46:26656,9fa528bd2b9e7c80724a1d8a4e1a2a8a83e7d123@142.93.72.221:26656,a77f6a094578dad899e2f40e0626b4c6d4705311@3.36.165.232:26656,bd45a11390d16d128a9eeea3935b53d7a1a3c120@15.236.127.69:26656,cdb8dd7628460a546ce1594ca0bc0c20366514cf@34.72.64.178:26656,d1efceccb04ded9a604e5235f76da86872157d68@161.97.149.223:26656,e00b23444cc8dbb353d5faa765ab36cfc0116b57@83.60.98.134:28685,e5ee89bd4fc371c6a0e66d2b8daefd891b6b87b5@157.90.117.58:26656,f7ceb735606f90df7eb6cd987641876955b6e325@46.4.55.150:36656
        ```

    * Go to the line which contains the field `seeds = ""`
    * Insert the below node addresses

        ``` text
        c3aa0ff9b3eb17be1b0a26d7c8a5683e8e528e1a@159.89.192.105:26656
        ```

    * Save the file

## Start

1. Start the Sentinel Hub daemon
