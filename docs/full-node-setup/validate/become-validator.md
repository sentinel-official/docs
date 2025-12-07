---
title: Become a Validator
sidebar_position: 6
---

# Become a Validator

Validators play a crucial role in maintaining the security and integrity of a network by verifying the authenticity of transactions and enforcing network rules and protocols. To participate in the network, validators are required to stake a certain amount of P2P coins. Incentivized by the receipt of P2P coins as rewards, validators are motivated to act honestly and ensure the network's security.

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
    --commission-rate=0.07 \
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

- `--commission-rate=0.07`: This is the percentage of rewards the validator keeps from the rewards earned by delegators. The minimum you can set is **5%**, according to **Cosmos SDK v0.47**.
- `--commission-max-change-rate=0.01`: the max commission rate a validator can change. In this example it will be **1%** and it is **cannot be changed** once set. This means that if a Validator wishes to raise its commissions from 5% to 8% in the future, it can achieve this by making adjustments three times, with a 24-hour interval between each transaction.
- `--commission-max-rate=0.2`: the max commission rate a validator can set. In this example it will be **20%** and it **cannot be changed** once set