# Start

1. Initialize the chain configuration files

    ``` sh
    sentinelhub init <moniker> --chain-id sentinelhub-2
    ```

2. Download the genesis file

    ``` sh
    wget -O ${HOME}/genesis.zip https://raw.githubusercontent.com/sentinel-official/launch/sentinelhub-2/sentinelhub-2/genesis.zip && \
    unzip ${HOME}/genesis.zip
    ```

3. Check the SHA256 checksum of the downloaded genesis.json file

    ``` sh
    sha256sum ${HOME}/genesis.json
    ```

    Note: The checksum should be `b8948777fb9c5e2d7252db17d64c4569f56af94355f76ba22937212a664caeed`

4. Move the genesis to the hub configuration directory

    ``` sh
    mv ${HOME}/genesis.json ${HOME}/.sentinelhub/config/
    ```

5. Set minimun gas prices

    * Open the file `${HOME}/.sentinelhub/config/app.toml`
    * Go to the line which contains the field `minimum-gas-prices = ""`
    * Change the value to `minimum-gas-prices = "0.1udvpn"`
    * Save the file

6. Set peers and seeds

    * Open the file `${HOME}/.sentinelhub/config/config.toml`
    * Go to the line which contains the field `persistent_peers = ""`
    * Insert the below node addresses

        ``` text
        05fe2a7847fd27345250915fd06752c424f40651@85.222.234.135:26656,387027e3b1180d3a619cbbf3462704a490785963@54.176.90.228:26656,63bd9cfce0f0d274aad5b166dd06d829021aec43@121.78.247.243:56656,855807cc6a919c22ec943050ebb5c80b23724ed0@3.239.11.246:26656,8caefbf8f4318ecc93f2c901cf11470e4a16c818@161.97.135.122:26656,9174af5f16f74660cccf49f893d243949af45f7f@54.177.29.46:26656,9fa528bd2b9e7c80724a1d8a4e1a2a8a83e7d123@142.93.72.221:26656,a77f6a094578dad899e2f40e0626b4c6d4705311@3.36.165.232:26656,bd45a11390d16d128a9eeea3935b53d7a1a3c120@15.236.127.69:26656,cdb8dd7628460a546ce1594ca0bc0c20366514cf@34.72.64.178:26656,d1efceccb04ded9a604e5235f76da86872157d68@161.97.149.223:26656,e00b23444cc8dbb353d5faa765ab36cfc0116b57@83.60.98.134:28685,e5ee89bd4fc371c6a0e66d2b8daefd891b6b87b5@157.90.117.58:26656,f7ceb735606f90df7eb6cd987641876955b6e325@46.4.55.150:36656
        ```

    * Go to the line which contains the field `seeds = ""`
    * Insert the below node addresses

        ``` text
        c3aa0ff9b3eb17be1b0a26d7c8a5683e8e528e1a@159.89.192.105:26656
        ```

    * Save the file

7. Reset all the previous chain database

    ``` sh
    sentinelhub unsafe-reset-all
    ```

8. Create a virtual Terminal session

    ``` sh
    screen -S <name>
    ```

9. Start the chain

    ``` sh
    sentinelhub start
    ```

10. Detach from the virtual Terminal session by pressing Ctrl+A D