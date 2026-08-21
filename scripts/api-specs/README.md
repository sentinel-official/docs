# API spec generation

`static/api/LCD.yaml` and `static/api/RPC.yaml` back the `/api?v=LCD` and
`/api?v=RPC` pages, and `LCD.json` / `RPC.json` are their generated twins — the
reference page fetches the JSON so Stoplight gets a pre-parsed object instead of
YAML to parse on the main thread. All four are generated — don't hand-edit them.

```bash
./scripts/api-specs/generate.sh v12.0.2
```

Requires `node`, `python3` (with `pyyaml`), `git` and `curl`. `buf` and
`swagger2openapi` are installed into a temp dir by the script.

## What it does

**LCD.yaml.** The hub's Protobuf files carry `google.api.http` annotations, which
is what the gRPC-gateway turns into REST routes. The script builds proto images
for the hub plus the Cosmos SDK, IBC and CosmWasm modules the hub depends on,
runs the `openapiv2` plugin over them, and merges the result.

That merged document is a superset of what any given chain serves: the hub ships
protos for query services it no longer registers, and the IBC/wasm BSR modules
track versions newer than the hub pins. So the script then **probes a live node**
and drops every route that answers `501 Not Implemented`. What survives is what
the chain actually serves.

Finally it converts Swagger 2.0 to OpenAPI 3, prunes schemas nothing references,
and adds the tags and prose from `lcd-description.md`.

**RPC.yaml.** Taken from the `rpc/openapi/openapi.yaml` of whichever CometBFT
commit the hub pins in `go.mod`, re-branded, with the websocket-only and unsafe
methods carried over from the previous file — CometBFT registers those in its
route table but leaves them out of its OpenAPI document.

## Things worth knowing

- **The probe is the load-bearing step.** It is what keeps the spec honest about
  a specific chain. `LCD_BASE` overrides the endpoint it probes. If any request
  fails to complete the script stops rather than silently dropping a live route.
- **Some routes are unreachable by construction.** grpc-gateway matches path
  templates in registration order, so two routes differing only in parameter name
  collide and the loser can never be called. `SHADOWED` in `build_lcd.py` lists
  them; `/cosmos/auth/v1beta1/bech32/{address_string}` is the current example.
- **v12.0.2 serves `plan` and `provider` v3 over gRPC only** — the hub registers
  those query services but not their gateway routes, so they have no REST
  equivalent and correctly do not appear in LCD.yaml.
- **Adding a module?** `TAGS` and `TAG_DESCRIPTIONS` in `build_lcd.py` are
  exhaustive on purpose: an unrecognised path prefix fails the build rather than
  landing in an untagged bucket.
- The prose in `lcd-description.md` and `rpc-description.md` names versions
  explicitly. Update it when you bump.
