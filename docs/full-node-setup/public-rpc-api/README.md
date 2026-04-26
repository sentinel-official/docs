---
title: Set Public RPC/API
sidebar_label: "📘 Overview"
sidebar_position: 1
---

# Set Public RPC/API

A public RPC/API endpoint exposes your full node's services to clients on the internet: the Tendermint RPC (port 26657), the Cosmos SDK REST API (port 1317), and gRPC. These are the same services wallets, block explorers, automation scripts, and applications use to query chain state or broadcast transactions.

By default a freshly installed full node only listens on `localhost`. Going "public" means binding these services to all interfaces and putting a reverse proxy (with TLS, rate limiting, and a domain name) in front of them so external clients can reach you reliably and safely.

## Why a dedicated node, not your validator?

The [Full Node guide](/full-node-setup) recommends running this on a separate machine from your validator. The reasons matter enough that they shape every step on this page:

- **Attack surface.** A public RPC/API is reachable by everyone on the internet. Validators sign blocks for the chain, so exposing one as an open endpoint multiplies the ways an attacker can disrupt or compromise it.
- **DDoS vulnerability.** A query flood that just slows down an RPC node can cause a validator to miss blocks, get jailed, and lose stake.
- **Resource contention.** Serving a large mempool, historical state queries, and TLS handshakes consumes CPU, memory, and disk I/O that the validator needs for consensus.
- **Different config tunings.** Validators want a tight peer set and minimal historical state; RPC nodes want broad peer fan-in and historical retention. The two `config.toml`/`app.toml` flavors documented in [Configure Sentinel Hub](/full-node-setup/hub-config#edit-the-node-configuration-file) reflect this divergence.

:::danger Don't expose your validator's RPC publicly
Set up a separate full node configured for the RPC/API role, then follow the pages in this section in order.
:::