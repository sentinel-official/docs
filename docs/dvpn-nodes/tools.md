---
title: Reference & Tools
sidebar_label: "🛠️ Reference & Tools"
sidebar_position: 6
---

# dVPN Node Reference & Tools

Reference list of tools and utilities for working with Sentinel dVPN nodes: explorers, dashboards, faucets, and monitoring bots. Below you'll find tools created by both the Sentinel team and the community.

## Sentinel Team

The following statistical tools, developed by the Sentinel team, provide detailed information about Node locations, graph statistics, as well as their health check status.

- [dVPN Node Stats](https://stats.sentinel.co): display comprehensive dVPN node statistics through graphical representation.
- [dVPN Node Map](https://map.sentinel.co): a global map displaying all dVPN nodes across the world.
- [dVPN Node Dashboard](https://nodes.sentinel.co): access dVPN node details, including location, earnings, provided bandwidth, active subscriptions and sessions. The dashboard also indicates whether a dVPN node has successfully passed the health check

## Community

- [Sentnodes](https://sentnodes.com): this tool developed by [Busurnode](https://busurnode.com/) assists dVPN node hosts in obtaining information about their dVPN nodes health check status. In case of failure, it provides details about what might have gone wrong. It also runs a [public RPC monitor](https://sentnodes.com/public-rpc) reporting the health, block height and uptime of every public Sentinel RPC endpoint.
- [Suchnode](https://suchnode.net): this node dashboard shows detailed statistics for individual nodes such as health check status, payouts and whitelisting, as well as the overall network.
- [Node Peers](https://peers.suchnode.net): companion tool to Suchnode covering Sentinel Hub blockchain peers rather than dVPN nodes. It grades the peers it observes on responsiveness and block-height progression, which helps when diagnosing a slow-syncing full node. See [Peer connectivity](/full-node-setup/hub-config).
- [dVPN Node Faucet](https://busurnode.com/network/sentinel/faucet): To kickstart your dVPN node, ensure your operator address has sufficient P2P. For testing, use the Sentinel dVPN Node Faucet by entering your node operator address. The faucet sends 0.3 P2P, enough to verify that your dVPN node comes online. Add more P2P for prolonged online presence.
- [dVPN Node Monitor Telegram Bot](/node-monitoring/node-monitor-bot): A convenient Telegram bot designed to assist you in monitoring your dVPN nodes, providing comprehensive details about each dVPN node's status and performance.
- [Sentinel dVPN Client guide by Tkd-Alex](https://alessandromaggio.it/sentinel-dvpn-client/): community write-up walking through the Sentinel dVPN client setup.

## Sentinel Blue Builder

- [Sentinel Blue Builder](https://github.com/Sentinel-Bluebuilder/): community GitHub organization hosting builder and testing utilities for Sentinel dVPN node operators.
- [Sentinel Node Tester](https://github.com/Sentinel-Bluebuilder/sentinel-node-tester): network audit dashboard built on blue-js-sdk that tests every node on the blockchain for real VPN throughput, speed, and protocol compliance.

For developer libraries from the same group (AI Connect, x402, Plan Manager), see the [Agent & Automation libraries under SDKs](/sdk).

## Uptime

- [Uptime Kuma](/node-monitoring/uptime-kuma): Uptime Kuma: A great selfhosted tool for continuously monitoring your node’s uptime, helping you maximize your dVPN node P2P earnings.
