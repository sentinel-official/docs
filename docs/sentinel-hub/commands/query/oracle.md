---
title: Oracle
sidebar_position: 12
---

Querying commands for the Oracle module, which provides price feed data for assets on the Sentinel network.

## Query an Asset

Query an asset by denomination.

```bash
sentinelhub query oracle asset <denom> \
  --node https://rpc.sentinel.co:443
```

## Query All Assets

Query the list of all registered assets.

```bash
sentinelhub query oracle assets \
  --node https://rpc.sentinel.co:443
```

## Query Oracle Params

Query the oracle module parameters.

```bash
sentinelhub query oracle params \
  --node https://rpc.sentinel.co:443
```
