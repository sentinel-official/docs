#!/usr/bin/env python3
"""Assemble static/api/RPC.yaml from the CometBFT spec the hub pins.

CometBFT ships an OpenAPI document for its JSON-RPC interface, but it leaves out
the websocket-only and unsafe methods that its own route table registers. This
takes the upstream document as the source of truth for the method set and the
schemas, carries the missing methods over from the previous Sentinel spec, and
re-brands the result.
"""

import argparse
from collections import OrderedDict

import yaml

# In the CometBFT route table but absent from its OpenAPI document.
CARRY_OVER = ["/subscribe", "/unsubscribe", "/unsubscribe_all", "/unsafe_flush_mempool"]

# In the previous Sentinel spec but not in the v0.37 route table: /events and
# /remove_tx were dropped after v0.36, and /broadcast_tx never existed.
DROP = ["/broadcast_tx", "/events", "/remove_tx"]

WEBSOCKET_PATHS = ["/subscribe", "/unsubscribe", "/unsubscribe_all"]
UNSAFE_PATHS = ["/unsafe_flush_mempool", "/dial_seeds", "/dial_peers"]

WEBSOCKET_NOTE = (
    "\n\n**Websocket only.** This method is not available over plain HTTP; "
    "connect to `/websocket` and send it as a JSON-RPC message."
)
UNSAFE_NOTE = (
    "\n\n**Unsafe.** Only routed when the node is started with unsafe RPC methods "
    "enabled; the public Sentinel endpoint returns `404`."
)

TAG_ORDER = ["Info", "Tx", "ABCI", "Evidence", "Websocket", "Unsafe"]


def collect_refs(node, out):
    if isinstance(node, dict):
        ref = node.get("$ref")
        if isinstance(ref, str) and ref.startswith("#/components/schemas/"):
            out.add(ref.rsplit("/", 1)[1])
        for value in node.values():
            collect_refs(value, out)
    elif isinstance(node, list):
        for value in node:
            collect_refs(value, out)


class _Dumper(yaml.SafeDumper):
    pass


_Dumper.add_representer(
    str,
    lambda dumper, data: dumper.represent_scalar(
        "tag:yaml.org,2002:str", data, style="|" if "\n" in data else None
    ),
)
_Dumper.add_representer(
    OrderedDict, lambda dumper, data: dumper.represent_dict(data.items())
)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--upstream", required=True,
                        help="CometBFT rpc/openapi/openapi.yaml for the pinned version")
    parser.add_argument("--previous", required=True,
                        help="the RPC.yaml being replaced, for the carried-over methods")
    parser.add_argument("--description", required=True)
    parser.add_argument("--version", required=True)
    parser.add_argument("--out", required=True)
    args = parser.parse_args()

    upstream = yaml.safe_load(open(args.upstream))
    previous = yaml.safe_load(open(args.previous))

    paths = dict(upstream["paths"])
    for path in CARRY_OVER:
        if path in previous["paths"]:
            paths[path] = previous["paths"][path]
        else:
            print("warning: %s not found in previous spec, skipping" % path)
    for path in DROP:
        paths.pop(path, None)

    # /events is gone in v0.37, so its tag no longer earns a section of its own.
    for path in WEBSOCKET_PATHS:
        operation = paths.get(path, {}).get("get")
        if operation is None:
            continue
        operation["tags"] = [t for t in operation.get("tags", []) if t != "Events"] \
            or ["Websocket"]
        if "Websocket only" not in (operation.get("description") or ""):
            operation["description"] = \
                (operation.get("description") or "").rstrip() + WEBSOCKET_NOTE

    for path in UNSAFE_PATHS:
        operation = paths.get(path, {}).get("get")
        if operation is not None and "Unsafe." not in (operation.get("description") or ""):
            operation["description"] = \
                (operation.get("description") or "").rstrip() + UNSAFE_NOTE

    schemas = dict(upstream["components"]["schemas"])
    needed = set()
    collect_refs(paths, needed)
    frontier = set(needed)
    while frontier:
        name = frontier.pop()
        if name not in schemas:
            if name not in previous["components"]["schemas"]:
                continue
            schemas[name] = previous["components"]["schemas"][name]
        nested = set()
        collect_refs(schemas[name], nested)
        frontier |= nested - needed
        needed |= nested
    missing = sorted(name for name in needed if name not in schemas)
    if missing:
        raise SystemExit("missing schemas: %s" % missing)

    used = {tag for item in paths.values() for operation in item.values()
            for tag in operation.get("tags", [])}
    known = {tag["name"]: tag for tag in previous.get("tags", []) + upstream.get("tags", [])}
    tags = [known[name] for name in TAG_ORDER if name in used and name in known]
    undescribed = used - {tag["name"] for tag in tags}
    if undescribed:
        raise SystemExit("undescribed tags: %s" % sorted(undescribed))

    output = OrderedDict()
    output["openapi"] = "3.0.0"
    output["info"] = OrderedDict([
        ("title", "Sentinel RPC"),
        ("description", open(args.description).read()),
        ("version", args.version),
        ("contact", {"name": "Sentinel",
                     "url": "https://github.com/sentinel-official/hub/issues"}),
        ("license", {"name": "Apache 2.0",
                     "url": "https://github.com/sentinel-official/hub/blob/master/LICENSE"}),
    ])
    output["servers"] = [
        {"url": "https://rpc.sentinel.co",
         "description": "Sentinel Hub mainnet (sentinelhub-2)"},
        {"url": "http://localhost:26657",
         "description": "A node running locally on your device"},
    ]
    output["tags"] = tags
    output["paths"] = OrderedDict(sorted(paths.items()))
    output["components"] = {"schemas": OrderedDict(sorted(schemas.items()))}

    with open(args.out, "w") as handle:
        yaml.dump(output, handle, Dumper=_Dumper, default_flow_style=False,
                  sort_keys=False, allow_unicode=True, width=100)
    print("wrote %s: %d paths, %d schemas, %d tags"
          % (args.out, len(paths), len(schemas), len(tags)))


if __name__ == "__main__":
    main()
