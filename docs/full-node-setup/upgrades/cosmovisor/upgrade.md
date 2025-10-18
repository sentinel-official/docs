---
title: Binary Upgrade
description: How to use Cosmovisor during an upgrade
sidebar_position: 3
---

# Binary Upgrade

When the upgrade is available clone the Sentinel Hub [repository](https://github.com/sentinel-official/hub), checkout at the new version and install it

```bash
git clone https://github.com/sentinel-official/sentinelhub.git "${HOME}/sentinelhub"
cd "${HOME}/sentinelhub"
git checkout <new_version>
make install
```

An upgrade to the blockchain can either be consensus-breaking or non-consensus-breaking. The procedural steps to be followed depend on the type of consensus involved.

## Consensus Breaking (Chain Upgrade)

Create the upgrade directory inside Cosmovisor with the name of the version (for the last upgrade was **v11** as you can see [here](https://ping.pub/sentinel/gov/30) under the section plan, tab name)

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

## Non Consensus Breaking

The non-consensus breaking process involves the seamless replacement of the current sentinel binary with the updated version.

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