---
title: Tendermint Internal Metrics
sidebar_position: 2
---

# Tendermint Internal Metrics

Tendermint Internal Metrics can be enabled by simply editing your validator `config.toml` file.

Open your config file

```bash
sudo nano /home/<your-user>/.sentinelhub/config/config.toml
```

Edit the followinf fields like below

```bash
prometheus = true
prometheus_listen_addr = :26660
```

Save the file and restart your validator

You can verify that `metrics` are being exported by cURLing the /metrics endpoint:

```bash
curl http://localhost:26660/metrics
```

Success! Tendermint Internal Metrics is now exposing metrics that Prometheus can scrape, including a wide variety of system metrics further down in the output.

:::danger Important
After successfully enabling Tendermint Internal Metrics, the next step is to open port 26660 on your Validator's firewall. This port should be accessible exclusively from your monitoring machine. This action is essential to enable Prometheus to collect data from Tendermint Internal Metrics.

```bash
sudo ufw allow from monitor_ip to validator_ip port 26660
```
:::