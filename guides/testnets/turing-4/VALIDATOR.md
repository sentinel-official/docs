# Validator

1. Create an account

   ```sh
   sentinelhub keys add <name>
   ```

2. Find the consensus public key

   ```sh
   sentinelhub tendermint show-validator
   ```

3. Make a transaction

   ```sh
   sentinelhub tx staking create-validator \
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
