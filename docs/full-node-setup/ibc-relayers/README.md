---
title: IBC Relayers
sidebar_label: "📘 Overview"
sidebar_position: 0
---

# IBC Relayers

[Inter-Blockchain Communication (IBC)](https://ibc.cosmos.network/) is the protocol that lets Sentinel Hub move tokens and messages between Cosmos SDK chains. **Relayers** are the off-chain operators that watch packets on one chain and submit them on the other, keeping channels alive and tokens flowing.

Running a relayer is a separate role from operating a full node. It doesn't sign blocks (so it isn't a validator) and it doesn't serve client queries (so it isn't an RPC/API). A relayer needs:

- An RPC endpoint on each chain it relays between (your own full node, or a public one).
- A funded wallet on each chain to pay relay fees.
- 24/7 uptime; packets that aren't relayed in time will time out.

This section covers two operational topics:

- **List of relayers**: who's currently running Sentinel Hub relays.
- **Restoring an IBC channel**: the procedure when a channel goes stale and needs reactivation.
