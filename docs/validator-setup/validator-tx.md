---
title: Become a Validator
sidebar_position: 6
---

# Become a Validator

A create-validator transaction is a type of transaction used to create a new validator. In this type of transaction, the validator stakes a certain amount of tokens as collateral.

Add an operator key and take note of the mnemonic key

```bash
KEY_NAME="validator"
​
sentinelhub keys add "${KEY_NAME}"
```

Make the create-validator transaction

```bash
CONSENSUS_PUBLIC_KEY=$(sentinelhub tendermint show-validator)
DELEGATION_AMOUNT="5000000000udvpn"
MONIKER="Your Validator Name"
​
sentinelhub tx staking create-validator \
    --broadcast-mode=block \
    --min-self-delegation=1 \
    --chain-id=sentinelhub-2 \
    --commission-max-change-rate=0.01 \
    --commission-max-rate=0.2 \
    --commission-rate=0.05 \
    --gas=500000 \
    --gas-prices=0.1udvpn \
    --amount=${DELEGATION_AMOUNT} \
    --from="${KEY_NAME}" \
    --moniker="${MONIKER}" \
    --pubkey="${CONSENSUS_PUBLIC_KEY}"
```