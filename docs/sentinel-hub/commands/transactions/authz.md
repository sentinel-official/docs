---
title: Authz
sidebar_position: 1
---

# Authz

Authorize and revoke access to execute transactions on behalf of your address
`Grant authorization to an address to execute a transaction on another address behalf`

## Authorization to Spend

### Grant

Grant permission for one address to spend on behalf of another address.

```bash
sentinelhub tx authz grant \
  <grantee_address> \
  send \
  --from <granter_key_name> \
  --spend-limit <amount>udvpn \
  --expiration 1730799045 \
  --node https://rpc.sentinel.co:443 \
  --chain-id sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=300000
```

### Revoke

Revoke permission for one address to spend on behalf of another address.

```bash
sentinelhub tx authz revoke \
  <grantee_address> \
  /cosmos.bank.v1beta1.MsgSend \
  --from <granter_key_name> \
  --node https://rpc.sentinel.co:443 \
  --chain-id sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=300000
```

### Grantee Transaction Process

To initiate the transaction on behalf of the granter account, follow these steps:

The granter must first generate an offline transaction using the following command which prepares the transaction details and saves them in the tx.json file.

```bash
sentinelhub tx bank send \
  <granter_address> \
  <recipient_address> \
  <amount>udvpn \
  --chain-id sentinelhub-2 \
  --generate-only > tx.json
```

The grantee is then responsible for broadcasting the transaction. Ensure that the grantee has sufficient fees to cover the transaction costs. Use the following command:

```bash
sentinelhub tx authz exec tx.json \
  --from <grantee_key_name> \
  --node https://rpc.sentinel.co:443 \
  --chain-id sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=300000
```

## Authorization to Vote

### Grant

Authorize an address to cast votes on behalf of another address for proposals.

```bash
sentinelhub tx authz grant \
  <grantee_address> \
  generic \
  --msg-type /cosmos.gov.v1beta1.MsgVote \
  --from <granter_key_name> \
  --expiration 1730799045 \
  --node https://rpc.sentinel.co:443 \
  --chain-id sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=300000
```

Some notes on the flags:
- the expiration is set to default at 1730799045 which is 1 year

### Revoke

Revoke authorization for an address to cast votes on behalf of another address for proposals.

```bash
sentinelhub tx authz revoke \
  <grantee_address> \
  /cosmos.gov.v1beta1.MsgVote \
  --from <granter_key_name> \
  --node https://rpc.sentinel.co:443 \
  --chain-id sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=300000
```

## Authorization to Withdraw Rewards

### Grant

Grant authorization for one address to withdraw staking rewards on behalf of another address.

```bash
sentinelhub tx authz grant \
  <grantee_address> \
  generic \
  --msg-type /cosmos.distribution.v1beta1.MsgSetWithdrawAddress \
  --from <granter_key_name> \
  --node https://rpc.sentinel.co:443 \
  --expiration 1730799045 \
  --chain-id sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=300000
```

### Revoke

Revoke the authorization for one address to withdraw staking rewards on behalf of another address.

```bash
sentinelhub tx authz revoke \
  <grantee_address> \
  /cosmos.distribution.v1beta1.MsgSetWithdrawAddress \
  --from <granter_key_name> \
  --node https://rpc.sentinel.co:443 \
  --chain-id sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=300000
```

## Authorization to Claim Validator Commissions

### Grant

Authorize one specific address to claim validator commissions on behalf of the validator's address.

```bash
sentinelhub tx authz grant \
  <grantee_address> \
  generic \
  --msg-type /cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission \
  --from <granter_key_name> \
  --expiration 1730799045 \
  --node https://rpc.sentinel.co:443 \
  --chain-id sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=300000
```

### Revoke

Revoke the authorization for claiming validator rewards on behalf of the validator's address for a specific account.

```bash
sentinelhub tx authz revoke \
  <grantee_address> \
  /cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission \
  --from <granter_key_name> \
  --node https://rpc.sentinel.co:443 \
  --chain-id sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=300000
```