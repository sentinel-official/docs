---
title: Javascript
sidebar_position: 3
---

# Javascript SDK

With the Javascript SDK, developers can harness the power of Sentinel's decentralized network infrastructure to create secure and private communication solutions seamlessly within their JavaScript-based projects.

The Sentinel JavaScript SDK relies on [CosmJS](https://github.com/cosmos/cosmjs) and was developed following the official [tutorial](https://tutorials.cosmos.network/tutorials/7-cosmjs/). It also draws inspiration from other open-source Cosmos SDK projects.

You can access the Sentinel Javascript SDK from:
- [GitHub repository](https://github.com/sentinel-official/sentinel-js-sdk)
- [NPMJS Website](https://www.npmjs.com/package/@sentinel-official/sentinel-js-sdk)
- [Full Documentation](https://sentinel-official.github.io/sentinel-js-sdk/)

The SDK exstends the followings:

- [@cosmjs/stargate/StargateClient](https://cosmos.github.io/cosmjs/latest/stargate/classes/StargateClient.html) as `SentinelClient`
- [@cosmjs/stargate/SigningStargateClient](https://cosmos.github.io/cosmjs/latest/stargate/classes/SigningStargateClient.html) `SigningSentinelClient`
- [@cosmjs/stargate/QueryClient](https://cosmos.github.io/cosmjs/latest/stargate/classes/QueryClient.html) as `client.sentinelQuery`

## Clients

```javascript
import { SentinelClient } from "@sentinel-official/sentinel-js-sdk";

const rpc = "https://rpc.sentinel.co:443"
const client = await SentinelClient.connect(rpc)
```

If you need to sign and broadcast a transaction, you'll need to create an instance of the `SigningClient`.

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

Once you've initialized a `SigningClient`, you have several options for preparing and broadcasting a transaction:

1. You can create a `MsgEcodeObject` and then use the `signAndBroadcast` method from your client to handle the transaction.

```javascript
import { TxNodeSubscribe, nodeSubscribe } from "@sentinel-official/sentinel-js-sdk";
import Long from "long";

const args: TxNodeSubscribe = {
    from: account.address,
    nodeAddress: sentnode,
    gigabytes: Long.fromNumber(gygabyte, true),
    denom: "udvpn"
}
const msg = nodeSubscribe(args)
const tx = client.signAndBroadcast(account.address, [msg], "auto", "memo")
```

2. Alternatively, you can directly call `nodeSubscribe` from your client or from a submodule. This method will automatically handle signing and broadcasting the transaction for you.

```javascript
import { TxNodeSubscribe } from "@sentinel-official/sentinel-js-sdk";
import Long from "long";

const args: TxNodeSubscribe = {
    from: account.address,
    nodeAddress: sentnode,
    gigabytes: Long.fromNumber(gygabyte, true),
    denom: "udvpn",
    fee: "auto",
    memo: "hello from js-sdk"
}
// call directly
const tx1 = client.nodeSubscribe(args)
// use submodule
const tx2 = client.node.subscribe(args)
```

It is up to you if you want to `await` the tx or use a callback.

```javascript
const tx1 = await client.nodeSubscribe(args)
client.nodeSubscribe(args).then(tx => { do stuff... })
```

## Event Parsing

When dealing with event parsing, whether through `client.signAndBroadcast` or implicitly via methods like `client.nodeSubscribe` or `client.node.subscribe`, you'll receive a `DeliverTxResponse`. To find a specific event, you can utilize the `searchEvent` method. For instance, if you're searching for s`entinel.node.v2.EventCreateSubscription`, you can proceed as follows:

```javascript
import { searchEvent } from "@sentinel-official/sentinel-js-sdk";
const eventCreateSubscription = searchEvent(sentinel.node.v2.EventCreateSubscription, tx.events);
```

Or for a more refined approach:

```javascript
import { searchEvent } from "@sentinel-official/sentinel-js-sdk";
import { NodeEventCreateSubscription } from "@sentinel-official/sentinel-js-sdk";
const eventCreateSubscription = searchEvent(NodeEventCreateSubscription.type, tx.events);
```

You can also parse a single event using the appropriate interface, as demonstrated below:

```javascript
import { searchEvent } from "@sentinel-official/sentinel-js-sdk";
import { NodeEventCreateSubscription, isNodeEventCreateSubscription } from "@sentinel-official/sentinel-js-sdk";

const eventCreateSubscription = searchEvent(NodeEventCreateSubscription.type, tx.events);
if(eventCreateSubscription && isNodeEventCreateSubscription(eventCreateSubscription)) {
    const eventParsed = NodeEventCreateSubscription.parse(eventCreateSubscription)
    console.log(`Your subscription id is: ${eventParsed.value.id}`)
} else console.log("eventCreateSubscription, not found")
```

## Protobuf

We compile all the .proto files using [protoc](https://grpc.io/docs/protoc-installation/) with [ts-proto](https://github.com/stephenh/ts-proto) as a plugin. The resulting `.ts` proto files can be found in the `src/protobuf` directory. If you need to compile them again, you can simply run the [scripts/generate-proto.sh](https://github.com/sentinel-official/sentinel-js-sdk/blob/main/scripts/generate-proto.sh). This script needs `git` and `protoc` to be installed, and it will handle downloading all the .proto definitions from [Sentinel Hub](https://github.com/sentinel-official/hub/tree/development/proto/sentinel) and other related third-party sources automatically.

## Examples

You can also use the official [cosmjs examples](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9). Just make sure to swap out `StargateClient` with `SentinelClient` and `SigningStargateClient` with `SigningSentinelClient`.

Currently, the repository provides a `Node.js` script example and one for `Keplr` (based on: https://tutorials.cosmos.network/tutorials/7-cosmjs/4-with-keplr.html).

If you prefer to use a local version of the SDK for testing purposes, you'll need to compile the "src" folder into "dist" and then link the package with npm.

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

### Run NodeJS Example

```bash
cd examples/node
npm i
ts-node main.ts
```