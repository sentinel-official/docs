---
title: Delegate
sidebar_position: 3
---

# Delegate

To delegate to another validator address type the following command in your terminal:

```bash
sentinelhub tx staking delegate <sentvaloper_validator_address> \
    <amount>udvpn \
    --from=<your_keyname> \
    --chain-id=sentinelhub-2 \
    --node https://rpc.sentinel.co:443 \
    --gas-prices=0.5udvpn \
    --gas=300000 \
```

Make sure to replace `<sentvaloper_validator_address>`, `<amount>`, and `<your_keyname>` with the appropriate values for your delegation.