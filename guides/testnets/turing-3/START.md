# Start

1. Initialize the chain configuration files

    ``` sh
    sentinel-hubd init <moniker> --chain-id sentinel-turing-3
    ```

2. Download the genesis file

    ``` sh
    wget -O ${HOME}/genesis.json https://raw.githubusercontent.com/sentinel-official/testnets/master/turing-3/genesis.json
    ```

3. Check the SHA256 checksum of the downloaded genesis.json file

    ``` sh
    sha256sum ${HOME}/genesis.json
    ```

4. Move the genesis to the hub configuration directory

    ``` sh
    mv ${HOME}/genesis.json ${HOME}/.sentinel-hubd/config/
    ```

5. Add the seed node addresses

    * Open the file `${HOME}/.sentinel-hubd/config/config.toml`
    * Go to the line which contains the field `seeds = ""`
    * Insert the below node addresses

        ``` text
        TODO
        ```

    * Save the file

6. Reset all the previous chain database

    ``` sh
    sentinel-hubd unsafe-reset-all
    ```

7. Create a virtual Terminal session

    ``` sh
    screen -S <name>
    ```

8. Start the chain

    ``` sh
    sentinel-hubd start \
        --log_level "main:info,state:info,x/node:info,x/subscription:info,x/session:info,*:error" \
        --invar-check-period 1
    ```

9. Detach from the virtual Terminal session by pressing Ctrl+A D
