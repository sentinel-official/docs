---
title: Overview
description: The importance of implementing a reliable monitoring system
sidebar_position: 1
---

# Monitoring Tools

If you are running a node or a validator, it is crucial to have a reliable monitoring system in place. Without one, there is always a risk that something will break, and your node will go offline or your validator will start skipping blocks. In the best case scenario, someone may notice and let you know so that you can fix it in time. However, in the worst case scenario, the validator may skip the required number of blocks, leading to a slashing of all delegators' coins and a reputation mark (which everyone you know can see you went to jail). It is also essential to have alerting set up to make you aware of any issues or potential problems.

To do this we will use popular tools in the field of monitoring and visualization of system metrics.

## Node Machine - Exporters

The first monitoring tools are called **Exporters** and are agents that run on each machine that is to be monitored. They collect various system-level metrics and expose them in a format that can be understood by Prometheus.

- [**Node Exporter**](/node-monitoring/exporters/node-exporter): it collects various system-level metrics, such as CPU usage, memory usage, disk usage, network activity, and others.
- [**Tendermint Internal Metrics**](/node-monitoring/exporters/tendermint-internal-metrics): it collects various system-level metrics of your validator, and can be easily enabled from your validator configuration file.
- [**Cosmos Validator Exporter**](/node-monitoring/exporters/cosmos-validator-exporter): a Prometheus scraper designed to retrieve validator statistics from an LCD server exposed by a full node. It was created by Quokkastake, a very active community member.
- [**Cosmos Node Exporter**](/node-monitoring/exporters/cosmos-node-exporter): another Prometheus scraper created by Quokkastake, designed to collect other essential data for monitoring your node.

## Monitoring Machine

The next two must be installed on a separated machine which is used just to monitor your node.

- [**Prometheus**](/node-monitoring/prometheus): a monitoring system that collects metrics from the Exporters. It stores the metrics in a time-series database and provides a powerful query language to extract and aggregate the data. Prometheus also has an alerting system that can be used to send notifications when certain thresholds are breached
- [**Grafana**](/node-monitoring/grafana): a visualization tool that can be used to create dashboards and charts to display the data collected by Prometheus. Grafana supports a wide range of data sources, including Prometheus, and provides a rich set of visualization options, including graphs, tables, and alerts.

How do these tools work?

In terms of communication, the Exporters send metrics to Prometheus over HTTP. Prometheus scrapes the metrics from the Exporters on a regular interval, typically every few seconds. Once the data is collected, Prometheus stores it in its time-series database. Grafana, in turn, connects to Prometheus as a data source and queries the data using the powerful Prometheus query language. Grafana then uses this data to create beautiful visualizations that can be shared with others.