# Transactions

## Subscribe to a node

```sh
sentinelcli tx subscription subscribe-to-node \
    --home "${HOME}/.sentinelcli" \
    --keyring-backend os \
    --chain-id sentinelhub-2 \
    --node https://rpc.sentinel.co:443 \
    --from <KEY_NAME> <NODE_ADDRESS> <DEPOSIT>
```
