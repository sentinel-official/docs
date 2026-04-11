---
title: Swap
sidebar_position: 11
---

Querying commands for the swap module, which handles SENT to DVPN token swaps.

## Query a Swap

Query a swap by its transaction hash.

```bash
sentinelhub query swap swap <tx_hash> \
  --node https://rpc.sentinel.co:443
```

## Query All Swaps

Query all swaps with optional filters and pagination.

```bash
sentinelhub query swap swaps \
  --node https://rpc.sentinel.co:443
```

## Query Swap Params

Query the swap module parameters.

```bash
sentinelhub query swap params \
  --node https://rpc.sentinel.co:443
```
