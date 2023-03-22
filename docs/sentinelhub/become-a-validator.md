# Become a validator

1. Add an operator key

    ???+ tip "Tip"
        Pass flag `--recover` to recover the key with Mnemonic

    ``` sh
    KEY_NAME="<SET_KEY_NAME>"

    sentinelhub keys add "${KEY_NAME}"
    ```

2. Make the `create-validator` transaction

    ``` sh
    CONSENSUS_PUBLIC_KEY=$(sentinelhub tendermint show-validator)
    DELEGATION_AMOUNT="<SET_DELEGATION_AMOUNT>"
    MONIKER="<SET_MONIKER>"

    sentinelhub tx staking create-validator \
        --broadcast-mode=block \
        --min-self-delegation=1 \
        --chain-id=sentinelhub-2 \
        --commission-max-change-rate=0.01 \
        --commission-max-rate=0.2 \
        --commission-rate=0.05 \
        --gas=500000 \
        --gas-prices=0.1udvpn \
        --amount=${DELEGATION_AMOUNT} \
        --from="${KEY_NAME}" \
        --moniker="${MONIKER}" \
        --pubkey="${CONSENSUS_PUBLIC_KEY}"
    ```
