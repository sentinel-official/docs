---
title: Sign
sidebar_position: 2
---

# Sign an Offline Transaction

To sign an offline transaction using your terminal, follow these steps:

```bash
sentinelhub tx sign \
    unsigned.json \
    --from=<your_keyname> \
    --output-document=signed.json \
    --chain-id=sentinelhub-2 \
    --offline \
    --account-number=<account_number> \
    --sequence=<sequence_number>
```

In comparison to online transactions, there are additional fields that require clarification:

- `--output-document`: This command directs the output to a file named signed.json.
- `--offline`: This flag explicitly indicates that the transaction is intended to be conducted offline.
- `--account-number`: Refers to the account number associated with your wallet
- `--sequence`: It represents the transaction number associated with the address up to that point.

After running this command, an `signed.json` file will be created. Keep in mind that broadcasting this file to the network is essential for the execution of the transaction.