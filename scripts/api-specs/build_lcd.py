#!/usr/bin/env python3
"""Assemble static/api/LCD.yaml from generated Protobuf swagger.

The pipeline runs in stages so that the slow part (probing a live node) can be
inspected and re-run on its own:

    merge     glue the per-module swagger files into one document
    probe     ask a live node which of those routes it actually serves
    filter    drop the unserved routes, tag what is left, prune orphan schemas
    finalize  add Sentinel metadata and emit YAML

See README.md for the full sequence.
"""

import argparse
import json
import os
import re
import subprocess
import sys
from collections import OrderedDict
from concurrent.futures import ThreadPoolExecutor

import yaml

# Modules whose swagger is merged, in the order they should win on conflict.
MODULES = ("sdk", "ibc", "wasm", "hub")

# --------------------------------------------------------------------------
# tagging
# --------------------------------------------------------------------------

TAGS = [
    (r"^/sentinel/node/", "Sentinel · Nodes"),
    (r"^/sentinel/session/", "Sentinel · Sessions"),
    (r"^/sentinel/subscription/", "Sentinel · Subscriptions"),
    (r"^/sentinel/plan/", "Sentinel · Plans"),
    (r"^/sentinel/provider/", "Sentinel · Providers"),
    (r"^/sentinel/deposit/", "Sentinel · Deposits"),
    (r"^/sentinel/lease/", "Sentinel · Leases"),
    (r"^/sentinel/oracle/", "Sentinel · Oracle"),
    (r"^/sentinel/swap/", "Sentinel · Swaps"),
    (r"^/cosmos/auth/", "Auth"),
    (r"^/cosmos/authz/", "Authz"),
    (r"^/cosmos/bank/", "Bank"),
    (r"^/cosmos/base/", "Base"),
    (r"^/cosmos/consensus/", "Consensus"),
    (r"^/cosmos/distribution/", "Distribution"),
    (r"^/cosmos/evidence/", "Evidence"),
    (r"^/cosmos/feegrant/", "Feegrant"),
    (r"^/cosmos/gov/", "Governance"),
    (r"^/cosmos/group/", "Group"),
    (r"^/cosmos/mint/", "Mint"),
    (r"^/cosmos/nft/", "NFT"),
    (r"^/cosmos/params/", "Params"),
    (r"^/cosmos/slashing/", "Slashing"),
    (r"^/cosmos/staking/", "Staking"),
    (r"^/cosmos/tx/", "Transactions"),
    (r"^/cosmos/upgrade/", "Upgrade"),
    (r"^/ibc/core/", "IBC · Core"),
    (r"^/ibc/apps/transfer/", "IBC · Transfer"),
    (r"^/ibc/apps/fee/", "IBC · Fee"),
    (r"^/ibc/apps/interchain_accounts/", "IBC · Interchain Accounts"),
    (r"^/cosmwasm/", "CosmWasm"),
]

TAG_DESCRIPTIONS = [
    ("Sentinel · Nodes", "dVPN node registration, status and parameters (node v3)."),
    ("Sentinel · Sessions", "Active and historical dVPN session queries (session v3)."),
    ("Sentinel · Subscriptions",
     "Subscriptions and allocations (subscription v3, with live v2 allocation routes)."),
    ("Sentinel · Plans", "Subscription plans offered by providers."),
    ("Sentinel · Providers", "dVPN service provider registry (provider v2)."),
    ("Sentinel · Deposits", "Module deposit balances held for accounts."),
    ("Sentinel · Leases", "Node leases taken out by providers (module added in v12)."),
    ("Sentinel · Oracle", "On-chain asset price feeds (module added in v12)."),
    ("Sentinel · Swaps", "Legacy ERC-20 to native token swap records."),
    ("Auth", "Accounts, account metadata and bech32 helpers."),
    ("Authz", "Authorization grants between accounts."),
    ("Bank", "Token balances, supply, and denom metadata."),
    ("Base", "Node and CometBFT base queries (blocks, validator sets, node config)."),
    ("Consensus", "Consensus parameters."),
    ("Distribution", "Staking reward distribution, commission and community pool."),
    ("Evidence", "Evidence of validator misbehaviour."),
    ("Feegrant", "Fee allowances granted between accounts."),
    ("Governance", "Proposals, deposits, votes and tallies (v1 and v1beta1)."),
    ("Group", "On-chain groups, group policies and group proposals."),
    ("Mint", "Inflation and minting parameters."),
    ("NFT", "NFT classes, ownership and balances."),
    ("Params", "Legacy module parameter subspace queries."),
    ("Slashing", "Validator signing info and slashing parameters."),
    ("Staking", "Validators, delegations, redelegations and the bonding pool."),
    ("Transactions", "Transaction broadcast, simulation, encoding and search."),
    ("Upgrade", "Scheduled chain upgrades and module versions."),
    ("IBC · Core", "IBC clients, connections and channels."),
    ("IBC · Transfer", "ICS-20 fungible token transfer."),
    ("IBC · Fee", "ICS-29 relayer incentivisation."),
    ("IBC · Interchain Accounts", "ICS-27 interchain accounts (host and controller)."),
    ("CosmWasm", "Smart contract codes, instances and state."),
]

