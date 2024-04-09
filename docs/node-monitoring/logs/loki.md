---
title: Loki
description: A central log aggregation system that stores and indexes logs
sidebar_position: 2
---

# Loki

Loki serves as the core log aggregation system responsible for storing and indexing logs received by Promtail.

## Download & Installation

To get started, begin by downloading the most recent [release](https://github.com/grafana/loki/releases). Make sure to download the file `loki-linux-amd64.zip` Once the download is complete, proceed to unzip the file, and you'll be all set to proceed.

```bash
mkdir loki
cd loki
wget https://github.com/grafana/loki/releases/download/vX.X.X/loki-linux-amd64.zip
unzip loki-linux-amd64.zip
sudo rm -f loki-linux-amd64.zip
mv loki-linux-amd64.zip loki
```

Add a symbolic link to the `/usr/local/bin/` directory for system-wide access to Loki:

```bash
sudo ln -s /home/${USER}/loki/loki /usr/local/bin/
```

## Create a Config file

Inside your `loki` directory create the `config.yaml` file:

```bash
sudo nano config.yml
```

Follow the official Loki configuration documentation available [here](https://grafana.com/docs/loki/latest/configure/) to fill in the config.yaml file. The documentation provides comprehensive guidance on configuring Loki based on your specific requirements. Ensure to review and incorporate the recommended settings to tailor Loki to your desired log aggregation setup.


## Add a system unit file

Open the .service with a text editor

```bash
sudo nano /etc/systemd/system/loki.service
```

Paste the below text

<details>
<summary>loki.service</summary>
<p>

```bash title="/etc/systemd/system/loki.service"
[Unit]
Description=Loki
After=network-online.target

[Service]
User=<your_user>
TimeoutStartSec=0
CPUWeight=95
IOWeight=95
ExecStart=loki -config.file /home/sentinel/loki/config.yaml
Restart=always
RestartSec=2
LimitNOFILE=800000
KillSignal=SIGTERM

[Install]
WantedBy=multi-user.target
```

</p>
</details>

Reload the systemd Daemon

```bash
sudo systemctl daemon-reload
```

Enable autostart of Loki service

```bash
sudo systemctl enable loki.service
```

## Start Loki service

```bash
sudo systemctl start loki.service
```

Use this command to check logs in real time

```bash
sudo journalctl -u loki.service -f --output cat
```

After installing and running Loki, you can verify whether logs are being sent to Loki.

### Open Firewall Port

:::danger Important
After successfully installing and launching Loki, the next step is to open port 3100. This port should be accessible exclusively from your Validator machine. This action is essential to enable Loki to collect data from Promtail.

```bash
sudo ufw allow from validator_ip to monitor_ip port 3100
```
:::