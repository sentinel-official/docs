---
title: Health Check
sidebar_position: 4
---

# Node Health Check

To be added into the Subscription Plan and consequently be eligible to Node Revenue System, the node is required to pass the `Node Health Check`.
This check occurs multiple times a day and will test:
- the node endpoint
- the node configuration
- the node hourly price (4.16 DVPN for datacenters and 13.7 DVPN for residentials nodes)
- the node connectivity

By implementing this process, the Subscription Plan ensures a continuous assessment, allowing for the addition of new nodes and the removal of problematic ones that require corrective measures.

## How can I verify that my node has successfully passed the Health Check?

You have three methods to verify whether your node has successfully passed the Health Check.

### 1 - Node Dashboard

In the [Node Dashboard](https://nodes.sentinel.co) each node features an indicator on the page, clearly indicating whether it has successfully passed the health check or not. Simply paste your `sentnode` address into the search bar. Furthermore, an alert system will be implemented to promptly notify node operators in the event that their node fails a health check, providing them with timely and actionable information.


### 2 - Busurnode Website

Navigate to xplore the [Busurnode Website](https://sentinel.busurnode.com/) to access comprehensive statistics for both individual nodes and the entire network.


### 3 - Manual Check via API

To verify your Health Check status paste the following link into your browser: `https://api.health.sentinel.co/v1/records/<your_sent_node_address>`

For a comprehensive list of nodes, you can also explore the [API Records](https://api.health.sentinel.co/v1/records) main page

Ensure the following fields meet the specified conditions:
- `ok` must be true
- `status` must be 1
- `info_fetch_timestamp` should not be a zero timestamp
- `config_exchange_timestamp` should not be a timestamp
- `location_fetch_timestamp` should not be a zero timestamp