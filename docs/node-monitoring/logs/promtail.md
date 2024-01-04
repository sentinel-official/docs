---
title: Promtail
description: An agent used for scraping and forwarding logs to Loki
sidebar_position: 1
---

# Promtail

Promtail is an agent used for scraping and forwarding logs to Loki, which is a horizontally scalable, highly available, multi-tenant log aggregation system.

## Download & Installation

To get started, begin by downloading the most recent [release](https://github.com/grafana/loki/releases). Make sure to download the file `promtail-linux-amd64.zip` Once the download is complete, proceed to unzip the file, and you'll be all set to proceed.

```bash
mkdir promtail
cd promtail
wget https://github.com/grafana/loki/releases/download/vX.X.X/promtail-linux-amd64.zip
unzip promtail-linux-amd64.zip
sudo rm -f promtail-linux-amd64.zip
mv promtail-linux-amd64 promtail
```

Add a symbolic link to the `/usr/local/bin/` directory for system-wide access to Promtail:

```bash
sudo ln -s /home/<your_user>/promtail/promtail /usr/local/bin/
```

## Create a Config file

Inside your `promtail` directory create the `config.yaml` file:

```bash
sudo nano config.yml
```

Paste the following code in it making sure to edit the `<your_loki_instance_url>`

<details>
<summary>config.yaml</summary>
<p>

```yaml
---
server:
  http_listen_port: 0
  grpc_listen_port: 0
positions:
  filename: /tmp/positions.yaml
clients:
  - url: <your_loki_instance_url>
scrape_configs:
- job_name: journald
  journal:
    labels:
      job: journald
      host: localhost
  relabel_configs:
    - source_labels: [__journal__systemd_unit]
      target_label: systemd_unit
    - source_labels: [__journal__hostname]
      target_label: hostname
    - source_labels: [__journal_syslog_identifier]
      target_label: syslog_identifier
    - source_labels: [__journal__comm]
      target_label: command

limits_config:
  readline_rate_enabled: true
  readline_rate: 900
  readline_rate_drop: false
```

</p>
</details>


## Add a system unit file

Open the .service with a text editor

```bash
sudo nano /etc/systemd/system/promtail.service
```

Paste the below text

<details>
<summary>promtail.service</summary>
<p>

```bash title="/etc/systemd/system/promtail.service"
[Unit]
Description=Promtail
After=network-online.target

[Service]
User=<your_user>
TimeoutStartSec=0
CPUWeight=95
IOWeight=95
ExecStart=promtail -config.file /home/sentinel/promtail/config.yaml
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

Enable autostart of Promtail service

```bash
sudo systemctl enable promtail.service
```

## Start Promtail service

```bash
sudo systemctl start promtail.service
```

Use this command to check logs in real time

```bash
sudo journalctl -u promtail.service -f --output cat
```

After installing and running Promtail, you can verify whether logs are being sent to Loki.