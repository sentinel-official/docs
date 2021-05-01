# GenTx

1. Fork the official [testnets](https://github.com/sentinel-official/testnets "testnets") repository into your Github account

2. Clone the forked testnets repository from Github

   ```sh
   git clone https://github.com/<username>/testnets.git
   ```

3. Initialize the chain configuration files

   ```sh
   sentinelhub init <moniker> --chain-id sentinel-turing-4
   ```

4. Copy the genesis to the hub configuration directory

   ```sh
   cp ${HOME}/testnets/turing-4/genesis.json ${HOME}/.sentinelhub/config/
   ```

5. Create an account

   ```sh
   sentinelhub keys add <name>
   ```

6. Add the account to the genesis

   ```sh
   sentinelhub add-genesis-account <name> 1000000000000tsent
   ```

7. Create an offline genesis transaction

   ```sh
      sentinelhub gentx <key name> 1000000000000tsent --moniker <your moniker> --commission-rate 0.1 --commission-max-rate 0.2 --commission-max-change-rate 0.01 --chain-id sentinel-turing-4
   ```

8. Copy the gentx file to the testnets folder

   ```sh
   cp ${HOME}/.sentinelhub/config/gentx/gentx-*.json ${HOME}/testnets/turing-4/gentx/
   ```

9. Commit and push it to forked Github repository

   ```sh
   cd ${HOME}/testnets && \
   git add . && \
   git commit -m <message>
   ```

10. Create a pull request from the forked repository to the official repository
