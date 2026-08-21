JSON-RPC / HTTP interface exposed by every Sentinel Hub node, served by
**CometBFT v0.37** as bundled with `sentinelhub` **v12.0.2**.

CometBFT supports two protocols over this interface:

* URI over HTTP
* JSON-RPC 2.0 over HTTP

## Configuration

RPC is configured under the `[rpc]` table of `$SENTINELHUB_HOME/config/config.toml`,
or with `--rpc.*` command-line flags. The default listen address is
`tcp://0.0.0.0:26657`; change it with `laddr`. CORS is controlled by
`cors_allowed_origins`, `cors_allowed_methods` and `cors_allowed_headers`.

## Arguments

Arguments that expect strings or byte arrays may be passed as quoted strings
(`"abc"`) or as `0x`-prefixed hex (`0x616263`).

## URI/HTTP

A GET request with arguments encoded as query parameters:

    curl https://rpc.sentinel.co/block?height=5

## JSONRPC/HTTP

JSON-RPC requests can be POSTed to the root endpoint:

    curl --header "Content-Type: application/json" \
        --request POST \
        --data '{"method": "block", "params": ["5"], "id": 1}' \
        https://rpc.sentinel.co

## JSONRPC/websockets

The event-subscription methods (`subscribe`, `unsubscribe`, `unsubscribe_all`) are
available **only** over websockets, at `/websocket`:

    ws wss://rpc.sentinel.co/websocket
    > { "jsonrpc": "2.0", "method": "subscribe", "params": ["tm.event='NewBlock'"], "id": 1 }

## Unsafe methods

`dial_seeds`, `dial_peers` and `unsafe_flush_mempool` are routed only when a node is
started with unsafe RPC methods enabled. They are not available on the public endpoint.
