---
title: Cosmos Validator Exporter
sidebar_position: 3
---

# Cosmos Validator Exporter

[Cosmos Validator Exporter](https://github.com/QuokkaStake/cosmos-validators-exporter) can be used to create a dashboard for one or multiple validators, enabling you to visualize essential metrics such as the total staked amount, delegator count, and more. Additionally, you can set up alerts for various validator metrics, including their status, ranking, total staked amount, and more.

## Validator Machine

Execute the following operations on your validator machine

### Download & Installation

To get started, begin by downloading the most recent [release](https://github.com/QuokkaStake/cosmos-validators-exporter/releases). Once the download is complete, proceed to unzip the file, and you'll be all set to proceed.

```bash
mkdir cosmos-validator-exporter
cd cosmos-validator-exporter
wget https://github.com/QuokkaStake/cosmos-validators-exporter/releases/download/vX.X.X/cosmos-validators-exporter_X.X.X_linux_amd64.tar.gz
tar xvfz cosmos-validators-exporter_X.X.X_linux_amd64.tar.gz
sudo rm -f cosmos-validators-exporter_X.X.X_linux_amd64.tar.gz
```

Add a symbolic link to the `/usr/local/bin/` directory for system-wide access to Cosmos Validator Exporter:

```bash
sudo ln -s /home/<your_user>/cosmos-validator-exporter/cosmos-validator-exporter /usr/local/bin/
```

### Create a Config file

Inside your `cosmos-validator-exporter` directory create the config file:

```bash
nano config.toml
```

Paste the following code in it making sure to add your sentvaloper and sentvalcons addresses:

<details>
<summary>config.toml</summary>
<p>

```bash title="/home/<your_user>/cosmos-validator-exporter/config.toml"
# Global timeout for RPC queries, in seconds. Defaults to 5.
timeout = 5
# The address the exporter will listen on .Defaults to ":9560".
listen-address = ":9560"

# Logging config
[log]
# Log level. Change it to "debug" or even trace for more verbosity and debugging. Defaults to "info".
level = "debug"
# Whether all the logs should be written in JSON instead of a pretty-printed text. Useful if you have
# logging solutions, like ELK. Defaults to false.
json = false

# Per-chain config.
[[chains]]
# Chain name that will go into labels. Required.
name = "sentinel"
# LCD endpoint to query data from. Required.
lcd-endpoint = "https://api.sentinel.quokkastake.io"
# Coingecko currency, specify it if you want to also get the wallet balance
# in total in USD.
coingecko-currency = "sentinel"
# dexscreener.com's chain ID (usually ""osmosis") and pair (usually pool ID).
# Won't be used if coingecko-currency is provided.
# Either coingecko-currency or these two params are required for getting token price.
dex-screener-chain-id = "osmosis"
dex-screener-pair = "5"
# The chain's base denom. Only balances with this denom will be used
# to calculate wallet's USD price.
base-denom = "udvpn"
# The chain's display denom.
denom = "dvpn"
# The coefficient you need to multiply base denom to to get 1 token on Coingecko.
# Example: on Cosmos network the base denom is uatom, 1 atom = 1_000_000 uatom
# and 1 atom on Coingecko = $10, and your wallet has 10 atom, or 10_000_000 uatom.
# Then you need to specify the following parameters:
# coingecko-currency = "cosmos-hub"
# base-denom = "uatom"
# denom-coefficient = 1000000
# and after that, the /metrics endpoint will return your total balance as $100.
# Defaults to 1000000
denom-coefficient = 1000000
# Bech32 prefix for a wallet address (example: "cosmos" for a Cosmos wallet). If omitted,
# the self-delegation metric will not be present.
bech-wallet-prefix = "sent"
# List of validators to monitor.
# Address is required, consensus-address is optional but will result in omitting
# signing-infos metrics (like missed blocks counter).
# You can get your consensus-address by running "<appd> tendermint show-address" on your validator node,
# if you are not using KMS solutions.
validators = [
    { address = "<your_sentvaloper_address>", consensus-address = "<your_sentvalcons_address>" }
]
# List of queries to enable/disable.
# If the list is not provided, or the value for query is not specified,
# then this query will be enabled. Useful if some queries on some chains are broken or
# do not return any meaningful value (like signing info on e-Money) or are too heavy and
# the node can't handle such requests (like delegators count on Cosmos Hub).
[chains.queries]
# Query for validator info
validator = true
# Query for delegators count
delegations = true
# Query for unbonding delegations count
unbonds = true
# Query for self-delegated amount
self-delegation = true
# Query for all delegators count/ranking. Also used in total bonded tokens calculation.
validators = true
# Query for validator unclaimed commission
commission = true
# Query for validator unclaimed self-delegated rewards
rewards = true
# Query for validator wallet balance
balance = true
# Query for validator signing info
signing-info = true
# Query for chain slashing params/missed blocks window
slashing-params = true
# Query for chain staking params/max validators count
staking-params = true
```

</p>
</details>

### Add a system unit file

Create the .service file with a text editor

```bash
sudo nano /etc/systemd/system/cosmos-validator-exporter.service
```

Paste the below text

<details>
<summary>cosmos-validator-exporter.service</summary>
<p>

```bash title="/etc/systemd/system/cosmos-validator-exporter.service"
[Unit]
Description=Cosmos Validator Exporter
After=network-online.target
​
[Service]
User=<your_user> #modify this field with your user
TimeoutStartSec=0
CPUWeight=95
IOWeight=95
ExecStart=cosmos-validator-exporter --config /home/<your-user>/cosmos-validator-exporter/config.toml
Restart=always
RestartSec=2
LimitNOFILE=800000
KillSignal=SIGTERM
​
[Install]
WantedBy=multi-user.target
```

</p>
</details>

Reload the systemd Daemon

```bash
sudo systemctl daemon-reload
```

Enable autostart of Cosmos Validator Exporter service

```bash
sudo systemctl enable cosmos-validator-exporter.service
```

### Start Cosmos Validator Exporter service

```bash
sudo systemctl start cosmos-validator-exporter.service
```

Use this command to check logs in real time

```bash
sudo journalctl -u cosmos-validator-exporter.service -f --output cat
```

Once the Cosmos Validator Exporter is installed and running, you can verify that `metrics` are being exported by cURLing the /metrics endpoint:

```bash
curl http://localhost:9560/metrics
```

Success! Cosmos Validator Exporter is now exposing metrics that Prometheus can scrape, including a wide variety of system metrics further down in the output.

### Open Firewall Port

:::danger Important
After successfully installing and launching Cosmos Validator Exporter, the next step is to open port 9560 on your Validator's firewall. This port should be accessible exclusively from your monitoring machine. This action is essential to enable Prometheus to collect data from Cosmos Validator Exporter.

```bash
sudo ufw allow from monitor_ip to validator_ip port 9560
```
:::

## Monitoring Machine

On your monitoring machine, go to your prometheus directory and open your prometheus.yml file

```bash
sudo nano prometheus.yml
```

Add the cosmos validator exporter job into it, under `scrape_configs` block

```bash
 # Cosmos Validator Exporter
  - job_name: "cosmos-validator-exporter"

    static_configs:
      - targets: ["<your_validator_ip>:9560"]
```