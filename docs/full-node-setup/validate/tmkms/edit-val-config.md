---
title: Edit Validator Config
description: Modify your validator config.toml file
sidebar_position: 4
---

# Edit Validator Config

Now we need the validator config file to use the port you selected in the tmkms.toml file.

To do this open the config file

```bash
nano $HOME/.sentinelhub/config/config.toml
```

Set the field private validator listening address

```bash title="$HOME/.sentinelhub/config/config.toml"
priv_validator_laddr = "tcp://0.0.0.0:26659"
```

It is also recommended to comment out the `priv_validator_key_file` line and the `priv_validator_state_file` line:

```bash title="$HOME/.sentinelhub/config/config.toml"
# Path to the JSON file containing the private key to use as a validator in the consensus protocol
# priv_validator_key_file = "config/priv_validator_key.json"

# Path to the JSON file containing the last sign state of a validator
# priv_validator_state_file = "data/priv_validator_state.json"
```

:::danger Important
Open port 26659 on the Validator firewall to accept incoming traffic exclusively from the TMKMS machine.

```bash
sudo ufw allow from tmkms_ip to validator_ip port 26659
```
:::