# Validator

1. Create an account

    ``` sh
    sentinel-hub-cli keys add <name>
    ```

2. Find the consensus public key

    ``` sh
    sentinel-hubd tendermint show-validator
    ```

3. Make a transaction

    ``` sh
    sentinel-hub-cli tx staking create-validator \
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
