---
title: Chain Upgrade
description: How to use Cosmovisor during a chain upgrade
sidebar_position: 3
---

# Chain Upgrade

When the upgrade is available clone it, checkout at the new version and install it

```bash
git clone https://github.com/sentinel-official/hub.git "${HOME}/sentinelhub"
cd "${HOME}/sentinelhub"
git checkout <new_version>
make install
sudo ln -s "${GOBIN}/sentinelhub" /usr/local/bin/sentinelhub
```

Create the upgrade directory inside Cosmovisor with the name of the version (for the last upgrade was **v11** as you can see [here](https://ping.pub/sentinel/gov/30) under the section plan, tab name)

```bash
mkdir ~/.sentinelhub/cosmovisor/upgrades/<upgrade_name>/bin
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
{"name":"v11","time":"0001-01-01T00:00:00Z","height":12310005}
```

The Cosmovisor system identifies the existence of this file and triggers the required sequence of actions. These actions include pausing the node, inserting the relevant binary into the specified directory, and subsequently restarting the node.

This carefully orchestrated sequence guarantees a seamless transition and successful execution of the blockchain upgrade.