---
title: Overview
sidebar_position: 1
---

# Node Health Check

To be added into the Subscription Plan and consequently be eligible to Node Revenue System, the node is required to pass the `Node Health Check`.
This check tests:
- the node endpoint
- the node configuration
- the node gigabyte price (less than 20 DVPN)
- the node hourly price (4.16 DVPN for datacenters and 10 DVPN for residentials nodes)
- the node connectivity

:::note
Node Health Checks currently happen **ONCE** a day. So, if you have recently run a dVPN node, expect some waiting time before you receive any outcomes.
:::

By implementing this process, the Subscription Plan ensures a continuous assessment, allowing for the addition of new nodes and the removal of problematic ones that require corrective measures.

To check if your node has passed the health check, there are four ways to do it.

- [Node Dashboard](/nodes/health-check/node-dashboard)
- [Busurnode](/nodes/health-check/busurnode)
- [Sentinel API](/nodes/health-check/sentinel-api)
- [Planwizard API](/nodes/health-check/plan-wizard)

:::warning
To improve the chances of passing the health check, it's recommended to avoid using widely known cloud providers like AWS, GCP, Azure, Vultr, Linode, Oracle, Alibaba, ColoCrossing, and similar platforms, as they may not be whitelisted for dVPN nodes.
:::