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

   Note: The checksum should be `{Will be shared later}`

4. Move the genesis to the hub configuration directory

   ```sh
   mv ${HOME}/genesis.json ${HOME}/.sentinelhub/config/
   ```

5. Add the seed node addresses

   - Open the file `${HOME}/.sentinelhub/config/config.toml`
   - Go to the line which contains the field `seeds = ""`
   - Insert the below node addresses

     ```text
     091715cf98995180a6da44bd28d3c11f8636a962@51.158.189.149:26656
     790026684d76c66347941e1c21a904b141014568@3.8.10.143:26656
     b34f0b79731365b1cb89b9791dc0e1392ced77c9@206.189.253.224:26656
     835b12099f5869ac9160376d60ab58060169a9c6@128.199.31.151:26656
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
