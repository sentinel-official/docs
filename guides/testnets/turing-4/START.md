# Start

1. Initialize the chain configuration files

   ```sh
   sentinelhub init <moniker> --chain-id sentinel-turing-4
   ```

2. Download the genesis file

   ```sh
   wget -O ${HOME}/genesis.json https://raw.githubusercontent.com/sentinel-official/testnets/master/turing-4/genesis.json
   ```

3. Check the SHA256 checksum of the downloaded genesis.json file

   ```sh
   sha256sum ${HOME}/genesis.json
   ```

   Note: The checksum should be `21a9cb30cc3756b0bbd3942e3c2e9282222546291213338231a1d6d5a2f48d8b`

4. Move the genesis to the hub configuration directory

   ```sh
   mv ${HOME}/genesis.json ${HOME}/.sentinelhub/config/
   ```

5. Add the seed node addresses

   - Open the file `${HOME}/.sentinelhub/config/config.toml`
   - Go to the line which contains the field `seeds = ""`
   - Insert the below node addresses

     ```text
     0c196abb62842d75b9db5a9e8ea467d9956a9817@65.21.159.37:26656
     ```

   - Save the file

6. Reset all the previous chain database

   ```sh
   sentinelhub unsafe-reset-all
   ```

7. Create a virtual Terminal session

   ```sh
   screen -S <name>
   ```

8. Start the chain

   ```sh
   sentinelhub start
   ```

9. Detach from the virtual Terminal session by pressing Ctrl+A D
