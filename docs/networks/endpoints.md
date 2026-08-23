---
title: Endpoints
sidebar_label: "🔌 Endpoints"
sidebar_position: 2
---

# Endpoints

Every public endpoint for the Sentinel networks, with the chain IDs and explorers that go with them. This page is the list of *what* to call. For *how* to call it, see [RPC](/apis/rpc), [REST](/apis/interact-rest) and [gRPC](/apis/grpc).

Public endpoints are a convenience, not a guarantee. For full control and reliability, run your own node by following the [Full Node guide](/full-node-setup).

## Mainnet

Chain ID **`sentinelhub-2`**. Every endpoint below was verified against the live chain when this page was last updated. They do not all run the same hub patch release, but `v12.0.1` and `v12.0.2` share the same API surface.

### RPC

| Endpoint | Provider |
|---|---|
| `https://rpc.sentinel.co` | Sentinel. Redirects to `fullrpc-sentinel.busurnode.com` and carries the full block history of `sentinelhub-2` from height `901801`. |
| `https://rpc-sentinel.busurnode.com` | Busurnode |
| `https://rpc.sentinel.validatus.com` | Validatus |
| `https://sentinel-rpc.publicnode.com` | Allnodes |
| `https://sentinel-rpc.polkachu.com` | Polkachu |
| `https://rpc.sentineldao.com` | Sentinel Growth DAO |

:::tip Check liveness before you blame your code
[sentnodes.com/public-rpc](https://sentnodes.com/public-rpc) monitors the public Sentinel RPC endpoints and refreshes every 30 seconds, reporting health, current block height, uptime percentage and region for each provider. It is the fastest way to tell a dead endpoint from a bug. It covers RPC only, not REST or gRPC.
:::

Nodes differ widely in how much history they keep. `curl <endpoint>/status` reports `earliest_block_height`, and the values range from `901801` on the official endpoint to tens of millions of blocks later on others. State pruning is stricter still, as explained under [historical state](/apis/interact-rest#query-for-historical-state-using-rest).

### REST (LCD)

| Endpoint | Provider |
|---|---|
| `https://lcd.sentinel.co` | Sentinel. Redirects to `fullapi-sentinel.busurnode.com`. |
| `https://api-sentinel.busurnode.com` | Busurnode |
| `https://api.sentinel.validatus.com` | Validatus |
| `https://sentinel-rest.publicnode.com` | Allnodes |
| `https://sentinel-api.polkachu.com` | Polkachu |
| `https://api.sentineldao.com` | Sentinel Growth DAO |

### gRPC

Both are served over TLS on port `443`, so gRPC clients need no `-plaintext` flag.

| Endpoint | Provider |
|---|---|
| `fullgrpc-sentinel.busurnode.com:443` | Busurnode |
| `grpc.sentinel.validatus.com:443` | Validatus |

Public gRPC is much thinner on the ground than RPC or REST. Most gRPC entries in the chain registry either no longer resolve or run a pre-v12 hub that does not serve the v3 query services, so verify one with `grpcurl <endpoint> list` before depending on it.

:::caution
The old `grpc.sentinel.co:9090` address no longer accepts connections. Port `9090` is closed, and `grpc.sentinel.co` answers with an HTTP redirect that gRPC clients do not follow.
:::

### API reference

The full route listings are published as OpenAPI specifications on this site: [RPC](/api?v=RPC) and [LCD](/api?v=LCD).

## Testnet

Chain ID **`bluenet-2-3`**.

| | Endpoint |
|---|---|
| RPC | `https://rpc-sentinel-testnet.busurnode.com` |
| REST | `https://api-sentinel-testnet.busurnode.com` |
| Explorer | [explorer.busurnode.com/sentinel-testnet](https://explorer.busurnode.com/sentinel-testnet) |

:::warning The testnet is currently unreachable
Both endpoints resolve in DNS but return no response from the origin, and `bluenet-2-3` has had no activity in the [networks repository](https://github.com/sentinel-official/networks) since its validator gentxs were collected in September 2025. There is also no Sentinel entry in the Cosmos chain registry's testnets directory. Treat the testnet as offline until someone confirms otherwise, and note that the mainnet hostnames `rpc-sentinel.busurnode.com` and `api-sentinel.busurnode.com` are **not** testnet endpoints despite the similar names.
:::

## Explorers

[P2P Scan](https://p2pscan.com) is the main mainnet explorer. See [Explorers](/networks/explorers) for the full list, and [dVPN Node Tools](/dvpn-nodes/tools) for node-level dashboards.

## Finding more endpoints

The Cosmos [chain registry](/networks/chain-registry) carries the community-maintained list, roughly twenty RPC and eighteen REST entries for Sentinel. Expect a meaningful share to be dead: entries are contributed by operators and are not pruned when a node goes away. [cosmos.directory/sentinel/nodes](https://cosmos.directory/sentinel/nodes) shows response times for the registered nodes.

Node operators looking for `persistent_peers` rather than public API endpoints should see [Peer connectivity](/full-node-setup/hub-config) instead.
