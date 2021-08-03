# Become a validator

1. Add the operator key

    ``` sh
    KEY_NAME=

    sentinelhub keys add ${KEY_NAME}
    ```

    Pass flag `--recover` to recover the key with Mnemonic

2. Get the consensus public key

    ``` sh
    CONSENSUS_PUBLIC_KEY=$(sentinelhub tendermint show-validator)
    ```

3. Make the `create-validator` transaction

    ``` sh
    COMMISSION_MAX_CHANGE_RATE=0.01
    COMMISION_MAX_RATE=0.2
    COMMISSION_RATE=0.05
    TX_GAS=500000

    CHAIN_ID=
    DELEGATION_AMOUNT=
    MONIKER=
    TX_FEES=

    sentinelhubcli tx staking create-validator \
        --broadcast-mode block \
        --min-self-delegation 1 \
        --amount ${DELEGATION_AMOUNT} \
        --chain-id ${CHAIN_ID} \
        --commission-max-change-rate ${COMMISSION_MAX_CHANGE_RATE} \
        --commission-max-rate ${COMMISION_MAX_RATE} \
        --commission-rate ${COMMISSION_RATE} \
        --fees ${TX_FEES} \
        --from ${KEY_NAME}
        --gas ${TX_GAS} \
        --moniker ${MONIKER} \
        --pubkey ${CONSENSUS_PUBLIC_KEY} \
    ```
