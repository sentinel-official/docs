---
title: Setup & Config
description: The necessary steps to implement Cosmovisor
sidebar_position: 2
---

# Setup & Config

## Installation

To install Cosmovisor, use the following command:

```bash
go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@latest
```

This command will generate the Cosmovisor binary in the `go/bin/` folder.

Add a symbolic link to the `/usr/local/bin/` directory for system-wide access to Cosmovisor:

```bash
sudo ln -s /home/sentinel/go/bin/cosmovisor /usr/local/bin/
```

(You may also refer to the Cosmovisor [installation instructions](https://github.com/cosmos/cosmos-sdk/tree/main/tools/cosmovisor#installation))

## Environment Setup

Create the required directories inside your `~/.sentinelhub` folder:

```bash
mkdir -p ~/.sentinelhub/cosmovisor
mkdir -p ~/.sentinelhub/cosmovisor/genesis
mkdir -p ~/.sentinelhub/cosmovisor/genesis/bin
mkdir -p ~/.sentinelhub/cosmovisor/upgrades
```

Configure the environment variables according to your shell type, which may involve editing either `~/.profile` or `~/.bashrc`:

<details>
<summary>Environmental Variables</summary>
<p>

```bash
echo "# Cosmovisor Environmental Variables" >> ~/.bashrc
echo "export DAEMON_NAME=sentinelhub" >> ~/.bashrc
echo "export DAEMON_HOME=$HOME/.sentinelhub" >> ~/.bashrc
echo "export DAEMON_ALLOW_DOWNLOAD_BINARIES=false" >> ~/.bashrc
echo "export DAEMON_LOG_BUFFER_SIZE=512" >> ~/.bashrc
echo "export DAEMON_RESTART_AFTER_UPGRADE=true" >> ~/.bashrc
echo "export UNSAFE_SKIP_BACKUP=true" >> ~/.bashrc

source ~/.bashrc
```

</p>
</details>

You may leave out `UNSAFE_SKIP_BACKUP=true`, however the backup takes a decent amount of time and public snapshots of old states are available.

Copy the current `sentinelhub` binary into the `cosmovisor/genesis` folder:

```bash
cp $GOPATH/bin/sentinelhub ~/.sentinelhub/cosmovisor/genesis/bin
```

Now check the cosmovisor version

```bash
cosmovisor version
```

You will get something like that:

```bash
cosmovisor version: v1.5.0
11:03AM INF running app args=["version"] module=cosmovisor path=/home/sentinel/.sentinelhub/cosmovisor/genesis/bin/sentinelhub
0.11.3
```

To check your work, check sentinelhub version to confirm it matches with cosmovisor version

```bash
sentinelhub version
```

If you get `0.11.3` (which is the current version at the time of writing) everything went fine

## Set Up Cosmovisor Service

Set up a service to allow Cosmovisor to run in the background as well as restart automatically if it runs into any problems:

```bash
sudo nano cosmovisor.service
```

Add the following block

<details>
<summary>cosmovisor.service</summary>
<p>

```bash title="/etc/systemd/system/cosmovisor.service"
[Unit]
Description=Cosmovisor Daemon
After=network-online.target

[Service]
Environment="DAEMON_NAME=sentinelhub"
Environment="DAEMON_HOME=/home/your-user/.sentinelhub"
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"
Environment="DAEMON_LOG_BUFFER_SIZE=512"
Environment="UNSAFE_SKIP_BACKUP=true"
User=your-user
ExecStart=cosmovisor run start
Restart=always
RestartSec=3
LimitNOFILE=infinity
LimitNPROC=infinity

[Install]
WantedBy=multi-user.target
```

</p>
</details>

## Start Cosmovisor Service

Reload the daemon, stop `sentinelhub.service`, enable and start `cosmovisor.service`:

```bash
sudo systemctl daemon-reload
sudo systemctl enable cosmovisor.service
sudo systemctl stop sentinelhub.service
sudo systemctl start cosmovisor.service
```

Check the status of the service:

```bash
sudo systemctl status cosmovisor.service
```

To see live logs of the service:

```bash
journalctl -u cosmovisor.service -f --output=cat
```

If everything went fine you can either disable or remove `sentinelhub.service` as you do not need it anymore

```bash
sudo systemctl disable sentinelhub.service
sudo rm -f sentinelhub.service
```