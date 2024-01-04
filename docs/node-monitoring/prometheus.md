---
title: Prometheus
description: A tool that collects your metrics from Node Exporter
sidebar_position: 4
---

# Prometheus

Prometheus is a monitoring application that must be installed on a separate monitoring machine

## Download & Installation

To get started, begin by downloading the most recent [release](https://github.com/prometheus/prometheus/releases). Once the download is complete, proceed to unzip the file, and you'll be all set to proceed.

```bash
wget https://github.com/prometheus/prometheus/releases/download/vX.X.X/prometheus-X.X.X.linux-amd64.tar.gz
tar xvfz prometheus-X.X.X.linux-amd64.tar.gz
sudo rm -f prometheus-X.X.X.linux-amd64.tar.gz
mv prometheus-X.X.X.linux-amd64/ prometheus/
cd prometheus/
```

Add a symbolic link to the `/usr/local/bin/` directory for system-wide access to Prometheus:

```bash
sudo ln -s /home/<your_user>/prometheus/prometheus /usr/local/bin/
```

## Configure Jobs in the Config File

Inside your `prometheus` directory open the `prometheus.yml` file:

```bash
sudo nano prometheus.yml
```

Ensure that both your Validator machine and local machine are included in the list of scrape targets in the configuration file. This step enables Prometheus to collect metrics from these sources. I have added all the exported outlined in this guide

<details>
<summary>prometheus.yml</summary>
<p>

```yaml
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
  
 # Cosmos Validator Exporter
  - job_name: "cosmos-validator-exporter"

    # validator ip and port
    static_configs:
      - targets: ["<your_validator_ip>:9560"]

  # Cosmos Node Exporter
  - job_name: "cosmos-node-exporter"
    
    # validator ip and port
    static_configs:
      - targets: ["<your_validator_ip>:9500"]

  
```

</p>
</details>

Additionally, when installing any additional exporter, don't forget to update the `prometheus.yml` file by adding the corresponding job configuration.

## Create the web authentication file

First we need to have bcrypt tools installed (can be on any device) to generate a hash of your login password.

### Create the gen-pass file

```bash
sudo nano gen-pass.py
```

Paste the following text

```python title="gen-pass.py"
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

```yaml title="/home/user/prometheus/web.yml"
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

<details>
<summary>prometheus.service</summary>
<p>

```bash title="/etc/systemd/system/prometheus.service"
[Unit]
Description=Preometheus
After=network-online.target
​
[Service]
User=<your_user> #modify this field with your user
TimeoutStartSec=0
CPUWeight=95
IOWeight=95
ExecStart=prometheus --config.file=/home/<your_user>/prometheus/prometheus.yml --web.config.file=/home/<your_user>/prometheus/web.yml --storage.tsdb.path=/home/<your_user>/prometheus/data
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

Enable autostart of Node Exporter service

```bash
sudo systemctl enable prometheus.service
```

## Start Prometheus service

```bash
sudo systemctl start prometheus.service
```

Use this command to check logs in real time

```bash
sudo journalctl -u prometheus.service -f --output cat
```

After installing and running Prometheus, you can verify whether metrics are being exported from Node Exporter to Prometheus by using cURL to request the /metrics endpoint on Prometheus port 9090 (you need to insert the password created before)

```bash
curl -u admin http://localhost:9090/metrics
```

If you are running Prometheus on a VPS and want to access the web UI via an external browser, you need to first enable port 9090 on ufw

```bash
sudo ufw allow 9090/tcp
```

You can now enter this address in your browser to check if Prometheus displays them.

```bash
https://prometheus_ip:9090/graph
```