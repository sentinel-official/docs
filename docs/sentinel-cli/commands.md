---
title: Commands
sidebar_position: 3
---

# Commands

This section describes the commands available from `sentinelhub`, the command line interface that connects a running `sentinelhub` process.

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

The pass backend requires GnuPG: https://gnupg.org/


### `tx`

Transaction command

**Syntax**
```bash
sentinelcli tx [command] [flags]
sentinelcli tx [flags]
```

Available subcommands:

```sh
node         Node related subcommands
plan         plan related subcommands
provider     Provider related subcommands
session      Session related subcommands
subscription Subscription related subcommands
```

### `version`

Print the application binary version information

**Syntax**
```bash
sentinelhub version
```