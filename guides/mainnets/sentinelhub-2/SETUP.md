# Setup

Minimum machine configuration required

| Key              | Value         |
|------------------|---------------|
| CPU cores        | 4             |
| RAM              | 8 Gigabytes   |
| Disk space       | 500 Gigabytes |
| Disk type        | SSD           |
| Operating System | Ubuntu        |

## Step 1 - Install Golang

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
    sudo apt-get install -y git golang-go make wget
    ```

4. Export Golang environment variables

    ``` sh
    export GOROOT=/usr/lib/go
    export GOPATH=${HOME}/go
    export GOBIN=$GOPATH/bin
    export PATH=${PATH}:${GOROOT}/bin:${GOBIN}
    ```

    You can also append the above lines to the file `${HOME}/.bashrc` and run the following command to reflect in the current Terminal session

    ``` sh
    source ${HOME}/.bashrc
    ```

## Step 2 - Installing the Sentinel hub software

1. Clone the source code from the official Sentinel hub repository

    ``` sh
    mkdir -p ${GOPATH}/src/github.com/sentinel-official/ && \
    cd ${GOPATH}/src/github.com/sentinel-official/ && \
    git clone https://github.com/sentinel-official/hub.git
    ```

2. Navigate to the *hub* folder

    ``` sh
    cd ${GOPATH}/src/github.com/sentinel-official/hub/
    ```

3. Checkout to the version that you want to install

    ``` sh
    git checkout v0.6.3
    ```

4. Build and install the software

    ``` sh
    make install
    ```
