---
title: Cosmos Node Exporter
sidebar_position: 4
---

# Cosmos Node Exporter

[Cosmos Node Exporter](https://github.com/QuokkaStake/cosmos-node-exporter) is a Prometheus scraping tool designed to monitor your node. It enables you to set up alerting for various critical conditions, such as:

- Notification for new releases: Receive alerts when your application version doesn't match the latest release on GitHub, keeping you informed about important updates.
- Voting Power Monitoring: Get alerted if the voting power of your validator node drops to zero, helping you quickly address any issues affecting your node's participation in the network.
- Node Synchronization: Stay informed about the progress of your node's synchronization, ensuring that it doesn't fall behind and remains up-to-date with the network.
- Chain Upgrade Readiness: Receive notifications when chain upgrades are available, but your node lacks the necessary binary files, ensuring that your node is always prepared for network upgrades.

## Validator Machine

Execute the following operations on your validator machine

### Download & Installation

To get started, begin by downloading the most recent [release](https://github.com/QuokkaStake/cosmos-node-exporter/releases). Once the download is complete, proceed to unzip the file, and you'll be all set to proceed.

```bash
mkdir cosmos-node-exporter
cd cosmos-node-exporter
wget https://github.com/QuokkaStake/cosmos-node-exporter/releases/download/v3.1.0/cosmos-node-exporter_3.1.0_linux_amd64.tar.gz
tar xvfz cosmos-node-exporter_3.1.0_linux_amd64.tar.gz
sudo rm -f cosmos-node-exporter_3.1.0_linux_amd64.tar.gz
```

Add a symbolic link to the `/usr/local/bin/` directory for system-wide access to Cosmos Node Exporter:

```bash
sudo ln -s /home/<your_user>/cosmos-node-exporter/cosmos-node-exporter /usr/local/bin/
```

### Create a Config file

Inside your `cosmos-node-exporter` directory create the config file:

```bash
sudo nano config.toml
```

Paste the following code in it making sure to edit the fields between `<` and `>` characters

<details>
<summary>config.toml</summary>
<p>

```bash title="/home/<your_user>/cosmos-node-exporter/config.toml"
# Logging configuration.
[log]
# Verbosity level. Set to `debug` or even `trace` to make it more verbose. Defaults to `info`.
level = "debug"
# Whether to print logs in JSON format. Useful if you are using centralised logs solutions like ELK.
# Defaults to false.
json = false

# Tendermint configuration
[tendermint]
# If set to false, the metrics related to Tendermint node would be disabled. Defaults to true.
enabled = true
# Tendermint RPC address. Defaults to "http://localhost:26657".
address = "http://localhost:26657"
# If set to false, upgrades metrics won't be queried. Useful for chains that use Tendermint
# but not cosmos-sdk, such as Nomic. Defaults to true.
query-upgrades = true

[cosmovisor]
# If set to false, the metrics related to Cosmovisor would be disabled. Defaults to true.
enabled = true
# Path to folder storing fullnode data and configs (like ~/.gaia for cosmoshub).
chain-folder = "/home/<your_user>/.sentinelhub"
# Binary name (like gaiad for cosmoshub)
chain-binary-name = "sentinelhub"
# Cosmovisor path (usually located at ~/go/bin/cosmovisor)
cosmovisor-path = "/home/<your_user>/go/bin/cosmovisor"

# Github configuration.
[github]
# Repository path. Omitting it will result in disabling Github metrics.
repository = "https://github.com/sentinel-official/hub"
# Github token. Useful if you want to make requests often, as Github rate-limits requests
# if no token is specified.
token = "<your_github_token>"
```

</p>
</details>

### Add a system unit file

Create the .service file with a text editor

```bash
sudo nano /etc/systemd/system/cosmos-node-exporter.service
```

Paste the below text

<details>
<summary>cosmos-node-exporter.service</summary>
<p>

```bash title="/etc/systemd/system/cosmos-node-exporter.service"
[Unit]
Description=Cosmos Node Exporter
After=network-online.target
​
[Service]
User=<your_user> #modify this field with your user
TimeoutStartSec=0
CPUWeight=95
IOWeight=95
ExecStart=cosmos-node-exporter --config /home/<your-user>/cosmos-node-exporter/config.toml
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

Enable autostart of Cosmos Node Exporter service

```bash
sudo systemctl enable cosmos-node-exporter.service
```

### Start Cosmos Node Exporter service

```bash
sudo systemctl start cosmos-node-exporter.service
```

Use this command to check logs in real time

```bash
sudo journalctl -u cosmos-node-exporter.service -f --output cat
```

Once the Cosmos Node Exporter is installed and running, you can verify that `metrics` are being exported by cURLing the /metrics endpoint:

```bash
curl http://localhost:9500/metrics
```

Success! Cosmos Node Exporter is now exposing metrics that Prometheus can scrape, including a wide variety of system metrics further down in the output.

### Open Firewall Port

:::danger Important
After successfully installing and launching Cosmos Node Exporter, the next step is to open port 9500 on your Validator's firewall. This port should be accessible exclusively from your monitoring machine. This action is essential to enable Prometheus to collect data from Cosmos Node Exporter.

```bash
sudo ufw allow from monitor_ip to validator_ip port 9500
```
:::

## Monitoring Machine

On your monitoring machine, go to your prometheus directory and open your `prometheus.yml` file

```bash
sudo nano prometheus.yml
```

Add the cosmos node exporter job into it, under `scrape_configs` block

```bash
 # Cosmos Node Exporter
  - job_name: "cosmos-node-exporter"

    static_configs:
      - targets: ["<your_validator_ip>:9500"]
```