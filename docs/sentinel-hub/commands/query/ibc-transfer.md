---
title: IBC Transfer
sidebar_position: 16
---

Querying commands for the IBC fungible token transfer module.

## Query a Denom Trace

Query the denom trace info for a given trace hash or denom.

```bash
sentinelhub query ibc-transfer denom-trace <hash_or_denom> \
  --node https://rpc.sentinel.co:443
```

## Query All Denom Traces

Query all denom traces.

```bash
sentinelhub query ibc-transfer denom-traces \
  --node https://rpc.sentinel.co:443
```

## Query IBC Transfer Params

Query the current IBC transfer parameters.

```bash
sentinelhub query ibc-transfer params \
  --node https://rpc.sentinel.co:443
```
