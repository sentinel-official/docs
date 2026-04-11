---
title: Staking
sidebar_position: 10
---

Querying commands for the staking module, which handles validator sets, delegations, and unbonding.

## Query a Validator

Retrieve information about a specific validator.

```bash
sentinelhub query staking validator <sentvaloper_address> \
  --node https://rpc.sentinel.co:443
```

## Query All Validators

Retrieve information about all validators.

```bash
sentinelhub query staking validators \
  --node https://rpc.sentinel.co:443
```

## Query a Delegation

Query a delegation based on delegator address and validator address.

```bash
sentinelhub query staking delegation <delegator_address> <sentvaloper_address> \
  --node https://rpc.sentinel.co:443
```

## Query All Delegations

Query all delegations made by one delegator.

```bash
sentinelhub query staking delegations <delegator_address> \
  --node https://rpc.sentinel.co:443
```

## Query Delegations to a Validator

Query all delegations made to one validator.

```bash
sentinelhub query staking delegations-to <sentvaloper_address> \
  --node https://rpc.sentinel.co:443
```

## Query an Unbonding Delegation

Query an unbonding-delegation record based on delegator and validator address.

```bash
sentinelhub query staking unbonding-delegation <delegator_address> <sentvaloper_address> \
  --node https://rpc.sentinel.co:443
```

## Query All Unbonding Delegations

Query all unbonding-delegations records for one delegator.

```bash
sentinelhub query staking unbonding-delegations <delegator_address> \
  --node https://rpc.sentinel.co:443
```

## Query Unbonding Delegations From a Validator

Query all unbonding delegations from a validator.

```bash
sentinelhub query staking unbonding-delegations-from <sentvaloper_address> \
  --node https://rpc.sentinel.co:443
```

## Query a Redelegation

Query a redelegation record based on delegator and source/destination validator addresses.

```bash
sentinelhub query staking redelegation <delegator_address> <src_sentvaloper> <dst_sentvaloper> \
  --node https://rpc.sentinel.co:443
```

## Query All Redelegations

Query all redelegation records for one delegator.

```bash
sentinelhub query staking redelegations <delegator_address> \
  --node https://rpc.sentinel.co:443
```

## Query Staking Pool

Query the current staking pool values.

```bash
sentinelhub query staking pool \
  --node https://rpc.sentinel.co:443
```

## Query Staking Params

Query the current staking parameters.

```bash
sentinelhub query staking params \
  --node https://rpc.sentinel.co:443
```

## Query Historical Info

Query historical info at a given height.

```bash
sentinelhub query staking historical-info <height> \
  --node https://rpc.sentinel.co:443
```
