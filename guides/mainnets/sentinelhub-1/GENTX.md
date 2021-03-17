# GenTx

1. Fork the official [launch](https://github.com/sentinel-official/launch "launch") repository into your GitHub account

2. Clone the forked launch repository from GitHub

    ``` sh
    git clone https://github.com/<username>/launch.git
    ```

3. Initialize the chain configuration files

    ``` sh
    sentinelhubd init <moniker> --chain-id sentinelhub-1
    ```

4. Copy the genesis to the hub configuration directory

    ``` sh
    cp ${HOME}/launch/sentinelhub-1/genesis.json ${HOME}/.sentinelhubd/config/genesis.json
    ```

5. Recover account

    ``` sh
    sentinelhubcli keys add --recover <name>
    ```

6. Create an offline genesis transaction

    ``` sh
    sentinelhubd gentx --name <name> \
        --amount 1000000000udvpn \
        --commission-rate 0.1 \
        --commission-max-rate 0.2 \
        --commission-max-change-rate 0.01
    ```

7. Copy the gentx file to the launch folder

    ``` sh
    cp ${HOME}/.sentinelhubd/config/gentx/gentx-*.json ${HOME}/launch/sentinelhub-1/gentx/
    ```

8. Commit and push it to forked GitHub repository

    ``` sh
    cd ${HOME}/launch && \
    git add . && \
    git commit -m <message>
    ```

9. Create a pull request from the forked repository to the official repository
