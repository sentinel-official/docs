---
title: Create
sidebar_position: 1
---

# Create an Offline Transaction

To initiate an offline transaction using your terminal, follow these steps:

```bash
sentinelhub tx bank send \
    <sender_address> \
    <recipient_address> \
    <amount>udvpn \
    --chain-id=sentinelhub-2 \
    --gas-prices=0.5udvpn \
    --gas=300000 \
    --generate-only \
    --account-number=<account_number> \
    --sequence=<sequence_number> \
    > unsigned.json
```

In comparison to online transactions, there are additional fields that require clarification:

- `--generate-only`: This option generates the transaction without executing it.
- `--account-number`: Refers to the account number associated with your wallet.
- `--sequence`: It represents the transaction number associated with the address up to that point.
- `> unsigned.json`: This command directs the output to a file named unsigned.json.

After running this command, an `unsigned.json` file will be created. Keep in mind that this file must be signed offline before proceeding to broadcast the transaction.