---
title: Node Exporter
sidebar_position: 1
---

# Node Exporter

Node Exporter is an agent that runs on the machine that is to be monitored. It collects various system-level metrics, such as CPU usage, memory usage, disk usage, network activity, and others.

## Download & Installation

On both your validator and monitoring machines, download and unpack Node Exporter (check the last version [here](https://prometheus.io/download/#node_exporter))

```bash
wget https://github.com/prometheus/node_exporter/releases/download/v1.5.0/node_exporter-1.5.0.linux-amd64.tar.gz
tar xvfz node_exporter-1.5.0.linux-amd64.tar.gz
```

Rename the folder

```bash
mv node_exporter-1.5.0.linux-amd64 node_exporter
```

## Add a system unit file

Create the .service file with a text editor

```bash
sudo nano /etc/systemd/system/node-exporter.service
```

Paste the below text

```bash title="/etc/systemd/system/node-exporter.service"
[Unit]
Description=Node Exporter
After=network-online.target
​
[Service]
User=youruser #modify this field with your user
TimeoutStartSec=0
CPUWeight=95
IOWeight=95
ExecStart=/home/youruser/node_exporter/node_exporter
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

Enable autostart of Node Exporter service

```bash
sudo systemctl enable node-exporter.service
```

## Start Node Exporter service

```bash
sudo systemctl start node-exporter.service
```

Use this command to check logs in real time

```bash
sudo journalctl -u node-exporter.service -f --output cat
```

Once the Node Exporter is installed and running, you can verify that `metrics` are being exported by cURLing the /metrics endpoint:

```bash
curl http://localhost:9100/metrics
```

Success! Node Exporter is now exposing metrics that Prometheus can scrape, including a wide variety of system metrics further down in the output (prefixed with node_). To view those metrics (along with help and type information):

```bash
curl http://localhost:9100/metrics | grep "node_"
```

:::danger Important
After successfully installing and launching Node Exporter, the next step is to open port 9100 on your Validator's firewall. This port should be accessible exclusively from your monitoring machine. This action is essential to enable Prometheus to collect data from Node Exporter.

```bash
sudo ufw allow from monitor_ip to validator_ip port 9100
```
:::