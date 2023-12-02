---
title: Grafana
description: A tool used for visualizing and analyzing metrics
sidebar_position: 4
---

# Grafana

## Download & Installation

On your monitoring machine, download and unpack Prometheus (check the last version [here](https://grafana.com/grafana/download?platform=linux))

```bash
wget https://dl.grafana.com/enterprise/release/grafana-enterprise-9.4.3.linux-amd64.tar.gz
tar -zxvf grafana-enterprise-9.4.3.linux-amd64.tar.gz
```

Rename the folder

```bash
mv grafana-enterprise-9.4.3.linux-amd64 grafana
```

## Add a system unit file

Open the .service with a text editor

```bash
sudo nano /etc/systemd/system/grafana.service
```

Paste the below text

```bash title="/etc/systemd/system/grafana.service"
[Unit]
Description=Grafana
After=network-online.target

[Service]
User=youruser #modify this field with your user
TimeoutStartSec=0
CPUWeight=95
IOWeight=95
WorkingDirectory=/home/youruser/grafana
ExecStart=/home/youruser/grafana/bin/grafana-server web --config.file=/home/youruser/grafana/conf/default.ini
Restart=always
RestartSec=2
LimitNOFILE=800000
KillSignal=SIGTERM

[Install]
WantedBy=multi-user.target
```

Reload the systemd Daemon

```bash
sudo systemctl daemon-reload
```

Enable autostart of Grafana service

```bash
sudo systemctl enable grafana.service
```

## Start Grafana service

```bash
sudo systemctl start grafana.service
```

Use this command to check logs in real time

```bash
sudo journalctl -u grafana.service -f
```

If you are running Grafana on a VPS and want to access the web UI via an external browser, you need to first enable port 3000 on ufw:

```bash
sudo ufw allow 3000/tcp
```

You can now type this address into your browser

```bash
https://grafana_ip:3000
```