# Legacy routes that still answer but should not be built against.
DEPRECATED_PREFIXES = ("/sentinel/provider/v2/", "/sentinel/subscription/v2/")

# grpc-gateway matches path templates in registration order, so two routes that
# differ only in parameter name collide: whichever is registered first swallows
# every request. These lose that race and can never be reached over REST.
SHADOWED = {("GET", "/cosmos/auth/v1beta1/bech32/{address_string}")}

# Notes pinned onto individual operations that need more than their proto comment.
OPERATION_NOTES = {
    "/cosmos/auth/v1beta1/bech32/{address_bytes}":
        "Converts raw address bytes to a bech32 string.\n\n"
        "The reverse call (`AddressStringToBytes`) is registered by the SDK on the same "
        "URL template and is therefore unreachable over REST on this chain. Use gRPC "
        "(`cosmos.auth.v1beta1.Query/AddressStringToBytes`) for that direction.",
}

DEPRECATION_NOTE = (
    "**Deprecated.** Legacy v2 endpoint retained for backwards compatibility. "
    "Use the v3 equivalent where one exists."
)

# --------------------------------------------------------------------------
# helpers
# --------------------------------------------------------------------------


def collect_refs(node, out, prefix):
    """Gather every $ref under `node` that points into `prefix`."""
    if isinstance(node, dict):
        ref = node.get("$ref")
        if isinstance(ref, str) and ref.startswith(prefix):
            out.add(ref[len(prefix):])
        for value in node.values():
            collect_refs(value, out, prefix)
    elif isinstance(node, list):
        for value in node:
            collect_refs(value, out, prefix)


def tag_for(path):
    for pattern, tag in TAGS:
        if re.match(pattern, path):
            return tag
    raise SystemExit("no tag configured for %s -- add one to TAGS" % path)


def humanize(name):
    """QueryNodesForPlan -> Nodes For Plan"""
    name = re.sub(r"^Query(?!$)", "", name)
    return re.sub(r"(?<!^)(?=[A-Z])", " ", name).strip()


def pkg_and_method(operation):
    """Recover the proto package and RPC name from the 200 response $ref."""
    ref = operation.get("responses", {}).get("200", {}).get("schema", {}).get("$ref", "")
    match = re.match(r"#/definitions/(.+)\.([A-Za-z0-9]+)Response$", ref)
    return match.groups() if match else (None, None)


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


def write_yaml(document, path):
    with open(path, "w") as handle:
        yaml.dump(document, handle, Dumper=_Dumper, default_flow_style=False,
                  sort_keys=False, allow_unicode=True, width=100)


# --------------------------------------------------------------------------
# stages
# --------------------------------------------------------------------------


def stage_merge(args):
    paths, definitions = OrderedDict(), OrderedDict()
    for module in MODULES:
        source = os.path.join(args.gen_dir, module, "out", "module.swagger.json")
        document = json.load(open(source), object_pairs_hook=OrderedDict)
        for path, item in document.get("paths", {}).items():
            if path in paths:
                print("note: %s redefined by %s" % (path, module), file=sys.stderr)
            paths[path] = item
        definitions.update(document.get("definitions", {}))

    json.dump({"paths": paths, "definitions": definitions}, open(args.out, "w"))
    operations = sum(
        1 for item in paths.values() for method in item if method in ("get", "post")
    )
    print("merged: %d paths, %d operations, %d definitions"
          % (len(paths), operations, len(definitions)))


