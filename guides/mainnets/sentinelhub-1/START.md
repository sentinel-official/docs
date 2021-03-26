# Start

1. Initialize the chain configuration files

    ``` sh
    sentinelhubd init <moniker> --chain-id sentinelhub-1
    ```

2. Download the genesis file

    ``` sh
    wget -O ${HOME}/genesis.json https://raw.githubusercontent.com/sentinel-official/launch/sentinelhub-1/sentinelhub-1/genesis.json
    ```

3. Check the SHA256 checksum of the downloaded genesis.json file

    ``` sh
    sha256sum ${HOME}/genesis.json
    ```

    Note: The checksum should be `79a2b73ed7ef35f767d1591a78086d594b11c65af75945e615371d35b94b613d`

4. Move the genesis to the hub configuration directory

    ``` sh
    mv ${HOME}/genesis.json ${HOME}/.sentinelhubd/config/
    ```

5. Add the seed node addresses

    * Open the file `${HOME}/.sentinelhubd/config/config.toml`
    * Go to the line which contains the field `seeds = ""`
    * Insert the below node addresses

        ``` text
        c7859082468bcb21c914e9cedac4b9a7850347de@167.71.28.11:26656
        ```

    * Save the file

6. Reset all the previous chain database

    ``` sh
    sentinelhubd unsafe-reset-all
    ```

7. Create a virtual Terminal session

    ``` sh
    screen -S <name>
    ```

8. Start the chain

    ``` sh
    sentinelhubd start
    ```

9. Detach from the virtual Terminal session by pressing Ctrl+A D
