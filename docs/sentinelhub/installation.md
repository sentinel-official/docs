# Installation

## From source

### Install the dependencies

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
    sudo apt-get install --yes curl git golang-go make unzip
    ```

4. Export Golang environment variables

    ``` sh
    export GOROOT=/usr/lib/go
    export GOPATH=${HOME}/go
    export GOBIN=${GOPATH}/bin
    export PATH=${PATH}:${GOROOT}/bin:${GOBIN}
    ```

    ???+ tip "Tip"

        Append the above lines to the file `${HOME}/.bashrc` and execute the command `source ${HOME}/.bashrc` to reflect in the current Terminal session

### Clone the source code

``` sh
CHAIN_ID=
BASE_DIRECTORY=${GOPATH}/src/github.com/sentinel-official
VERSION=$(curl -fsLS https://raw.githubusercontent.com/sentinel-official/master/networks/${CHAIN_ID}/version.txt)

rm -rf ${BASE_DIRECTORY}/hub/ && mkdir -p ${BASE_DIRECTORY} && cd ${BASE_DIRECTORY}/ && \
git clone https://github.com/sentinel-official/hub.git && cd ${BASE_DIRECTORY}/hub/ && \
git checkout ${VERSION}
```

### Build and install the software

``` sh
make install
```

## Prebuilt binaries

TBU
