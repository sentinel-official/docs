---
title: List
description: Sentinel Hub command list
sidebar_position: 1
---

# Sentinel Hub Command List

This section describes the commands available from `sentinelhub`, the command line interface that connects a running `sentinelhub` process.

### `add-genesis-account`

Add a genesis account to `genesis.json`. The provided account must specify
the account address or key name and a list of initial coins. If a key name is given,
the address will be looked up in the local Keybase. The list of initial tokens must
contain valid denominations. Accounts may optionally be supplied with vesting parameters.

**Syntax**

```bash
sentinelhub add-genesis-account [address_or_key_name] [coin][,[coin]] [flags]
```

### `collect-gentxs`

Collects genesis transactions and outputs them to `genesis.json`.

**Syntax**

```bash
sentinelhub collect-gentxs [flags]
```

### `config`

Create or query an application CLI configuration file

```bash
sentinelhub config <key> [value] [flags]
```

<details>
<summary>Output</summary>
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

Tool for helping with debugging your application.

**Syntax**

```bash
sentinelhub debug [flags]
sentinelhub debug [subcommand]
```

<details>
<summary>Available subcommands</summary>
<p>

#### This is the output of `sentinelhub debug`

```bash
addr        Convert an address between hex and bech32
pubkey      Decode a pubkey from proto JSON
raw-bytes   Convert raw bytes output (eg. [10 21 13 255]) to hex
```

</p>
</details>

### `export`

Exports the state to JSON.

**Syntax**

```bash
sentinelhub export [flags]
```

### `gentx`

Generate a genesis transaction that creates a validator with a self-delegation,
that is signed by the key in the Keyring referenced by a given name. A node ID and Bech32 consensus
pubkey may optionally be provided. If they are omitted, they will be retrieved from the `priv_validator.json`
file.

The following default parameters are included:

```bash
delegation amount:           100000000stake
commission rate:             0.1
commission max rate:         0.2
commission max change rate:  0.01
minimum self delegation:     1
```

**Syntax**

```bash
sentinelhub gentx [key_name] [amount][denom] [flags]
```

**Example**

```bash
sentinelhub gentx my-key-name 1000000udvpn --home=/path/to/home/dir --keyring-backend=os --chain-id=sentinelhub-2 \
   --moniker="myValidator" \
   --commission-max-change-rate=0.01 \
   --commission-max-rate=1.0 \
   --commission-rate=0.07 \
   --details="..." \
   --security-contact="..." \
   --website="..."
```

### `help`

Help provides help for any command in the application.
Simply type sentinelhub help [path to command] for full details.

**Syntax**

```bash
sentinelhub help [command] [flags]
```

### `init`

Initialize validators's and node's configuration files

**Syntax**

```bash
sentinelhub init [moniker] [flags]
```

**Example**

```bash
sentinelhub init my-node
```

### `keys`

Keyring management commands. These keys may be in any format supported by the
Tendermint crypto library and can be used by light-clients, full nodes, or any other application
that needs to sign with a private key.

The keyring supports the following backends:

```bash
os       Uses the operating system's default credentials store.
file     Uses encrypted file-based keystore within the app's configuration directory.
         This keyring will request a password each time it is accessed, which may occur
         multiple times in a single command resulting in repeated password prompts.
kwallet  Uses KDE Wallet Manager as a credentials management application.
pass     Uses the pass command line utility to store and retrieve keys.
test     Stores keys insecurely to disk. It does not prompt for a password to be unlocked
         and it should be use only for testing purposes.
```
kwallet and pass backends depend on external tools. Refer to their respective documentation for more
information:
- KWallet     https://github.com/KDE/kwallet
- pass        https://www.passwordstore.org/

The pass backend requires GnuPG: https://gnupg.org/

**Syntax**

```bash
sentinelhub keys [command]
```

<details>
<summary>Available subcommands</summary>
<p>

#### This is the output of `sentinelhub keys`

```bash
add         Add an encrypted private key (either newly generated or recovered), encrypt it, and save to <name> file
delete      Delete the given keys
export      Export private keys
import      Import private keys into the local keybase
list        List all keys
migrate     Migrate keys from the legacy (db-based) Keybase
mnemonic    Compute the bip39 mnemonic for some input entropy
parse       Parse address from hex to bech32 and vice versa
show        Retrieve key information by name or address
```

</p>
</details>

:::tip
For more detailed usage instructions for keys, please refer to the related section **[here](/sentinel-core/category/key-management)**
:::

### `query`

Manages queries.

**Syntax**

```bash
sentinelhub query [flags]
sentinelhub query [subcommand]
```

<details>
<summary>Available subcommands</summary>
<p>

#### This is the output of `sentinelhub query`

