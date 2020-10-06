# Start

1. Initialize the chain configuration files

    ``` sh
    sentinel-hubd init <moniker> --chain-id sentinel-turing-3a
    ```

2. Download the genesis file

    ``` sh
    wget -O ${HOME}/genesis.json https://raw.githubusercontent.com/sentinel-official/testnets/master/turing-3/genesis.json
    ```

3. Check the SHA256 checksum of the downloaded genesis.json file

    ``` sh
    sha256sum ${HOME}/genesis.json
    ```

    Note: The checksum should be `eeec1686dc26c4e7341cec40b952ddb810b3ce8d56afaa6e031a01285daf8b6c`

4. Move the genesis to the hub configuration directory

    ``` sh
    mv ${HOME}/genesis.json ${HOME}/.sentinel-hubd/config/
    ```

5. Add the seed node addresses

    * Open the file `${HOME}/.sentinel-hubd/config/config.toml`
    * Go to the line which contains the field `seeds = ""`
    * Insert the below node addresses

        ``` text
        091715cf98995180a6da44bd28d3c11f8636a962@51.158.189.149:26656
        790026684d76c66347941e1c21a904b141014568@3.8.10.143:26656
        b34f0b79731365b1cb89b9791dc0e1392ced77c9@206.189.253.224:26656
        835b12099f5869ac9160376d60ab58060169a9c6@128.199.31.151:26656
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
    
*If you have a sync delay,try start the chain with command:*

``` sh
    sentinel-hubd start \
    --log_level "main:info,state:info,x/node:info,x/subscription:info,x/session:info,*:error"
```

9. Detach from the virtual Terminal session by pressing Ctrl+A D
