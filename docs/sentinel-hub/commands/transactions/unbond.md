---
title: Unbond
sidebar_position: 5
---

# Unbond

To unbond your staked amount from a validator type on your terminal

```bash
sentinelhub tx staking unbond <sentvaloper_validator_address> \
    <amount>udvpn \
    --from=<your_keyname> \
    --chain-id=sentinelhub-2 \
    --node https://rpc.sentinel.co:443 \
    --gas-prices=0.5udvpn \
    --gas=300000
```

This command will unbond the specified `<amount>` of UDVPN tokens from the validator identified by `<sentvaloper_validator_address>`. Ensure that you replace `<your_keyname>` with the actual name of your key.