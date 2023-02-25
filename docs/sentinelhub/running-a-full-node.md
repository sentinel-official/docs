# Running a full node

## Setup

1. Initialize the blockchain configuration files

    ``` sh
    MONIKER=
    CHAIN_ID=

    sentinelhub init ${MONIKER} \
        --chain-id ${CHAIN_ID}
    ```

2. Download the Genesis file

    ``` sh
    curl -fsLS https://raw.githubusercontent.com/sentinel-official/networks/main/${CHAIN_ID}/genesis.zip \
        -o ${HOME}/genesis.zip
    ```

3. Unzip the Genesis to the blockchain configuration directory

    ``` sh
    unzip ${HOME}/genesis.zip \
        -d ${HOME}/.sentinelhub/config/
    ```

4. Set minimun gas prices

    * Open the file `${HOME}/.sentinelhub/config/app.toml`
    * Go to the line which contains the field `minimum-gas-prices = ""`
    * Insert the output of the below command

        ``` sh
        curl -fsLS https://raw.githubusercontent.com/sentinel-official/networks/main/${CHAIN_ID}/minimum-gas-prices.txt
        ```

    * Save the file

5. Set peers and seeds

    * Open the file `${HOME}/.sentinelhub/config/config.toml`
    * Go to the line which contains the field `persistent_peers = ""`
    * Insert the output of the below command

        ``` sh
        curl -fsLS https://raw.githubusercontent.com/sentinel-official/networks/main/${CHAIN_ID}/persistent_peers.txt
        ```

    * Go to the line which contains the field `seeds = ""`
    * Insert the output of the below command

        ``` text
        curl -fsLS https://raw.githubusercontent.com/sentinel-official/networks/main/${CHAIN_ID}/seeds.txt
        ```

    * Save the file

## Start

1. Start the Sentinel Hub daemon
