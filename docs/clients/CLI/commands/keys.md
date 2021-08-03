# Keys

## Add a key

```sh
sentinelcli keys add \
    --home "${HOME}/.sentinelcli" \
    --keyring-backend os \
    <KEY_NAME>
```

Pass flag `--recover` to recover the key with Mnemonic

## List keys

```sh
sentinelcli keys list \
    --home "${HOME}/.sentinelcli" \
    --keyring-backend os
```
