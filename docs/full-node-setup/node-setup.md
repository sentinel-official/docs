---
title: Full Node Setup
sidebar_position: 4
---

# Install and Configure Full Node

## Enable ports on Firewall

Set up these ports on your firewall:

```bash
sudo ufw allow 26656/tcp
```

Check firewall status to see if the port has been enabled

```bash
sudo ufw status
```

## Install Sentinel Hub

To install Sentinel Hub, please download the latest version from the [repository](https://github.com/sentinel-official/hub/releases) and proceed by executing the following commands:

```bash
git clone https://github.com/sentinel-official/sentinelhub.git "${HOME}/sentinelhub"
cd "${HOME}/sentinelhub"
git checkout vX.X.X
make install

# For Ubuntu installation
sudo ln -s "${GOBIN}/sentinelhub" /usr/bin/sentinelhub

# For manual installation
sudo ln -s "${GOBIN}/sentinelhub" /usr/local/bin/sentinelhub
```

## Configure Sentinel Hub

### Genesis File

Let's initialize the Sentinel Hub using the Genesis file, a JSON file which defines the initial state of Sentinel blockchain. The state defined in the genesis file contains all the necessary information, like initial coin allocation, genesis time, default parameters, and more

```bash
sentinelhub init --chain-id sentinelhub-2 "Your Full Node Name"
curl -fsLS -o "${HOME}/genesis.zip" "https://raw.githubusercontent.com/sentinel-official/networks/main/sentinelhub-2/genesis.zip"
unzip -d "${HOME}/.sentinelhub/config/" "${HOME}/genesis.zip"
rm "${HOME}/genesis.zip"
```

You will be asked to replace the genesis file, type `[A]ll`

In case you need a mirror because the official hosting site does not work, use this from `Polkachu`:

```bash
wget -O genesis.json https://snapshots.polkachu.com/genesis/sentinel/genesis.json --inet4-only
mv genesis.json ~/.sentinelhub/config
```

### Edit the Node configuration file

Open the config.toml file

```bash
sudo nano ${HOME}/.sentinelhub/config/config.toml
```

Set seeds and peers separated by comma.

- **Seeds**: are initial entry points for new nodes joining the network and are typically used during the bootstrap phase. In this phase, a new node connects to them to obtain information about the network's topology and to discover other nodes to connect to.
- **Peers***: are usually nodes that a given node wants to maintain a reliable and consistent connection with, often because they have specific roles in the network or are deemed important for communication.

The following seeds and peers are provided by [Busurnode](https://busurnode.com/network/sentinel).

```bash title="${HOME}/.sentinelhub/config/config.toml"
[p2p]
seeds = "a41a600ece63cd7ff7ff1a8a93002c9c46771c7b@seeds.busurnode.com:21056"
persistent_peers = "69ad69d517326d38661325517d7bf7cce065b4eb@mizu.busur.net:21056,f309f97644f084819619c41acdfcd6cf56aebaa3@saki.busur.net:21056,a527530ec76a3aaac8e18af8b6e33ae1f8170210@chie.busur.net:21056"
```

If you'd like to add or use other peers, you can find options from trusted sources like [Polkachu](https://polkachu.com/live_peers/sentinel) or [AutoStake](https://autostake.com/networks/sentinel/)

If you plan to use State Sync to run your node, simply set it to `true`:

```bash
[statesync]
enable = true
```

Enable Prometheus for data scraping

```bash
prometheus = true

# Address to listen for Prometheus collector(s) connections
prometheus_listen_addr = ":26660"
```

Open the Prometheus port 26660 on your Full Node firewall which will be accessible only from your monitor machine

```bash
sudo ufw allow from monitor_ip to full_node_ip port 26660
```

Open the app.toml file

```bash
sudo nano ${HOME}/.sentinelhub/config/app.toml
```

Establish minimum gas prices for udvpn and other supported IBC tokens. You can find the minimum gas prices for udvpn [here](https://raw.githubusercontent.com/sentinel-official/networks/main/sentinelhub-2/minimum-gas-prices.txt).

```bash title="${HOME}/.sentinelhub/config/app.toml"
minimum-gas-prices = "0.01ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,0.1udvpn,0.01ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,0.01ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,0.01ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477"
```

### Add a system unit file

If you're using [Cosmovisor](/full-node-setup/upgrades/cosmovisor), you can skip this step.

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

Let's make sure to assign ownership of all sentinelhub files to the current user (in our case, 'sentinel')

```bash
sudo chown -R sentinel:sentinel ~/.sentinelhub
```

Reload the systemd Daemon

```bash
sudo systemctl daemon-reload
```

Enable autostart of Sentinel Hub service

```bash
sudo systemctl enable sentinelhub.service
```