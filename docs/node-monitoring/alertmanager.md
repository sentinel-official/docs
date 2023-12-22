---
title: Alert Manager
description: An Alert system for Prometheus
sidebar_position: 3
---

# Alert Manager

Alerting with Prometheus is separated into two parts.
- Alerting rules in Prometheus servers send alerts to an Alertmanager.
- The Alertmanager then manages those alerts, including silencing, inhibition, aggregation and sending out notifications via methods such as email, on-call notification systems, and chat platforms. In this guide, we will employ Telegram as our chosen notification method.

## Download & Installation

To get started, begin by downloading the most recent [release](https://github.com/prometheus/alertmanager/releases). Once the download is complete, proceed to unzip the file, and you'll be all set to proceed.

```bash
wget https://github.com/prometheus/alertmanager/releases/download/v0.26.0/alertmanager-0.26.0.linux-amd64.tar.gz
tar xvfz alertmanager-0.26.0.linux-amd64.tar.gz
sudo rm -f alertmanager-0.26.0.linux-amd64.tar.gz
mv alertmanager-0.26.0.linux-amd64/ alertmanager/
cd alertmanager/
```

Add a symbolic link to the `/usr/local/bin/` directory for system-wide access to Alert Manager:

```bash
sudo ln -s /home/<your_user>/alertmanager/alertmanager /usr/local/bin/
```

## Set up the Config file

The configuration file specifies the recipients to whom alert notifications will be sent. In this example, alerts will be directed to Telegram.

Open the config file

```bash
sudo nano alertmanager.yml
```

<details>
<summary>alertmanager.yml</summary>
<p>

```yaml
route:
  receiver: prom_alert_manager_bot
  repeat_interval: 1h

receivers:
  - name: prom_alert_manager_bot
    telegram_configs:
      - send_resolved: true
        bot_token: <your_bot_token>
        api_url: https://api.telegram.org
        chat_id: <you_chat_id>
        parse_mode: ''
```

</p>
</details>

## Create Alerting Rules

To set up alerting rules, create a subfolder named `rules`. This designated folder will function as the centralized repository for managing all your alert rules.

```bash
sudo mkdir rules
cd rules
```

Now, for each previously installed exporter, generate the corresponding rule file and populate it with the necessary information.

```bash
sudo nano node-exporter.yml
sudo nano tendermint-internal-metrics.yml
sudo nano cosmos-node-exporter.yml
sudo nano cosmos-validator-exporter.yml
```

<details>
<summary>node-exporter.yml</summary>
<p>

```yaml title="/home/<your_user>/alertmanager/rules/node-exporter.yml
groups:
  - name: HostAlerts
    rules:
      - alert: HostOutOfMemory
        expr: node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes * 100 < 10
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: Host out of memory (instance {{ $labels.instance }})
          description: "Node memory is filling up (< 10% left)\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostMemoryUnderMemoryPressure
        expr: rate(node_vmstat_pgmajfault[1m]) > 1000
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: Host memory under memory pressure (instance {{ $labels.instance }})
          description: "The node is under heavy memory pressure. High rate of major page faults\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostUnusualNetworkThroughputIn
        expr: sum by (instance, host) (rate(node_network_receive_bytes_total[2m])) / 1024 / 1024 > 100
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: Host unusual network throughput in (instance {{ $labels.instance }})
          description: "Host network interfaces are probably receiving too much data (> 100 MB/s)\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostUnusualNetworkThroughputOut
        expr: sum by (instance, host) (rate(node_network_transmit_bytes_total[2m])) / 1024 / 1024 > 100
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: Host unusual network throughput out (instance {{ $labels.instance }})
          description: "Host network interfaces are probably sending too much data (> 100 MB/s)\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostUnusualDiskReadRate
        expr: sum by (instance, host, device) (rate(node_disk_read_bytes_total[10m])) / 1024 / 1024 > 50
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: Host unusual disk read rate (instance {{ $labels.instance }})
          description: "Disk is probably reading too much data (> 50 MB/s)\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostUnusualDiskWriteRate
        expr: sum by (instance, host, device) (rate(node_disk_written_bytes_total[10m])) / 1024 / 1024 > 50
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: Host unusual disk write rate (instance {{ $labels.instance }})
          description: "Disk is probably writing too much data (> 50 MB/s)\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostOutOfDiskSpace
        expr: (node_filesystem_avail_bytes * 100) / node_filesystem_size_bytes < 10 and ON (instance, device, mountpoint) node_filesystem_readonly == 0
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: Host out of disk space (instance {{ $labels.instance }})
          description: "Disk is almost full (< 10% left)\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostUnusualDiskReadLatency
        expr: rate(node_disk_read_time_seconds_total[1m]) / rate(node_disk_reads_completed_total[1m]) > 0.1 and rate(node_disk_reads_completed_total[1m]) > 0
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: Host unusual disk read latency (instance {{ $labels.instance }})
          description: "Disk latency is growing (read operations > 100ms)\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostUnusualDiskWriteLatency
        expr: rate(node_disk_write_time_seconds_total[1m]) / rate(node_disk_writes_completed_total[1m]) > 0.1 and rate(node_disk_writes_completed_total[1m]) > 0
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: Host unusual disk write latency (instance {{ $labels.instance }})
          description: "Disk latency is growing (write operations > 100ms)\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostHighCpuLoad
        expr: sum by (instance, host) (avg by (mode, instance, host) (rate(node_cpu_seconds_total{mode!="idle"}[2m]))) * 100 > 80
        for: 0m
        labels:
          severity: warning
        annotations:
          summary: Host high CPU load (instance {{ $labels.instance }})
          description: "CPU load is > 80%:  {{ $value }}"

      - alert: HostCpuStealNoisyNeighbor
        expr: avg by(instance, host) (rate(node_cpu_seconds_total{mode="steal"}[5m])) * 100 > 10
        for: 0m
        labels:
          severity: warning
        annotations:
          summary: Host CPU steal noisy neighbor (instance {{ $labels.instance }})
          description: "CPU steal is > 10%. A noisy neighbor is killing VM performances or a spot instance may be out of credit.\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostContextSwitching
        expr: (rate(node_context_switches_total[5m])) / count without (cpu) (node_cpu_frequency_max_hertz) > 10000
        for: 1m
        labels:
          severity: warning
        annotations:
          summary: Host context switching (instance {{ $labels.instance }})
          description: "Context switching is growing on node (> 10000 / s)\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostSystemdServiceCrashed
        expr: node_systemd_unit_state{state="failed"} == 1
        for: 0m
        labels:
          severity: warning
        annotations:
          summary: Host systemd service crashed (instance {{ $labels.instance }})
          description: "systemd service crashed\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostPhysicalComponentTooHot
        expr: node_hwmon_temp_celsius > 75
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: Host physical component too hot (instance {{ $labels.instance }})
          description: "Physical hardware component too hot\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostNodeOvertemperatureAlarm
        expr: node_hwmon_temp_crit_alarm_celsius == 1
        for: 0m
        labels:
          severity: critical
        annotations:
          summary: Host node overtemperature alarm (instance {{ $labels.instance }})
          description: "Physical node temperature alarm triggered\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostOomKillDetected
        expr: increase(node_vmstat_oom_kill[1m]) > 0
        for: 0m
        labels:
          severity: warning
        annotations:
          summary: Host OOM kill detected (instance {{ $labels.instance }})
          description: "OOM kill detected\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostEdacCorrectableErrorsDetected
        expr: increase(node_edac_correctable_errors_total[1m]) > 0
        for: 0m
        labels:
          severity: info
        annotations:
          summary: Host EDAC Correctable Errors detected (instance {{ $labels.instance }})
          description: "Host {{ $labels.instance }} has had {{ printf \"%.0f\" $value }} correctable memory errors reported by EDAC in the last 5 minutes.\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostEdacUncorrectableErrorsDetected
        expr: node_edac_uncorrectable_errors_total > 0
        for: 0m
        labels:
          severity: warning
        annotations:
          summary: Host EDAC Uncorrectable Errors detected (instance {{ $labels.instance }})
          description: "Host {{ $labels.instance }} has had {{ printf \"%.0f\" $value }} uncorrectable memory errors reported by EDAC in the last 5 minutes.\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostNetworkReceiveErrors
        expr: rate(node_network_receive_errs_total[2m]) / rate(node_network_receive_packets_total[2m]) > 0.01
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: Host Network Receive Errors (instance {{ $labels.instance }})
          description: "Host {{ $labels.instance }} interface {{ $labels.device }} has encountered {{ printf \"%.0f\" $value }} receive errors in the last two minutes.\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostNetworkTransmitErrors
        expr: rate(node_network_transmit_errs_total[2m]) / rate(node_network_transmit_packets_total[2m]) > 0.01
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: Host Network Transmit Errors (instance {{ $labels.instance }})
          description: "Host {{ $labels.instance }} interface {{ $labels.device }} has encountered {{ printf \"%.0f\" $value }} transmit errors in the last two minutes.\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostNetworkInterfaceSaturated
        expr: (rate(node_network_receive_bytes_total{device!~"^tap.*"}[1m]) + rate(node_network_transmit_bytes_total{device!~"^tap.*"}[1m])) / node_network_speed_bytes{device!~"^tap.*"} > 0.8 < 10000
        for: 1m
        labels:
          severity: warning
        annotations:
          summary: Host Network Interface Saturated (instance {{ $labels.instance }})
          description: "The network interface \"{{ $labels.device }}\" on \"{{ $labels.instance }}\" is getting overloaded.\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostNetworkBondDegraded
        expr: (node_bonding_active - node_bonding_slaves) != 0
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: Host Network Bond Degraded (instance {{ $labels.instance }})
          description: "Bond \"{{ $labels.device }}\" degraded on \"{{ $labels.instance }}\".\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostConntrackLimit
        expr: node_nf_conntrack_entries / node_nf_conntrack_entries_limit > 0.8
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: Host conntrack limit (instance {{ $labels.instance }})
          description: "The number of conntrack is approaching limit\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostClockSkew
        expr: (node_timex_offset_seconds > 0.05 and deriv(node_timex_offset_seconds[5m]) >= 0) or (node_timex_offset_seconds < -0.05 and deriv(node_timex_offset_seconds[5m]) <= 0)
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: Host clock skew (instance {{ $labels.instance }})
          description: "Clock skew detected. Clock is out of sync. Ensure NTP is configured correctly on this host.\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostClockNotSynchronising
        expr: min_over_time(node_timex_sync_status[1m]) == 0 and node_timex_maxerror_seconds >= 16
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: Host clock not synchronising (instance {{ $labels.instance }})
          description: "Clock not synchronising. Ensure NTP is configured on this host.\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

      - alert: HostRequiresReboot
        expr: node_reboot_required > 0
        for: 4h
        labels:
          severity: info
        annotations:
          summary: Host requires reboot (instance {{ $labels.instance }})
          description: "{{ $labels.instance }} requires a reboot.\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"
```

</p>
</details>

<details>
<summary>tendermint-internal-metrics.yml</summary>
<p>

```yaml title="/home/<your_user>/alertmanager/rules/tendermint-internal-metrics.yml
groups:
  - name: TendermintInternalAlerts
    rules:
      - alert: TendermintInternalInsufficientPeersConnected
        expr: tendermint_p2p_peers < 3
        for: 1m
        labels:
          severity: warning
        annotations:
          summary: Tendermint node not having enough peers connected (instance {{ $labels.instance }})
          description: "Tendermint node not having enough peers connected (< 3): {{ $value }}"

      - alert: TendermintInternalNoPeersConnected
        expr: tendermint_p2p_peers == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: Tendermint node not connected to any peers (instance {{ $labels.instance }})
          description: "Tendermint node not connected to any peers"

      - alert: TendermintInternalMempoolOverflow
        expr: tendermint_mempool_size > 100
        for: 1m
        labels:
          severity: warning
        annotations:
          summary: Tendermint node has too many txs in mempool (instance {{ $labels.instance }})
          description: "Tendermint node has too many txs in mempool: {{ $value }}"
```

</p>
</details>

<details>
<summary>cosmos-node-exporter.yml</summary>
<p>

```yaml title="/home/<your_user>/alertmanager/rules/cosmos-node-exporter.yml
groups:
  - name: CosmosNodeExporter
    rules:

      - alert: CosmosNodeCatchingUp
        expr: cosmos_node_exporter_catching_up == 1
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: Tendermint node not in sync (host {{ $labels.host }})
          description: "Tendermint node not in sync"

      - alert: CosmosNodeNotLatestBinary
        expr: cosmos_node_exporter_is_latest == 0 AND on (instance, host) cosmos_node_exporter_upgrade_coming == 0
        for: 1m
        labels:
          severity: warning
        annotations:
          summary: "Tendermint node is not running the latest binary (host {{ $labels.host }}): github version {{ $labels.remote_version }}, local version: {{ $labels.local_version }})"
          description: "Tendermint node is not running the latest binary"

      - alert: CosmosNodeVotingPowerValidator
        expr: cosmos_node_exporter_voting_power{type="validator"} == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "Tendermint validator node has 0 voting power (host {{ $labels.host }})"
          description: "Tendermint validator node has 0 voting power"

      - alert: CosmosNodeVotingPowerTestnet
        expr: cosmos_node_exporter_voting_power{type="testnet"} == 0
        for: 1m
        labels:
          severity: warning
        annotations:
          summary: "Tendermint testnet node has 0 voting power (host {{ $labels.host }}"
          description: "Tendermint testnet node has 0 voting power"

      - alert: CosmosNodeTimeSinceLatestBlock
        expr: (cosmos_node_exporter_time_since_latest_block / 60) > 10
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "Tendermint node's latest block was later than 10 minutes ago (host {{ $labels.host }}"
          description: "Tendermint node's latest block was later than 10 minutes ago \n  VALUE = {{ $value }}"

      - alert: CosmosNodeUpgradeBinaryNotPresent
        expr: cosmos_node_exporter_upgrade_binary_present == 0
        for: 1m
        labels:
          severity: warning
        annotations:
          summary: "Cosmos node does not have the upgrade binary (host {{ $labels.host }}, upgrade {{ $labels.name }})"
          description: "Cosmos node does not have the upgrade binary"

      - alert: CosmosNodeErrors
        expr: cosmos_node_exporter_query_successful == 0
        for: 1m
        labels:
          severity: warning
        annotations:
          summary: "cosmos-node-exporter has errors (host {{ $labels.host }})"
          description: "cosmos-node-exporter has errors"

      - alert: CosmosNodeUpgradeUpcoming
        expr: (cosmos_node_exporter_upgrade_estimated_time - time()) < 30 * 60
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "There's an upgrade upcoming on node {{ $labels.host }}: {{ $labels.name }} in {{ $value }} seconds"
          description: "There's an upgrade upcoming"
```

</p>
</details>

<details>
<summary>cosmos-validator-exporter</summary>
<p>

```yaml title="/home/<your_user>/alertmanager/rules/cosmos-validator-exporter.yml
groups:
  - name: CosmosValidatorsExporterAlerts
    rules:
      - alert: CosmosValidatorsExporterNodeError
        expr: cosmos_validators_exporter_queries_error > 0
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: cosmos-validators-exporter has some errors from chain (instance {{ $labels.instance }}, chain {{ $labels.chain }})
          description: "cosmos-validators-exporter has some errors from chain"

      - alert: CosmosValidatorsExporterValidatorAtLastPlace
        expr: cosmos_validators_exporter_validators_count - cosmos_validators_exporter_rank <= 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: Cosmos validator is at the last place (instance {{ $labels.instance }})
          description: "Cosmos validator is at the last place \n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"
```

</p>
</details>

## Edit Prometheus Config File

Inside your `prometheus` directory open the `prometheus.yml` file:

```bash
sudo nano prometheus.yml
```

Add the following code block with the `target` and the created `rule files`:

<details>
<summary>prometheus.yml</summary>
<p>

```yaml title="/home/<your_user>/prometheus/prometheus.yml
# Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

rule_files:
  - "rules/node-exporter.yml"
  - "rules/tendermint-internal-metrics.yml"
  - "rules/cosmos-node-exporter.yml"
  - "rules/cosmos-validator-exporter.yml"
```

</p>
</details>

## Add a system unit file

Open the .service with a text editor

```bash
sudo nano /etc/systemd/system/alertmanager.service
```

Paste the below text

<details>
<summary>alertmanager.service</summary>
<p>

```bash title="/etc/systemd/system/alertmanager.service"
[Unit]
Description=Alert Manager
After=network-online.target
​
[Service]
User=<your_user> #modify this field with your user
TimeoutStartSec=0
CPUWeight=95
IOWeight=95
ExecStart=alertmanager --config.file=/home/<your_user>/alertmanager/alertmanager.yml --storage.path=/home/<your_user>/alertmanager/data
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
sudo systemctl enable alertmanager.service
```

## Start Alert Manager service

```bash
sudo systemctl start alertmanager.service
```

Use this command to check logs in real time

```bash
sudo journalctl -u alertmanager.service -f
```

After installing and running Alert Manager, you can verify whether alerts are being displayed.

```bash
curl -u admin http://localhost:9093/metrics
```

You can now enter this address in your browser to check if Prometheus displays them.

```bash
https://prometheus_ip:9090/alerts
```