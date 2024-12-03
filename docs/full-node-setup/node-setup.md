---
title: Install and Configure Full Node
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
git clone https://github.com/sentinel-official/hub.git "${HOME}/sentinelhub"
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
- **Peers***: are usually nodes that a given node wants to maintain a reliable and consistent connection with, often because they have specific roles in the network or are deemed important for communication. The below peers were taken from [Polkachu Validator](https://polkachu.com/live_peers/sentinel)


```bash title="${HOME}/.sentinelhub/config/config.toml"
[p2p]
seeds = ""
persistent_peers = ""
```

Add the followings:

<details>
<summary>Seeds</summary>
<p>

```bash
05fe2a7847fd27345250915fd06752c424f40651@85.222.234.135:26656,387027e3b1180d3a619cbbf3462704a490785963@54.176.90.228:26656,63bd9cfce0f0d274aad5b166dd06d829021aec43@121.78.247.243:56656,855807cc6a919c22ec943050ebb5c80b23724ed0@3.239.11.246:26656,8caefbf8f4318ecc93f2c901cf11470e4a16c818@161.97.135.122:26656,9174af5f16f74660cccf49f893d243949af45f7f@54.177.29.46:26656,9fa528bd2b9e7c80724a1d8a4e1a2a8a83e7d123@142.93.72.221:26656,a77f6a094578dad899e2f40e0626b4c6d4705311@3.36.165.232:26656,bd45a11390d16d128a9eeea3935b53d7a1a3c120@15.236.127.69:26656,cdb8dd7628460a546ce1594ca0bc0c20366514cf@34.72.64.178:26656,d1efceccb04ded9a604e5235f76da86872157d68@161.97.149.223:26656,e00b23444cc8dbb353d5faa765ab36cfc0116b57@83.60.98.134:28685,e5ee89bd4fc371c6a0e66d2b8daefd891b6b87b5@157.90.117.58:26656,f7ceb735606f90df7eb6cd987641876955b6e325@46.4.55.150:36656,05fe2a7847fd27345250915fd06752c424f40651@85.222.234.135:26656,387027e3b1180d3a619cbbf3462704a490785963@54.176.90.228:26656,63bd9cfce0f0d274aad5b166dd06d829021aec43@121.78.247.243:56656,855807cc6a919c22ec943050ebb5c80b23724ed0@3.239.11.246:26656,8caefbf8f4318ecc93f2c901cf11470e4a16c818@161.97.135.122:26656,9174af5f16f74660cccf49f893d243949af45f7f@54.177.29.46:26656,9fa528bd2b9e7c80724a1d8a4e1a2a8a83e7d123@142.93.72.221:26656,a77f6a094578dad899e2f40e0626b4c6d4705311@3.36.165.232:26656,bd45a11390d16d128a9eeea3935b53d7a1a3c120@15.236.127.69:26656,cdb8dd7628460a546ce1594ca0bc0c20366514cf@34.72.64.178:26656,d1efceccb04ded9a604e5235f76da86872157d68@161.97.149.223:26656,e00b23444cc8dbb353d5faa765ab36cfc0116b57@83.60.98.134:28685,e5ee89bd4fc371c6a0e66d2b8daefd891b6b87b5@157.90.117.58:26656,f7ceb735606f90df7eb6cd987641876955b6e325@46.4.55.150:36656,ebc272824924ea1a27ea3183dd0b9ba713494f83@sentinel.mainnet.peer.autostake.net:26706,ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@seeds.polkachu.com:23956
```

</p>
</details>

<details>
<summary>Peers</summary>
<p>

```bash
f6ba2e3e719428d17b045b43585dd9dcca66e76b@135.181.129.122:14656,e7b825983d15eef809e929b44b2085dcec9d27b6@51.68.44.219:26556,c124ce0b508e8b9ed1c5b6957f362225659b5343@134.65.192.134:26656,9055a3f947fd5eb8027f2a6958026b68eea2da81@157.90.2.111:26656,dd51ff321f29b59b51eedb8682acb3a9f07d44a6@138.201.131.133:26656,1154ef380c350885aef8a2fae6dc308f6844594a@65.108.6.54:50656,00673903c9a12081c7713b6757f62a8c7d7ffcbf@51.159.110.196:26656,1cdf6c69df0a0da5de77bce15270baa0d709d936@51.159.15.87:26656,2a426a8a0070a6830bad32b96cd3da1b7b6a2faa@65.108.11.250:29656,d2d9596df39d9b57ab1f01b8dea1b346178bf6e4@63.33.136.84:26656,2d786027097ca30c5843cf9f11c14a270499d305@3.85.203.113:26656,9c42bcb0d931b6387b4f808f540139bcd5bda968@131.153.174.14:53656,b60ca3f9ec0d72773ed3ea10bdc7acb90e05dea2@51.161.87.126:26656,4506adc06a18029f5620570cfe8cf0144a550125@135.181.216.151:50656,4398bd773ac885b7365de3604eb487be10c54563@95.214.55.227:26706,f0e52da07b2de80d751108ae63c6b2f25b4685a7@23.88.77.182:23956,7a13027588da83f557a176608c785f79ede84564@66.172.36.135:26656,471518432477e31ea348af246c0b54095d41352c@169.155.47.161:26656,a8bf4b3586ad57190d2f60b0e12fc80c138776e7@65.108.234.18:26656,18248ce04952a7e8fab4092eeabff97f6faaeca5@172.105.118.223:26656,fde9b8ae8348c911a1cb149372fa527ed095cbdc@154.12.246.226:26656,c5315e5e43e8e718c7c926c75b651e398750a4f8@137.220.50.79:26656,adad660c3110c10ca0e2f5e434c2f54b9dcb4e60@212.95.53.148:26656,662ccbd8c9885ddff6800a707da3dc6b0c4ed49d@15.235.115.148:10001,694324d39f53d6e6a0f79d33f535d0ee4a96f74a@37.120.245.177:26656,fd1c929dc0c2ce6418b6ed31747469de6c7b15bb@159.223.62.122:26656,25ee0fc9ba93cfcbee369f8c1f8d5d3bf06d1b76@34.23.21.55:26656,99f7fe677d2b5262fe95fb21e3edc5b9fc16fc4f@218.102.97.67:26706,c462db7a9b0d0ac8d26bddf55ed3ebff13219e51@51.159.221.58:26656,b46d8fea2e951ba21594c047c8746ab6dc315cea@65.109.99.157:16604,1c3409fde1bfe7719df8c60c56284ee36b4940e5@88.205.101.222:26656,97e4468ac589eac505a800411c635b14511a61bb@164.152.162.52:26656,6b9054afcd76719a4262694478ede8233e6bd7fb@168.119.64.123:26656,fb71d5064bcb1819f1aa49bf78576b4818fe914f@135.181.28.89:14656,38df1e987161e459b8637ab09cb6cef71ebd5035@109.199.115.65:26656,356e02cf1bb1df0e34e5c9f0470c0ad677bee6d6@185.150.26.184:26656,1bd8ddc05c1c267789854a91ab1d5fd0f5aded15@146.19.24.61:26656,4e43a3028f9c5e2e072b9445176a116245a2558e@135.181.5.232:23956,ef48f35580cf0034e12ca05eafd202a0cc0b577b@75.119.148.134:26656,752240820f1518d37a3c786b8617b9e30727d320@65.21.96.69:27156,dfd4db1ad111c62c83fa300af0092b253773aecc@65.108.106.135:26686,182c428b5ff02dc44bdc20a782b28f0cea204bd4@170.39.193.124:26656,73ef1c0f9bc77fd925decf7fa41f22a35b5dc76d@185.38.19.3:26630,8ebf4283512f708c2aee9d52e37aa694a5ec597a@49.12.165.122:26103,0d9f4ae53eb69d4790e9633094b19e0ff18c6e82@5.10.24.84:26656,212151a8cc307cdc5ad18a174a5cb181fbc7a153@134.65.194.144:27057,5ace0e57784e34930360bf6cc00dd5265278f708@65.108.238.166:23956,45ed1c0498e1ba7894e1362d533583b8c0fa1ae7@136.243.67.189:23956,ada37df88e50dd6b04571f8aa010a700d953e89a@138.201.60.188:26656,09423cc26d5490db197f944908eb2a13ec1c1288@65.108.103.184:25656,6a535c17deedfa178c8bb9c863b0f646e42f978e@163.172.74.144:26656,e1be5e84e6f76bdc4d24d2f39830b6f50857e684@78.107.253.133:33656,89757803f40da51678451735445ad40d5b15e059@169.155.169.176:26656,ecfdb8448a098ba96dc4b379d4e121df96fd706c@172.172.233.101:26656,ee49aa4d21783178781ab7b08922e3a4e288d977@178.63.93.41:50656,39ebd409f6d7bf68276955ded8f44bb3703a3273@65.108.199.42:26656,26422b225939a310fe1022730b38149a69d7d97e@38.242.200.201:26656,578993078e27b2b5f0c205becd3ad263fb9c366b@192.99.4.66:26796,d6d3b940785d0135e53e38bc4639e1cbce47e983@88.99.199.5:26656,2ab3546280efea3be610c1ba89d3d0bdb3f3cf22@51.158.204.245:26656,9045af707b492d02d05a7865a126d80d15627d91@65.109.97.51:26656,e46ba943d251e353bfc1571a168affff30e420fa@65.108.235.36:21656,22efb76a378788caf3bfe3b1ee5e488585e00e6b@51.178.65.225:51656,062847a82a69469c582429235c1b86365b92294d@65.21.201.244:26706,c0ba6216feb4527d6259392f61506fd1ddacc9c9@37.77.107.133:26609,9cb35c25ad0054c8630ea7595a7c60bbc8050c69@54.195.97.95:26656,dc8f68628bf86052fc12223abb9c258b95d677de@95.217.198.248:26656,42aa73ec8d4ec2ffb1c460dde7419991062bd084@138.197.190.122:31981,4e1c2471efb89239fb04a4b75f9f87177fd91d00@169.155.171.37:26656,c07e0facb3ed082e75a4f1e49ea31570c00923c2@188.34.151.177:26656,b212d5740b2e11e54f56b072dc13b6134650cfb5@169.155.45.136:26656,c1db58c070a76784ec203bcb9d51bb6c60737fb7@142.132.131.184:26686,493c4bee520125dea7b93bbe054b0e3918130f3f@46.38.251.243:26656,5781d45c4cce9cc748cf19afdab11e3ec2b21147@116.202.243.94:26656,d1f02ec2c3447e7a218ece5a2aab8f114dece309@167.114.118.234:26796,87b8675bc38f3d309e8fbedb860dd68ded7597f4@202.61.251.234:26656,29136bb5225bf2d20a5d42cd5d2ebb51b8135e18@102.223.5.249:26656,1f95bc704608d6f3d42bfce58e0fefbaef818891@89.149.218.78:26656,e1b058e5cfa2b836ddaa496b10911da62dcf182e@169.155.168.109:26656,ebc272824924ea1a27ea3183dd0b9ba713494f83@195.3.223.168:26706,4c011a64e66a38df4139ad2af5e8fe0798d00624@65.109.97.249:23956,66d0d22dc5e1e542c200da1fc097dae5ea1f3b4e@195.201.175.156:17256,79fe75a45a0e917bb81735fa76d59386c8d4934c@159.89.12.179:26656,79d1dd52fd031dfe4bcb849a39c02b145f12bd8f@38.46.221.75:26656,a527530ec76a3aaac8e18af8b6e33ae1f8170210@154.26.136.5:26656,a2e82bcafc58910b8e0f6cf06ab4e4f1993784c0@202.81.235.65:26656,fb530884639768a9bd3ae5d32cd182ada1b19066@135.181.62.165:26656,d05d4f304a5e736b09b955da53f1d4076a1bcb2a@142.54.174.234:26656,824a44e2332d402969582fbbb3e40b2e8c4855de@207.148.0.61:26656,1ac6746cb5163fc90b6707df802fc1bb63e56035@45.10.26.114:26656,ae9242d78fc004e1c437c5749eb3c0cbab7e879d@159.65.228.219:26656
```

</p>
</details>

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

Set minimum gas prices for udvpn and other supported IBC tokens

```bash title="${HOME}/.sentinelhub/config/app.toml"
minimum-gas-prices = "0.01ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,0.1udvpn,0.01ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,0.01ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,0.01ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477"
```

Under the `[api]` code block set:

```bash
[api]

# Enable defines if the API server should be enabled.
enable = true

# Address defines the API server to listen on.
address = "tcp://0.0.0.0:1317"
```

### Add a system unit file

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