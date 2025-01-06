---
title: Software Upgrade
sidebar_position: 2
---

# Software Upgrade

This guide outlines the steps required to upgrade your Sentinel Hub software. Follow these instructions carefully to ensure a smooth process.

## Upgrade List

| **Upgrade #**     | **Binary Version**  | **Name**         | **Block Height** | **Proposal #**                                          | **Commit Hash** |
|---------------|---------|--------------|--------------|-----------------------------------------------------|-------------|
| upgrade-1     | v0.7.0  | `upgrade-1`    | 1,272,000    | [3](https://www.mintscan.io/sentinel/proposals/3)   | [600fd5f](https://github.com/sentinel-official/hub/commit/600fd5f8b71f60332656b826df2e3fa3bc6c5e5e) |
| upgrade-2     | v0.8.3  | `upgrade-2`    | 2,586,000    | [5](https://www.mintscan.io/sentinel/proposals/5)   | [fa7cd3c](https://github.com/sentinel-official/hub/commit/fa7cd3c7d5f427308d8a837a18b951482ce5c9e2) |
| upgrade-3     | v0.9.2  | `upgrade-3`    | 5,125,000    | [9](https://www.mintscan.io/sentinel/proposals/9)   | [d04a400](https://github.com/sentinel-official/hub/commit/d04a4004600c9d19e326f61a13fcef853616e3ed) |
| upgrade-4     | v0.10.1 | `upgrade-4`    | 9,348,475    | [19](https://www.mintscan.io/sentinel/proposals/19) | [bbe6fab](https://github.com/sentinel-official/hub/commit/bbe6fab51c81863551a69aeb4977ec4c19fcd60a) |
| upgrade-5     | v0.11.2 | `v11`          | 12,310,005   | [30](https://www.mintscan.io/sentinel/proposals/30) | [54c28ae](https://github.com/sentinel-official/hub/commit/54c28ae02786b62b25303759da761e5ce1226029) |


## Upgrade Steps

At the specified block height, the blockchain will halt. Follow these steps only after the blockchain stops producing new blocks.

### Stop the node

Run the following command to verify the latest block height matches the upgrade height:

```bash
curl -fsLS http://127.0.0.1:26657/status | jq -r '.result.sync_info.latest_block_height'
```

Stop the running node to prepare for the upgrade.

```bash
sudo systemctl stop sentinelhub.service
```

### Install the new version

Clone the source code and replace `<binary_version>` with the version from the table:

```bash
VERSION=<binary_version>
BASE_DIRECTORY=${GOPATH}/src/github.com/sentinel-official

rm -rf ${BASE_DIRECTORY}/hub/ && mkdir -p ${BASE_DIRECTORY} && cd ${BASE_DIRECTORY}/ && \
git clone https://github.com/sentinel-official/hub.git && cd ${BASE_DIRECTORY}/hub/ && \
git checkout ${VERSION}
```

Build and install the software

```bash
make install
```

### Start the node

Confirm the new version is installed correctly:

```bash
sentinelhub version --long
```

Start the `sentinelhub` process

```bash
sudo systemctl start sentinelhub.service
```


## In Case of Upgrade Failure

- Use the version immediately before the failed upgrade (note: if you are installing software upgrade-1, use the version 0.6.3).

- Confirm the installation matches the details in the table above.

- Start the `sentinelhub` process with flag `unsafe-skip-upgrades` at the upgrade block height

```bash
sentinelhub start --unsafe-skip-upgrades <block_height>
```

This process ensures minimal downtime and a smooth transition between software versions.