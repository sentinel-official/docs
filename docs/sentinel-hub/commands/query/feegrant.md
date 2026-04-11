---
title: Feegrant
sidebar_position: 13
---

Querying commands for the feegrant module, which allows one account to grant fee allowances to another.

## Query a Grant

Query details of a single fee grant between a granter and grantee.

```bash
sentinelhub query feegrant grant <granter_address> <grantee_address> \
  --node https://rpc.sentinel.co:443
```

## Query Grants by Grantee

Query all fee grants received by a grantee.

```bash
sentinelhub query feegrant grants-by-grantee <grantee_address> \
  --node https://rpc.sentinel.co:443
```

## Query Grants by Granter

Query all fee grants issued by a granter.

```bash
sentinelhub query feegrant grants-by-granter <granter_address> \
  --node https://rpc.sentinel.co:443
```
