---
title: List
sidebar_position: 1
---

# Commands

This section describes the commands available from `sentinel-dvpncli`, the command line interface that connects a running `sentinel-dvpncli` process.

### `connect`

Connect to a Sentinel node using an existing active session and start the client service (e.g., V2Ray, WireGuard, or OpenVPN). The command validates the session and node status, fetches node info to determine the service type, builds the appropriate client, and brings it up. It listens for SIGINT/SIGTERM and gracefully shuts the client down by running pre-down, down, and post-down tasks.

**Syntax**
```bash
sentinel-dvpncli connect [id] [flags]
```

### `help`

Help provides help for any command in the application.
Simply type `sentinel-dvpncli help [path to command]` for full details.

**Syntax**
```bash
sentinel-dvpncli help [command] [flags]
```

### `inspect`

Inspect the status, connectivity, and location info of a node.
Simply type `sentinel-dvpncli inspect [node-addr] [flags]` for full details.

**Syntax**
```bash
sentinel-dvpncli help [command] [flags]
```

### `keys`

Keyring management commands. These keys may be in any format supported by the
Tendermint crypto library and can be used by light-clients, full nodes, or any other application
that needs to sign with a private key.

**Syntax**
```bash
sentinel-dvpncli keys [command] [flags]
```

The keyring supports the following backends:

```sh
os       (Default) - Uses the operating system's default credentials store.
file     Uses encrypted file-based keystore within the app's configuration directory.
         This keyring will request a password each time it is accessed, which may occur
         multiple times in a single command resulting in repeated password prompts.
kwallet  Uses KDE Wallet Manager as a credentials management application.
memory   Stores keys only in volatile memory for the duration of the process.
         Keys are never written to disk and are lost when the command ends.
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

#### This is the output of `sentinel-dvpncli keys`
```bash
add         Add an encrypted private key (either newly generated or recovered), encrypt it, and save to <name> file
delete      Delete the given keys
list        List all keys
show        Retrieve key information by name or address
```

</p>
</details>

For a more detailed explaination of the subcommand, plese visit the [Basic Key Management](/dvpn-cli/commands/keys/keys-cli) section.


### `query`

Transaction command

**Syntax**
```bash
sentinel-dvpncli query [command]
sentinel-dvpncli query [flags]
```

<details>
<summary>Available subcommands</summary>
<p>

#### This is the output of `sentinel-dvpncli query`
```sh
deposit       Query a deposit
deposits      Query all deposits
node          Query a node
nodes         Query all nodes
params        Query all parameters
plan          Query a plan
plans         Query all plans
provider      Query a provider
providers     Query all providers
session       Query a session
sessions      Query all sessions
subscription  Query a subscription
subscriptions Query all subscriptions
```

</p>
</details>


### `tx`

Transaction command

**Syntax**
```bash
sentinel-dvpncli tx [command] [flags]
sentinel-dvpncli tx [flags]
```

<details>
<summary>Available subcommands</summary>
<p>

#### This is the output of `sentinel-dvpncli tx`
```sh
session-cancel      Cancel a session
session-start       Start a session
subscription-cancel Cancel a subscription
subscription-renew  Renew a subscription
subscription-share  Share a subscription
subscription-start  Start a subscription
subscription-update Update a subscription
```

</p>
</details>


### `version`

Print the application binary version information

**Syntax**
```bash
sentinel-dvpncli version
```