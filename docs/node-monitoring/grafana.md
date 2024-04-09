---
title: Grafana
description: A tool used for visualizing and analyzing metrics
sidebar_position: 4
---

# Grafana

Grafana is an open-source analytics and monitoring platform that integrates with various data sources, allowing users to visualize and analyze metrics and logs. It provides a flexible and powerful interface for creating, exploring, and sharing dashboards, which are collections of panels that display visualizations of data.

:::warning
Grafana should not be installed on either a validator node or a monitoring machine. It is recommended to deploy Grafana on a separate dedicated machine or consider using a cloud-based solution.
:::

## Download & Installation

To get started, begin by downloading the most recent [release](https://grafana.com/grafana/download). Once the download is complete, proceed to unzip the file, and you'll be all set to proceed.

```bash
wget https://dl.grafana.com/enterprise/release/grafana-enterprise-X.X.X.linux-amd64.tar.gz
tar -zxvf grafana-enterprise-X.X.X.linux-amd64.tar.gz
sudo rm -f grafana-enterprise-X.X.X.linux-amd64.tar.gz
mv grafana-vX.X.X/ grafana/
cd grafana/
```
Add a symbolic link to the `/usr/local/bin/` directory for system-wide access to Prometheus:

```bash
sudo ln -s /home/${USER}/grafana/bin/grafana-server /usr/local/bin/
```

## Add a system unit file

Open the .service with a text editor

```bash
sudo nano /etc/systemd/system/grafana.service
```

Paste the below text

<details>
<summary>grafana.service</summary>
<p>

```bash title="/etc/systemd/system/grafana.service"
[Unit]
Description=Grafana
After=network-online.target

[Service]
User=<your_user> #modify this field with your user
TimeoutStartSec=0
CPUWeight=95
IOWeight=95
WorkingDirectory=/home/<your_user>/grafana
ExecStart=grafana-server web --config.file=/home/<your_user>/grafana/conf/defaults.ini
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