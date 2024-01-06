---
title: Commission Fees
sidebar_position: 1
---

# Edit Commission Fees

To adjust your validator commission fee, utilize the following command:

```bash
sentinelhub tx staking edit-validator \
  --commission-rate=<new_commission_rate> \
  --from <validator_key_name> \
 --chain-id=sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=300000
```

Ensure to substitute `<validator_key_name>` with your specific validator key name and `<new_commission_rate>` with the desired commission rate. For instance, if you initially set the commission-rate to 0.05% during the [`create-validator`](/validator-setup/become-validator) transaction, you can now adjust it to 0.06% or any other value within the limits defined by the `commission-max-change-rate` parameter.

Please note that in this scenario, the flag `--node` is not utilized, assuming you are executing this command directly from your validator machine.