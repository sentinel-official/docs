REST (LCD) API for the Sentinel Hub, served by the gRPC-gateway of `sentinelhub`
**v12.0.2** (Cosmos SDK v0.47.17, IBC-go v7, CosmWasm) on chain `sentinelhub-2`.

Every route in this document was generated from the v12.0.2 Protobuf definitions and
then verified against the public endpoint, so the spec lists only routes the chain
actually serves.

## Notes on the Sentinel modules

* Sentinel query services are **version-namespaced** (`/sentinel/node/v3/...`). The
  older unversioned paths (`/sentinel/nodes`, `/sentinel/modules/node/params`, ...)
  no longer exist.
* `node`, `session` and `subscription` are served at **v3**; `deposit`, `lease`,
  `oracle` and `swap` at **v1**.
* A few **v2** provider and subscription routes remain live and are marked
  deprecated. The remaining v1/v2 query services were removed in v12 and return
  `501 Not Implemented`.
* The **plan v3** and **provider v3** query services exist over gRPC but their
  gateway routes are not registered in v12.0.2, so they have **no REST equivalent**.
  Query them over gRPC instead.

## Querying historical state

Pass the `x-cosmos-block-height` header to read state at a past height:

```bash
curl -H "x-cosmos-block-height: 30000000" \
    https://lcd.sentinel.co/cosmos/bank/v1beta1/balances/<address>
```
