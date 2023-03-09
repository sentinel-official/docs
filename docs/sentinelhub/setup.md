# Setup

## Install dependencies

1. Add the Golang PPA repository to get the latest version of Golang

    ``` sh
    sudo add-apt-repository ppa:longsleep/golang-backports
    ```

2. Update the packages list

    ``` sh
    sudo apt-get update
    ```

3. Install Golang and other required packages

    ``` sh
    sudo apt-get install --yes curl git golang-go jq make unzip
    ```

4. Export Golang environment variables

    ???+ tip "Tip"
        Append the above lines to the file `${HOME}/.bashrc` and execute the command `source ${HOME}/.bashrc` to reflect in the current Terminal session

    ``` sh
    export GOROOT=/usr/lib/go
    export GOPATH=${HOME}/go
    export GOBIN=${GOPATH}/bin
    export PATH=${PATH}:${GOROOT}/bin:${GOBIN}
    ```

## Install sentinelhub software

``` sh
git clone https://github.com/sentinel-official/hub.git "${HOME}/sentinelhub"
cd "${HOME}/sentinelhub"
git checkout <ENTER_TAG>
make install
sudo ln -s "${GOBIN}/sentinelhub" /usr/local/bin/sentinelhub
```

## Initialize the Sentinel Hub

``` sh
sentinelhub init --chain-id sentinelhub-2 "<SET_MONIKER>"
curl -fsLS -o "${HOME}/genesis.zip" "https://raw.githubusercontent.com/sentinel-official/networks/main/sentinelhub-2/genesis.zip"
unzip -d "${HOME}/.sentinelhub/config/" "${HOME}/genesis.zip"
rm "${HOME}/genesis.zip"
```

## Update the node config

1. Open `config.toml` file with a text editor

    ``` sh
    vim ${HOME}/.sentinelhub/config/config.toml
    ```

2. Get the peers and seeds from [here](https://www.mintscan.io/sentinel/info) and set them

    ``` text
    [p2p]
    persistent_peers = "<SET_PEERS>"
    seeds = "<SET_SEEDS>"
    ```

3. Open `app.toml` file with a text editor

    ``` sh
    vim "${HOME}/.sentinelhub/config/app.toml"
    ```

4. Get minimum gas prices
  from [here](https://raw.githubusercontent.com/sentinel-official/networks/main/sentinelhub-2/minimum-gas-prices.txt)
  and set it

    ``` text
    minimum-gas-prices = "<SET_MINIMUM_GAS_PRICES>"
    ```

## Add a systemd unit file

1. Open the `sentinelhub.service` file with a text editor

    ``` sh
    sudo vim /etc/systemd/system/sentinelhub.service
    ```

2. Paste the below text

    ``` text
    [Unit]
    Description=Sentinel Hub Daemon
    After=network.target

    [Service]
    Type=simple
    ExecStart=sentinelhub start
    Restart=on-failure
    StartLimitInterval=0
    RestartSec=5
    LimitNOFILE=1048576
    LimitMEMLOCK=2048132

    [Install]
    WantedBy=multi-user.target
    ```

3. Reload the systemd Daemon

    ``` sh
    sudo systemctl daemon-reload
    ```

4. Enable autostart of Sentinel Hub service

    ``` sh
    sudo systemctl enable sentinelhub.service
    ```
