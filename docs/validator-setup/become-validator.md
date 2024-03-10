---
title: Become a Validator
sidebar_position: 6
---

# Become a Validator

A create-validator transaction is a type of transaction used to create a new validator. In this type of transaction, the validator stakes a certain amount of coins as collateral.

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
    --commission-max-change-rate=0.01 \
    --commission-max-rate=0.2 \
    --commission-rate=0.05 \
    --amount=${DELEGATION_AMOUNT} \
    --moniker="${MONIKER}" \
    --pubkey="${CONSENSUS_PUBLIC_KEY}" \
    --from="${KEY_NAME}" \
    --chain-id=sentinelhub-2 \
    --gas=300000 \
    --gas-prices=0.5udvpn
```

### The `--commission` flag explained

The commission rate plays a crucial role in the decision-making process when executing the create-validator transaction.

- `--commission-rate=0.05`: the current commission rate that the validator receives from delegators. In this example it is **5%**. This value is adjustable in the future.
- `--commission-max-change-rate=0.01`: the max commission rate a validator can change. In this example it will be **1%** and it is **cannot be changed** once set. This means that if a Validator wishes to raise its commissions from 5% to 8% in the future, it can achieve this by making adjustments three times, with a 24-hour interval between each transaction.
- `--commission-max-rate=0.2`: the max commission rate a validator can set. In this example it will be **20%** and it **cannot be changed** once set