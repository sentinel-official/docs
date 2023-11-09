---
title: Overview
sidebar_position: 1
---

# Node Monitoring

Running a node or a validator requires a reliable monitoring system to prevent downtime, missed blocks, and reputation damage. Alerting is also essential to notify you of issues.
We'll use established monitoring and visualization tools as part of a **stack** or **standalone** solutions.

## Monitoring Stack

A monitoring stack comprises a set of tools that require installation on both your local node machine and a dedicated monitoring machine.

### Node Machine

The first monitoring tools are called **`Exporters`** and are agents that run on your node machine. They collect various system-level metrics and expose them in a format that can be understood by Prometheus.

- [**Node Exporter**](/node-monitoring/exporters/node-exporter): it collects various system-level metrics, such as CPU usage, memory usage, disk usage, network activity, and others.
- [**Tendermint Internal Metrics**](/node-monitoring/exporters/tendermint-internal-metrics): it collects various system-level metrics of your validator, and can be easily enabled from your validator configuration file.
- [**Cosmos Validator Exporter**](/node-monitoring/exporters/cosmos-validator-exporter): a Prometheus scraper designed to retrieve validator statistics from an LCD server exposed by a full node. It was created by Quokkastake, a very active community member.
- [**Cosmos Node Exporter**](/node-monitoring/exporters/cosmos-node-exporter): another Prometheus scraper created by Quokkastake, designed to collect other essential data for monitoring your node.

### Monitoring Machine

The next two monitoring must be installed on a separated machine which is used just to monitor your node.

- [**Prometheus**](/node-monitoring/prometheus): a monitoring system that collects metrics from the Exporters. It stores the metrics in a time-series database and provides a powerful query language to extract and aggregate the data. Prometheus also has an alerting system that can be used to send notifications when certain thresholds are breached
- [**Grafana**](/node-monitoring/grafana): a visualization tool that can be used to create dashboards and charts to display the data collected by Prometheus. Grafana supports a wide range of data sources, including Prometheus, and provides a rich set of visualization options, including graphs, tables, and alerts.

How does this stack of tools work?

In terms of communication, the Exporters send metrics to Prometheus over HTTP. Prometheus scrapes the metrics from the Exporters on a regular interval, typically every few seconds. Once the data is collected, Prometheus stores it in its time-series database. Grafana, in turn, connects to Prometheus as a data source and queries the data using the powerful Prometheus query language. Grafana then uses this data to create beautiful visualizations that can be shared with others.

## Standalone Monitoring

A standalone monitoring solution consists of a single tool that only needs to be installed on a dedicated monitoring machine.

For newcomers, an excellent tool to begin with is [Uptime Kuma](/node-monitoring/uptime-kuma), which specializes in monitoring the uptime of your node, as we've discussed in the relevant section.