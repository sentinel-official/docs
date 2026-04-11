---
title: VPN
sidebar_position: 4
---

# VPN Transactions

Commands for interacting with the Sentinel VPN modules: providers, plans, nodes, subscriptions, sessions, and leases.

## Provider

### Register a Provider

Register a new provider with a name and optional details.

```bash
sentinelhub tx vpn provider register-provider \
  <provider_name> \
  --description "<provider_description>" \
  --identity "<provider_identity>" \
  --website "https://example.com" \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### Update Provider Details

Update the details of an existing provider.

```bash
sentinelhub tx vpn provider update-provider-details \
  --description "<new_description>" \
  --identity "<new_identity>" \
  --website "https://new-website.com" \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### Update Provider Status

Update the operational status of an existing provider.

```bash
sentinelhub tx vpn provider update-provider-status \
  <active|inactive> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

## Plan

### Create a Plan

Create a new subscription plan with bytes, duration, pricing details, and privacy setting.

```bash
sentinelhub tx vpn plan create-plan \
  <bytes> \
  <duration> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### Update Plan Details

Update the details of an existing subscription plan.

```bash
sentinelhub tx vpn plan update-plan-details \
  <plan_id> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### Update Plan Status

Activate or deactivate a subscription plan.

```bash
sentinelhub tx vpn plan update-plan-status \
  <plan_id> <active|inactive> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### Link a Node to a Plan

Link a community-hosted node to a subscription plan.

```bash
sentinelhub tx vpn plan link-node \
  <plan_id> \
  <sentnode_address> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### Unlink a Node from a Plan

Remove a node from a subscription plan.

```bash
sentinelhub tx vpn plan unlink-node \
  <plan_id> \
  <sentnode_address> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

## Node

### Register a Node

Register a new node with remote addresses and pricing details.

```bash
sentinelhub tx vpn node register-node \
  <remote_addrs> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### Update Node Details

Update the pricing and remote URL details of an existing node.

```bash
sentinelhub tx vpn node update-node-details \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### Update Node Status

Update the operational status of a node.

```bash
sentinelhub tx vpn node update-node-status \
  <active|inactive> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### Start a Session with a Node

Start a session directly with a node.

```bash
sentinelhub tx vpn node start-session \
  <sentnode_address> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

## Subscription

### Start a Subscription

Start a subscription for a plan.

```bash
sentinelhub tx vpn subscription start-subscription \
  <plan_id> \
  --denom udvpn \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### Renew a Subscription

Renew an existing subscription.

```bash
sentinelhub tx vpn subscription renew-subscription \
  <subscription_id> \
  --denom udvpn \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### Cancel a Subscription

Cancel an active subscription.

```bash
sentinelhub tx vpn subscription cancel-subscription \
  <subscription_id> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### Update a Subscription

Update the details of an existing subscription.

```bash
sentinelhub tx vpn subscription update-subscription \
  <subscription_id> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### Share a Subscription

Share a subscription with another account by allocating bytes.

```bash
sentinelhub tx vpn subscription share-subscription \
  <subscription_id> \
  <account_address> \
  <bytes> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### Start a Session for a Subscription

Start a session for a subscription and node.

```bash
sentinelhub tx vpn subscription start-session \
  <subscription_id> \
  <sentnode_address> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

## Session

### Cancel a Session

Cancel an active session.

```bash
sentinelhub tx vpn session cancel-session \
  <session_id> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### Update a Session

Update the details of an existing session (download bytes, upload bytes, duration).

```bash
sentinelhub tx vpn session update-session \
  <session_id> <download_bytes> <upload_bytes> <duration> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

## Lease

### Start a Lease

Start a lease with a node for the specified duration.

```bash
sentinelhub tx vpn lease start-lease \
  <sentnode_address> \
  <hours> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### Renew a Lease

Renew an existing lease for a specified duration.

```bash
sentinelhub tx vpn lease renew-lease \
  <lease_id> \
  <hours> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### Update a Lease

Update the details of an existing lease.

```bash
sentinelhub tx vpn lease update-lease \
  <lease_id> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

### End a Lease

End an existing lease.

```bash
sentinelhub tx vpn lease end-lease \
  <lease_id> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```
