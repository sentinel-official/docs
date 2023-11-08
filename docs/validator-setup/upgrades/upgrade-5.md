---
title: Software upgrade - 5
sidebar_position: 6
---

# Software upgrade - 5

:::danger Warning
At block height `12310005` the Blockchain will stop producing the blocks. Follow the next steps only after the blockchain halt!
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
    VERSION=v0.11.2
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
    Commit hash must be `54c28ae02786b62b25303759da761e5ce1226029`
    :::

2. Start the `sentinelhub` process

## In case the upgrade fails

:::danger Warning
Follow the next steps in case the upgrade fails!
:::

1. Install the Sentinel Hub software `v0.10.1`

2. Verfiy the software version commit is `bbe6fab51c81863551a69aeb4977ec4c19fcd60a`

3. Start the `sentinelhub` process with flag `unsafe-skip-upgrades`

    ```sh
    sentinelhub start --unsafe-skip-upgrades 12310005
    ```