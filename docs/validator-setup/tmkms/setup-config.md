---
title: Setup & Config
Description: Full TMKMS installation and configuration process
sidebar_position: 3
---

# Setup & Config

## Installation

In this example, we will be compiling from the github source code using the `--features=softsign` flag, however you may use `--features=yubihsm` if you want to use a yubikey (ledger support is not working properly at the moment, and this guide will not go into using yubihsm).

```bash
cd $HOME
git clone https://github.com/iqlusioninc/tmkms.git
cd $HOME/tmkms
cargo install tmkms --features=softsign
tmkms init config
tmkms softsign keygen ./config/secrets/secret_connection_key
```

Add a symbolic link to the `/usr/local/bin/` directory for system-wide access to TMKMS:

```bash
sudo ln -s /home/<your_user>/.cargo/bin/tmkms /usr/local/bin/
```

## Transfer Private Validator Key

Now we will transfer your validator private key from your validator to your machine running TMKMS. To do this we will use scp command, but it can also be done manually:

```bash
scp user@validator_ip:~/.sentinelhub/config/priv_validator_key.json ~/tmkms/config/secrets
```

Then, import the private validator key into tmkms:

```bash
tmkms softsign import $HOME/tmkms/config/secrets/priv_validator_key.json $HOME/tmkms/config/secrets/priv_validator_key
```

This newly created `priv_validator_key` will be what TMKMS will use to sign for your validator.

Now you can safely remove `priv_validator_key.json` from your tmkms node and store it safely offline in case of an emergency.

```bash
sudo rm -f /home/myuser/tmkms/config/secrets/priv_validator_key.json
```

## TMKMS Config

Open the tmkms config file

```bash
sudo nano ~/tmkms/config/tmkms.toml
```

In this example, my validator has the IP address of validator_ip and we will be using port 26659 to feed the validator key to the validator. We will also be using chain_id sentinelhub-2

<details>
<summary>tmkms.toml</summary>
<p>

```bash title="~/tmkms/config/tmkms.toml"
# Tendermint KMS configuration file

## Chain Configuration

### Sentinel Network

[[chain]]
id = "sentinelhub-2"
key_format = { type = "bech32", account_key_prefix = "sentpub", consensus_key_prefix = "sentvalconspub" }
state_file = "home/<your_user>/tmkms/config/state/priv_validator_state.json"

## Signing Provider Configuration

### Software-based Signer Configuration

[[providers.softsign]]
chain_ids = ["sentinelhub-2"]
key_type = "consensus"
path = "/home/<your_user>/tmkms/config/secrets/priv_validator_key"

## Validator Configuration

[[validator]]
chain_id = "sentinelhub-2"
addr = "tcp://validator_ip:26659" #insert validator ip
secret_key = "/home/<your_user>/tmkms/config/secrets/kms-identity.key"
protocol_version = "v0.34" #check the version match with the one of your validator
reconnect = true
```

</p>
</details>

## Add a system unit file

Create the tmkms.service with a text editor

```bash
sudo nano /etc/systemd/system/tmkms.service
```

Paste the below text

<details>
<summary>tmkms.service</summary>
<p>

```bash title="/etc/systemd/system/tmkms.service"
[Unit]
Description=TMKMS Daemon
After=network.target

[Service]
User=<your_user>
Type=simple
ExecStart=tmkms start -c /home/<your_user>/tmkms/config/tmkms.toml
Restart=on-failure
StartLimitInterval=0
RestartSec=5
LimitNOFILE=1048576
LimitMEMLOCK=2048132

[Install]
WantedBy=multi-user.target
```

</p>
</details>

Reload the systemd Daemon

```bash
sudo systemctl daemon-reload
```

Enable autostart of tmkms service

```bash
sudo systemctl enable tmkms.service
```