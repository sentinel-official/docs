---
title: Chain Upgrade
sidebar_position: 11
---

# Chain Upgrade

This guide outlines the steps required to upgrade your Sentinel Hub software. Follow these instructions carefully to ensure a smooth process.

## Upgrade List

| **Upgrade #**     | **Binary Version**  | **Name**         | **Block Height** | **Proposal #**                                          | **Commit Hash** |
|---------------|---------|--------------|--------------|-----------------------------------------------------|-------------|
| upgrade-1     | v0.7.0  | `upgrade-1`    | 1,272,000    | [3](https://explorer.busurnode.com/sentinel/gov/3)   | [600fd5f](https://github.com/sentinel-official/hub/commit/600fd5f8b71f60332656b826df2e3fa3bc6c5e5e) |
| upgrade-2     | v0.8.3  | `upgrade-2`    | 2,586,000    | [5](https://explorer.busurnode.com/sentinel/gov/5)   | [fa7cd3c](https://github.com/sentinel-official/hub/commit/fa7cd3c7d5f427308d8a837a18b951482ce5c9e2) |
| upgrade-3     | v0.9.2  | `upgrade-3`    | 5,125,000    | [9](https://explorer.busurnode.com/sentinel/gov/9)   | [d04a400](https://github.com/sentinel-official/hub/commit/d04a4004600c9d19e326f61a13fcef853616e3ed) |
| upgrade-4     | v0.10.1 | `upgrade-4`    | 9,348,475    | [19](https://explorer.busurnode.com/sentinel/gov/19) | [bbe6fab](https://github.com/sentinel-official/hub/commit/bbe6fab51c81863551a69aeb4977ec4c19fcd60a) |
| upgrade-5     | v0.11.2 | `v11`          | 12,310,005   | [30](https://explorer.busurnode.com/sentinel/gov/30) | [54c28ae](https://github.com/sentinel-official/hub/commit/54c28ae02786b62b25303759da761e5ce1226029) |
| upgrade-6     | v12.0.0| `v12_0_0`          | 23,997,755   | [64](https://explorer.busurnode.com/sentinel/gov/64) | [eb3c5c4](https://github.com/sentinel-official/sentinelhub/commit/eb3c5c4287674bd0a7e3180c5cec7d03196207b3) |


## Build the Binary

When the upgrade is available clone the Sentinel Hub [repository](https://github.com/sentinel-official/hub), checkout at the new version and install it

```bash
git clone https://github.com/sentinel-official/sentinelhub.git "${HOME}/sentinelhub"
cd "${HOME}/sentinelhub"
git checkout <new_version>
make install
```

## Automatic Upgrade: Cosmovisor

If you’re using or planning to use Cosmovisor (see the [guide](/full-node-setup/validate/essential-tools/cosmovisor)), the upgrade process will be mostly automatic. Once the new binary is built and placed in the correct directory, Cosmovisor will take care of the rest.

:::note
Upgrades can be either consensus-breaking or non-consensus-breaking.
Follow the appropriate section below depending on the upgrade type.
:::

### Consensus Breaking (Chain Upgrade)

Create the upgrade directory inside Cosmovisor with the name of the version (for the last upgrade was **v12_0_0** as you can see [here](https://ping.pub/sentinel/gov/64) under the section plan, tab name)

```bash
mkdir -p ~/.sentinelhub/cosmovisor/upgrades/<upgrade_name>/bin
```

Copy `sentinelhub` binary in it

```bash
cp ~/go/bin/sentinelhub ~/.sentinelhub/cosmovisor/upgrades/<upgrade_name>/bin
```

Check if the `sentinelhub` binary upgrade was copied and if it is the correct version:

```bash
~/.sentinelhub/cosmovisor/upgrades/<upgrade_name>/bin/sentinelhub version
```

Now that you have prepared and deployed the new binary, the remaining steps will be managed by Cosmovisor when the upgrade is scheduled to take place. Here's a breakdown of the process:

When the designated block height is reached, the blockchain temporarily halts its operations. Following this, an `upgrade-info.json` file is generated and put into the folder `.sentinelhub/cosmovisor/upgrades/<upgrade_name>/`.

The content of this file will be the following, based on the last hub upgrade:

```bash title=".sentinelhub/cosmovisor/upgrades/<upgrade_name>/"
{"name":"v12_0_0","time":"0001-01-01T00:00:00Z","height":23997755}
```

The Cosmovisor system identifies the existence of this file and triggers the required sequence of actions. These actions include pausing the node, inserting the relevant binary into the specified directory, and subsequently restarting the node.

This carefully orchestrated sequence guarantees a seamless transition and successful execution of the blockchain upgrade.

### Non Consensus Breaking

For non-consensus upgrades, you only need to replace the running binary with the new one.

Stop cosmovisor

```bash
sudo systemctl stop cosmovisor.service
```

Copy the newly created Sentinel Hub binary into Cosmovisor

```bash
cp go/bin/sentinelhub .sentinelhub/cosmovisor/current/bin/
```

Verify that the cosmovisor version is current

```bash
cosmovisor version
```

Start cosmovisor

```bash
sudo systemctl start cosmovisor
```

Monitor the logs to confirm the successful execution of the process

```bash
journalctl -u cosmovisor.service -f --output=cat
```

## Manual Upgrade

If you’re not using Cosmovisor, follow these manual steps once the blockchain halts at the upgrade block height.

### Stop the node

Check the current block height to confirm it matches the upgrade height:

```bash
curl -fsLS http://127.0.0.1:26657/status | jq -r '.result.sync_info.latest_block_height'
```

Then stop the Sentinel Hub service:

```bash
sudo systemctl stop sentinelhub.service
```

### Install the new version

Link the new binary:

```bash
# For Ubuntu installation
sudo ln -s "${GOBIN}/sentinelhub" /usr/bin/sentinelhub

# For manual installation
sudo ln -s "${GOBIN}/sentinelhub" /usr/local/bin/sentinelhub
```

### Start the node

Verify the version:

```bash
sentinelhub version --long
```

Restart the service:

```bash
sudo systemctl start sentinelhub.service
```


### In Case of Upgrade Failure

- Roll back to the previous version (e.g., if `upgrade-6` fails, use version `v0.11.2`).

- Confirm the rollback version matches the upgrade table above.

- Restart the node using the `--unsafe-skip-upgrades` flag at the upgrade height:

```bash
sentinelhub start --unsafe-skip-upgrades <block_height>
```

This allows the node to continue syncing while minimizing downtime.