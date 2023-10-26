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

### `config`

```bash
sentinelhub config
```

<details><summary>Output</summary>
<p>

#### This is the output of `sentinelhub config`
```json
{
	"chain-id": "",
	"keyring-backend": "os",
	"output": "text",
	"node": "tcp://localhost:26657",
	"broadcast-mode": "sync"
}
```

</p>
</details>

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

:::tip
For more detailed usage instructions for keys, please refer to the related section **[here](/sentinel-core/category/key-management)**
:::

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

Displays the status of a remote node (default "tcp://localhost:26657").

**Syntax**
```bash
sentinelhub status
```

<details><summary>Output</summary>
<p>

#### This is the output of `sentinelhub status`

```json
{
   "NodeInfo":{
      "protocol_version":{
         "p2p":"8",
         "block":"11",
         "app":"0"
      },
      "id":"fd1c929dc0c2ce6418b6ed31747469de6c7b15bb",
      "listen_addr":"tcp://0.0.0.0:26656",
      "network":"sentinelhub-2",
      "version":"0.34.27",
      "channels":"40202122233038606100",
      "moniker":"2-private-node",
      "other":{
         "tx_index":"on",
         "rpc_address":"tcp://0.0.0.0:26657"
      }
   },
   "SyncInfo":{
      "latest_block_hash":"64012F64E1BD3CDF52E8A68EE4CB8BA42740C7550704800536109DF8C6F24E9A",
      "latest_app_hash":"B9648EC2A213E81D9FE42932F69113FA9F0965FA3DD0C4E4D15DDB7940DC0C8F",
      "latest_block_height":"12638588",
      "latest_block_time":"2023-09-10T02:09:42.963271871Z",
      "earliest_block_hash":"11E60037E22F6ABDF29DE851063E4C0E0A34E4D3D067EDA55B1674A0257E7D03",
      "earliest_app_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
      "earliest_block_height":"901801",
      "earliest_block_time":"2021-05-29T14:30:00Z",
      "catching_up":false
   },
   "ValidatorInfo":{
      "Address":"6D2F88F51486E74768A85DA4E375F3551F2762A8",
      "PubKey":{
         "type":"tendermint/PubKeyEd25519",
         "value":"S+wi725X8wyDhgEmRlR0xnjuxBDntlBGsLLMmpIFXiY="
      },
      "VotingPower":"0"a
   }
}

```

</p>
</details>

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