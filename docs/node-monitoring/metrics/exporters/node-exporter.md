---
title: Node Exporter
sidebar_position: 2
---

# Node Exporter

Node Exporter is an agent that runs on the machine that is to be monitored. It collects various system-level metrics, such as CPU usage, memory usage, disk usage, network activity, and others.

## Validator Machine

Execute the following operations on your validator machine

### Download & Installation

On both your validator and monitoring machines, download and unpack Node Exporter (check the last version [here](https://github.com/prometheus/node_exporter))

```bash
wget https://github.com/prometheus/node_exporter/releases/download/vX.X.X/node_exporter-X.X.X.linux-amd64.tar.gz
tar xvfz node_exporter-X.X.X.linux-amd64.tar.gz
sudo rm -f node_exporter-X.X.X.linux-amd64.tar.gz
mv node_exporter-X.X.X.linux-amd64/ node-exporter/
cd node-exporter/
```

Add a symbolic link to the `/usr/local/bin/` directory for system-wide access to Node Exporter:

```bash
sudo ln -s /home/${USER}/node-exporter/node-exporter /usr/local/bin/
```

### Add a system unit file

Create the .service file with a text editor

```bash
sudo nano /etc/systemd/system/node-exporter.service
```

Paste the below text

<details>
<summary>node-exporter.service</summary>
<p>

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
ExecStart=node-exporter
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
sudo systemctl enable node-exporter.service
```

### Start Node Exporter service

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

### Open Firewall Port

:::danger Important
After successfully installing and launching Node Exporter, the next step is to open port 9100 on your Validator's firewall. This port should be accessible exclusively from your monitoring machine. This action is essential to enable Prometheus to collect data from Node Exporter.

```bash
sudo ufw allow from monitor_ip to validator_ip port 9100
```
:::

## Monitoring Machine

On your monitoring machine, go to your prometheus directory and open your `prometheus.yml` file

```bash
sudo nano prometheus.yml
```

Add the cosmos node exporter job into it, under `scrape_configs` block

```bash
 # Validator Host Hardware Metrics
  - job_name: "validator-hardware-metrics"
​
    # validator ip and port
    static_configs:
      - targets: ["validator_ip:9100"]
```

### Node Exporter on Monitoring machine


While not mandatory, you may want to install a Node Exporter on your monitoring machine as well. This allows you to keep a close eye on its performance. In the event of any issues, you'll receive timely alerts, enabling you to take prompt and appropriate action.

If you opt for this step, remember to update your `prometheus.yml` file once again and add the monitoring node job into it, under `scrape_configs` block

```bash
# Monitoring Node with prometheus installed
  - job_name: "monitor-hardware-metrics"
​
    # current machine ip and port
    static_configs:
      - targets: ["localhost:9100"]
```