---
title: Python
sidebar_label: "🐍 Python"
sidebar_position: 4
---

# Python SDK

The Python SDK provides a straightforward way to query the Sentinel blockchain, manage subscriptions, and handle VPN sessions from Python. It talks to the chain over gRPC using [sentinel-protobuf](https://pypi.org/project/sentinel-protobuf/) for message definitions and [mospy](https://github.com/ctrl-Felix/mospy) for transaction signing. It's a good fit for scripting, automation, and building backend services that need to interact with Sentinel nodes.

You can access the Sentinel Python SDK from:
- [GitHub repository](https://github.com/sentinel-official/sentinel-python-sdk)
- [PyPI package](https://pypi.org/project/sentinel-sdk/)

## Architecture

The SDK is organized into the following modules, accessible as properties on the main `SDKInstance`:

- **`nodes`** - Query nodes, check node status, register nodes, subscribe, and post VPN sessions
- **`subscriptions`** - Manage subscription lifecycle, allocations, and payouts
- **`sessions`** - Start, end, and update VPN sessions with proof submission
- **`plans`** - Create and manage subscription plans, link/unlink nodes
- **`providers`** - Register and update provider profiles
- **`deposits`** - Query deposit information
- **`swaps`** - Execute and query token swaps

Each module inherits from both `Querier` (read-only gRPC queries) and `Transactor` (transaction signing and broadcasting), giving every module access to both query and transaction methods.

## Installation

```bash
pip install sentinel-sdk
```

**Requirements:** Python 3.10+

**Dependencies:**
- `sentinel-protobuf` (0.3.3) - Protobuf definitions for the Sentinel network
- `grpcio` (>=1.51.1) - gRPC framework
- `bip-utils` (2.9.0) - BIP39/BIP44 wallet derivation
- `mospy-wallet` (0.6.0) - Cosmos transaction building

## SDK Instance

The `SDKInstance` is the main entry point. It manages gRPC connections, account initialization, and module loading.

### Read-Only Client

For query-only usage, no secret is required:

```python
from sentinel_sdk.sdk import SDKInstance

sdk = SDKInstance(grpcaddr="grpc.sentinel.co", grpcport=9090)
```

### Signing Client

To sign and broadcast transactions, provide a BIP39 mnemonic or hex-encoded private key:

```python
from sentinel_sdk.sdk import SDKInstance

sdk = SDKInstance(
    grpcaddr="grpc.sentinel.co",
    grpcport=9090,
    secret="your mnemonic phrase here",
    ssl=False
)

# Access the derived account address
print(sdk.nodes._account.address)
```

The SDK derives two accounts from the secret:
- A user account with the `sent` prefix
- A provider account with the `sentprov` prefix (used for provider and plan operations)

### Switching Accounts or Endpoints

```python
# Switch to a different account
sdk.renew_account(secret="new mnemonic or private key")

# Switch to a different gRPC endpoint
sdk.renew_grpc(grpcaddr="grpc.other-endpoint.co", grpcport=9090, use_ssl=False)
```

## Types

The SDK provides several types used throughout the modules:

### Status

```python
from sentinel_sdk.types import Status

Status.UNSPECIFIED       # 0
Status.ACTIVE            # 1
Status.INACTIVE_PENDING  # 2
Status.INACTIVE          # 3
```

### NodeType

```python
from sentinel_sdk.types import NodeType

NodeType.WIREGUARD  # 1
NodeType.V2RAY      # 2
```

### TxParams

Transaction parameters can be customized per transaction:

```python
from sentinel_sdk.types import TxParams

params = TxParams(
    denom="udvpn",         # Token denomination (default: "udvpn")
    fee_amount=314159,     # Fee amount (default: 314159)
    gas=0,                 # Gas limit, 0 = auto-estimate (default: 0)
    gas_multiplier=1.5     # Gas estimation multiplier (default: 1.5)
)
```

### PageRequest

Pagination for query results:

```python
from sentinel_sdk.types import PageRequest

pagination = PageRequest(
    limit=100,           # Results per page (default: 100)
    offset=0,            # Starting position
    count_total=True,    # Include total count
    reverse=False        # Reverse ordering
)
```

## Query

All query methods communicate via gRPC and return protobuf objects. Most list queries support pagination with `PageRequest`.

### Querying Nodes

```python
from sentinel_sdk.types import Status, PageRequest

# Query all active nodes
nodes = sdk.nodes.QueryNodes(Status.ACTIVE)

# Query with pagination
nodes = sdk.nodes.QueryNodes(
    Status.ACTIVE,
    pagination=PageRequest(limit=50, offset=0)
)

# Query a specific node
node = sdk.nodes.QueryNode("sentnode1...")

# Get total count of active nodes
count = sdk.nodes.QueryNumOfNodesWithStatus(Status.ACTIVE)

# Get nodes for a specific plan
nodes = sdk.nodes.QueryNodesForPlan(plan_id=1, status=Status.ACTIVE)

# Get node module parameters
params = sdk.nodes.QueryParams()
```

### Node Status (HTTP)

The node module can also query individual node status over HTTP, with multi-threaded support for bulk queries:

```python
import json

# Single node status check
status = json.loads(sdk.nodes.QueryNodeStatus(node))
print(status["result"]["type"])      # "wireguard" or "v2ray"
print(status["result"]["address"])

# Bulk status check with threading (8 threads by default)
statuses = sdk.nodes.QueryNodesStatus(nodes, n_threads=8)
for address, status_json in statuses.items():
    print(f"{address}: {json.loads(status_json)}")
```

### Querying Subscriptions

```python
# All subscriptions for the current account
subs = sdk.subscriptions.QuerySubscriptionsForAccount(sdk.nodes._account.address)

# Subscriptions for a specific node
subs = sdk.subscriptions.QuerySubscriptionsForNode("sentnode1...")

# Subscriptions for a plan
subs = sdk.subscriptions.QuerySubscriptionsForPlan(plan_id=1)

# A single subscription by ID
sub = sdk.subscriptions.QuerySubscription(subscription_id=42)

# Allocation for an address within a subscription
alloc = sdk.subscriptions.QueryAllocation(
    address="sent1...",
    subscription_id=42
)

# Query payouts
payouts = sdk.subscriptions.QueryPayoutsForAccount("sent1...")
```

### Querying Sessions

```python
# Sessions for the current account
sessions = sdk.sessions.QuerySessionsForAccount(sdk.nodes._account.address)

# Sessions for a subscription
sessions = sdk.sessions.QuerySessionsForSubscription(subscription_id=42)

# Sessions for a specific node
sessions = sdk.sessions.QuerySessionsForNode("sentnode1...")

# A single session by ID
session = sdk.sessions.QuerySession(session_id=1)
```

### Querying Plans, Providers, Deposits, and Swaps

```python
# Plans
plan = sdk.plans.QueryPlan(plan_id=1)
plans = sdk.plans.QueryPlans(Status.ACTIVE)
plans = sdk.plans.QueryPlansForProvider("sentprov1...", Status.ACTIVE)

# Providers
provider = sdk.providers.QueryProvider("sentprov1...")
providers = sdk.providers.QueryProviders(Status.ACTIVE)

# Deposits
deposit = sdk.deposits.QueryDeposit("sent1...")
deposits = sdk.deposits.QueryDeposits()

# Swaps
swap = sdk.swaps.QuerySwap(tx_hash=b"...")
swaps = sdk.swaps.QuerySwaps()
```

## Transaction

Once the SDK is initialized with a secret, every module can sign and broadcast transactions. All transaction methods accept an optional `TxParams` parameter. If `gas` is set to 0 (default), it is automatically estimated.

### Subscribing to a Node

```python
from sentinel_sdk.types import TxParams

tx = sdk.nodes.SubscribeToNode(
    node_address="sentnode1...",
    gigabytes=1,
    hours=0,
    denom="udvpn",
    tx_params=TxParams()
)

# Wait for the transaction to be confirmed
tx_response = sdk.nodes.wait_for_tx(tx["hash"])
```

### Starting and Ending Sessions

```python
# Start a session for a subscription
tx = sdk.sessions.StartSession(
    subscription_id=42,
    address="sentnode1..."
)
tx_response = sdk.sessions.wait_for_tx(tx["hash"])

# End a session with a rating
tx = sdk.sessions.EndSession(session_id=1, rating=5)
tx_response = sdk.sessions.wait_for_tx(tx["hash"])
```

### Subscribing to a Plan

```python
tx = sdk.plans.Subscribe(plan_id=1, denom="udvpn")
tx_response = sdk.plans.wait_for_tx(tx["hash"])
```

### Managing Subscriptions

```python
# Allocate bandwidth to an address
tx = sdk.subscriptions.Allocate(
    address="sent1...",
    bytes="1000000000",
    id=42
)

# Cancel a subscription
tx = sdk.subscriptions.Cancel(id=42)
```

### Provider Operations

```python
# Register as a provider
tx = sdk.providers.Register(
    name="My Provider",
    identity="keybase-identity",
    description="A Sentinel dVPN provider",
    website="https://example.com"
)

# Update provider details
tx = sdk.providers.Update(
    name="Updated Name",
    identity="keybase-identity",
    description="Updated description",
    website="https://example.com"
)
```

### Plan Management (Provider)

```python
# Create a new plan
tx = sdk.plans.Create(
    duration=720,        # hours
    gigabytes=100,
    prices=prices_obj
)

# Link/unlink a node to a plan
tx = sdk.plans.LinkNode(plan_id=1, node_address="sentnode1...")
tx = sdk.plans.UnlinkNode(plan_id=1, node_address="sentnode1...")

# Update plan status
tx = sdk.plans.UpdateStatus(plan_id=1, status=Status.INACTIVE.value)
```

## Event Parsing

After broadcasting a transaction, use the `search_attribute` utility to extract specific event attributes from the response:

```python
from sentinel_sdk.utils import search_attribute

# Extract the subscription ID from a subscribe transaction
subscription_id = search_attribute(
    tx_response,
    "sentinel.node.v2.EventCreateSubscription",
    "id"
)

# Extract the session ID from a session start transaction
session_id = search_attribute(
    tx_response,
    "sentinel.session.v2.EventStart",
    "id"
)
```

## VPN Connection

After starting a session on-chain, post it to the node to establish a VPN connection. The `PostSession` method handles key generation (WireGuard keys or V2Ray UUID), ECDSA signing, and the HTTP handshake with the node:

```python
from sentinel_sdk.types import NodeType

# Determine the node type from its status
node_status = json.loads(sdk.nodes.QueryNodeStatus(node))
node_type = NodeType(node_status["result"]["type"])

# Post the session to the node
result = sdk.nodes.PostSession(
    session_id=int(session_id),
    remote_url=node.remote_url,
    node_type=node_type    # NodeType.WIREGUARD or NodeType.V2RAY
)

print(result)  # Contains VPN configuration data
```

For WireGuard connections, the SDK automatically generates a key pair using the built-in `WgKey` class (PyNaCl). For V2Ray, it generates a UUID-based key.

## Setting Up the Development Environment

Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate
```

Install the package in editable mode:

```bash
pip install --editable .
```

For more details on development mode, visit the [setuptools user guide](https://setuptools.pypa.io/en/latest/userguide/development_mode.html).

## Enforcing Code Style with Pre-commit

The project uses [Black](https://github.com/psf/black), [isort](https://pycqa.github.io/isort/), and [Flake8](https://flake8.pycqa.org/) to enforce [PEP 8](https://peps.python.org/pep-0008/) standards:

```bash
pip install pre-commit
pre-commit install
```

For more information, refer to the official [pre-commit documentation](https://pre-commit.com/index.html).

## Examples

Below is a complete workflow demonstrating how to query a node, subscribe, start a session, and establish a VPN connection:

```python
import json
from sentinel_sdk.sdk import SDKInstance
from sentinel_sdk.types import Status, NodeType, TxParams
from sentinel_sdk.utils import search_attribute

# 1. Initialize the SDK
sdk = SDKInstance(
    grpcaddr="grpc.sentinel.co",
    grpcport=9090,
    secret="your mnemonic phrase"
)

# 2. Query and select a node
nodes = sdk.nodes.QueryNodes(Status.ACTIVE)
node = nodes[0]
node_status = json.loads(sdk.nodes.QueryNodeStatus(node))
print(f"Node: {node.address}, Type: {node_status['result']['type']}")

# 3. Subscribe to the node
tx = sdk.nodes.SubscribeToNode(
    node_address=node.address,
    gigabytes=1,
    hours=0,
    denom="udvpn",
    tx_params=TxParams()
)
tx_response = sdk.nodes.wait_for_tx(tx["hash"])

subscription_id = search_attribute(
    tx_response, "sentinel.node.v2.EventCreateSubscription", "id"
)

# 4. Start a session
tx = sdk.sessions.StartSession(
    subscription_id=int(subscription_id),
    address=node.address
)
tx_response = sdk.sessions.wait_for_tx(tx["hash"])

session_id = search_attribute(
    tx_response, "sentinel.session.v2.EventStart", "id"
)

# 5. Post the session to establish VPN connection
result = sdk.nodes.PostSession(
    session_id=int(session_id),
    remote_url=node.remote_url,
    node_type=NodeType(node_status["result"]["type"])
)
print(result)
```

## Additional Resources

- [Packaging Python Projects](https://packaging.python.org/en/latest/tutorials/packaging-projects/)
- [Src Layout vs Flat Layout](https://packaging.python.org/en/latest/discussions/src-layout-vs-flat-layout/)
- [Cosmos SDK Documentation](https://docs.cosmos.network/)
