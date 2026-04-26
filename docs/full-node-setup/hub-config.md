---
title: Configure Sentinel Hub
sidebar_label: "🔧 Hub Configuration"
sidebar_position: 4
---

# Configure Sentinel Hub

:::tip Pick your role first
The configuration step below has two flavors: **Validator** and **RPC/API node**. Decide which role this machine will play before editing `config.toml` and `app.toml`. The genesis file step is identical for both.
:::


## Genesis File

Let's initialize the Sentinel Hub using the Genesis file, a JSON file which defines the initial state of Sentinel blockchain. The state defined in the genesis file contains all the necessary information, like initial coin allocation, genesis time, default parameters, and more

```bash
sentinelhub init --chain-id sentinelhub-2 "Your Full Node Name"
curl -fsLS -o "${HOME}/genesis.zip" "https://raw.githubusercontent.com/sentinel-official/networks/main/sentinelhub-2/genesis.zip"
unzip -d "${HOME}/.sentinelhub/config/" "${HOME}/genesis.zip"
rm "${HOME}/genesis.zip"
```

You will be asked to replace the genesis file, type `[A]ll`

In case you need a mirror because the official hosting site does not work, use this from `Polkachu`:

```bash
wget -O genesis.json https://snapshots.polkachu.com/genesis/sentinel/genesis.json --inet4-only
mv genesis.json ~/.sentinelhub/config
```

## Edit the Node configuration file

A Sentinel Hub node is configured through two TOML files in `${HOME}/.sentinelhub/config/`:

- **`config.toml`**: peer discovery, state sync, and monitoring (Tendermint-level settings).
- **`app.toml`**: gas pricing, pruning, and application-layer settings (Cosmos SDK).

The right tuning depends on the role your node plays. Two reference flavors are provided in each subsection below:

- **Validator**: signs blocks. Tight peer set, no inbound peers, no transaction indexing, larger mempool.
- **RPC/API node**: serves clients. Larger peer fan-in, smaller mempool, faster consensus loop, API endpoints exposed.

> The references are tuned for `sentinelhub-2`. Review them against your installed SDK version before copying, since defaults shift between releases.

### config.toml

Open the file

```bash
sudo nano ${HOME}/.sentinelhub/config/config.toml
```

Pick the reference matching your node's role and copy it. Before saving, in either flavor:

