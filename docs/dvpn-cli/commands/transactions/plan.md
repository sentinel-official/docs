---
title: Plan
sidebar_position: 2
---

These commands are related to a Plan management

## Create a Plan

Before creating a Plan, make sure you have registered as provider first.

```bash
sentinelcli tx plan create \
  <duration><time_denom> \
  <gigabytes> \
  <prices>udvpn \
  --from <provider_key> \
  --chain-id=sentinelhub-2 \
  --node https://rpc.sentinel.co:443 \
  --gas-prices=0.5udvpn \
  --gas=300000
```


## Link Node to a Plan

Link a Node to a plan.

```bash
sentinelcli tx plan link-node \
  <plan_id> \
  <sentnode_address> \
  --from <provider_key> \
  --chain-id=sentinelhub-2 \
  --node https://rpc.sentinel.co:443 \
  --gas-prices=0.5udvpn \
  --gas=300000
```


## Unlink Node to a Plan

Unink a Node to a plan.

```bash
sentinelcli tx plan unlink-node \
  <plan_id> \
  <sentnode_address> \
  --from <provider_key> \
  --chain-id=sentinelhub-2 \
  --node https://rpc.sentinel.co:443 \
  --gas-prices=0.5udvpn \
  --gas=300000
```


## Subscribe to a Plan

Subscribe to a Plan

```bash
sentinelcli tx plan subscribe \
  <plan_id> \
  udvpn \
  --chain-id=sentinelhub-2 \
  --node https://rpc.sentinel.co:443 \
  --gas-prices=0.5udvpn \
  --gas=300000
```


## Update Status of a Plan

Get a Plan status update.

```bash
sentinelcli tx plan update-status \
  <plan_id> \
  <status> \
  --from <provider_key> \
  --chain-id=sentinelhub-2 \
  --node https://rpc.sentinel.co:443 \
  --gas-prices=0.5udvpn \
  --gas=300000
```