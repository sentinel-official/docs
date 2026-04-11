---
title: Wasm
sidebar_position: 15
---

Querying commands for the wasm module (CosmWasm), which handles smart contracts on the Sentinel chain.

## Query Code Info

Print out metadata of a code ID.

```bash
sentinelhub query wasm code-info <code_id> \
  --node https://rpc.sentinel.co:443
```

## Download Code

Download wasm bytecode for a given code ID.

```bash
sentinelhub query wasm code <code_id> <output_file> \
  --node https://rpc.sentinel.co:443
```

## List All Codes

List all wasm bytecode on the chain.

```bash
sentinelhub query wasm list-code \
  --node https://rpc.sentinel.co:443
```

## Query a Contract

Print out metadata of a contract given its address.

```bash
sentinelhub query wasm contract <contract_address> \
  --node https://rpc.sentinel.co:443
```

## Query Contract History

Print out the code history for a contract given its address.

```bash
sentinelhub query wasm contract-history <contract_address> \
  --node https://rpc.sentinel.co:443
```

## Query Contract State

Query the state of a wasm contract.

```bash
sentinelhub query wasm contract-state smart <contract_address> <query_json> \
  --node https://rpc.sentinel.co:443
```

## List Contracts by Code

List all wasm contracts instantiated from a given code ID.

```bash
sentinelhub query wasm list-contract-by-code <code_id> \
  --node https://rpc.sentinel.co:443
```

## List Contracts by Creator

List all contracts created by a specific address.

```bash
sentinelhub query wasm list-contracts-by-creator <creator_address> \
  --node https://rpc.sentinel.co:443
```

## Query Pinned Codes

List all pinned code IDs.

```bash
sentinelhub query wasm pinned \
  --node https://rpc.sentinel.co:443
```

## Query Wasm Params

Query the current wasm parameters.

```bash
sentinelhub query wasm params \
  --node https://rpc.sentinel.co:443
```

## Build Address

Build a contract address from the given code hash and creator info.

```bash
sentinelhub query wasm build-address <code_hash> <creator_address> [salt] \
  --node https://rpc.sentinel.co:443
```

## Query LibWasmVM Version

Get the libwasmvm version.

```bash
sentinelhub query wasm libwasmvm-version
```
