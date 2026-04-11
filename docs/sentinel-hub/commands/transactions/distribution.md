---
title: Distribution
sidebar_position: 8
---

# Distribution

Transaction commands for the distribution module, which manages staking rewards, commission withdrawals, and the community pool.

## Withdraw Rewards

Withdraw rewards from a given delegation address. Optionally withdraw validator commission with the `--commission` flag.

```bash
sentinelhub tx distribution withdraw-rewards <sentvaloper_address> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

To also withdraw validator commission:

```bash
sentinelhub tx distribution withdraw-rewards <sentvaloper_address> \
  --commission \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

## Withdraw All Rewards

Withdraw all delegation rewards for a delegator.

```bash
sentinelhub tx distribution withdraw-all-rewards \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

## Set Withdraw Address

Change the default withdraw address for rewards associated with your account.

```bash
sentinelhub tx distribution set-withdraw-addr <withdrawal_address> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

## Fund Community Pool

Fund the community pool with the specified amount.

```bash
sentinelhub tx distribution fund-community-pool \
  <amount>udvpn \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```
