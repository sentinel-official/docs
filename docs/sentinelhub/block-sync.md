# Block Sync
---

## Install Dependencies

### Update and Upgrade System

```bash
sudo apt update
sudo apt upgrade
```

### Install golang

```bash
sudo snap install go --classic
# Test Installation
go version
```

### Install apt packages

```bash
sudo apt-get install --yes git gcc make curl unzip jq
```

### Install sentinelhub

```bash
git clone https://github.com/sentinel-official/hub.git
cd hub
git checkout 0.6.3
make install
sudo mv $HOME/go/bin/sentinelhub /usr/bin/
# Test Installation
sentinelhub version --log_level error --long |& head -n6
```

### Setup env variables

```bash
CHAIN_ID=sentinelhub-2
MONIKER=<enter_moniker_name>
```

### Initialize sentinelhub

```bash
sentinelhub init ${MONIKER} --chain-id ${CHAIN_ID}
rm ${HOME}/.sentinelhub/config/genesis.json

curl -fsLS https://raw.githubusercontent.com/sentinel-official/networks/main/${CHAIN_ID}/genesis.zip -o ${HOME}/genesis.zip
unzip ${HOME}/genesis.zip -d ${HOME}/.sentinelhub/config/
rm ${HOME}/genesis.zip
```

### Set node config
Get config params from https://cosmos.directory/sentinel/nodes
#### Set config.toml
`vim ${HOME}/.sentinelhub/config/config.toml`
```bash
# Add peers to persistent_peers list. This is under the P2P section.
persistent_peers = "<persistent_peer_ids>"
# Add seeds to seeds list.
seeds = "<seed_ids>"

# IF NEEDED: Can enable prometheus. This is under the Instrumentation section.
prometheus = true
# Metrics exposed on Port: 26660

```
#### Set app.toml
Get minimum gas prices from,
`curl -fsLS https://raw.githubusercontent.com/sentinel-official/networks/main/${CHAIN_ID}/minimum-gas-prices.txt`

`vim ${HOME}/.sentinelhub/config/app.toml`
```bash
# Set minimum-gas-prices
minimum-gas-prices = "<minimum_gas_price>"

# IF NEEDED: Can setup unpruned node. This is under the Base Configuration section.
pruning = "nothing"

```

### Setup Systemd

```bash
# Create systemd service
sudo vim /etc/systemd/system/sentinelhub.service
# Paste below text
[Unit]
Description=Sentinel Hub Node
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/root
ExecStart=/usr/bin/sentinelhub start
Restart=on-failure
StartLimitInterval=0
RestartSec=3
LimitNOFILE=65535
LimitMEMLOCK=209715200

[Install]
WantedBy=multi-user.target
# Close and Save file

# Reload the service files
sudo systemctl daemon-reload
# Create the symlinlk
sudo systemctl enable sentinelhub.service
```

## Run Node

### Start Node

```bash
sudo systemctl start sentinelhub
# Watch logs
journalctl -u sentinelhub -f

```