def stage_probe(args):
    """Ask a live node which routes it serves. 501 means 'not registered'."""
    address = "sent1yhy7y809zgcxq2ru8sf2vhr3s6y4hhcuj6c46s"
    validator = "sentvaloper1p2fvn2thn2tjaz6r7f8yqrqfgqf5rp5eh6t5nn"
    substitutions = {
        **{key: address for key in (
            "address", "account_address", "delegator_addr", "delegator_address",
            "granter", "grantee", "depositor", "voter", "deposit_address",
            "node_address", "provider_address", "admin", "creator", "owner", "account")},
        **{key: validator for key in (
            "validator_addr", "validator_address", "src_validator_addr",
            "dst_validator_addr")},
        "cons_address": "sentvalcons1x", "denom": "udvpn", "params_type": "voting",
        "hash": "0" * 64, "tx_hash": "0" * 64, "evidence_hash": "0" * 64,
        "client_id": "07-tendermint-0", "connection_id": "connection-0",
        "channel_id": "channel-0", "port_id": "transfer", "name": "v12",
    }

    def fill(path):
        return re.sub(r"\{([a-zA-Z_0-9.]+)\}",
                      lambda m: substitutions.get(m.group(1), "1"), path)

    document = json.load(open(args.spec))
    operations = sorted(
        (method.upper(), path)
        for path, item in document["paths"].items()
        for method in item
        if method in ("get", "post", "put", "delete")
    )

    def probe(operation):
        method, path = operation
        # curl rather than urllib: the public endpoint answers with a 307 that
        # only curl -L replays correctly for POST.
        command = ["curl", "-sL", "-o", "/dev/null", "-w", "%{http_code}",
                   "--max-time", "25", "-X", method,
                   args.base + fill(path)]
        if method != "GET":
            command += ["-H", "Content-Type: application/json", "-d", "{}"]
        try:
            code = subprocess.run(command, capture_output=True, text=True,
                                  timeout=40).stdout.strip()
        except subprocess.TimeoutExpired:
            code = "000"
        return code, method, path

    with ThreadPoolExecutor(max_workers=args.jobs) as pool:
        results = list(pool.map(probe, operations))

    with open(args.out, "w") as handle:
        for code, method, path in sorted(results, key=lambda r: (r[2], r[1])):
            handle.write("%s %s %s\n" % (code, method, path))

    unserved = sum(1 for code, _, _ in results if code == "501")
    unreachable = sum(1 for code, _, _ in results if code == "000")
    print("probed %d operations against %s: %d unserved, %d unreachable"
          % (len(results), args.base, unserved, unreachable))
    if unreachable:
        raise SystemExit("some probes did not complete -- re-run before filtering")


