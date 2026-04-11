---
title: List
sidebar_position: 1
---

# Commands

This section describes the commands available from `sentinel-dvpncli`, the command line interface for the Sentinel dVPN network.

### `connect`

Connect to a Sentinel node using an existing active session and start the client service (e.g., V2Ray, WireGuard, or OpenVPN). The command validates the session and node status, fetches node info to determine the service type, builds the appropriate client, and brings it up. It listens for SIGINT/SIGTERM and gracefully shuts the client down by running pre-down, down, and post-down tasks.

**Syntax**
```bash
sentinel-dvpncli connect [id] [flags]
```

<details>
<summary>Notable flags</summary>
<p>

**WireGuard options**

```bash
--wireguard.name string                      name of the wireguard network interface (default "wg0")
--wireguard.port uint16                      port number for the wireguard interface (default 53826)
--wireguard.mtu uint16                       maximum transmission unit size (default 1420)
--wireguard.dns-addrs stringArray            DNS servers to use while connected (default [208.67.222.222,208.67.220.220])
--wireguard.exclude-addrs stringArray        exclude IP addresses/subnets from the tunnel (default [127.0.0.0/8,192.168.0.0/16,...])
--wireguard.peer.allow-addrs stringArray     allowed IP addresses to route through peer (default [0.0.0.0/0,::/0])
--wireguard.peer.persistent-keepalive uint   keepalive interval in seconds (default 30)
```

**V2Ray options**

```bash
--v2ray.api.port uint16     port for v2ray statistics and management (default 2323)
--v2ray.proxy.port uint16   port for v2ray socks5 proxy server (default 1080)
```

</p>
</details>

### `help`

Help provides help for any command in the application.
Simply type `sentinel-dvpncli help [path to command]` for full details.

**Syntax**
```bash
sentinel-dvpncli help [command] [flags]
```

### `inspect`

Evaluate a Sentinel node by checking its status, verifying connectivity, and retrieving location details. It ensures the node is active, assesses its availability, and establishes a temporary session to gather network-related information. Additionally, it fetches geolocation data and then gracefully terminates the session.

**Syntax**
```bash
sentinel-dvpncli inspect [node-addr] [flags]
```

<details>
<summary>Notable flags</summary>
<p>

```bash
--max-price string      maximum price per gigabyte for the session
--timeout duration      maximum duration to wait for inspection (default 30s)
```

</p>
</details>

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
add         Add a new key with the specified name and optional mnemonic
delete      Delete the key with the specified name
list        List all available keys
show        Show details of the key with the specified name
```

</p>
</details>

For a more detailed explanation of the subcommands, please visit the [Basic Key Management](/dvpn-cli/commands/keys/keys-cli) section.


### `query`

Query commands for fetching data from the Sentinel network.

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

<details>
<summary>Shared query flags</summary>
<p>

```bash
--output-format string        format for query output (text/json) (default "text")
--query.prove                 include proof in query results
--query.retry-attempts uint   number of retry attempts for the query (default 5)
--query.retry-delay string    delay between query retries (default "1s")
--rpc.addrs strings           addresses of the RPC servers (default [https://rpc.sentinel.co:443])
--rpc.chain-id string         identifier of the blockchain network (default "sentinelhub-2")
--rpc.timeout string          timeout for the RPC requests (default "5s")
```

</p>
</details>


### `tx`

Transaction commands for interacting with the Sentinel network.

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

<details>
<summary>Shared transaction flags</summary>
<p>

```bash
--keyring.backend string             backend to use for the keyring (default "os")
--keyring.name string                name identifier for the keyring (default "sentinel")
--tx.from-name string                name of the sender's account (default "main")
--tx.gas uint                        gas limit for the transaction (default 200000)
--tx.gas-adjustment float            adjustment factor for gas estimation (default 1.15)
--tx.gas-prices string               price of gas for the transaction (default "0.1udvpn")
--tx.simulate-and-execute            simulate the transaction before execution (default true)
--tx.authz-granter-addr string       address of the entity granting authorization
--tx.fee-granter-addr string         address of the entity granting fees
--tx.broadcast-retry-attempts uint   number of times to retry broadcasting (default 1)
--tx.broadcast-retry-delay string    delay between broadcast retries (default "5s")
--tx.query-retry-attempts uint       number of times to retry querying a tx (default 30)
--tx.query-retry-delay string        delay between tx query retries (default "1s")
```

</p>
</details>


### `version`

Print the application binary version information.

**Syntax**
```bash
sentinel-dvpncli version
```

---

## Global Flags

The following flags are available on all commands:

```bash
--home string         home directory for application config and data (default "$HOME/.sentinel-dvpncli")
--log.format string   format of the log output (json or text) (default "text")
--log.level string    log level for output (debug, error, info, none, warn) (default "info")
```
