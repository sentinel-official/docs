---
title: Prometheus
description: A tool that collects your metrics from Node Exporter
sidebar_position: 3
---

# Prometheus

Prometheus is a monitoring application that must be installed on a separate monitoring machine

## Download & Installation

On your monitoring machine, download and unpack Prometheus (check the last version [here](https://prometheus.io/download/#prometheus))

```bash
wget https://github.com/prometheus/prometheus/releases/download/v2.42.0/prometheus-2.42.0.linux-amd64.tar.gz
tar xvfz prometheus-2.42.0.linux-amd64.tar.gz
```

Rename the folder

```bash
mv prometheus-2.42.0.linux-amd64 prometheus
```

## Edit the config file

Open the config file .yml

```bash
sudo nano /home/user/prometheus/prometheus.yml
```

Add your Validator machine and your local machine as well to the list of scrape targets in the configuration file to enable Prometheus to collect metrics from them

```bash title=/home/user/prometheus/prometheus.yml
scrape_configs:
  # Monitoring Node with prometheus installed
  - job_name: "monitor-hardware-metrics"
​
    # current machine ip and port
    static_configs:
      - targets: ["localhost:9100"]
​
  # Validator Host Hardware Metrics
  - job_name: "validator-hardware-metrics"
​
    # validator ip and port
    static_configs:
      - targets: ["validator_ip:9100"]
​
 # Validator Internal Metrics
  - job_name: "validator-internal-metrics"
​
    # validator ip and port
    static_configs:
      - targets: ["validator_ip:26660"]
```

## Create the web authentication file

First we need to have bcrypt tools installed (can be on any device) to generate a hash of your login password.

### Create the gen-pass file

```bash
sudo nano gen-pass.py
```

Paste the following text

```bash title gen-pass-py
import getpass
import bcrypt
​
password = getpass.getpass("password: ")
hashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
print(hashed_password.decode())
```

Save the file and execute the pythin script

```bash
python3 gen-pass.py
```

You will be prompted for a password. Please enter it, and you will be provided with the encrypted password that you need to copy. Please see the example below

```bash
password: test
$2a$12$1VqNbIcQya1KjObYiDvFz.024poXtE1S9gQfs0fD8uATCeOv6/PgK
```

### Create the file web.yml

```bash
sudo nano /home/user/prometheus/web.yml
```

Add your authentication to access Prometheus metrics. Replace `<password>` with the encrypted password you got from your `gen-pass.py`

```bash title=/home/user/prometheus/web.yml
basic_auth_users:
    admin: <password>
```

(optional) You can now validate the file web.yml with this command:

```bash
promtool check web-config web.yml
```

You should get the following output:

```bash
web.yml SUCCESS
```

## Add a system unit file

Open the .service with a text editor

```bash
sudo nano /etc/systemd/system/prometheus.service
```

Paste the below text

```bash title=/etc/systemd/system/prometheus.service
[Unit]
Description=Preometheus
After=network-online.target
​
[Service]
User=youruser #modify this field with your user
TimeoutStartSec=0
CPUWeight=95
IOWeight=95
ExecStart=/home/youruser/prometheus/prometheus --config.file=/home/youruser/prometheus/prometheus.yml --web.config.file=/home/trinity/prometheus/web.yml --storage.tsdb.path=/home/youruser/prometheus/data
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
sudo systemctl enable prometheus.service
```

## Start Node Exporter service

```bash
sudo systemctl start prometheus.service
```

Use this command to check logs in real time

```bash
sudo journalctl -u prometheus.service -f
```

After installing and running Prometheus, you can verify whether metrics are being exported from Node Exporter to Prometheus by using cURL to request the /metrics endpoint on Prometheus port 9090 (you need to insert the password created before)

```bash
curl -u admin http://localhost:9090/metrics
```

If you are running Prometheus on a VPS and want to access the web UI via an external browser, you need to first enable port 9090 on ufw

```bash
sudo ufw allow 9090/tcp
```

Then you can know type this address on your browser

```bash
https://prometheus_ip:9090/graph
```

### Node Exporter on Monitoring machine

You can also consider installing a Node Exporter on your monitoring machine so that you can monitor it too. This way, if something breaks, you can be alerted about it and take appropriate action