def stage_filter(args):
    document = json.load(open(args.spec), object_pairs_hook=OrderedDict)
    paths, definitions = document["paths"], document["definitions"]

    dead = set(SHADOWED)
    for line in open(args.probe):
        code, method, path = line.split(" ", 2)
        if code == "501":
            dead.add((method, path.strip()))

    kept, operation_ids = OrderedDict(), set()
    for path in sorted(paths):
        item = OrderedDict()
        for method in ("get", "post", "put", "delete"):
            if method not in paths[path] or (method.upper(), path) in dead:
                continue
            operation = paths[path][method]
            operation["tags"] = [tag_for(path)]

            package, rpc = pkg_and_method(operation)
            if rpc:
                operation["summary"] = humanize(rpc)
                identifier = (package.replace(".", "_") + "_" + rpc) if package else rpc
            else:
                identifier = operation.get("operationId", "operation")
                operation["summary"] = humanize(identifier.split("_")[-1])

            base, suffix = identifier, 1
            while identifier in operation_ids:
                suffix += 1
                identifier = "%s_%d" % (base, suffix)
            operation_ids.add(identifier)
            operation["operationId"] = identifier

            if path in OPERATION_NOTES:
                operation["description"] = OPERATION_NOTES[path]
            if path.startswith(DEPRECATED_PREFIXES):
                operation["deprecated"] = True
                operation["description"] = (
                    (operation.get("description") or "").rstrip() + "\n\n" + DEPRECATION_NOTE
                ).strip()
            item[method] = operation
        if item:
            kept[path] = item

    wanted, frontier = set(), set()
    collect_refs(kept, frontier, "#/definitions/")
    while frontier:
        name = frontier.pop()
        if name in wanted or name not in definitions:
            continue
        wanted.add(name)
        nested = set()
        collect_refs(definitions[name], nested, "#/definitions/")
        frontier |= nested - wanted

    swagger = OrderedDict([
        ("swagger", "2.0"),
        ("info", {"title": "Sentinel LCD API", "version": args.version}),
        ("schemes", ["https"]),
        ("consumes", ["application/json"]),
        ("produces", ["application/json"]),
        ("paths", kept),
        ("definitions", OrderedDict((k, definitions[k]) for k in sorted(wanted))),
    ])
    json.dump(swagger, open(args.out, "w"), indent=1)

    dropped = len(paths) - len(kept)
    print("filtered: %d paths kept, %d dropped, %d definitions (from %d)"
          % (len(kept), dropped, len(wanted), len(definitions)))


def stage_finalize(args):
    document = json.load(open(args.spec), object_pairs_hook=OrderedDict)
    description = open(args.description).read()

    used = {
        tag
        for item in document["paths"].values()
        for operation in item.values()
        if isinstance(operation, dict)
        for tag in operation.get("tags", [])
    }
    undescribed = used - {name for name, _ in TAG_DESCRIPTIONS}
    if undescribed:
        raise SystemExit("undescribed tags: %s" % sorted(undescribed))

    output = OrderedDict()
    output["openapi"] = "3.0.0"
    output["info"] = OrderedDict([
        ("title", "Sentinel LCD API"),
        ("description", description),
        ("version", args.version),
        ("contact", {"name": "Sentinel",
                     "url": "https://github.com/sentinel-official/hub/issues"}),
        ("license", {"name": "Apache 2.0",
                     "url": "https://github.com/sentinel-official/hub/blob/master/LICENSE"}),
    ])
    output["servers"] = [
        {"url": "https://lcd.sentinel.co",
         "description": "Sentinel Hub mainnet (sentinelhub-2)"},
        {"url": "http://localhost:1317",
         "description": "Local node, with api.enable = true in app.toml"},
    ]
    output["tags"] = [
        OrderedDict([("name", name), ("description", text)])
        for name, text in TAG_DESCRIPTIONS
        if name in used
    ]
    output["paths"] = document["paths"]
    output["components"] = document["components"]

    write_yaml(output, args.out)
    print("wrote %s: %d paths, %d schemas, %d tags"
          % (args.out, len(output["paths"]),
             len(output["components"].get("schemas", {})), len(output["tags"])))


def main():
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="stage", required=True)

    merge = sub.add_parser("merge", help="glue per-module swagger into one document")
    merge.add_argument("--gen-dir", required=True)
    merge.add_argument("--out", required=True)
    merge.set_defaults(func=stage_merge)

    probe = sub.add_parser("probe", help="check which routes a live node serves")
    probe.add_argument("--spec", required=True)
    probe.add_argument("--base", default="https://lcd.sentinel.co")
    probe.add_argument("--jobs", type=int, default=16)
    probe.add_argument("--out", required=True)
    probe.set_defaults(func=stage_probe)

    filt = sub.add_parser("filter", help="drop unserved routes, tag and prune")
    filt.add_argument("--spec", required=True)
    filt.add_argument("--probe", required=True)
    filt.add_argument("--version", required=True)
    filt.add_argument("--out", required=True)
    filt.set_defaults(func=stage_filter)

    final = sub.add_parser("finalize", help="add metadata and emit YAML")
    final.add_argument("--spec", required=True)
    final.add_argument("--description", required=True)
    final.add_argument("--version", required=True)
    final.add_argument("--out", required=True)
    final.set_defaults(func=stage_finalize)

    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
