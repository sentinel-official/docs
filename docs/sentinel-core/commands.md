---
title: Commands
sidebar_position: 3
---

# Commands

This section describes the commands available from `sentinelhub`, the command line interface that connects a running `sentinelhub` process.

### `add-genesis-account`

Adds a genesis account to `genesis.json`.

**Syntax**
```bash
ADDRESS=$(sentinelhub keys show --address ${KEY_NAME})
STAKING_DENOM=

sentinelhub add-genesis-account ${ADDRESS} 1000000000${STAKING_DENOM}
```

### `collect-gentxs`

Collects genesis transactions and outputs them to `genesis.json`.

**Syntax**
```bash
sentinelhub collect-gentxs
```

### `debug`

Helps debug the application.

```bash
sentinelhub debug
```

### `export`

Exports the state to JSON.

**Syntax**
```bash
sentinelhub export
```

### `gentx`

Adds a genesis transaction to `genesis.json`.

**Syntax**
```bash
sentinelhub gentx <key-name> <amount><coin-denominator>
```

**Example**
```bash
sentinelhub gentx myKey 1000000udvpn --home=/path/to/home/dir --keyring-backend=os --chain-id=test-chain-1 \
    --moniker="myValidator" \
    --commission-max-change-rate=0.01 \
    --commission-max-rate=1.0 \
    --commission-rate=0.07 \
    --details="..." \
    --security-contact="..." \
    --website="..."
```

### `help`

Shows help information.

**Syntax**
```bash
sentinelhub help
```

### `init`

Initializes the configuration files for a validator and a node.

**Syntax**
```bash
sentinelhub init <moniker>
```

**Example**
```bash
sentinelhub init myNode
```

### `keys`

Manages Keyring commands.

```bash
sentinelhub keys <command>
```


### `migrate`
Migrates the source genesis into the target version and prints to STDOUT.

**Syntax**
```bash
sentinelhub migrate <path-to-genesis-file>
```

**Example**
```bash
sentinelhub migrate /genesis.json --chain-id=testnet --genesis-time=2020-04-19T17:00:00Z --initial-height=4000
```

### `query`

Manages queries. 

### `start`

Runs the full node application with Tendermint in or out of process. By default, the application runs with Tendermint in process.

**Syntax**
```bash
sentinelhub start
```

### `status`

Displays the status of a remote node.

**Syntax**
```bash
sentinelhub status
```

### `tendermint`

Manages the Tendermint protocol. 

### `tx`

Retrieves a transaction by its hash, account sequence, or signature. 

**Syntax to query by hash**
```bash
sentinelhub query tx <hash>
```

**Syntax to query by account sequence**
```bash
sentinelhub query tx --type=acc_seq <address>:<sequence>
```

**Syntax to query by signature**
```bash
sentinelhub query tx --type=signature <sig1_base64,sig2_base64...>
```

### `txs`

Retrieves transactions that match the specified events where results are paginated.

**Syntax**
```bash
sentinelhub query txs --events '<event>' --page <page-number> --limit <number-of-results>
```

**Example**
```bash
sentinelhub query txs --events 'message.sender=sent1...&message.action=withdraw_delegator_reward' --page 1 --limit 30
```

### `validate-genesis`

Validates the genesis file at the default location or at the location specified.

**Syntax**
```bash
sentinelhub validate-genesis </path-to-file>
```

**Example**
```bash
sentinelhub validate-genesis </genesis.json>
```

### `version`

Returns the version of Sentinelhub you're running.

**Syntax**
```bash
sentinelhub version
```