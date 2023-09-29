---
title: Overview
description: Why it is imporant to have a reliable monitoring system in place
sidebar_position: 1
---

# Monitoring Tools

If you are running a validator, it is crucial to have a reliable monitoring system in place. Without one, there is always a risk that something will break, and your validator will start skipping blocks. In the best case scenario, someone may notice and let you know so that you can fix it in time. However, in the worst case, the validator may skip the required number of tokens, leading to a slashing of all delegators' tokens and a reputation mark (which everyone you know can see you went to jail). It is also essential to have alerting set up to make you aware of any issues or potential problems.

To do this we will use 3 popular tools in the field of monitoring and visualization of system metrics.

The first one must be installed on your validator machine
- **Node Exporter**: an agent that runs on each machine that is to be monitored. It collects various system-level metrics, such as CPU usage, memory usage, disk usage, network activity, and others. Node Exporter exposes these metrics in a format that can be understood by Prometheus

The next two must be installed on a separated machine which is used just to monitor your validator

- **Prometheus**: a monitoring system that collects metrics from Node Exporter. It stores the metrics in a time-series database and provides a powerful query language to extract and aggregate the data. Prometheus also has an alerting system that can be used to send notifications when certain thresholds are breached
- **Grafana**: a visualization tool that can be used to create dashboards and charts to display the data collected by Prometheus. Grafana supports a wide range of data sources, including Prometheus, and provides a rich set of visualization options, including graphs, tables, and alerts.

How do these tools work?

In terms of communication, Node Exporter sends metrics to Prometheus over HTTP. Prometheus scrapes the metrics from Node Exporter on a regular interval, typically every few seconds. Once the data is collected, Prometheus stores it in its time-series database. Grafana, in turn, connects to Prometheus as a data source and queries the data using the powerful Prometheus query language. Grafana then uses this data to create beautiful visualizations that can be shared with others.