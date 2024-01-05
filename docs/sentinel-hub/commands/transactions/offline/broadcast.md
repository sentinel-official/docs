---
title: Broadcast
sidebar_position: 3
---

# Broadcast a Transaction

To broadcast the transaction that has been generated and signed offline, use the following command:

```bash
sentinelhub tx broadcast \
    signed.json \
    --node https://rpc.sentinel.co:443
```

If you wish to engage in additional offline transactions, such as delegating, claiming rewards, unbonding, etc., you simply need to include the following four fields, as demonstrated in the process of creating and signing an offline transaction:

```bash
--generate-only \
--offline \
--account-number=<account_number> \
--sequence=<sequence_number> \
> unsigned.json
```

To sign the transaction, use the sign command as previously shown, specifying the following fields:

```bash
--offline \
--account-number=<account_number> \
--sequence=<sequence_number>
```