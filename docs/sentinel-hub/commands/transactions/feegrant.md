---
title: Feegrant
sidebar_position: 7
---

# Feegrant

Transaction commands for the feegrant module, which allows one account to grant fee allowances to another. This is useful for dVPN applications that want to sponsor transaction fees for their users.

## Grant a Fee Allowance

Grant a fee allowance to an address, allowing them to use the granter's funds for transaction fees.

```bash
sentinelhub tx feegrant grant \
  <granter_address> \
  <grantee_address> \
  --spend-limit <amount>udvpn \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

You can also set an expiration with the `--expiration` flag (RFC 3339 timestamp).

## Revoke a Fee Allowance

Revoke an existing fee grant from a grantee.

```bash
sentinelhub tx feegrant revoke \
  <granter_address> \
  <grantee_address> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```
