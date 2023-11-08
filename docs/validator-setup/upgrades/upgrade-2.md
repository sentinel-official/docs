---
title: Software upgrade - 2
sidebar_position: 3
---

# Software upgrade - 2

:::danger Warning
At block height `2586000` the Blockchain will stop producing the blocks. Follow the next steps only after the blockchain halt!
:::

## Stop the node

1. Check the latest block height. It must match with the upgrade height

    ``` sh
    curl -fsLS http://127.0.0.1:26657/status | jq -r '.result.sync_info.latest_block_height'
    ```

2. Stop the `sentinelhub` process

## Install the new version

1. Clone the source code

    ``` sh
    VERSION=v0.8.3
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

    :::note
    Commit hash must be `fa7cd3c7d5f427308d8a837a18b951482ce5c9e2`
    :::

2. Start the `sentinelhub` process

## In case the upgrade fails

:::danger Warning
Follow the next steps in case the upgrade fails!
:::

1. Install the Sentinel Hub software `v0.7.0`

2. Verfiy the software version commit is `600fd5f8b71f60332656b826df2e3fa3bc6c5e5e`

3. Start the `sentinelhub` process with flag `unsafe-skip-upgrades`

    ``` sh
    sentinelhub start --unsafe-skip-upgrades 2586000
    ```