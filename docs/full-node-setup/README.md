---
title: Overview
sidebar_label: "📘 Overview"
sidebar_position: 1
---

# Sentinel P2P Full Node Setup Guide

This guide is intended for anyone who wishes to contribute to the Sentinel Network by installing a Full Node.

:::warning
Please note that if you intend to share your bandwidth, you must adhere to the [dVPN Node guide](/dvpn-nodes/setup), as the Full Node serves distinct purposes.
:::

A full node is a participant in the network that maintains a complete copy of the blockchain.
It stores the entire transaction history of the blockchain and validates new transactions based on the consensus rules of the network.
Full nodes are important for decentralization as they help in distributing the blockchain data across the network, making it more resilient.

A Sentinel P2P Full Node can be deployed on various platforms, including:
- Dedicated server (as explained in this guide)
- Your home setup

To set up a Full Node successfully, you should possess a moderate level of proficiency in Linux and networking. This guide has been designed to assist users in comprehending all the necessary steps required for setting up a full node.

## Choose your path

A Full Node can be specialized for one of two roles. The same machine should not run both, for security and performance reasons.

- **Validator**: signs blocks and earns staking rewards. Requires secure key management ([TMKMS](/full-node-setup/validate/essential-tools/tmkms/overview)), upgrade automation ([Cosmovisor](/full-node-setup/validate/essential-tools/cosmovisor)), and tight peer hygiene.
- **RPC/API node**: serves clients (wallets, explorers, applications) over HTTP/gRPC. Requires open inbound connectivity, historical state retention, and a reverse proxy.

Both roles start from the same **🛠️ Install & Run** steps (server prep, install, init, run). The configuration step in [Install & Configure Full Node](/full-node-setup/node-setup) is the bifurcation point: pick the reference matching the role you've chosen.

If you're operating an **IBC relayer**, that's a separate role; see the [🔗 IBC Relayers](/full-node-setup/ibc-relayers) section.

## Monitoring

We also highly advise setting up a monitoring system to avoid downtime, missed blocks (if you validate), and damage to your reputation:

- [Node Monitoring](/node-monitoring): make sure everything works properly on your Validator or RPC/API machine.