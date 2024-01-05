---
title: Staking Rewards
sidebar_position: 3
---

# Staking Rewards

With Sentinel Hub, you can execute various operations to engage with staking rewards.

## Withdraw Staking Rewards

To claim your staking rewards, execute the following command in your terminal:

```bash
sentinelhub tx distribution withdraw-rewards <sentvaloper_validator_address> \
    --from=<your_keyname> \
    --chain-id=sentinelhub-2 \
    --node https://rpc.sentinel.co:443 \
    --gas-prices=0.5udvpn \
    --gas=300000 \
```

Replace `<sentvaloper_validator_address>` with the actual validator address you staked with, and `<your_keyname>` with the name of your key. Adjust the gas prices and limit according to your preference and network conditions.

## Set Withdrawal Address

To set an alternative address for withdrawing your rewards, use the following command:

```bash
sentinelhub tx distribution set-withdraw-addr <withdrawal_address> \
    --from=<your_keyname> \
    --chain-id=sentinelhub-2 \
    --node https://rpc.sentinel.co:443 \
    --gas-prices=0.5udvpn \
    --gas=300000 \
```

Make sure to replace `<withdrawal_address>` with the actual address you want to set as your withdrawal destination and `<your_keyname>` with your specific key name. Adjust other parameters as needed.