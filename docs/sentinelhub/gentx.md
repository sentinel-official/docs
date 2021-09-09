# GenTx

1. Fork the official [networks](https://github.com/sentinel-official/networks "networks") repository into your GitHub account

2. Clone the forked networks repository from GitHub

    ``` sh
    CHAIN_ID=
    USERNAME=

    rm -rf ${HOME}/networks/ && cd ${HOME}/ && \
    git clone https://github.com/${USERNAME}/networks.git && cd ${HOME}/networks/ && \
    git checkout ${CHAIN_ID}
    ```

3. Initialize the blockchain configuration files

    ``` sh
    MONIKER=

    sentinelhub init "${MONIKER}" \
        --chain-id ${CHAIN_ID}
    ```

4. Unzip the Genesis to the blockchain configuration directory

    ``` sh
    unzip ${HOME}/networks/${CHAIN_ID}/genesis.zip \
        -d ${HOME}/.sentinelhub/config/
    ```

5. Add an account key

    ``` sh
    KEY_NAME=

    sentinelhub keys add ${KEY_NAME}
    ```

    ???+ tip "Tip"

        Pass flag `--recover` to recover the key

6. Add the Genesis account

    ``` sh
    ADDRESS=$(sentinelhub keys show --address ${KEY_NAME})
    STAKING_DENOM=

    sentinelhub add-genesis-account ${ADDRESS} 1000000000${STAKING_DENOM}
    ```

7. Create an offline Genesis transaction

    ``` sh
    sentinelhub gentx ${KEY_NAME} 100000000${STAKING_DENOM} \
        --chain-id ${CHAIN_ID} \
        --commission-rate 0.1 \
        --commission-max-rate 0.2 \
        --commission-max-change-rate 0.01
    ```

8. Copy the GenTx file to the folder `networks`

    ``` sh
    cp ${HOME}/.sentinelhub/config/gentx/gentx-*.json ${HOME}/networks/${CHAIN_ID}/gentx/
    ```

9. Commit and push it to the forked GitHub repository

    ``` sh
    cd ${HOME}/networks/ && \
    git add . && \
    git commit -m "Add GenTx of ${MONIKER}" && \
    git push origin ${CHAIN_ID}
    ```

10. Create a pull request from the forked repository to the official repository
