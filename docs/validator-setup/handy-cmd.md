---
title: Handy Commands
description: A list of commands that will be helpful.
sidebar_position: 7
---

# Handy Commands

These commands will be helpful when opearting your validator.

## Get Rewards

If you want to get both rewards and commissions of your validator enter the following command:

```bash
sentinelhub tx distribution withdraw-rewards \
  <sentvaloper_address> \
  --from <validator_key_name> \
  --commission \
  --chain-id=sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=250000
```

## Send DVPN

To send DVPN from your validator to another address enter the following command:

```bash
sentinelhub tx bank send \
  <validator_address> \
  <recipient_address> \
  500000000000udvpn \
  --chain-id sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=250000
```

## Vote a Proposal

To cast your vote for a proposal, please use the following command:

```bash
sentinelhub tx gov vote 46 yes \
  --from <validator_key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=250000
```

## Deposit for a Proposal

To initiate a proposal deposit, please use the following command:

```bash
sentinelhub tx gov deposit 46
  500000000000udvpn \
  --from <validator_key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=250000
```

## Unbond your self delegation

To unbond your self bonded DVPN, please use the following command:

```bash
sentinelhub tx staking unbond
  <sentvaloper_address> \
  10000000udvpn \
  --chain-id sentinelhub-2 \
  --from <validator_key_name> \
  --gas-prices=0.5udvpn \
  --gas=250000
```

## Edit Commission Fees

To edit your validator commission fee, please use the following command:

```bash
sentinelhub tx staking edit-validator \
  --commission-rate=0.08 \
  --from <validator_key_name> \
  --chain-id=sentinelhub-2 \
  --gas=500000 \
  --gas-prices=0.2udvpn
```

## Set a Withdrawal Address

If you want to set a withdrawal address different from your validator, please use the following command:

```bash
sentinelhub tx distribution set-withdraw-addr \
  <withdrawal_address> \
  --from validator \
  --chain-id=sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=250000
```