---
title: List
sidebar_position: 1
---

# Commands

This section describes the commands available from `sentinelcli`, the command line interface that connects a running `sentinelcli` process.

### `completion`

Generate the autocompletion script for sentinelcli for the specified shell.
See each sub-command's help for details on how to use the generated script.

**Syntax**
```bash
sentinelcli completion [command]
```

### `connect`

Connects to a node.

**Syntax**
```bash
sentinelcli connect [subscription] [address] [flags]
```

### `disconnect`

Disconnects from a node.

**Syntax**
```bash
sentinelcli disconnect [flags]
```

### `help`

Help provides help for any command in the application.
Simply type sentinelcli help [path to command] for full details.

**Syntax**
```bash
sentinelcli help [command] [flags]
```

### `keys`

Keyring management commands. These keys may be in any format supported by the
Tendermint crypto library and can be used by light-clients, full nodes, or any other application
that needs to sign with a private key.

**Syntax**
```bash
sentinelcli keys [command] [flags]
```

The keyring supports the following backends:

```sh
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
    KWallet     https://github.com/KDE/kwallet
    pass        https://www.passwordstore.org/

The pass backend requires GnuPG: https://gnupg.org

<details>
<summary>Available subcommands</summary>
<p>

#### This is the output of `sentinelcli keys`
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

For a more detailed explaination of the subcommand, plese visit the [Basic Key Management](/sentinel-cli/keys/keys-cli) section.


### `query`

Transaction command

**Syntax**
```bash
sentinelcli query [command]
sentinelcli query [flags]
```

<details>
<summary>Available subcommands</summary>
<p>

#### This is the output of `sentinelcli query`
```sh
allocation    Query a allocation
allocations   Query allocations of a subscription
deposit       Query a deposit
deposits      Query deposits
node          Query a node
nodes         Query nodes
plan          Query a plan
plans         Query plans
provider      Query a provider
providers     Query providers
session       Query a session
sessions      Query sessions
subscription  Query a subscription
subscriptions Query subscriptions
```

</p>
</details>


### `tx`

Transaction command

**Syntax**
```bash
sentinelcli tx [command] [flags]
sentinelcli tx [flags]
```

<details>
<summary>Available subcommands</summary>
<p>

#### This is the output of `sentinelcli tx`
```sh
node         Node related subcommands
plan         plan related subcommands
provider     Provider related subcommands
session      Session related subcommands
subscription Subscription related subcommands
```

</p>
</details>


### `version`

Print the application binary version information

**Syntax**
```bash
sentinelcli version
```