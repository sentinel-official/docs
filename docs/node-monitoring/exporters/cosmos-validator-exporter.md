---
title: Cosmos Validator Exporter
sidebar_position: 3
---

# Cosmos Validator Exporter

[Cosmos Validator Exporter](https://github.com/QuokkaStake/cosmos-validators-exporter) can be used to create a dashboard for one or multiple validators, enabling you to visualize essential metrics such as the total staked amount, delegator count, and more. Additionally, you can set up alerts for various validator metrics, including their status, ranking, total staked amount, and more.

## Download & Installation

To get started, begin by downloading the most recent [release](https://github.com/QuokkaStake/cosmos-validators-exporter/releases). Once the download is complete, proceed to unzip the file, and you'll be all set to proceed.

```bash
mkdir cosmos-validator-exporter
cd cosmos-validator-exporter
wget https://github.com/QuokkaStake/cosmos-validators-exporter/releases/download/v4.0.0/cosmos-validators-exporter_4.0.0_linux_amd64.tar.gz
tar xvfz cosmos-validators-exporter_4.0.0_linux_amd64.tar.gz
sudo rm -f cosmos-validators-exporter_4.0.0_linux_amd64.tar.gz
```

## Add a system unit file

Create the .service file with a text editor

```bash
sudo nano /etc/systemd/system/cosmos-validator-exporter.service
```

Paste the below text

```bash title=/etc/systemd/system/cosmos-validator-exporter.service
[Unit]
Description=Cosmos Validator Exporter
After=network-online.target
​
[Service]
User=youruser #modify this field with your user
TimeoutStartSec=0
CPUWeight=95
IOWeight=95
ExecStart=/home/<your-user>cosmos-validator-exporter/cosmos-validator-exporter --config /home/<your-user>cosmos-validator-exporter/config.toml
Restart=always
RestartSec=2
LimitNOFILE=800000
KillSignal=SIGTERM
​
[Install]
WantedBy=multi-user.target
```

Reload the systemd Daemon

```bash
sudo systemctl daemon-reload
```

Enable autostart of Cosmos Validator Exporter service

```bash
sudo systemctl enable cosmos-validator-exporter.service
```

## Start Cosmos Validator Exporter service

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

:::danger Important
After successfully installing and launching Cosmos Validator Exporter, the next step is to open port 9560 on your Validator's firewall. This port should be accessible exclusively from your monitoring machine. This action is essential to enable Prometheus to collect data from Cosmos Validator Exporter.

```bash
sudo ufw allow from monitor_ip to validator_ip port 9560
```
:::