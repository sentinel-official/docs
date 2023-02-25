# Queries

## Query nodes

```sh
sentinelcli query nodes \
    --home "${HOME}/.sentinelcli" \
    --node https://rpc.sentinel.co:443 \
    --page 1
```

Additionally, you can pass flags `--provider <PROVIDER_ADDRESS>` and `--status <STATUS>`

## Query a node

```sh
sentinelcli query node \
    --home "${HOME}/.sentinelcli" \
    --node https://rpc.sentinel.co:443 \
    <NODE_ADDRESS>
```

## Query subscriptions

```sh
sentinelcli query subscriptions \
    --home "${HOME}/.sentinelcli" \
    --node https://rpc.sentinel.co:443 \
    --page 1
```

Additionally, you can pass flags `--address <ACCOUNT_ADDRESS>` and `--status <STATUS>`

## Query a subscription

```sh
sentinelcli query subscription \
    --home "${HOME}/.sentinelcli" \
    --node https://rpc.sentinel.co:443 \
    <SUBSCRIPTION_ID>
```

## Query quotas

```sh
sentinelcli query quotas \
    --home "${HOME}/.sentinelcli" \
    --node https://rpc.sentinel.co:443 \
    --page 1 <SUBSCRIPTION_ID>
```

## Query a quota

```sh
sentinelcli query quota \
    --home "${HOME}/.sentinelcli" \
    --node https://rpc.sentinel.co:443 \
    <SUBSCRIPTION_ID> <ACCOUNT_ADDRESS>
```

## Query sessions

```sh
sentinelcli query sessions \
    --home "${HOME}/.sentinelcli" \
    --node https://rpc.sentinel.co:443 \
    --page 1
```

Additionally, you can pass flags `--address <ACCOUNT_ADDRESS>`, `--subscription <SUBSCRIPTION_ID>`
and `--status <STATUS>`

## Query a session

```sh
sentinelcli query session \
    --home "${HOME}/.sentinelcli" \
    --node https://rpc.sentinel.co:443 \
    <SESSION_ID>
```
