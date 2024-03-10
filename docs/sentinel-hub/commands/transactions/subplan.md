---
title: Subscription Plan
sidebar_position: 4
---

# Subscription Plan

Here are the instructions for creating a Subscription Plan in the dVPN application creator. Additionally, you may refer to the [Medium article](https://medium.com/sentinel/introduction-of-on-chain-subscriptions-and-time-based-payments-sentinels-biggest-dvpn-protocol-a2b240199f18) for more detailed information.

## Create a dVPN Application Provider ID

Begin by registering an on-chain provider ID using the following command:

```bash
sentinelhub tx vpn provider register \
  <provider_name> \
  --description "<provider_description>" \
  --identity "<provider_identity>" \
  --website https://test.provider.com \
  --broadcast-mode block \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas=300000 \
  --node https://rpc.sentinel.co:443
```

## Create a Subscription Plan

Next, the dVPN application creator should proceed to establish an on-chain subscription plan, specifying the duration, data allowance, and associated prices:

```bash
sentinelhub tx vpn plan create \
  <plan_duration> \
  <plan_gygabytes> \
  <plan_prices> \
  --broadcast-mode block \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas=300000 \
  --node https://rpc.sentinel.co:443
```

## Activate the Subscription Plan

To activate the subscription plan, execute the following command

```bash
sentinelhub tx vpn plan update-status \
  <plan_id> active \
  --broadcast-mode block \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas=300000 \
  --node https://rpc.sentinel.co:443
```

## Create a Time Based Subscription with a Node

To create a time-based subscription with a node, execute the following command

```bash
sentinelhub tx vpn node subscribe \
  <sentnode_address> \
  <denom> \
  <hours> \
  --broadcast-mode block \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas=300000 \
  --node https://rpc.sentinel.co:443
```

Ensure accurate configuration by replacing `<sentnode_address`>, `<denom>` (udvpn), and `<key_name>` with your specific values. Adjust other parameters as needed for your use case.

## Add a Community Hosted Node

To add a community-hosted node to the subscription plan, execute the following command

```bash
sentinelhub tx vpn plan add-node \
  <plan_id> \
  <sentnode_address> \
  --broadcast-mode block \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas=300000 \
  --node https://rpc.sentinel.co:443
```

## Remove a Node

To remove a node from the subscription plan, execute the following command

```bash
sentinelhub tx vpn plan remove-node \
  <plan_id> \
  <sentnode_address> \
  --broadcast-mode block \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas=300000 \
  --node https://rpc.sentinel.co:443
```

## Share Subscription with Another Account

To facilitate subscription sharing with another account, this applies to dVPN apps categorized as follows: free dVPN, paid with non-IBC supported tokens, and paid with fiat payment gateway.

```bash
sentinelhub tx vpn subscription allocate \
  <subscription_id> \
  <account_address> \
  <bytes> \
  --broadcast-mode block \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas=300000 \
  --node https://rpc.sentinel.co:443
```

## Query Subscription Plan

To query about the subscriptions associated with an account address, use the following command:

```bash
sentinelhub query vpn subscription allocate \
  --account-addr <account_address> \
  --node https://rpc.sentinel.co:443
```

## Subscription-Associated User Account Query

To query a list of all user accounts linked to a specific subscription, use the following command:

```bash
sentinelhub query vpn allocations \
  <subscription_id> \
  --node https://rpc.sentinel.co:443
```

## List of Available Subscription Plans

To query a list of all subscription plans available,  use the following command:

```bash
sentinelhub query vpn plans \
  --node https://rpc.sentinel.co:443
```