---
title: Install and Configure Full Node
description: These steps will guide you on how to install and configure the Sentinel hub
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

Launch this command and make sure the hub version is the last (you can check [here](https://github.com/sentinel-official/hub/releases))

```bash
git clone https://github.com/sentinel-official/hub.git "${HOME}/sentinelhub"
cd "${HOME}/sentinelhub"
git checkout v0.11.3
make install
sudo ln -s "${GOBIN}/sentinelhub" /usr/local/bin/sentinelhub
```

## Configure Sentinel Hub

### Genesis File
Let's initialize the Sentinel Hub using the Genesis file, a JSON file which defines the initial state of Sentinel blockchain. The state defined in the genesis file contains all the necessary information, like initial coin allocation, genesis time, default parameters, and more

```bash
sentinelhub init --chain-id sentinelhub-2 "Your Validator Name"
curl -fsLS -o "${HOME}/genesis.zip" "https://raw.githubusercontent.com/sentinel-official/networks/main/sentinelhub-2/genesis.zip"
unzip -d "${HOME}/.sentinelhub/config/" "${HOME}/genesis.zip"
rm "${HOME}/genesis.zip"
```

You will be asked to replace the genesis file, type `[A]ll`

In case you need a mirror because the official hosting site does not work, use this:

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
- **Seeds**: are initial entry points for new nodes joining the network and are typically used during the bootstrap phase. In this phase, a new node connects to them to obtain information about the network's topology and to discover other nodes to connect to. The seeds you see below are taken from [here](https://github.com/QuokkaStake/ansible/blob/master/group_vars/sentinelhub_2)
- **Peers***: are usually nodes that a given node wants to maintain a reliable and consistent connection with, often because they have specific roles in the network or are deemed important for communication. The below peers were sent me by a Sentinel developer.

```bash title=${HOME}/.sentinelhub/config/config.toml
[p2p]
seeds = "05fe2a7847fd27345250915fd06752c424f40651@85.222.234.135:26656,387027e3b1180d3a619cbbf3462704a490785963@54.176.90.228:26656,63bd9cfce0f0d274aad5b166dd06d829021aec43@121.78.247.243:56656,855807cc6a919c22ec943050ebb5c80b23724ed0@3.239.11.246:26656,8caefbf8f4318ecc93f2c901cf11470e4a16c818@161.97.135.122:26656,9174af5f16f74660cccf49f893d243949af45f7f@54.177.29.46:26656,9fa528bd2b9e7c80724a1d8a4e1a2a8a83e7d123@142.93.72.221:26656,a77f6a094578dad899e2f40e0626b4c6d4705311@3.36.165.232:26656,bd45a11390d16d128a9eeea3935b53d7a1a3c120@15.236.127.69:26656,cdb8dd7628460a546ce1594ca0bc0c20366514cf@34.72.64.178:26656,d1efceccb04ded9a604e5235f76da86872157d68@161.97.149.223:26656,e00b23444cc8dbb353d5faa765ab36cfc0116b57@83.60.98.134:28685,e5ee89bd4fc371c6a0e66d2b8daefd891b6b87b5@157.90.117.58:26656,f7ceb735606f90df7eb6cd987641876955b6e325@46.4.55.150:36656,05fe2a7847fd27345250915fd06752c424f40651@85.222.234.135:26656,387027e3b1180d3a619cbbf3462704a490785963@54.176.90.228:26656,63bd9cfce0f0d274aad5b166dd06d829021aec43@121.78.247.243:56656,855807cc6a919c22ec943050ebb5c80b23724ed0@3.239.11.246:26656,8caefbf8f4318ecc93f2c901cf11470e4a16c818@161.97.135.122:26656,9174af5f16f74660cccf49f893d243949af45f7f@54.177.29.46:26656,9fa528bd2b9e7c80724a1d8a4e1a2a8a83e7d123@142.93.72.221:26656,a77f6a094578dad899e2f40e0626b4c6d4705311@3.36.165.232:26656,bd45a11390d16d128a9eeea3935b53d7a1a3c120@15.236.127.69:26656,cdb8dd7628460a546ce1594ca0bc0c20366514cf@34.72.64.178:26656,d1efceccb04ded9a604e5235f76da86872157d68@161.97.149.223:26656,e00b23444cc8dbb353d5faa765ab36cfc0116b57@83.60.98.134:28685,e5ee89bd4fc371c6a0e66d2b8daefd891b6b87b5@157.90.117.58:26656,f7ceb735606f90df7eb6cd987641876955b6e325@46.4.55.150:36656,ebc272824924ea1a27ea3183dd0b9ba713494f83@sentinel.mainnet.peer.autostake.net:26706,ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@seeds.polkachu.com:23956"
persistent_peers = "89757803f40da51678451735445ad40d5b15e059@169.155.169.176:26656,8d639d92a6de1032f361ca8deb56a60404b1c41d@65.21.136.170:56656,aae9c4dc31f1b050d1bcd13df0b9d9affc5df361@104.196.120.61:26656,9026bf3d313ef789e614f10eba8c6fcdde2e8768@54.176.220.6:26656,c0dc39bae9bc6cd3f54968f97b52a4ad5adfd37a@htz1.badgerbite.io:56656,b212d5740b2e11e54f56b072dc13b6134650cfb5@169.155.45.136:26656,464d1b0650ee82c975e1e7f40ae737f4f688ae32@178.154.212.189:26656,440d002ecaaf99a53ff551e1add65b60319ae1b3@131.153.175.94:30656,e7b825983d15eef809e929b44b2085dcec9d27b6@51.68.44.219:26556,e1b058e5cfa2b836ddaa496b10911da62dcf182e@23.88.21.228:26656,13a32c4a2bdd78d4017bedb60b1d61a8558b7a88@85.10.211.82:36656,2a426a8a0070a6830bad32b96cd3da1b7b6a2faa@65.108.11.250:29656,471518432477e31ea348af246c0b54095d41352c@169.155.47.161:26656,1ebe18d2d50f6bf548d974afc3e13ccdc9d1a04f@34.148.70.141:26656,ebc272824924ea1a27ea3183dd0b9ba713494f83@95.214.55.198:26706,e407ce1485c5c5abe86d4c4b04f21bc04c321edc@89.58.31.128:36656,905cce9ffa2c87e67288aca631108b20a686088b@195.201.63.87:46656,abc27c91439681b1e7fa4b08b54ebbcc42855973@65.108.195.12:26656,233592737772cf4e8aca29623cb54d53e978bf84@51.159.185.51:26656,1fc1a1219c14f8005116a97b0bc7e6a65a5343a1@35.196.143.233:26656,662ccbd8c9885ddff6800a707da3dc6b0c4ed49d@15.235.115.148:10001,a0b85e69890c142836cd4e14ac520dfc56907249@75.119.134.205:26656,01cf083bf6e4667c4c1d2bb9454a2e06d6d5e415@85.237.193.117:26656,442e7d3d100a91ed2d16c15879b36a8beef7faca@89.58.26.9:26656,c124ce0b508e8b9ed1c5b6957f362225659b5343@134.65.192.134:26656,e726816f42831689eab9378d5d577f1d06d25716@23.88.22.4:26656,44a6007450d5b8292c19e193ab53f5ad9861b60b@46.20.245.42:26656,e1be5e84e6f76bdc4d24d2f39830b6f50857e684@78.107.253.133:33656,4398bd773ac885b7365de3604eb487be10c54563@95.214.55.227:26706,f6e4a9bd29b8629dc93b813ec784114ca604dff8@65.108.238.219:23956"
```

Enable Prometheus for data scraping

```bash
prometheus = true

# Address to listen for Prometheus collector(s) connections
prometheus_listen_addr = ":26660"
```

Open the Prometheus port 26660 on Validator firewall which will be accessible only from your monitor machine

```bash
sudo ufw allow from monitor_ip to validator_ip port 26660
```

Open the app.toml file

```bash
sudo nano ${HOME}/.sentinelhub/config/app.toml
```

Set minimum gas prices

```bash title=${HOME}/.sentinelhub/config/app.toml
minimum-gas-prices = "0.01ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,0.01udvpn,0.01ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,0.01ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,0.01ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477"
```

### Add a system unit file

Open the sentinelhub.service with a text editor

```bash
sudo nano /etc/systemd/system/sentinelhub.service
```

Paste the below text

```bash title=/etc/systemd/system/sentinelhub.service
[Unit]
Description=Sentinel Hub Daemon
After=network.target

[Service]
User=sentinel
Type=simple
ExecStart=/home/sentinel/go/bin/sentinelhub start
Restart=on-failure
StartLimitInterval=0
RestartSec=5
LimitNOFILE=1048576
LimitMEMLOCK=2048132

[Install]
WantedBy=multi-user.target
```

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