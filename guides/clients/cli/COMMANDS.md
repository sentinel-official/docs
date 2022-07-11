# COMMANDS

## Keys

### Create or recover a key

```sh
sentinelcli keys add \
    --home "${HOME}/.sentinelcli" \
    --keyring-backend os \
    <KEY_NAME>
```

Pass flag `--recover` to recover the key

## Queries

### Query nodes

```sh
sentinelcli query nodes \
    --home "${HOME}/.sentinelcli" \
    --node https://rpc.sentinel.co:443 \
    --page 1
```

Additionally, you can pass flags `--provider <PROVIDER_ADDRESS>` and `--status <STATUS>`!

### Query a node

```sh
sentinelcli query node \
    --home "${HOME}/.sentinelcli" \
    --node https://rpc.sentinel.co:443 \
    <NODE_ADDRESS>
```

### Query subscriptions

```sh
sentinelcli query subscriptions \
    --home "${HOME}/.sentinelcli" \
    --node https://rpc.sentinel.co:443 \
    --page 1
```

Additionally, you can pass flags `--address <ACCOUNT_ADDRESS>` and `--status <STATUS>`!

### Query a subscription

```sh
sentinelcli query subscription \
    --home "${HOME}/.sentinelcli" \
    --node https://rpc.sentinel.co:443 \
    <SUBSCRIPTION_ID>
```

### Query quotas

```sh
sentinelcli query quotas \
    --home "${HOME}/.sentinelcli" \
    --node https://rpc.sentinel.co:443 \
    --page 1 <SUBSCRIPTION_ID>
```

### Query a quota

```sh
sentinelcli query quota \
    --home "${HOME}/.sentinelcli" \
    --node https://rpc.sentinel.co:443 \
    <SUBSCRIPTION_ID> <ACCOUNT_ADDRESS>
```

### Query sessions

```sh
sentinelcli query sessions \
    --home "${HOME}/.sentinelcli" \
    --node https://rpc.sentinel.co:443 \
    --page 1
```

Additionally, you can pass flags `--address <ACCOUNT_ADDRESS>`, `--subscription <SUBSCRIPTION_ID>` and `--status <STATUS>`!

### Query a session

```sh
sentinelcli query session \
    --home "${HOME}/.sentinelcli" \
    --node https://rpc.sentinel.co:443 \
    <SESSION_ID>
```

## Transactions

### Subscribe to a node

```sh
sentinelcli tx subscription subscribe-to-node \
    --home "${HOME}/.sentinelcli" \
    --keyring-backend os \
    --chain-id sentinelhub-2 \
    --node https://rpc.sentinel.co:443 \
    --from <KEY_NAME> <NODE_ADDRESS> <DEPOSIT>
```

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
