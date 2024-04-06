---
title: Overview
sidebar_position: 1
---

# Node Health Check

To be added into the Subscription Plan and consequently be eligible to Node Revenue System, the node is required to pass the `Node Health Check`.
This check occurs multiple times a day and will test:
- the node endpoint
- the node configuration
- the node gigabyte price (less than 20 DVPN)
- the node hourly price (4.16 DVPN for datacenters and 10 DVPN for residentials nodes)
- the node connectivity

By implementing this process, the Subscription Plan ensures a continuous assessment, allowing for the addition of new nodes and the removal of problematic ones that require corrective measures.

To check if your node has passed the health check, there are four ways to do it.

- [Node Dashboard](/nodes/health-check/node-dashboard)
- [Busurnode](/nodes/health-check/busurnode)
- [Sentinel API](/nodes/health-check/sentinel-api)
- [Planwizard API](/nodes/health-check/plan-wizard)