---
title: Send
sidebar_position: 1
---

# Send a Transaction

To send a transaction to another sentinel address type on your terminal

```bash
sentinelhub tx bank send \
    <sender_address> \
    <recipient_address> \
    <amout>udvpn \
    --chain-id=sentinelhub-2 \
    --node https://rpc.sentinel.co:443 \
    --gas-prices=0.5udvpn \
    --gas=300000 \
```

Ensure to replace `<sender_address>`, `<recipient_address>`, and `<amount>` with the appropriate values for your transaction. Adjust the gas prices and limit as needed for the specific requirements of your transaction.