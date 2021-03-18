# Validator

1. Recover account

    ``` sh
    sentinelhubcli keys add --recover <name>
    ```

2. Find the consensus public key

    ``` sh
    sentinelhubd tendermint show-validator
    ```

3. Make a transaction after fully syncing the Blockchain

    ``` sh
    sentinelhubcli tx staking create-validator \
        --moniker <moniker> \
        --amount <amount> \
        --fees <transaction fee> \
        --gas <gas> \
        --pubkey <consensus public key> \
        --chain-id <chain id> \
        --commission-max-change-rate 0.01 \
        --commission-max-rate 0.2 \
        --commission-rate 0.1 \
        --min-self-delegation 1 \
        --broadcast-mode block \
        --from <name>
    ```
