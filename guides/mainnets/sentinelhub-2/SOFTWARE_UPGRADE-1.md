# SOFTWARE UPGRADE - 1

__At block height `1272000` the Blockchain will stop producing the blocks. Follow the next steps only after chain halt!__

## Stop the node

1. Check the latest block height. It must match with upgrade height

    ``` sh
    sentinelhub status 2>&1 | jq -r '.SyncInfo.latest_block_height'
    ```

2. Stop the `sentinelhub` process

## Install new version of Sentinel Hub software

1. Clone the source code from the official Sentinel Hub repository

    ``` sh
    rm -rf ${GOPATH}/src/github.com/sentinel-official/hub/ && \
    mkdir -p ${GOPATH}/src/github.com/sentinel-official/ && \
    cd ${GOPATH}/src/github.com/sentinel-official/ && \
    git clone https://github.com/sentinel-official/hub.git && \
    cd ${GOPATH}/src/github.com/sentinel-official/hub/
    ```

2. Checkout to the required version

    ``` sh
    git checkout <TBU>
    ```

3. Build and install the software

    ``` sh
    make install
    ```

## Start the node

1. Verify the software version

    ``` sh
    sentinelhub version --long
    ```

    Commit: `TBU`

2. Start the `sentinelhub` process

## In case the upgrade fails

__Follow the next steps in case the upgrade fails!__

1. Install the Sentinel Hub software `v0.6.3`

2. Verfiy the software version commit is `9d0e491ad9a6057e55556e01c142ae52fed7edbb`

3. Start the `sentinelhub` process with flag `unsafe-skip-upgrades`

    ``` sh
    sentinelhub start --unsafe-skip-upgrades 1272000
    ```
