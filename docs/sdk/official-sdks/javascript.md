---
title: Javascript
sidebar_label: "📦 Javascript"
sidebar_position: 2
slug: /javascript
---

# Javascript SDK

The JavaScript SDK lets you interact with the Sentinel blockchain from any browser or Node.js environment. It extends [CosmJS](https://github.com/cosmos/cosmjs), the standard JavaScript library for Cosmos chains - adding Sentinel-specific queries, transactions, and VPN session management on top. If you've worked with CosmJS before, you'll feel right at home.

You can access the Sentinel Javascript SDK from:
- [GitHub repository](https://github.com/sentinel-official/sentinel-js-sdk)
- [NPMJS Website](https://www.npmjs.com/package/@sentinel-official/sentinel-js-sdk)
- [Full Documentation](https://sentinel-official.github.io/sentinel-js-sdk/)

The SDK extends the following:

- [@cosmjs/stargate/StargateClient](https://cosmos.github.io/cosmjs/latest/stargate/classes/StargateClient.html) as `SentinelClient`
- [@cosmjs/stargate/SigningStargateClient](https://cosmos.github.io/cosmjs/latest/stargate/classes/SigningStargateClient.html) as `SigningSentinelClient`
- [@cosmjs/stargate/QueryClient](https://cosmos.github.io/cosmjs/latest/stargate/classes/QueryClient.html) as `client.sentinelQuery`

## Installation

```bash
npm install @sentinel-official/sentinel-js-sdk
```

## Clients

### Read-Only Client

```javascript
import { SentinelClient } from "@sentinel-official/sentinel-js-sdk";

const rpc = "https://rpc.sentinel.co:443"
const client = await SentinelClient.connect(rpc)
```

### Signing Client

If you need to sign and broadcast a transaction, you'll need to create an instance of the `SigningSentinelClient`.

```javascript
import { SigningSentinelClient } from "@sentinel-official/sentinel-js-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { GasPrice } from "@cosmjs/stargate"

const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "sent" });
const [account] = await wallet.getAccounts();

const rpc = "https://rpc.sentinel.co:443"

// With a default GasPrice:
const customDenom = "udvpn"
const gasPrice = GasPrice.fromString(`0.2${customDenom}`);
const client = await SigningSentinelClient.connectWithSigner(rpc, wallet, {
    gasPrice: gasPrice
})

// Without a default GasPrice:
const client = await SigningSentinelClient.connectWithSigner(rpc, wallet)
```

You can also configure additional default parameters here: [SigningStargateClientOptions](https://cosmos.github.io/cosmjs/latest/stargate/interfaces/SigningStargateClientOptions.html).

### WebSocket Client

To subscribe to chain events, you'll require a WebSocket client.

```javascript
import { SentinelWsClient } from "@sentinel-official/sentinel-js-sdk";
const client = new SentinelWsClient("wss://rpc.sentinel.quokkastake.io");
const stream = client.subscribe("tm.event='NewBlock'")
stream.addListener({
    next: data => console.log(data),
    error: err => console.error(err),
    complete: () => console.log('completed'),
});
```

## Query

The SDK provides five query modules: **node**, **plan**, **provider**, **session**, and **subscription**. All are accessible via `client.sentinelQuery`.

```javascript
import { Status, PageRequest } from "@sentinel-official/sentinel-js-sdk";
const nodes = await client.sentinelQuery?.node.nodes(
    Status.STATUS_ACTIVE,
    PageRequest.fromPartial({
        limit: 5,
        countTotal: true
    })
)
```

For pagination guidance, refer to the following links:
- https://docs.cosmos.network/v0.45/core/proto-docs.html#cosmos-base-query-v1beta1-pagination-proto
- https://github.com/cosmos/cosmos-sdk/blob/main/types/query/pagination.pb.go#L32-L53
- https://github.com/confio/cosmjs-types/blob/main/src/cosmos/base/query/v1beta1/pagination.ts


## Transaction

Once you've initialized a `SigningSentinelClient`, you have several options for preparing and broadcasting a transaction:

1. You can create a `MsgEncodeObject` and then use the `signAndBroadcast` method from your client to handle the transaction.

```javascript
import { TxNodeStartSession, nodeStartSession, Price } from "@sentinel-official/sentinel-js-sdk";
import Long from "long";

const udvpn = p2pNode.node.gigabytePrices.filter(x => x.denom === "udvpn")[0] as Price
const args: TxNodeStartSession = {
    from: account.address,
    nodeAddress: p2pNode.node.address,
    gigabytes: Long.fromString(gigabytes, true),
    maxPrice: udvpn
}
const msg = nodeStartSession(args)
const tx = client.signAndBroadcast(account.address, [msg], "auto", "memo")
```

2. Alternatively, you can directly call `nodeStartSession` from your client or from a submodule. This method will automatically handle signing and broadcasting the transaction for you.

```javascript
import { TxNodeStartSession } from "@sentinel-official/sentinel-js-sdk";
import Long from "long";

const args: TxNodeStartSession = {
    from: account.address,
    nodeAddress: sentnode,
    gigabytes: Long.fromNumber(gigabytes, true),
    fee: "auto",
    memo: "hello from js-sdk",
    maxPrice: ...
}
// call directly
const tx1 = client.nodeStartSession(args)
// use submodule
const tx2 = client.node.startSession(args)
```

It is up to you if you want to `await` the tx or use a callback.

```javascript
const tx1 = await client.nodeStartSession(args)
client.nodeStartSession(args).then(tx => { do stuff... })
```

## Event Parsing

When dealing with event parsing, whether through `client.signAndBroadcast` or implicitly via methods like `client.nodeStartSession` or `client.node.startSession`, you'll receive a [DeliverTxResponse](https://cosmos.github.io/cosmjs/latest/stargate/interfaces/DeliverTxResponse.html). To find a specific event, you can utilize the `searchEvent` method. For instance, if you're searching for `sentinel.node.v3.EventCreateSession`, you can proceed as follows:

```javascript
import { searchEvent } from "@sentinel-official/sentinel-js-sdk";
const eventCreateSession = searchEvent(sentinel.node.v3.EventCreateSession, tx.events);
```

Or for a more refined approach:

```javascript
import { searchEvent } from "@sentinel-official/sentinel-js-sdk";
import { NodeEventCreateSession } from "@sentinel-official/sentinel-js-sdk";
const eventCreateSession = searchEvent(NodeEventCreateSession.type, tx.events);
```

You can also parse a single event using the appropriate interface, as demonstrated below:

```javascript
import { searchEvent } from "@sentinel-official/sentinel-js-sdk";
import { NodeEventCreateSession, isNodeEventCreateSession } from "@sentinel-official/sentinel-js-sdk";

const eventCreateSession = searchEvent(NodeEventCreateSession.type, tx.events);
if(eventCreateSession && isNodeEventCreateSession(eventCreateSession)) {
    const eventParsed = NodeEventCreateSession.parse(eventCreateSession)
    console.log(`Your session id is: ${eventParsed.value.sessionId}`)
} else console.log("eventCreateSession, not found")
```

## VPN Connection

The SDK includes built-in support for **WireGuard** and **V2Ray** VPN protocols. After starting a session, you can perform a handshake with the node and generate a VPN configuration.

```javascript
import {
    Wireguard, V2Ray, handshake, nodeInfo, privKeyFromMnemonic, NodeVPNType,
    WireGuardHandshakeData, V2RayHandshakeData
} from "@sentinel-official/sentinel-js-sdk";

// Get the node's VPN type
const status = await nodeInfo(node.remoteAddrs[0])

// Derive the private key from your wallet mnemonic
const privkey = await privKeyFromMnemonic({ mnemonic: wallet.mnemonic })

if (status.service_type === NodeVPNType.WIREGUARD) {
    const wg = new Wireguard()
    const result = await handshake(
        sessionId,
        { public_key: wg.publicKey },
        privkey,
        node.remoteAddrs[0],
    );
    const handshakeData: WireGuardHandshakeData = JSON.parse(
        Buffer.from(result.data, 'base64').toString('utf8')
    );
    await wg.parseConfig(handshakeData, result.addrs);
    await wg.printQRCode();
} else if (status.service_type === NodeVPNType.V2RAY) {
    const v2ray = new V2Ray()
    const result = await handshake(
        sessionId,
        { uuid: v2ray.getKey() },
        privkey,
        node.remoteAddrs[0],
    );
    const handshakeData: V2RayHandshakeData = JSON.parse(
        Buffer.from(result.data, 'base64').toString('utf8')
    );
    await v2ray.parseConfig(handshakeData, result.addrs)
    v2ray.printShareQRCodes()
}
```

## Protobuf

All `.proto` files are compiled using [protoc](https://grpc.io/docs/protoc-installation/) with [ts-proto](https://github.com/stephenh/ts-proto) as a plugin. The resulting `.ts` proto files can be found in the `src/protobuf` directory. If you need to compile them again, you can simply run the [scripts/generate-proto.sh](https://github.com/sentinel-official/sentinel-js-sdk/blob/main/scripts/generate-proto.sh). This script requires `git` and `protoc` to be installed, and it will handle downloading all the `.proto` definitions from [Sentinel Hub](https://github.com/sentinel-official/hub/tree/development/proto/sentinel) and other related third-party sources automatically.

## Examples

You can also use the official [CosmJS examples](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9). Just make sure to swap out `StargateClient` with `SentinelClient` and `SigningStargateClient` with `SigningSentinelClient`.

Currently, the repository provides a `Node.js` script example and one for `Keplr` (based on: https://tutorials.cosmos.network/tutorials/7-cosmjs/4-with-keplr.html).

If you prefer to use a local version of the SDK for testing purposes, you'll need to compile the `src` folder into `dist` and then link the package with npm.

```bash
npm run build
npm link
cd examples/<choose-an-example>
npm link @sentinel-official/sentinel-js-sdk
```

### Run Keplr Example

```bash
cd examples/keplr
npm i
npm run dev
```

Navigate to: http://127.0.0.1:3000/

### Run Node.js Example

```bash
cd examples/node
npm i
ts-node main.ts
```