- Set `moniker` to your node's name.
- Decide whether to use **state sync** (set `[statesync] enable = true`.

What both flavors have in common:

- **Peer connectivity** uses `persistent_peers` (a curated list of Sentinel Hub validators and RPC nodes) plus matching `unconditional_peer_ids`. `seeds` is left empty and `pex` is disabled, so connections are limited to the listed peers. If you'd rather discover peers dynamically or mix in additional sources, [Polkachu](https://polkachu.com/live_peers/sentinel) and [AutoStake](https://autostake.com/networks/sentinel/) maintain alternative seed/peer lists.
- **Seeds vs peers**, in case you're new to Tendermint:
    - **Seeds** are short-lived entry points used during bootstrap to discover the network topology.
    - **Persistent peers** are long-lived connections you trust to stay reachable.
- **Prometheus** is enabled on `:26660`. Open the port on your firewall, restricted to your monitoring machine:

```bash
sudo ufw allow from monitor_ip to full_node_ip port 26660
```

What differs between the two flavors:

| Field | Validator | RPC/API node |
|---|---|---|
| `[p2p] max_num_inbound_peers` | `0` | `30` |
| `[p2p] max_num_outbound_peers` | `40` | `10` |
| `[mempool] size` | `5000` | `1000` |
| `[mempool] cache_size` | `20000` | `5000` |
| `[mempool] max_txs_bytes` | `134217728` | `67108864` |
| `[consensus] timeout_commit` | `"3s"` | `"1s"` |
| `[consensus] skip_timeout_commit` | `false` | `true` |
| `[consensus] peer_gossip_sleep_duration` | `"100ms"` | `"25ms"` |
| `[consensus] peer_query_maj23_sleep_duration` | `"2s"` | `"500ms"` |

<details>
<summary>Validator config.toml reference</summary>
<p>

```bash title="${HOME}/.sentinelhub/config/config.toml"
# This is a TOML config file.
# For more information, see https://github.com/toml-lang/toml

# NOTE: Any path below can be absolute (e.g. "/var/myawesomeapp/data") or
# relative to the home directory (e.g. "data"). The home directory is
# "$HOME/.cometbft" by default, but could be changed via $CMTHOME env variable
# or --home cmd flag.

#######################################################################
###                   Main Base Config Options                      ###
#######################################################################

# TCP or UNIX socket address of the ABCI application,
# or the name of an ABCI application compiled in with the CometBFT binary
proxy_app = "tcp://127.0.0.1:26658"

# A custom human readable name for this node
moniker = "Your Full Node Name"

# If this node is many blocks behind the tip of the chain, BlockSync
# allows them to catchup quickly by downloading blocks in parallel
# and verifying their commits
#
# Deprecated: this key will be removed and BlockSync will be enabled
# unconditionally in the next major release.
block_sync = true

# Database backend: goleveldb | cleveldb | boltdb | rocksdb | badgerdb
# * goleveldb (github.com/syndtr/goleveldb - most popular implementation)
#   - pure go
#   - stable
# * cleveldb (uses levigo wrapper)
#   - fast
#   - requires gcc
#   - use cleveldb build tag (go build -tags cleveldb)
# * boltdb (uses etcd's fork of bolt - github.com/etcd-io/bbolt)
#   - EXPERIMENTAL
#   - may be faster is some use-cases (random reads - indexer)
#   - use boltdb build tag (go build -tags boltdb)
# * rocksdb (uses github.com/tecbot/gorocksdb)
#   - EXPERIMENTAL
#   - requires gcc
#   - use rocksdb build tag (go build -tags rocksdb)
# * badgerdb (uses github.com/dgraph-io/badger)
#   - EXPERIMENTAL
#   - use badgerdb build tag (go build -tags badgerdb)
db_backend = "goleveldb"

# Database directory
db_dir = "data"

# Output level for logging, including package level options
log_level = "info"

# Output format: 'plain' (colored text) or 'json'
log_format = "plain"

##### additional base config options #####

# Path to the JSON file containing the initial validator set and other meta data
genesis_file = "config/genesis.json"

# Path to the JSON file containing the private key to use as a validator in the consensus protocol
priv_validator_key_file = "config/priv_validator_key.json"

# Path to the JSON file containing the last sign state of a validator
priv_validator_state_file = "data/priv_validator_state.json"

# TCP or UNIX socket address for CometBFT to listen on for
# connections from an external PrivValidator process
priv_validator_laddr = ""

# Path to the JSON file containing the private key to use for node authentication in the p2p protocol
node_key_file = "config/node_key.json"

# Mechanism to connect to the ABCI application: socket | grpc
abci = "socket"

# If true, query the ABCI app on connecting to a new peer
# so the app can decide if we should keep the connection or not
filter_peers = false


#######################################################################
###                 Advanced Configuration Options                  ###
#######################################################################

#######################################################
###       RPC Server Configuration Options          ###
#######################################################
[rpc]

# TCP or UNIX socket address for the RPC server to listen on
laddr = "tcp://127.0.0.1:26657"

# A list of origins a cross-domain request can be executed from
# Default value '[]' disables cors support
# Use '["*"]' to allow any origin
cors_allowed_origins = []

# A list of methods the client is allowed to use with cross-domain requests
cors_allowed_methods = ["HEAD", "GET", "POST", ]

# A list of non simple headers the client is allowed to use with cross-domain requests
cors_allowed_headers = ["Origin", "Accept", "Content-Type", "X-Requested-With", "X-Server-Time", ]

# TCP or UNIX socket address for the gRPC server to listen on
# NOTE: This server only supports /broadcast_tx_commit
grpc_laddr = ""

# Maximum number of simultaneous connections.
# Does not include RPC (HTTP&WebSocket) connections. See max_open_connections
# If you want to accept a larger number than the default, make sure
# you increase your OS limits.
# 0 - unlimited.
# Should be < {ulimit -Sn} - {MaxNumInboundPeers} - {MaxNumOutboundPeers} - {N of wal, db and other open files}
# 1024 - 40 - 10 - 50 = 924 = ~900
grpc_max_open_connections = 900

# Activate unsafe RPC commands like /dial_seeds and /unsafe_flush_mempool
unsafe = false

# Maximum number of simultaneous connections (including WebSocket).
# Does not include gRPC connections. See grpc_max_open_connections
# If you want to accept a larger number than the default, make sure
# you increase your OS limits.
# 0 - unlimited.
# Should be < {ulimit -Sn} - {MaxNumInboundPeers} - {MaxNumOutboundPeers} - {N of wal, db and other open files}
# 1024 - 40 - 10 - 50 = 924 = ~900
max_open_connections = 900

# Maximum number of unique clientIDs that can /subscribe
# If you're using /broadcast_tx_commit, set to the estimated maximum number
# of broadcast_tx_commit calls per block.
max_subscription_clients = 100

# Maximum number of unique queries a given client can /subscribe to
# If you're using GRPC (or Local RPC client) and /broadcast_tx_commit, set to
# the estimated # maximum number of broadcast_tx_commit calls per block.
max_subscriptions_per_client = 5

# Experimental parameter to specify the maximum number of events a node will
# buffer, per subscription, before returning an error and closing the
# subscription. Must be set to at least 100, but higher values will accommodate
# higher event throughput rates (and will use more memory).
experimental_subscription_buffer_size = 200

# Experimental parameter to specify the maximum number of RPC responses that
# can be buffered per WebSocket client. If clients cannot read from the
# WebSocket endpoint fast enough, they will be disconnected, so increasing this
# parameter may reduce the chances of them being disconnected (but will cause
# the node to use more memory).
#
# Must be at least the same as "experimental_subscription_buffer_size",
# otherwise connections could be dropped unnecessarily. This value should
# ideally be somewhat higher than "experimental_subscription_buffer_size" to
# accommodate non-subscription-related RPC responses.
experimental_websocket_write_buffer_size = 200

# If a WebSocket client cannot read fast enough, at present we may
# silently drop events instead of generating an error or disconnecting the
# client.
#
# Enabling this experimental parameter will cause the WebSocket connection to
# be closed instead if it cannot read fast enough, allowing for greater
# predictability in subscription behavior.
experimental_close_on_slow_client = false

# How long to wait for a tx to be committed during /broadcast_tx_commit.
# WARNING: Using a value larger than 10s will result in increasing the
# global HTTP write timeout, which applies to all connections and endpoints.
# See https://github.com/tendermint/tendermint/issues/3435
timeout_broadcast_tx_commit = "10s"

# Maximum size of request body, in bytes
max_body_bytes = 1000000

# Maximum size of request header, in bytes
max_header_bytes = 1048576

# The path to a file containing certificate that is used to create the HTTPS server.
# Might be either absolute path or path related to CometBFT's config directory.
# If the certificate is signed by a certificate authority,
# the certFile should be the concatenation of the server's certificate, any intermediates,
# and the CA's certificate.
# NOTE: both tls_cert_file and tls_key_file must be present for CometBFT to create HTTPS server.
# Otherwise, HTTP server is run.
tls_cert_file = ""

# The path to a file containing matching private key that is used to create the HTTPS server.
# Might be either absolute path or path related to CometBFT's config directory.
# NOTE: both tls-cert-file and tls-key-file must be present for CometBFT to create HTTPS server.
# Otherwise, HTTP server is run.
tls_key_file = ""

# pprof listen address (https://golang.org/pkg/net/http/pprof)
pprof_laddr = "localhost:6060"

#######################################################
###           P2P Configuration Options             ###
#######################################################
[p2p]

# Address to listen for incoming connections
laddr = "tcp://0.0.0.0:26656"

# Address to advertise to peers for them to dial. If empty, will use the same
# port as the laddr, and will introspect on the listener to figure out the
# address. IP and port are required. Example: 159.89.10.97:26656
external_address = ""

# Comma separated list of seed nodes to connect to
seeds = ""

# Comma separated list of nodes to keep persistent connections to
persistent_peers = "315a11830cf39e9cbc69cef94c8d3f19a2ccef70@rpc.sentinel.suchnode.net:26656,3af3fb89fa4243db558f8e52fdbdb0886a2779a5@rpc2.sentinel.suchnode.net:26656,8791539a60b759161082e2e63db57d3bbb09a8f1@rpc3.sentinel.suchnode.net:26656,56238c61a3a3a7b472107e9c87298b77f5931ef6@rpc4.sentinel.suchnode.net:26656,077d24241268c7b6d13859a0e7981fd705d3b328@rpc5.sentinel.suchnode.net:26656,9029bafc2864dff96e591dfa077312dc25760652@rpc6.sentinel.suchnode.net:26656,f3743fa1840cfd283b14080577ff176e09ca7ee1@rpc7.sentinel.suchnode.net:26656,9e67ece32df1c501c7cd37cf383f8c55eae9dc48@rpc8.sentinel.suchnode.net:26656,ad24874c7150c4a5c075c4d310d4858a6f6a84ca@rpc10.sentinel.suchnode.net:26656,cccea01ba2c7937b89eaad20b4124278de53dded@rpc11.sentinel.suchnode.net:26656,add93e1e4fee52bc1cd5ad2811ea6d42fe3a3600@rpc12.sentinel.suchnode.net:26656,1512550cc5478cebc2464ea3de2fd8658f3d3e5c@rpc13.sentinel.suchnode.net:26656,ab597a57b5b7fa8778502e8d577aa7e6b0bd09be@rpc14.sentinel.suchnode.net:26656,7766ec993ae96803834e15ef1e06ffbdf5d8257c@89.106.78.122:21056,ea34cf638ef8942f3d1e8f104dd80db54313647b@sora.busur.net:21056,4b03b2ddb5e2bdc66497e7905bc18d3686cc5790@natsu.busur.net:21056,1d3207eeddbfd1c5994455b54f71557837baf181@suzu.busur.net:21056,a3d4972107b6d29a21fa4f05efbf237e7a690bed@aether.busur.net:21056,f309f97644f084819619c41acdfcd6cf56aebaa3@saki.busur.net:21056,42fec15d194ef0cfd040bd557517d50ea7d687a6@38.49.210.5:21056,0e67ded9ed0bedfaa7ddd4951b926c250d8b52b5@nebula.busur.net:21056,ea806467d26331049e0768986ea8e2fa0ff6231b@154.12.117.169:21056,1fc2ec492afa78101663e12fd570bf8d1e406ace@94.136.187.192:21056,1dba3259a64c8efade3a53db59f8e9b0ce38a517@23.81.118.208:21056,69ad69d517326d38661325517d7bf7cce065b4eb@mizu.busur.net:21056,b5b080374fefb4a66f1a59b9bd9197227ed7f2e3@seraph.busur.net:21056,a527530ec76a3aaac8e18af8b6e33ae1f8170210@chie.busur.net:21056,ad5f07e340683084823f954f973e071e9c615faa@haru.busur.net:21056,acf4345b422b90eba0b3ba774a9ec0566bd68265@142.132.158.9:23956,5ace0e57784e34930360bf6cc00dd5265278f708@65.108.238.166:23956,f7a61d2c82fbe52191606c04440fec78855fe374@65.109.122.249:23956,22efb76a378788caf3bfe3b1ee5e488585e00e6b@148.113.8.180:23956,7b4398a0b842e356821447e2f22345909a65d2b3@65.108.75.160:23956"

# Path to address book
addr_book_file = "config/addrbook.json"

# Set true for strict address routability rules
# Set false for private or local networks
addr_book_strict = true

# Maximum number of inbound peers
max_num_inbound_peers = 0

# Maximum number of outbound peers to connect to, excluding persistent peers
max_num_outbound_peers = 40

# List of node IDs, to which a connection will be (re)established ignoring any existing limits
unconditional_peer_ids = "315a11830cf39e9cbc69cef94c8d3f19a2ccef70, 3af3fb89fa4243db558f8e52fdbdb0886a2779a5, 8791539a60b759161082e2e63db57d3bbb09a8f1, 56238c61a3a3a7b472107e9c87298b77f5931ef6, 077d24241268c7b6d13859a0e7981fd705d3b328, 9029bafc2864dff96e591dfa077312dc25760652, f3743fa1840cfd283b14080577ff176e09ca7ee1, 9e67ece32df1c501c7cd37cf383f8c55eae9dc48, ad24874c7150c4a5c075c4d310d4858a6f6a84ca, cccea01ba2c7937b89eaad20b4124278de53dded, add93e1e4fee52bc1cd5ad2811ea6d42fe3a3600, 1512550cc5478cebc2464ea3de2fd8658f3d3e5c, ab597a57b5b7fa8778502e8d577aa7e6b0bd09be, 7766ec993ae96803834e15ef1e06ffbdf5d8257c, ea34cf638ef8942f3d1e8f104dd80db54313647b, 4b03b2ddb5e2bdc66497e7905bc18d3686cc5790, 1d3207eeddbfd1c5994455b54f71557837baf181, a3d4972107b6d29a21fa4f05efbf237e7a690bed, f309f97644f084819619c41acdfcd6cf56aebaa3, 0e67ded9ed0bedfaa7ddd4951b926c250d8b52b5, 69ad69d517326d38661325517d7bf7cce065b4eb, b5b080374fefb4a66f1a59b9bd9197227ed7f2e3, a527530ec76a3aaac8e18af8b6e33ae1f8170210, ad5f07e340683084823f954f973e071e9c615faa"

# Maximum pause when redialing a persistent peer (if zero, exponential backoff is used)
persistent_peers_max_dial_period = "0s"

# Time to wait before flushing messages out on the connection
flush_throttle_timeout = "10ms"

# Maximum size of a message packet payload, in bytes
max_packet_msg_payload_size = 1024

# Rate at which packets can be sent, in bytes/second
send_rate = 20480000

# Rate at which packets can be received, in bytes/second
recv_rate = 20480000

# Set true to enable the peer-exchange reactor
pex = false

# Seed mode, in which node constantly crawls the network and looks for
# peers. If another node asks it for addresses, it responds and disconnects.
#
# Does not work if the peer-exchange reactor is disabled.
seed_mode = false

# Comma separated list of peer IDs to keep private (will not be gossiped to other peers)
private_peer_ids = ""

# Toggle to disable guard against peers connecting from the same ip.
allow_duplicate_ip = false

# Peer connection configuration.
handshake_timeout = "5s"
dial_timeout = "3s"

#######################################################
###          Mempool Configuration Option          ###
#######################################################
[mempool]

# Mempool version to use:
#   1) "v0" - (default) FIFO mempool.
#   2) "v1" - prioritized mempool (deprecated; will be removed in the next release).
version = "v0"

# The type of mempool for this node to use.
#
#  Possible types:
#  - "flood" : concurrent linked list mempool with flooding gossip protocol
#  (default)
#  - "nop"   : nop-mempool (short for no operation; the ABCI app is responsible
#  for storing, disseminating and proposing txs). "create_empty_blocks=false" is
#  not supported.
type = "flood"

recheck = true
broadcast = true
wal_dir = ""

# Maximum number of transactions in the mempool
size = 5000

# Limit the total size of all txs in the mempool.
# This only accounts for raw transactions (e.g. given 1MB transactions and
# max_txs_bytes=5MB, mempool will only accept 5 transactions).
max_txs_bytes = 134217728

# Size of the cache (used to filter transactions we saw earlier) in transactions
cache_size = 20000

# Do not remove invalid transactions from the cache (default: false)
# Set to true if it's not possible for any invalid transaction to become valid
# again in the future.
keep-invalid-txs-in-cache = false

# Maximum size of a single transaction.
# NOTE: the max size of a tx transmitted over the network is {max_tx_bytes}.
max_tx_bytes = 1048576

# Maximum size of a batch of transactions to send to a peer
# Including space needed by encoding (one varint per transaction).
# XXX: Unused due to https://github.com/tendermint/tendermint/issues/5796
max_batch_bytes = 0

# ttl-duration, if non-zero, defines the maximum amount of time a transaction
# can exist for in the mempool.
#
# Note, if ttl-num-blocks is also defined, a transaction will be removed if it
# has existed in the mempool at least ttl-num-blocks number of blocks or if it's
# insertion time into the mempool is beyond ttl-duration.
ttl-duration = "0s"

# ttl-num-blocks, if non-zero, defines the maximum number of blocks a transaction
# can exist for in the mempool.
#
# Note, if ttl-duration is also defined, a transaction will be removed if it
# has existed in the mempool at least ttl-num-blocks number of blocks or if
# it's insertion time into the mempool is beyond ttl-duration.
ttl-num-blocks = 0

# Experimental parameters to limit gossiping txs to up to the specified number of peers.
# This feature is only available for the default mempool (version config set to "v0").
# We use two independent upper values for persistent and non-persistent peers.
# Unconditional peers are not affected by this feature.
# If we are connected to more than the specified number of persistent peers, only send txs to
# ExperimentalMaxGossipConnectionsToPersistentPeers of them. If one of those
# persistent peers disconnects, activate another persistent peer.
# Similarly for non-persistent peers, with an upper limit of
# ExperimentalMaxGossipConnectionsToNonPersistentPeers.
# If set to 0, the feature is disabled for the corresponding group of peers, that is, the
# number of active connections to that group of peers is not bounded.
# For non-persistent peers, if enabled, a value of 10 is recommended based on experimental
# performance results using the default P2P configuration.
experimental_max_gossip_connections_to_persistent_peers = 0
experimental_max_gossip_connections_to_non_persistent_peers = 0

#######################################################
###         State Sync Configuration Options        ###
#######################################################
[statesync]
# State sync rapidly bootstraps a new node by discovering, fetching, and restoring a state machine
# snapshot from peers instead of fetching and replaying historical blocks. Requires some peers in
# the network to take and serve state machine snapshots. State sync is not attempted if the node
# has any local state (LastBlockHeight > 0). The node will have a truncated block history,
# starting from the height of the snapshot.
enable = false

# RPC servers (comma-separated) for light client verification of the synced state machine and
# retrieval of state data for node bootstrapping. Also needs a trusted height and corresponding
# header hash obtained from a trusted source, and a period during which validators can be trusted.
#
# For Cosmos SDK-based chains, trust_period should usually be about 2/3 of the unbonding time (~2
# weeks) during which they can be financially punished (slashed) for misbehavior.
rpc_servers = ""
trust_height = 0
trust_hash = ""
trust_period = "168h0m0s"

# Time to spend discovering snapshots before initiating a restore.
discovery_time = "15s"

# Temporary directory for state sync snapshot chunks, defaults to the OS tempdir (typically /tmp).
# Will create a new, randomly named directory within, and remove it when done.
temp_dir = ""

# The timeout duration before re-requesting a chunk, possibly from a different
# peer (default: 1 minute).
chunk_request_timeout = "10s"

# The number of concurrent chunk fetchers to run (default: 1).
chunk_fetchers = "4"

# Maximum number of chunks allowed in a snapshot (default: 100000).
max_snapshot_chunks = 100000

#######################################################
###       Block Sync Configuration Options          ###
#######################################################
[blocksync]

# Block Sync version to use:
#
# In v0.37, v1 and v2 of the block sync protocols were deprecated.
# Please use v0 instead.
#
#   1) "v0" - the default block sync implementation
version = "v0"

#######################################################
###         Consensus Configuration Options         ###
#######################################################
[consensus]

wal_file = "data/cs.wal/wal"

# How long we wait for a proposal block before prevoting nil
timeout_propose = "3s"
# How much timeout_propose increases with each round
timeout_propose_delta = "500ms"
# How long we wait after receiving +2/3 prevotes for "anything" (ie. not a single block or nil)
timeout_prevote = "1s"
# How much the timeout_prevote increases with each round
timeout_prevote_delta = "500ms"
# How long we wait after receiving +2/3 precommits for "anything" (ie. not a single block or nil)
timeout_precommit = "1s"
# How much the timeout_precommit increases with each round
timeout_precommit_delta = "500ms"
# How long we wait after committing a block, before starting on the new
# height (this gives us a chance to receive some more precommits, even
# though we already have +2/3).
timeout_commit = "3s"

# How many blocks to look back to check existence of the node's consensus votes before joining consensus
# When non-zero, the node will panic upon restart
# if the same consensus key was used to sign {double_sign_check_height} last blocks.
# So, validators should stop the state machine, wait for some blocks, and then restart the state machine to avoid panic.
double_sign_check_height = 0

# Make progress as soon as we have all the precommits (as if TimeoutCommit = 0)
skip_timeout_commit = false

# EmptyBlocks mode and possible interval between empty blocks
create_empty_blocks = true
create_empty_blocks_interval = "0s"

# Reactor sleep duration parameters
peer_gossip_sleep_duration = "100ms"
peer_query_maj23_sleep_duration = "2s"

#######################################################
###         Storage Configuration Options           ###
#######################################################
[storage]

# Set to true to discard ABCI responses from the state store, which can save a
# considerable amount of disk space. Set to false to ensure ABCI responses are
# persisted. ABCI responses are required for /block_results RPC queries, and to
# reindex events in the command-line tool.
discard_abci_responses = false

#######################################################
###   Transaction Indexer Configuration Options     ###
#######################################################
[tx_index]

# What indexer to use for transactions
#
# The application will set which txs to index. In some cases a node operator will be able
# to decide which txs to index based on configuration set in the application.
#
# Options:
#   1) "null"
#   2) "kv" (default) - the simplest possible indexer, backed by key-value storage (defaults to levelDB; see DBBackend).
# 		- When "kv" is chosen "tx.height" and "tx.hash" will always be indexed.
#   3) "psql" - the indexer services backed by PostgreSQL.
# When "kv" or "psql" is chosen "tx.height" and "tx.hash" will always be indexed.
indexer = "null"

# The PostgreSQL connection configuration, the connection format:
#   postgresql://<user>:<password>@<host>:<port>/<db>?<opts>
psql-conn = ""

#######################################################
###       Instrumentation Configuration Options     ###
#######################################################
[instrumentation]

# When true, Prometheus metrics are served under /metrics on
# PrometheusListenAddr.
# Check out the documentation for the list of available metrics.
prometheus = true

# Address to listen for Prometheus collector(s) connections
prometheus_listen_addr = ":26660"

# Maximum number of simultaneous connections.
# If you want to accept a larger number than the default, make sure
# you increase your OS limits.
# 0 - unlimited.
max_open_connections = 3

# Instrumentation namespace
namespace = "cometbft"
```

</p>
</details>

<details>
<summary>RPC/API node config.toml reference</summary>
<p>

```bash title="${HOME}/.sentinelhub/config/config.toml"
# This is a TOML config file.
# For more information, see https://github.com/toml-lang/toml

# NOTE: Any path below can be absolute (e.g. "/var/myawesomeapp/data") or
# relative to the home directory (e.g. "data"). The home directory is
# "$HOME/.cometbft" by default, but could be changed via $CMTHOME env variable
# or --home cmd flag.

#######################################################################
###                   Main Base Config Options                      ###
#######################################################################

# TCP or UNIX socket address of the ABCI application,
# or the name of an ABCI application compiled in with the CometBFT binary
proxy_app = "tcp://127.0.0.1:26658"

# A custom human readable name for this node
moniker = "Your Full Node Name"

# If this node is many blocks behind the tip of the chain, BlockSync
# allows them to catchup quickly by downloading blocks in parallel
# and verifying their commits
#
# Deprecated: this key will be removed and BlockSync will be enabled
# unconditionally in the next major release.
block_sync = true

# Database backend: goleveldb | cleveldb | boltdb | rocksdb | badgerdb
# * goleveldb (github.com/syndtr/goleveldb - most popular implementation)
#   - pure go
#   - stable
# * cleveldb (uses levigo wrapper)
#   - fast
#   - requires gcc
#   - use cleveldb build tag (go build -tags cleveldb)
# * boltdb (uses etcd's fork of bolt - github.com/etcd-io/bbolt)
#   - EXPERIMENTAL
#   - may be faster is some use-cases (random reads - indexer)
#   - use boltdb build tag (go build -tags boltdb)
# * rocksdb (uses github.com/tecbot/gorocksdb)
#   - EXPERIMENTAL
#   - requires gcc
#   - use rocksdb build tag (go build -tags rocksdb)
# * badgerdb (uses github.com/dgraph-io/badger)
#   - EXPERIMENTAL
#   - use badgerdb build tag (go build -tags badgerdb)
db_backend = "goleveldb"

# Database directory
db_dir = "data"

# Output level for logging, including package level options
log_level = "info"

# Output format: 'plain' (colored text) or 'json'
log_format = "plain"

##### additional base config options #####

# Path to the JSON file containing the initial validator set and other meta data
genesis_file = "config/genesis.json"

# Path to the JSON file containing the private key to use as a validator in the consensus protocol
priv_validator_key_file = "config/priv_validator_key.json"

# Path to the JSON file containing the last sign state of a validator
priv_validator_state_file = "data/priv_validator_state.json"

# TCP or UNIX socket address for CometBFT to listen on for
# connections from an external PrivValidator process
priv_validator_laddr = ""

# Path to the JSON file containing the private key to use for node authentication in the p2p protocol
node_key_file = "config/node_key.json"

# Mechanism to connect to the ABCI application: socket | grpc
abci = "socket"

# If true, query the ABCI app on connecting to a new peer
# so the app can decide if we should keep the connection or not
filter_peers = false


#######################################################################
###                 Advanced Configuration Options                  ###
#######################################################################

#######################################################
###       RPC Server Configuration Options          ###
#######################################################
[rpc]

# TCP or UNIX socket address for the RPC server to listen on
laddr = "tcp://127.0.0.1:26657"

# A list of origins a cross-domain request can be executed from
# Default value '[]' disables cors support
# Use '["*"]' to allow any origin
cors_allowed_origins = []

# A list of methods the client is allowed to use with cross-domain requests
cors_allowed_methods = ["HEAD", "GET", "POST", ]

# A list of non simple headers the client is allowed to use with cross-domain requests
cors_allowed_headers = ["Origin", "Accept", "Content-Type", "X-Requested-With", "X-Server-Time", ]

# TCP or UNIX socket address for the gRPC server to listen on
# NOTE: This server only supports /broadcast_tx_commit
grpc_laddr = ""

# Maximum number of simultaneous connections.
# Does not include RPC (HTTP&WebSocket) connections. See max_open_connections
# If you want to accept a larger number than the default, make sure
# you increase your OS limits.
# 0 - unlimited.
# Should be < {ulimit -Sn} - {MaxNumInboundPeers} - {MaxNumOutboundPeers} - {N of wal, db and other open files}
# 1024 - 40 - 10 - 50 = 924 = ~900
grpc_max_open_connections = 900

# Activate unsafe RPC commands like /dial_seeds and /unsafe_flush_mempool
unsafe = false

# Maximum number of simultaneous connections (including WebSocket).
# Does not include gRPC connections. See grpc_max_open_connections
# If you want to accept a larger number than the default, make sure
# you increase your OS limits.
# 0 - unlimited.
# Should be < {ulimit -Sn} - {MaxNumInboundPeers} - {MaxNumOutboundPeers} - {N of wal, db and other open files}
# 1024 - 40 - 10 - 50 = 924 = ~900
max_open_connections = 900

# Maximum number of unique clientIDs that can /subscribe
# If you're using /broadcast_tx_commit, set to the estimated maximum number
# of broadcast_tx_commit calls per block.
max_subscription_clients = 100

# Maximum number of unique queries a given client can /subscribe to
# If you're using GRPC (or Local RPC client) and /broadcast_tx_commit, set to
# the estimated # maximum number of broadcast_tx_commit calls per block.
max_subscriptions_per_client = 5

# Experimental parameter to specify the maximum number of events a node will
# buffer, per subscription, before returning an error and closing the
# subscription. Must be set to at least 100, but higher values will accommodate
# higher event throughput rates (and will use more memory).
experimental_subscription_buffer_size = 200

# Experimental parameter to specify the maximum number of RPC responses that
# can be buffered per WebSocket client. If clients cannot read from the
# WebSocket endpoint fast enough, they will be disconnected, so increasing this
# parameter may reduce the chances of them being disconnected (but will cause
# the node to use more memory).
#
# Must be at least the same as "experimental_subscription_buffer_size",
# otherwise connections could be dropped unnecessarily. This value should
# ideally be somewhat higher than "experimental_subscription_buffer_size" to
# accommodate non-subscription-related RPC responses.
experimental_websocket_write_buffer_size = 200

# If a WebSocket client cannot read fast enough, at present we may
# silently drop events instead of generating an error or disconnecting the
# client.
#
# Enabling this experimental parameter will cause the WebSocket connection to
# be closed instead if it cannot read fast enough, allowing for greater
# predictability in subscription behavior.
experimental_close_on_slow_client = false

# How long to wait for a tx to be committed during /broadcast_tx_commit.
# WARNING: Using a value larger than 10s will result in increasing the
# global HTTP write timeout, which applies to all connections and endpoints.
# See https://github.com/tendermint/tendermint/issues/3435
timeout_broadcast_tx_commit = "10s"

# Maximum size of request body, in bytes
max_body_bytes = 1000000

# Maximum size of request header, in bytes
max_header_bytes = 1048576

# The path to a file containing certificate that is used to create the HTTPS server.
# Might be either absolute path or path related to CometBFT's config directory.
# If the certificate is signed by a certificate authority,
# the certFile should be the concatenation of the server's certificate, any intermediates,
# and the CA's certificate.
# NOTE: both tls_cert_file and tls_key_file must be present for CometBFT to create HTTPS server.
# Otherwise, HTTP server is run.
tls_cert_file = ""

# The path to a file containing matching private key that is used to create the HTTPS server.
# Might be either absolute path or path related to CometBFT's config directory.
# NOTE: both tls-cert-file and tls-key-file must be present for CometBFT to create HTTPS server.
# Otherwise, HTTP server is run.
tls_key_file = ""

# pprof listen address (https://golang.org/pkg/net/http/pprof)
pprof_laddr = "localhost:6060"

#######################################################
###           P2P Configuration Options             ###
#######################################################
[p2p]

# Address to listen for incoming connections
laddr = "tcp://0.0.0.0:26656"

# Address to advertise to peers for them to dial. If empty, will use the same
# port as the laddr, and will introspect on the listener to figure out the
# address. IP and port are required. Example: 159.89.10.97:26656
external_address = ""

# Comma separated list of seed nodes to connect to
seeds = ""

# Comma separated list of nodes to keep persistent connections to
persistent_peers = "315a11830cf39e9cbc69cef94c8d3f19a2ccef70@rpc.sentinel.suchnode.net:26656,3af3fb89fa4243db558f8e52fdbdb0886a2779a5@rpc2.sentinel.suchnode.net:26656,8791539a60b759161082e2e63db57d3bbb09a8f1@rpc3.sentinel.suchnode.net:26656,56238c61a3a3a7b472107e9c87298b77f5931ef6@rpc4.sentinel.suchnode.net:26656,077d24241268c7b6d13859a0e7981fd705d3b328@rpc5.sentinel.suchnode.net:26656,9029bafc2864dff96e591dfa077312dc25760652@rpc6.sentinel.suchnode.net:26656,f3743fa1840cfd283b14080577ff176e09ca7ee1@rpc7.sentinel.suchnode.net:26656,9e67ece32df1c501c7cd37cf383f8c55eae9dc48@rpc8.sentinel.suchnode.net:26656,ad24874c7150c4a5c075c4d310d4858a6f6a84ca@rpc10.sentinel.suchnode.net:26656,cccea01ba2c7937b89eaad20b4124278de53dded@rpc11.sentinel.suchnode.net:26656,add93e1e4fee52bc1cd5ad2811ea6d42fe3a3600@rpc12.sentinel.suchnode.net:26656,1512550cc5478cebc2464ea3de2fd8658f3d3e5c@rpc13.sentinel.suchnode.net:26656,ab597a57b5b7fa8778502e8d577aa7e6b0bd09be@rpc14.sentinel.suchnode.net:26656,7766ec993ae96803834e15ef1e06ffbdf5d8257c@89.106.78.122:21056,ea34cf638ef8942f3d1e8f104dd80db54313647b@sora.busur.net:21056,4b03b2ddb5e2bdc66497e7905bc18d3686cc5790@natsu.busur.net:21056,1d3207eeddbfd1c5994455b54f71557837baf181@suzu.busur.net:21056,a3d4972107b6d29a21fa4f05efbf237e7a690bed@aether.busur.net:21056,f309f97644f084819619c41acdfcd6cf56aebaa3@saki.busur.net:21056,42fec15d194ef0cfd040bd557517d50ea7d687a6@38.49.210.5:21056,0e67ded9ed0bedfaa7ddd4951b926c250d8b52b5@nebula.busur.net:21056,ea806467d26331049e0768986ea8e2fa0ff6231b@154.12.117.169:21056,1fc2ec492afa78101663e12fd570bf8d1e406ace@94.136.187.192:21056,1dba3259a64c8efade3a53db59f8e9b0ce38a517@23.81.118.208:21056,69ad69d517326d38661325517d7bf7cce065b4eb@mizu.busur.net:21056,b5b080374fefb4a66f1a59b9bd9197227ed7f2e3@seraph.busur.net:21056,a527530ec76a3aaac8e18af8b6e33ae1f8170210@chie.busur.net:21056,ad5f07e340683084823f954f973e071e9c615faa@haru.busur.net:21056,acf4345b422b90eba0b3ba774a9ec0566bd68265@142.132.158.9:23956,5ace0e57784e34930360bf6cc00dd5265278f708@65.108.238.166:23956,f7a61d2c82fbe52191606c04440fec78855fe374@65.109.122.249:23956,22efb76a378788caf3bfe3b1ee5e488585e00e6b@148.113.8.180:23956,7b4398a0b842e356821447e2f22345909a65d2b3@65.108.75.160:23956"

# Path to address book
addr_book_file = "config/addrbook.json"

# Set true for strict address routability rules
# Set false for private or local networks
addr_book_strict = true

# Maximum number of inbound peers
max_num_inbound_peers = 30

# Maximum number of outbound peers to connect to, excluding persistent peers
max_num_outbound_peers = 10

# List of node IDs, to which a connection will be (re)established ignoring any existing limits
unconditional_peer_ids = "315a11830cf39e9cbc69cef94c8d3f19a2ccef70, 3af3fb89fa4243db558f8e52fdbdb0886a2779a5, 8791539a60b759161082e2e63db57d3bbb09a8f1, 56238c61a3a3a7b472107e9c87298b77f5931ef6, 077d24241268c7b6d13859a0e7981fd705d3b328, 9029bafc2864dff96e591dfa077312dc25760652, f3743fa1840cfd283b14080577ff176e09ca7ee1, 9e67ece32df1c501c7cd37cf383f8c55eae9dc48, ad24874c7150c4a5c075c4d310d4858a6f6a84ca, cccea01ba2c7937b89eaad20b4124278de53dded, add93e1e4fee52bc1cd5ad2811ea6d42fe3a3600, 1512550cc5478cebc2464ea3de2fd8658f3d3e5c, ab597a57b5b7fa8778502e8d577aa7e6b0bd09be, 7766ec993ae96803834e15ef1e06ffbdf5d8257c, ea34cf638ef8942f3d1e8f104dd80db54313647b, 4b03b2ddb5e2bdc66497e7905bc18d3686cc5790, 1d3207eeddbfd1c5994455b54f71557837baf181, a3d4972107b6d29a21fa4f05efbf237e7a690bed, f309f97644f084819619c41acdfcd6cf56aebaa3, 0e67ded9ed0bedfaa7ddd4951b926c250d8b52b5, 69ad69d517326d38661325517d7bf7cce065b4eb, b5b080374fefb4a66f1a59b9bd9197227ed7f2e3, a527530ec76a3aaac8e18af8b6e33ae1f8170210, ad5f07e340683084823f954f973e071e9c615faa"

# Maximum pause when redialing a persistent peer (if zero, exponential backoff is used)
persistent_peers_max_dial_period = "0s"

# Time to wait before flushing messages out on the connection
flush_throttle_timeout = "10ms"

# Maximum size of a message packet payload, in bytes
max_packet_msg_payload_size = 1024

# Rate at which packets can be sent, in bytes/second
send_rate = 20480000

# Rate at which packets can be received, in bytes/second
recv_rate = 20480000

# Set true to enable the peer-exchange reactor
pex = false

# Seed mode, in which node constantly crawls the network and looks for
# peers. If another node asks it for addresses, it responds and disconnects.
#
# Does not work if the peer-exchange reactor is disabled.
seed_mode = false

# Comma separated list of peer IDs to keep private (will not be gossiped to other peers)
private_peer_ids = ""

# Toggle to disable guard against peers connecting from the same ip.
allow_duplicate_ip = false

# Peer connection configuration.
handshake_timeout = "5s"
dial_timeout = "3s"

#######################################################
###          Mempool Configuration Option          ###
#######################################################
[mempool]

# Mempool version to use:
#   1) "v0" - (default) FIFO mempool.
#   2) "v1" - prioritized mempool (deprecated; will be removed in the next release).
version = "v0"

# The type of mempool for this node to use.
#
#  Possible types:
#  - "flood" : concurrent linked list mempool with flooding gossip protocol
#  (default)
#  - "nop"   : nop-mempool (short for no operation; the ABCI app is responsible
#  for storing, disseminating and proposing txs). "create_empty_blocks=false" is
#  not supported.
type = "flood"

recheck = true
broadcast = true
wal_dir = ""

# Maximum number of transactions in the mempool
size = 1000

# Limit the total size of all txs in the mempool.
# This only accounts for raw transactions (e.g. given 1MB transactions and
# max_txs_bytes=5MB, mempool will only accept 5 transactions).
max_txs_bytes = 67108864

# Size of the cache (used to filter transactions we saw earlier) in transactions
cache_size = 5000

# Do not remove invalid transactions from the cache (default: false)
# Set to true if it's not possible for any invalid transaction to become valid
# again in the future.
keep-invalid-txs-in-cache = false

# Maximum size of a single transaction.
# NOTE: the max size of a tx transmitted over the network is {max_tx_bytes}.
max_tx_bytes = 1048576

# Maximum size of a batch of transactions to send to a peer
# Including space needed by encoding (one varint per transaction).
# XXX: Unused due to https://github.com/tendermint/tendermint/issues/5796
max_batch_bytes = 0

# ttl-duration, if non-zero, defines the maximum amount of time a transaction
# can exist for in the mempool.
#
# Note, if ttl-num-blocks is also defined, a transaction will be removed if it
# has existed in the mempool at least ttl-num-blocks number of blocks or if it's
# insertion time into the mempool is beyond ttl-duration.
ttl-duration = "0s"

# ttl-num-blocks, if non-zero, defines the maximum number of blocks a transaction
# can exist for in the mempool.
#
# Note, if ttl-duration is also defined, a transaction will be removed if it
# has existed in the mempool at least ttl-num-blocks number of blocks or if
# it's insertion time into the mempool is beyond ttl-duration.
ttl-num-blocks = 0

# Experimental parameters to limit gossiping txs to up to the specified number of peers.
# This feature is only available for the default mempool (version config set to "v0").
# We use two independent upper values for persistent and non-persistent peers.
# Unconditional peers are not affected by this feature.
# If we are connected to more than the specified number of persistent peers, only send txs to
# ExperimentalMaxGossipConnectionsToPersistentPeers of them. If one of those
# persistent peers disconnects, activate another persistent peer.
# Similarly for non-persistent peers, with an upper limit of
# ExperimentalMaxGossipConnectionsToNonPersistentPeers.
# If set to 0, the feature is disabled for the corresponding group of peers, that is, the
# number of active connections to that group of peers is not bounded.
# For non-persistent peers, if enabled, a value of 10 is recommended based on experimental
# performance results using the default P2P configuration.
experimental_max_gossip_connections_to_persistent_peers = 0
experimental_max_gossip_connections_to_non_persistent_peers = 0

#######################################################
###         State Sync Configuration Options        ###
#######################################################
[statesync]
# State sync rapidly bootstraps a new node by discovering, fetching, and restoring a state machine
# snapshot from peers instead of fetching and replaying historical blocks. Requires some peers in
# the network to take and serve state machine snapshots. State sync is not attempted if the node
# has any local state (LastBlockHeight > 0). The node will have a truncated block history,
# starting from the height of the snapshot.
enable = false

# RPC servers (comma-separated) for light client verification of the synced state machine and
# retrieval of state data for node bootstrapping. Also needs a trusted height and corresponding
# header hash obtained from a trusted source, and a period during which validators can be trusted.
#
# For Cosmos SDK-based chains, trust_period should usually be about 2/3 of the unbonding time (~2
# weeks) during which they can be financially punished (slashed) for misbehavior.
rpc_servers = ""
trust_height = 0
trust_hash = ""
trust_period = "168h0m0s"

# Time to spend discovering snapshots before initiating a restore.
discovery_time = "15s"

# Temporary directory for state sync snapshot chunks, defaults to the OS tempdir (typically /tmp).
# Will create a new, randomly named directory within, and remove it when done.
temp_dir = ""

# The timeout duration before re-requesting a chunk, possibly from a different
# peer (default: 1 minute).
chunk_request_timeout = "10s"

# The number of concurrent chunk fetchers to run (default: 1).
chunk_fetchers = "4"

# Maximum number of chunks allowed in a snapshot (default: 100000).
max_snapshot_chunks = 100000

#######################################################
###       Block Sync Configuration Options          ###
#######################################################
[blocksync]

# Block Sync version to use:
#
# In v0.37, v1 and v2 of the block sync protocols were deprecated.
# Please use v0 instead.
#
#   1) "v0" - the default block sync implementation
version = "v0"

#######################################################
###         Consensus Configuration Options         ###
#######################################################
[consensus]

wal_file = "data/cs.wal/wal"

# How long we wait for a proposal block before prevoting nil
timeout_propose = "3s"
# How much timeout_propose increases with each round
timeout_propose_delta = "500ms"
# How long we wait after receiving +2/3 prevotes for "anything" (ie. not a single block or nil)
timeout_prevote = "1s"
# How much the timeout_prevote increases with each round
timeout_prevote_delta = "500ms"
# How long we wait after receiving +2/3 precommits for "anything" (ie. not a single block or nil)
timeout_precommit = "1s"
# How much the timeout_precommit increases with each round
timeout_precommit_delta = "500ms"
# How long we wait after committing a block, before starting on the new
# height (this gives us a chance to receive some more precommits, even
# though we already have +2/3).
timeout_commit = "1s"

# How many blocks to look back to check existence of the node's consensus votes before joining consensus
# When non-zero, the node will panic upon restart
# if the same consensus key was used to sign {double_sign_check_height} last blocks.
# So, validators should stop the state machine, wait for some blocks, and then restart the state machine to avoid panic.
double_sign_check_height = 0

# Make progress as soon as we have all the precommits (as if TimeoutCommit = 0)
skip_timeout_commit = true

# EmptyBlocks mode and possible interval between empty blocks
create_empty_blocks = true
create_empty_blocks_interval = "0s"

# Reactor sleep duration parameters
peer_gossip_sleep_duration = "25ms"
peer_query_maj23_sleep_duration = "500ms"

#######################################################
###         Storage Configuration Options           ###
#######################################################
[storage]

# Set to true to discard ABCI responses from the state store, which can save a
# considerable amount of disk space. Set to false to ensure ABCI responses are
# persisted. ABCI responses are required for /block_results RPC queries, and to
# reindex events in the command-line tool.
discard_abci_responses = false

#######################################################
###   Transaction Indexer Configuration Options     ###
#######################################################
[tx_index]

# What indexer to use for transactions
#
# The application will set which txs to index. In some cases a node operator will be able
# to decide which txs to index based on configuration set in the application.
#
# Options:
#   1) "null"
#   2) "kv" (default) - the simplest possible indexer, backed by key-value storage (defaults to levelDB; see DBBackend).
# 		- When "kv" is chosen "tx.height" and "tx.hash" will always be indexed.
#   3) "psql" - the indexer services backed by PostgreSQL.
# When "kv" or "psql" is chosen "tx.height" and "tx.hash" will always be indexed.
indexer = "kv"

# The PostgreSQL connection configuration, the connection format:
#   postgresql://<user>:<password>@<host>:<port>/<db>?<opts>
psql-conn = ""

#######################################################
###       Instrumentation Configuration Options     ###
#######################################################
[instrumentation]

# When true, Prometheus metrics are served under /metrics on
# PrometheusListenAddr.
# Check out the documentation for the list of available metrics.
prometheus = true

# Address to listen for Prometheus collector(s) connections
prometheus_listen_addr = ":26660"

# Maximum number of simultaneous connections.
# If you want to accept a larger number than the default, make sure
# you increase your OS limits.
# 0 - unlimited.
max_open_connections = 3

# Instrumentation namespace
namespace = "cometbft"
```

</p>
</details>

### app.toml

Open the file

```bash
sudo nano ${HOME}/.sentinelhub/config/app.toml
```

Pick the reference matching your node's role. Both flavors share the same gas prices and performance tunings; they differ in pruning policy and whether the REST API is exposed.

What both flavors have in common:

- **Minimum gas prices** include `udvpn` and the two supported IBC token denoms, matching the [official sentinelhub-2 minimums](https://raw.githubusercontent.com/sentinel-official/networks/main/sentinelhub-2/minimum-gas-prices.txt).
- **Performance tunings** suited to a node with comfortable RAM headroom: `iavl-cache-size = 781250`, `inter-block-cache = true`, `iavl-disable-fastnode = true`, `[mempool] max-txs = 5000`. Review these against your hardware before copying wholesale.

What differs:

| Field | Validator | RPC/API node |
|---|---|---|
| `pruning` | `"custom"` (keep 100 blocks, prune every 10) | `"default"` (keep ~362880 states) |
| `pruning-keep-recent` | `"100"` | `"0"` |
| `pruning-interval` | `"10"` | `"0"` |
| `[api] enable` | `false` | `true` |
| `[api] address` | `"tcp://localhost:1317"` | `"tcp://0.0.0.0:1317"` |

The validator runs with aggressive custom pruning because it only needs the recent tip to sign blocks. The RPC/API node uses `pruning = "default"` so historical state queries (e.g. `/cosmos/auth/v1beta1/accounts/...?height=N` from explorers and wallets) keep working for ~25 days of blocks. If you want full archival history instead, set `pruning = "nothing"`.

The RPC/API node also exposes the Cosmos SDK REST API on port `1317`, bound to all interfaces. Make sure you firewall it to the clients you want to serve and consider putting a reverse proxy in front (TLS, rate limiting, auth) before exposing it publicly.

<details>
<summary>Validator app.toml reference</summary>
<p>

```bash title="${HOME}/.sentinelhub/config/app.toml"
# This is a TOML config file.
# For more information, see https://github.com/toml-lang/toml

###############################################################################
###                           Base Configuration                            ###
###############################################################################

# The minimum gas prices a validator is willing to accept for processing a
# transaction. A transaction's fees must meet the minimum of any denomination
# specified in this config (e.g. 0.25token1,0.0001token2).
minimum-gas-prices = "0.1udvpn,0.001ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,0.01ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518"

# default: the last 362880 states are kept, pruning at 10 block intervals
# nothing: all historic states will be saved, nothing will be deleted (i.e. archiving node)
# everything: 2 latest states will be kept; pruning at 10 block intervals.
# custom: allow pruning options to be manually specified through 'pruning-keep-recent', and 'pruning-interval'
pruning = "custom"

# These are applied if and only if the pruning strategy is custom.
pruning-keep-recent = "100"
pruning-interval = "10"

# HaltHeight contains a non-zero block height at which a node will gracefully
# halt and shutdown that can be used to assist upgrades and testing.
#
# Note: Commitment of state will be attempted on the corresponding block.
halt-height = 0

# HaltTime contains a non-zero minimum block time (in Unix seconds) at which
# a node will gracefully halt and shutdown that can be used to assist upgrades
# and testing.
#
# Note: Commitment of state will be attempted on the corresponding block.
halt-time = 0

# MinRetainBlocks defines the minimum block height offset from the current
# block being committed, such that all blocks past this offset are pruned
# from Tendermint. It is used as part of the process of determining the
# ResponseCommit.RetainHeight value during ABCI Commit. A value of 0 indicates
# that no blocks should be pruned.
#
# This configuration value is only responsible for pruning Tendermint blocks.
# It has no bearing on application state pruning which is determined by the
# "pruning-*" configurations.
#
# Note: Tendermint block pruning is dependant on this parameter in conunction
# with the unbonding (safety threshold) period, state pruning and state sync
# snapshot parameters to determine the correct minimum value of
# ResponseCommit.RetainHeight.
min-retain-blocks = 0

# InterBlockCache enables inter-block caching.
inter-block-cache = true

# IndexEvents defines the set of events in the form {eventType}.{attributeKey},
# which informs Tendermint what to index. If empty, all events will be indexed.
#
# Example:
# ["message.sender", "message.recipient"]
index-events = []

# IavlCacheSize set the size of the iavl tree cache (in number of nodes).
iavl-cache-size = 781250

# IAVLDisableFastNode enables or disables the fast node feature of IAVL.
# Default is false.
iavl-disable-fastnode = true

# IAVLLazyLoading enable/disable the lazy loading of iavl store.
# Default is false.
iavl-lazy-loading = false

# AppDBBackend defines the database backend type to use for the application and snapshots DBs.
# An empty string indicates that a fallback will be used.
# The fallback is the db_backend value set in Tendermint's config.toml.
app-db-backend = ""

###############################################################################
###                         Telemetry Configuration                         ###
###############################################################################

[telemetry]

# Prefixed with keys to separate services.
service-name = ""

# Enabled enables the application telemetry functionality. When enabled,
# an in-memory sink is also enabled by default. Operators may also enabled
# other sinks such as Prometheus.
enabled = false

# Enable prefixing gauge values with hostname.
enable-hostname = false

# Enable adding hostname to labels.
enable-hostname-label = false

# Enable adding service to labels.
enable-service-label = false

# PrometheusRetentionTime, when positive, enables a Prometheus metrics sink.
prometheus-retention-time = 0

# GlobalLabels defines a global set of name/value label tuples applied to all
# metrics emitted using the wrapper functions defined in telemetry package.
#
# Example:
# [["chain_id", "cosmoshub-1"]]
global-labels = [
]

###############################################################################
###                           API Configuration                             ###
###############################################################################

[api]

# Enable defines if the API server should be enabled.
enable = false

# Swagger defines if swagger documentation should automatically be registered.
swagger = false

# Address defines the API server to listen on.
address = "tcp://localhost:1317"

# MaxOpenConnections defines the number of maximum open connections.
max-open-connections = 1000

# RPCReadTimeout defines the Tendermint RPC read timeout (in seconds).
rpc-read-timeout = 10

# RPCWriteTimeout defines the Tendermint RPC write timeout (in seconds).
rpc-write-timeout = 0

# RPCMaxBodyBytes defines the Tendermint maximum request body (in bytes).
rpc-max-body-bytes = 1000000

# EnableUnsafeCORS defines if CORS should be enabled (unsafe - use it at your own risk).
enabled-unsafe-cors = false

###############################################################################
###                           Rosetta Configuration                         ###
###############################################################################

[rosetta]

# Enable defines if the Rosetta API server should be enabled.
enable = false

# Address defines the Rosetta API server to listen on.
address = ":8080"

# Network defines the name of the blockchain that will be returned by Rosetta.
blockchain = "app"

# Network defines the name of the network that will be returned by Rosetta.
network = "network"

# Retries defines the number of retries when connecting to the node before failing.
retries = 3

# Offline defines if Rosetta server should run in offline mode.
offline = false

# EnableDefaultSuggestedFee defines if the server should suggest fee by default.
# If 'construction/medata' is called without gas limit and gas price,
# suggested fee based on gas-to-suggest and denom-to-suggest will be given.
enable-fee-suggestion = false

# GasToSuggest defines gas limit when calculating the fee
gas-to-suggest = 200000

# DenomToSuggest defines the defult denom for fee suggestion.
# Price must be in minimum-gas-prices.
denom-to-suggest = "uatom"

###############################################################################
###                           gRPC Configuration                            ###
###############################################################################

[grpc]

# Enable defines if the gRPC server should be enabled.
enable = true

# Address defines the gRPC server address to bind to.
address = "localhost:9090"

# MaxRecvMsgSize defines the max message size in bytes the server can receive.
# The default value is 10MB.
max-recv-msg-size = "10485760"

# MaxSendMsgSize defines the max message size in bytes the server can send.
# The default value is math.MaxInt32.
max-send-msg-size = "2147483647"

###############################################################################
###                        gRPC Web Configuration                           ###
###############################################################################

[grpc-web]

# GRPCWebEnable defines if the gRPC-web should be enabled.
# NOTE: gRPC must also be enabled, otherwise, this configuration is a no-op.
enable = true

# Address defines the gRPC-web server address to bind to.
address = "localhost:9091"

# EnableUnsafeCORS defines if CORS should be enabled (unsafe - use it at your own risk).
enable-unsafe-cors = false

###############################################################################
###                        State Sync Configuration                         ###
###############################################################################

# State sync snapshots allow other nodes to rapidly join the network without replaying historical
# blocks, instead downloading and applying a snapshot of the application state at a given height.
[state-sync]

# snapshot-interval specifies the block interval at which local state sync snapshots are
# taken (0 to disable).
snapshot-interval = 0

# snapshot-keep-recent specifies the number of recent snapshots to keep and serve (0 to keep all).
snapshot-keep-recent = 2

###############################################################################
###                         Store / State Streaming                         ###
###############################################################################

[store]
streamers = []

[streamers]
[streamers.file]
keys = ["*", ]
write_dir = ""
prefix = ""

# output-metadata specifies if output the metadata file which includes the abci request/responses
# during processing the block.
output-metadata = "true"

# stop-node-on-error specifies if propagate the file streamer errors to consensus state machine.
stop-node-on-error = "true"

# fsync specifies if call fsync after writing the files.
fsync = "false"

###############################################################################
###                         Mempool                                         ###
###############################################################################

[mempool]
# Setting max-txs to 0 will allow for a unbounded amount of transactions in the mempool.
# Setting max_txs to negative 1 (-1) will disable transactions from being inserted into the mempool.
# Setting max_txs to a positive number (> 0) will limit the number of transactions in the mempool, by the specified amount.
#
# Note, this configuration only applies to SDK built-in app-side mempool
# implementations.
max-txs = 5000
```

</p>
</details>

<details>
<summary>RPC/API node app.toml reference</summary>
<p>

```bash title="${HOME}/.sentinelhub/config/app.toml"
# This is a TOML config file.
# For more information, see https://github.com/toml-lang/toml

###############################################################################
###                           Base Configuration                            ###
###############################################################################

# The minimum gas prices a validator is willing to accept for processing a
# transaction. A transaction's fees must meet the minimum of any denomination
# specified in this config (e.g. 0.25token1,0.0001token2).
minimum-gas-prices = "0.1udvpn,0.001ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,0.01ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518"

# default: the last 362880 states are kept, pruning at 10 block intervals
# nothing: all historic states will be saved, nothing will be deleted (i.e. archiving node)
# everything: 2 latest states will be kept; pruning at 10 block intervals.
# custom: allow pruning options to be manually specified through 'pruning-keep-recent', and 'pruning-interval'
pruning = "default"

# These are applied if and only if the pruning strategy is custom.
pruning-keep-recent = "0"
pruning-interval = "0"

# HaltHeight contains a non-zero block height at which a node will gracefully
# halt and shutdown that can be used to assist upgrades and testing.
#
# Note: Commitment of state will be attempted on the corresponding block.
halt-height = 0

# HaltTime contains a non-zero minimum block time (in Unix seconds) at which
# a node will gracefully halt and shutdown that can be used to assist upgrades
# and testing.
#
# Note: Commitment of state will be attempted on the corresponding block.
halt-time = 0

# MinRetainBlocks defines the minimum block height offset from the current
# block being committed, such that all blocks past this offset are pruned
# from Tendermint. It is used as part of the process of determining the
# ResponseCommit.RetainHeight value during ABCI Commit. A value of 0 indicates
# that no blocks should be pruned.
#
# This configuration value is only responsible for pruning Tendermint blocks.
# It has no bearing on application state pruning which is determined by the
# "pruning-*" configurations.
#
# Note: Tendermint block pruning is dependant on this parameter in conunction
# with the unbonding (safety threshold) period, state pruning and state sync
# snapshot parameters to determine the correct minimum value of
# ResponseCommit.RetainHeight.
min-retain-blocks = 0

# InterBlockCache enables inter-block caching.
inter-block-cache = true

# IndexEvents defines the set of events in the form {eventType}.{attributeKey},
# which informs Tendermint what to index. If empty, all events will be indexed.
#
# Example:
# ["message.sender", "message.recipient"]
index-events = []

# IavlCacheSize set the size of the iavl tree cache (in number of nodes).
iavl-cache-size = 781250

# IAVLDisableFastNode enables or disables the fast node feature of IAVL.
# Default is false.
iavl-disable-fastnode = true

# IAVLLazyLoading enable/disable the lazy loading of iavl store.
# Default is false.
iavl-lazy-loading = false

# AppDBBackend defines the database backend type to use for the application and snapshots DBs.
# An empty string indicates that a fallback will be used.
# The fallback is the db_backend value set in Tendermint's config.toml.
app-db-backend = ""

###############################################################################
###                         Telemetry Configuration                         ###
###############################################################################

[telemetry]

# Prefixed with keys to separate services.
service-name = ""

# Enabled enables the application telemetry functionality. When enabled,
# an in-memory sink is also enabled by default. Operators may also enabled
# other sinks such as Prometheus.
enabled = false

# Enable prefixing gauge values with hostname.
enable-hostname = false

# Enable adding hostname to labels.
enable-hostname-label = false

# Enable adding service to labels.
enable-service-label = false

# PrometheusRetentionTime, when positive, enables a Prometheus metrics sink.
prometheus-retention-time = 0

# GlobalLabels defines a global set of name/value label tuples applied to all
# metrics emitted using the wrapper functions defined in telemetry package.
#
# Example:
# [["chain_id", "cosmoshub-1"]]
global-labels = [
]

###############################################################################
###                           API Configuration                             ###
###############################################################################

[api]

# Enable defines if the API server should be enabled.
enable = true

# Swagger defines if swagger documentation should automatically be registered.
swagger = false

# Address defines the API server to listen on.
address = "tcp://0.0.0.0:1317"

# MaxOpenConnections defines the number of maximum open connections.
max-open-connections = 1000

# RPCReadTimeout defines the Tendermint RPC read timeout (in seconds).
rpc-read-timeout = 10

# RPCWriteTimeout defines the Tendermint RPC write timeout (in seconds).
rpc-write-timeout = 0

# RPCMaxBodyBytes defines the Tendermint maximum request body (in bytes).
rpc-max-body-bytes = 1000000

# EnableUnsafeCORS defines if CORS should be enabled (unsafe - use it at your own risk).
enabled-unsafe-cors = false

###############################################################################
###                           Rosetta Configuration                         ###
###############################################################################

[rosetta]

# Enable defines if the Rosetta API server should be enabled.
enable = false

# Address defines the Rosetta API server to listen on.
address = ":8080"

# Network defines the name of the blockchain that will be returned by Rosetta.
blockchain = "app"

# Network defines the name of the network that will be returned by Rosetta.
network = "network"

# Retries defines the number of retries when connecting to the node before failing.
retries = 3

# Offline defines if Rosetta server should run in offline mode.
offline = false

# EnableDefaultSuggestedFee defines if the server should suggest fee by default.
# If 'construction/medata' is called without gas limit and gas price,
# suggested fee based on gas-to-suggest and denom-to-suggest will be given.
enable-fee-suggestion = false

# GasToSuggest defines gas limit when calculating the fee
gas-to-suggest = 200000

# DenomToSuggest defines the defult denom for fee suggestion.
# Price must be in minimum-gas-prices.
denom-to-suggest = "uatom"

###############################################################################
###                           gRPC Configuration                            ###
###############################################################################

[grpc]

# Enable defines if the gRPC server should be enabled.
enable = true

# Address defines the gRPC server address to bind to.
address = "localhost:9090"

# MaxRecvMsgSize defines the max message size in bytes the server can receive.
# The default value is 10MB.
max-recv-msg-size = "10485760"

# MaxSendMsgSize defines the max message size in bytes the server can send.
# The default value is math.MaxInt32.
max-send-msg-size = "2147483647"

###############################################################################
###                        gRPC Web Configuration                           ###
###############################################################################

[grpc-web]

# GRPCWebEnable defines if the gRPC-web should be enabled.
# NOTE: gRPC must also be enabled, otherwise, this configuration is a no-op.
enable = true

# Address defines the gRPC-web server address to bind to.
address = "localhost:9091"

# EnableUnsafeCORS defines if CORS should be enabled (unsafe - use it at your own risk).
enable-unsafe-cors = false

###############################################################################
###                        State Sync Configuration                         ###
###############################################################################

# State sync snapshots allow other nodes to rapidly join the network without replaying historical
# blocks, instead downloading and applying a snapshot of the application state at a given height.
[state-sync]

# snapshot-interval specifies the block interval at which local state sync snapshots are
# taken (0 to disable).
snapshot-interval = 0

# snapshot-keep-recent specifies the number of recent snapshots to keep and serve (0 to keep all).
snapshot-keep-recent = 2

###############################################################################
###                         Store / State Streaming                         ###
###############################################################################

[store]
streamers = []

[streamers]
[streamers.file]
keys = ["*", ]
write_dir = ""
prefix = ""

# output-metadata specifies if output the metadata file which includes the abci request/responses
# during processing the block.
output-metadata = "true"

# stop-node-on-error specifies if propagate the file streamer errors to consensus state machine.
stop-node-on-error = "true"

# fsync specifies if call fsync after writing the files.
fsync = "false"

###############################################################################
###                         Mempool                                         ###
###############################################################################

[mempool]
# Setting max-txs to 0 will allow for a unbounded amount of transactions in the mempool.
# Setting max_txs to negative 1 (-1) will disable transactions from being inserted into the mempool.
# Setting max_txs to a positive number (> 0) will limit the number of transactions in the mempool, by the specified amount.
#
# Note, this configuration only applies to SDK built-in app-side mempool
# implementations.
max-txs = 5000
```

</p>
</details>

