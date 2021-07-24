# VPN

## Connect

```sh
sudo sentinelcli connect \
    --home "${HOME}/.sentinelcli" \
    --keyring-backend os \
    --chain-id sentinelhub-2 \
    --node https://rpc.sentinel.co:443 \
    --yes \
    --from <KEY_NAME> <SUBSCRIPTION_ID> <NODE_ADDRESS>
```

## Disconnect

```sh
sudo sentinelcli disconnect \
    --home "${HOME}/.sentinelcli"
```
