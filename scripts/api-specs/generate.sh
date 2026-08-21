#!/usr/bin/env bash
#
# Regenerate static/api/LCD.yaml and static/api/RPC.yaml for a hub release.
#
#   ./scripts/api-specs/generate.sh v12.0.2
#
# See README.md for what each step does and what to check afterwards.

set -euo pipefail

HUB_VERSION="${1:-}"
if [[ -z "$HUB_VERSION" ]]; then
    echo "usage: $0 <hub-tag>   e.g. $0 v12.0.2" >&2
    exit 1
fi
VERSION="${HUB_VERSION#v}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
WORK_DIR="${WORK_DIR:-$(mktemp -d)}"
LCD_BASE="${LCD_BASE:-https://lcd.sentinel.co}"

# The BSR modules the SDK-side protos come from. cosmos-sdk is pinned to the
# label the hub's own buf.yaml depends on; ibc and wasmd track their latest,
# with the probe step discarding anything this chain does not actually serve.
SDK_MODULE="${SDK_MODULE:-buf.build/cosmos/cosmos-sdk:v0.47.0}"
IBC_MODULE="${IBC_MODULE:-buf.build/cosmos/ibc}"
WASM_MODULE="${WASM_MODULE:-buf.build/cosmwasm/wasmd}"

# Cosmos SDK modules that serve REST. Filtered explicitly because a handful of
# SDK protos carry no go_package and the openapiv2 plugin refuses the whole image.
SDK_PACKAGES=(
    auth/v1beta1 auth/vesting/v1beta1 authz/v1beta1 bank/v1beta1
    base/node/v1beta1 base/tendermint/v1beta1 consensus/v1 crisis/v1beta1
    distribution/v1beta1 evidence/v1beta1 feegrant/v1beta1 gov/v1 gov/v1beta1
    group/v1 mint/v1beta1 nft/v1beta1 params/v1beta1 slashing/v1beta1
    staking/v1beta1 tx/v1beta1 upgrade/v1beta1
)

echo "==> work dir: $WORK_DIR"
cd "$WORK_DIR"

echo "==> installing buf and swagger2openapi"
npm install --silent --no-save --prefix "$WORK_DIR/tools" \
    @bufbuild/buf swagger2openapi >/dev/null
BUF="$WORK_DIR/tools/node_modules/.bin/buf"
S2O="$WORK_DIR/tools/node_modules/.bin/swagger2openapi"
OAS_VALIDATE="$WORK_DIR/tools/node_modules/.bin/oas-validate"

echo "==> cloning sentinel-official/hub $HUB_VERSION"
git clone --depth 1 --branch "$HUB_VERSION" \
    https://github.com/sentinel-official/hub.git "$WORK_DIR/hub" >/dev/null 2>&1

echo "==> building proto images"
(cd "$WORK_DIR/hub" && "$BUF" build proto -o "$WORK_DIR/hub.binpb")
sdk_args=()
for package in "${SDK_PACKAGES[@]}"; do sdk_args+=(--path "cosmos/$package"); done
"$BUF" build "$SDK_MODULE" "${sdk_args[@]}" -o "$WORK_DIR/sdk.binpb"
"$BUF" build "$IBC_MODULE" -o "$WORK_DIR/ibc.binpb"
"$BUF" build "$WASM_MODULE" -o "$WORK_DIR/wasm.binpb"

echo "==> generating swagger per module"
for module in hub sdk ibc wasm; do
    mkdir -p "$WORK_DIR/gen/$module"
    cp "$SCRIPT_DIR/buf.gen.yaml" "$WORK_DIR/gen/$module/"
    (cd "$WORK_DIR/gen/$module" && "$BUF" generate --template buf.gen.yaml \
        "$WORK_DIR/$module.binpb")
done

echo "==> merging"
python3 "$SCRIPT_DIR/build_lcd.py" merge \
    --gen-dir "$WORK_DIR/gen" --out "$WORK_DIR/merged.json"

echo "==> probing $LCD_BASE (this takes a few minutes)"
python3 "$SCRIPT_DIR/build_lcd.py" probe \
    --spec "$WORK_DIR/merged.json" --base "$LCD_BASE" --out "$WORK_DIR/probe.txt"

echo "==> filtering to served routes"
python3 "$SCRIPT_DIR/build_lcd.py" filter \
    --spec "$WORK_DIR/merged.json" --probe "$WORK_DIR/probe.txt" \
    --version "$VERSION" --out "$WORK_DIR/lcd.swagger2.json"

echo "==> converting to OpenAPI 3"
"$S2O" --patch --outfile "$WORK_DIR/lcd.openapi3.json" "$WORK_DIR/lcd.swagger2.json"

echo "==> writing LCD.yaml"
python3 "$SCRIPT_DIR/build_lcd.py" finalize \
    --spec "$WORK_DIR/lcd.openapi3.json" \
    --description "$SCRIPT_DIR/lcd-description.md" \
    --version "$VERSION" --out "$REPO_DIR/static/api/LCD.yaml"

echo "==> writing RPC.yaml"
COMETBFT_REF="$(grep -oP 'github.com/cometbft/cometbft => github.com/sentinel-official/cometbft \S+-\K[0-9a-f]{12}' \
    "$WORK_DIR/hub/go.mod" || true)"
if [[ -z "$COMETBFT_REF" ]]; then
    echo "    could not read the cometbft pin from go.mod; skipping RPC.yaml" >&2
else
    curl -sL --max-time 60 -o "$WORK_DIR/cometbft-openapi.yaml" \
        "https://raw.githubusercontent.com/sentinel-official/cometbft/$COMETBFT_REF/rpc/openapi/openapi.yaml"
    python3 "$SCRIPT_DIR/build_rpc.py" \
        --upstream "$WORK_DIR/cometbft-openapi.yaml" \
        --previous "$REPO_DIR/static/api/RPC.yaml" \
        --description "$SCRIPT_DIR/rpc-description.md" \
        --version "$VERSION" --out "$WORK_DIR/RPC.yaml"
    mv "$WORK_DIR/RPC.yaml" "$REPO_DIR/static/api/RPC.yaml"
fi

echo "==> writing JSON twins for the docs site"
# The API reference page fetches these and hands Stoplight a parsed object,
# skipping a main-thread YAML parse of the full spec on every visit.
python3 - "$REPO_DIR" <<'PYEOF'
import json, sys, yaml
repo = sys.argv[1]
for name in ("LCD", "RPC"):
    doc = yaml.safe_load(open(f"{repo}/static/api/{name}.yaml"))
    json.dump(doc, open(f"{repo}/static/api/{name}.json", "w"), separators=(",", ":"))
PYEOF

echo "==> validating"
"$OAS_VALIDATE" --quiet "$REPO_DIR/static/api/LCD.yaml"
"$OAS_VALIDATE" --quiet "$REPO_DIR/static/api/RPC.yaml"

echo
echo "Done. Remember to update the version strings in:"
echo "  scripts/api-specs/lcd-description.md"
echo "  scripts/api-specs/rpc-description.md"
