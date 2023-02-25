# Software upgrade - 3

???+ warning "Warning"

    At block height `5125000` the Blockchain will stop producing the blocks. Follow the next steps only after the blockchain halt!

## Stop the node

1. Check the latest block height. It must match with the upgrade height

    ``` sh
    curl -fsLS http://127.0.0.1:26657/status | jq -r '.result.sync_info.latest_block_height'
    ```

2. Stop the `sentinelhub` process

## Install the new version

1. Clone the source code

    ``` sh
    VERSION=v0.9.2
    BASE_DIRECTORY=${GOPATH}/src/github.com/sentinel-official

    rm -rf ${BASE_DIRECTORY}/hub/ && mkdir -p ${BASE_DIRECTORY} && cd ${BASE_DIRECTORY}/ && \
    git clone https://github.com/sentinel-official/hub.git && cd ${BASE_DIRECTORY}/hub/ && \
    git checkout ${VERSION}
    ```

2. Build and install the software

    ``` sh
    make install
    ```

## Start the node

1. Verify the software version

    ``` sh
    sentinelhub version --long
    ```

    ???+ note "Note"

        Commit hash must be `d04a4004600c9d19e326f61a13fcef853616e3ed`

2. Start the `sentinelhub` process

## In case the upgrade fails

???+ warning "Warning"

    Follow the next steps in case the upgrade fails!

1. Install the Sentinel Hub software `v0.8.3`

2. Verfiy the software version commit is `fa7cd3c7d5f427308d8a837a18b951482ce5c9e2`

3. Start the `sentinelhub` process with flag `unsafe-skip-upgrades`

    ``` sh
    sentinelhub start --unsafe-skip-upgrades 5125000
    ```