```bash
authz               Authorization transactions subcommands
bank                Bank transaction subcommands
broadcast           Broadcast transactions generated offline
crisis              Crisis transactions subcommands
decode              Decode a binary encoded transaction string
distribution        Distribution transactions subcommands
encode              Encode transactions generated offline
evidence            Evidence transaction subcommands
feegrant            Feegrant transactions subcommands
gov                 Governance transactions subcommands
ibc                 IBC transaction subcommands
ibc-fee             IBC relayer incentivization transaction subcommands
ibc-transfer        IBC fungible token transfer transaction subcommands
multisign           Generate multisig signatures for transactions generated offline
multisign-batch     Assemble multisig transactions in batch from batch signatures
sign                Sign a transaction generated offline
sign-batch          Sign transaction batch files
slashing            Slashing transaction subcommands
staking             Staking transaction subcommands
swap                Swap module sub-commands
validate-signatures validate transactions signatures
vesting             Vesting transaction subcommands
vpn                 VPN transactions subcommands
wasm                Wasm transaction subcommands
```

</p>
</details>

### `rollback`

A state rollback is performed to recover from an incorrect application state transition,
when Tendermint has persisted an incorrect app hash and is thus unable to make
progress. Rollback overwrites a state at height n with the state at height n - 1.
The application also roll back to height n - 1. No blocks are removed, so upon
restarting Tendermint the transactions in block n will be re-executed against the
application.

**Syntax**

```bash
sentinelhub rollback [flags]
```

### `start`

Run the full node application with Tendermint in or out of process. By
default, the application will run with Tendermint in process.

Pruning options can be provided via the '--pruning' flag or alternatively with '--pruning-keep-recent',
'pruning-keep-every', and 'pruning-interval' together.

For '--pruning' the options are as follows:

```bash
default:    the last 100 states are kept in addition to every 500th state; pruning at 10 block intervals
nothing:    all historic states will be saved, nothing will be deleted (i.e. archiving node)
everything: all saved states will be deleted, storing only the current and previous state; pruning at 10 block intervals
custom:     allow pruning options to be manually specified through 'pruning-keep-recent', 'pruning-keep-every', and 'pruning-interval'
```

Node halting configurations exist in the form of two flags: '--halt-height' and '--halt-time'. During
the ABCI Commit phase, the node will check if the current block height is greater than or equal to
the halt-height or if the current block time is greater than or equal to the halt-time. If so, the
node will attempt to gracefully shutdown and the block will not be committed. In addition, the node
will not be able to commit subsequent blocks.

For profiling and benchmarking purposes, CPU profiling can be enabled via the '--cpu-profile' flag
which accepts a path for the resulting pprof file.

The node may be started in a 'query only' mode where only the gRPC and JSON HTTP
API services are enabled via the 'grpc-only' flag. In this mode, Tendermint is
bypassed and can be used when legacy queries are needed after an on-chain upgrade
is performed. Note, when enabled, gRPC will also be automatically enabled.

**Syntax**

```bash
sentinelhub start [flags]
```

### `status`

Displays the status of a remote node (default "tcp://localhost:26657").

**Syntax**

```bash
sentinelhub status [flags]
```

<details>
<summary>Output</summary>
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
      "VotingPower":"0"
   }
}

```

</p>
</details>

### `tendermint`

Manages the Tendermint protocol.

**Syntax**

```bash
sentinelhub tendermint [command] [flags]
```

<details>
<summary>Available subcommands</summary>
<p>

#### This is the output of `sentinelhub tendermint`

```bash
reset-state      Remove all the data and WAL
show-address     Shows this node's tendermint validator consensus address
show-node-id     Show this node's ID
show-validator   Show this node's tendermint validator info
unsafe-reset-all (unsafe) Remove all the data and WAL, reset this node's validator to genesis state
version          Print tendermint libraries' version
```

</p>
</details>

### `tx`

Retrieves a transaction by its hash, account sequence, or signature. 

**Syntax**

```bash
sentinelhub tx [flags]
sentinelhub tx [subcommand]
```
<details>
<summary>Available subcommands</summary>
<p>

#### This is the output of `sentinelhub tx`

```bash
authz               Authorization transactions subcommands
bank                Bank transaction subcommands
broadcast           Broadcast transactions generated offline
crisis              Crisis transactions subcommands
decode              Decode a binary encoded transaction string
distribution        Distribution transactions subcommands
encode              Encode transactions generated offline
evidence            Evidence transaction subcommands
feegrant            Feegrant transactions subcommands
gov                 Governance transactions subcommands
ibc                 IBC transaction subcommands
ibc-fee             IBC relayer incentivization transaction subcommands
ibc-transfer        IBC fungible token transfer transaction subcommands
multisign           Generate multisig signatures for transactions generated offline
multisign-batch     Assemble multisig transactions in batch from batch signatures
sign                Sign a transaction generated offline
sign-batch          Sign transaction batch files
slashing            Slashing transaction subcommands
staking             Staking transaction subcommands
swap                Swap module sub-commands
validate-signatures validate transactions signatures
vesting             Vesting transaction subcommands
vpn                 VPN transactions subcommands
wasm                Wasm transaction subcommands
```

</p>
</details>

### `validate-genesis`

validates the genesis file at the default location or at the location passed as an argument.

**Syntax**

```bash
sentinelhub validate-genesis [file] [flags]
```

**Example**

```bash
sentinelhub validate-genesis genesis.json
```

### `version`

Print the application binary version information.

**Syntax**

```bash
sentinelhub version [flags]
```