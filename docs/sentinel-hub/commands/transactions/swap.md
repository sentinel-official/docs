---
title: Swap
sidebar_position: 6
---

# Swap

Transaction commands for the swap module, which allows swapping SENT tokens to DVPN.

## Swap SENT to DVPN

Swap coins from SENT to DVPN by providing the original transaction hash, receiver address, and amount.

```bash
sentinelhub tx swap swap \
  <tx_hash> \
  <receiver_address> \
  <amount> \
  --from <key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices 0.5udvpn \
  --gas 300000 \
  --node https://rpc.sentinel.co:443
```

Replace `<tx_hash>` with the SENT transaction hash, `<receiver_address>` with the destination address, and `<amount>` with the amount to swap.
