---
title: Add a System Unit File
sidebar_label: "🧩 System Unit File"
sidebar_position: 5
---

# Add a System Unit File

:::tip Pick your service unit
Choose one of two systemd units to run the daemon. They are mutually exclusive:

- **`sentinelhub.service`**: runs the `sentinelhub` binary directly. You handle each chain upgrade by hand.
- **`cosmovisor.service`**: wraps the binary with [Cosmovisor](https://github.com/cosmos/cosmos-sdk/tree/main/tools/cosmovisor), which swaps in the new binary automatically at the upgrade height.

Both are valid for any full node, validator or RPC/API. Pick one and follow only that subsection.
:::

## Option 1: sentinelhub.service

Open the sentinelhub.service with a text editor

```bash
sudo nano /etc/systemd/system/sentinelhub.service
```

Paste the below text

<details>
<summary>sentinelhub.service</summary>
<p>

```bash title="/etc/systemd/system/sentinelhub.service"
[Unit]
Description=Sentinel Hub Daemon
After=network.target

[Service]
User=sentinel
Type=simple

# For Ubuntu installation
ExecStart=/usr/bin/sentinelhub start
# For Manual installation
ExecStart=/usr/local/bin/sentinelhub start

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

Enable autostart of Sentinel Hub service

```bash
sudo systemctl enable sentinelhub.service
```

## Option 2: cosmovisor.service

Cosmovisor is a tool within the Cosmos ecosystem that assists in the smooth and safe upgrade of the blockchain software. It helps automate the process of updating the software to a new version while ensuring a seamless transition and minimal disruptions to the network. This is crucial in maintaining the security and efficiency of the network as it evolves over time.

### Install Cosmovisor

To install Cosmovisor, use the following command:

```bash
go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@latest
```

If you encounter a sonic-related error during installation, retry with the following command:

```bash
go install -ldflags="-checklinkname=0" cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@latest
```

This command will generate the Cosmovisor binary in the `go/bin/` folder.

Add a symbolic link to the `/usr/local/bin/` directory for system-wide access to Cosmovisor:

```bash
sudo ln -s /home/sentinel/go/bin/cosmovisor /usr/local/bin/
```

(You may also refer to the Cosmovisor [installation instructions](https://github.com/cosmos/cosmos-sdk/tree/main/tools/cosmovisor#installation))

### Environment Setup

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
cosmovisor version: v1.7.0
11:03AM INF running app args=["version"] module=cosmovisor path=/home/sentinel/.sentinelhub/cosmovisor/genesis/bin/sentinelhub
12.0.1
```

To check your work, check sentinelhub version to confirm it matches with cosmovisor version

```bash
sentinelhub version
```

If you get `12.0.1` (which is the current version at the time of writing) everything went fine

### Create the cosmovisor.service file

Set up a service to allow Cosmovisor to run in the background as well as restart automatically if it runs into any problems:

```bash
sudo nano /etc/systemd/system/cosmovisor.service
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
Environment="DAEMON_HOME=/home/sentinel/.sentinelhub"
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"
Environment="DAEMON_LOG_BUFFER_SIZE=512"
Environment="UNSAFE_SKIP_BACKUP=true"
User=sentinel
ExecStart=/usr/local/bin/cosmovisor run start
Restart=always
RestartSec=3
LimitNOFILE=infinity
LimitNPROC=infinity

[Install]
WantedBy=multi-user.target
```

</p>
</details>

### Reload and enable

Reload the systemd Daemon

```bash
sudo systemctl daemon-reload
```

Enable autostart of Cosmovisor service

```bash
sudo systemctl enable cosmovisor.service
```
