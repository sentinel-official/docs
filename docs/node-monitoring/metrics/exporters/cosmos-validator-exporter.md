---
title: Cosmos Validator Exporter
sidebar_position: 5
---

# Cosmos Validator Exporter

[Cosmos Validator Exporter](https://github.com/QuokkaStake/cosmos-validators-exporter) can be used to create a dashboard for one or multiple validators, enabling you to visualize essential metrics such as the total staked amount, delegator count, and more. Additionally, you can set up alerts for various validator metrics, including their status, ranking, total staked amount, and more.

## Validator Machine

Execute the following operations on your validator machine

### Download & Installation

To get started, clone the Cosmos Validator Exporter [repository](https://github.com/QuokkaStake/cosmos-validators-exporter) on your validator and compile the binary. Make sure you have Go installed before proceeding.

```bash
git clone https://github.com/QuokkaStake/cosmos-validators-exporter
cd cosmos-validators-exporter
make build
```

Add a symbolic link to the `/usr/local/bin/` directory for system-wide access to Cosmos Validator Exporter:

```bash
sudo ln -s /home/${USER}/cosmos-validators-exporter/cosmos-validators-exporter /usr/local/bin/
```

### Create a Config file

Inside your `cosmos-validators-exporter` directory create the config file:

```bash
nano config.toml
```

Paste the following code in it making sure to add your sentvaloper and sentvalcons addresses:

<details>
<summary>config.toml</summary>
<p>

```bash title="/home/${USER}/cosmos-validators-exporter/config.toml"
# Global timeout for RPC queries, in seconds. Defaults to 5.
timeout = 10
# The address the exporter will listen on .Defaults to ":9560".
listen-address = ":9560"

# Logging config
[log]
# Log level. Change it to "debug" or even trace for more verbosity and debugging. Defaults to "info".
level = "debug"
# Whether all the logs should be written in JSON instead of a pretty-printed text. Useful if you have
# logging solutions, like Elastic stack. Defaults to false.
json = false

# Per-chain config.
[[chains]]
# Chain name that will go into labels. Required.
name = "sentinel"
# LCD endpoint to query data from. Required.
lcd-endpoint = "https://api.sentineldao.com"
# Chain's base denom. Required.
# This value is used to convert denoms (e.g. if you have a balance with denom=uatom,
# a denom in config with denom=uatom and display-denom=atom, then it will be converted).
# Also, it will be prepended as a denom to metrics like total delegations of a validator
# and total bonded.
base-denom = "udvpn"
# Denoms info.
# Used when calculating metric for token price.
# This is an array of objects with following values:
# 1. coingecko-currency
# Coingecko currency, specify it if you want to also get the wallet balance
# in total in USD as a standalone metric. Optional.
# 2. denom
# The actual denom value (such as "uatom" for Cosmos Hub or "ibc/xxxxx" for IBC denoms). Required.
# 3. display-denom
# The denom that'll be returned in labels. Required.
# 4. denom-exponent
# The exponent of a coefficient you need to multiply base denom to get 1 token on Coingecko.
# Optional, defaults to 6 (so a coefficient == 1_000_000).
# 5. ignore
# Whether the denom should be ignored and not returned in metrics.
# If specified as true, the exporter would not export this value as metric value in all the places
# when it does a denom conversion (rewards, commission, self-delegation, voting power etc.)
# when it does a denom conversion (rewards, commission, self-delegation, voting power etc.)
# Ignoring a base denom is quite pointless as it would effectively strip most of the useful metrics.
# Useful for chains where there are tokens of really low value (see Cosmos Hub and their stXXX dust
# tokens for example).
# Optional, defaults to false (so, not ignored).
# Keep in mind that if ignore = false, but coingecko-currency is provided, it will still fetch
# Coingecko price for this token.
#
# You can calculate the actual price of something by multiplying the metric that has denoms by the
# `cosmos_validators_exporter_price` metric (by chain + denom).
denoms = [
    { denom = "udvpn", display-denom = "dvpn", coingecko-currency = "sentinel", denom-exponent = 6, ignore = false },
]
# Bech32 prefix for a wallet address (example: "cosmos" for a Cosmos wallet). If omitted,
# the self-delegation metric will not be present.
bech-wallet-prefix = "sent"
# List of validators to monitor.
# Address is required, consensus-address is optional but will result in omitting
# signing-infos metrics (like missed blocks counter).
# You can get your consensus-address by running "<appd> tendermint show-address" on your validator node,
# if you are not using KMS solutions.
# If you are using it to track a consumer chain validator and if you are using the assigned key,
# please make sure to use the consensus address of this chain and not the provider chain one.
validators = [
    { address = "<your_senvaloper_address>", consensus-address = "<your_sentvalcons_address>" }
]
# Set this to true for ICS provider chains (such as Cosmos Hub).
# If true, it enabled querying provider's consumer chains, which will fail if ICS is not enabled
# (so for all chains except Cosmos Hub basically).
# Defaults to false.
is-provider = false

# List of queries to enable/disable.
# If the list is not provided, or the value for query is not specified,
# then this query will be enabled. Useful if some queries on some chains are broken or
# do not return any meaningful value (like signing info on e-Money) or are too heavy and
# the node can't handle such requests (like delegators count on Cosmos Hub).
[chains.queries]
# Query for delegators count. Isn't used on consumer chains.
delegations = true
# Query for unbonding delegations count. Isn't used on consumer chains.
unbonds = true
# Query for self-delegated amount. Isn't used on consumer chains.
self-delegation = true
# Query for all delegators count/ranking. Also used in total bonded tokens calculation and validator info.
validators = true
# Query for consumer chain's validators. Used in metric representing active validators count on chain.
consumer-validators = true
# Query for consumer chains list and info on provider. Only used on ICS provider chains.
consumer-info = true
# Query for validator unclaimed commission. Isn't used on consumer chains.
commission = true
# Query for validator unclaimed self-delegated rewards. Isn't used on consumer chains.
rewards = true
# Query for validator wallet balance
balance = true
# Query for validator's consumer assigned key. Only used for ICS.
# If disabled, then it'll be assumed that the validator is not using assigned keys.
assigned-key = true
# Query for validator signing info
signing-info = true
# Query for chain slashing params/missed blocks window
slashing-params = true
# Query for consumer's soft opt-out threshold. Is only used on consumer chains.
params = true
# Query for chain staking params/max validators count. Isn't used on consumer chains.
staking-params = true
# Query for node info (chain_id, app/cosmos-sdk/tendermint version, app name)
node-info = true
```

</p>
</details>

### Add a system unit file

Create the .service file with a text editor

```bash
sudo nano /etc/systemd/system/cosmos-validators-exporter.service
```

Paste the below text

<details>
<summary>cosmos-validators-exporter.service</summary>
<p>

```bash title="/etc/systemd/system/cosmos-validators-exporter.service"
[Unit]
Description=Cosmos Validator Exporter
After=network-online.target
​
[Service]
User=<your_user> #modify this field with your user
TimeoutStartSec=0
CPUWeight=95
IOWeight=95
ExecStart=cosmos-validators-exporter --config /home/<your-user>/cosmos-validators-exporter/config.toml
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
sudo systemctl enable cosmos-validators-exporter.service
```

### Start Cosmos Validator Exporter service

```bash
sudo systemctl start cosmos-validators-exporter.service
```

Use this command to check logs in real time

```bash
sudo journalctl -u cosmos-validators-exporter.service -f --output cat
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
  - job_name: "cosmos-validators-exporter"

    static_configs:
      - targets: ["<your_validator_ip>:9560"]
```