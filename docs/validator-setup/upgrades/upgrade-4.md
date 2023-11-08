---
title: Software upgrade - 4
sidebar_position: 5
---

# Software upgrade - 4

:::danger Warning
At block height `9348475` the Blockchain will stop producing the blocks. Follow the next steps only after the blockchain halt!
:::

## Stop the node

1. Check the latest block height. It must match with the upgrade height

    ``` sh
    curl -fsLS http://127.0.0.1:26657/status | jq -r '.result.sync_info.latest_block_height'
    ```

2. Stop the `sentinelhub` process

## Install the new version

1. Make sure you are using Go verion 1.19+

    ``` sh
    go version
    ```

2. Clone the source code

    ``` sh
    VERSION=v0.10.1
    BASE_DIRECTORY=${GOPATH}/src/github.com/sentinel-official

    rm -rf ${BASE_DIRECTORY}/hub/ && mkdir -p ${BASE_DIRECTORY} && cd ${BASE_DIRECTORY}/ && \
    git clone https://github.com/sentinel-official/hub.git && cd ${BASE_DIRECTORY}/hub/ && \
    git checkout ${VERSION}
    ```

3. Build and install the software

    ``` sh
    rm -rf ./vendor && \
    make install
    ```

## Start the node

1. Verify the software version

    ``` sh
    sentinelhub version --long
    ```

    :::note
    Commit hash must be `bbe6fab51c81863551a69aeb4977ec4c19fcd60a`
    :::

2. Start the `sentinelhub` process

## In case the upgrade fails

:::danger Warning
Follow the next steps in case the upgrade fails!
:::

1. Install the Sentinel Hub software `v0.9.3`

2. Verfiy the software version commit is `810200fe2dfd5e5b29a7ac8f95c7fa225c131800`

3. Start the `sentinelhub` process with flag `unsafe-skip-upgrades`

    ``` sh
    sentinelhub start --unsafe-skip-upgrades 9348475
    ```