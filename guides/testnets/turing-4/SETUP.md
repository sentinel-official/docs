# Setup

Minimum machine configuration required

| Key              | Value        |
| ---------------- | ------------ |
| CPU cores        | 4            |
| RAM              | 8 Gigabytes  |
| Disk space       | 50 Gigabytes |
| Disk type        | SSD          |
| Operating System | Ubuntu       |

## Step 1 - Install Golang

1. Install the required packages

   ```sh
   sudo apt-get install -y git build-essential wget screen
   ```

1. Download Golang from official website, and unpack to /usr/local/go

   ```sh
   cd /tmp
   wget https://golang.org/dl/go1.16.3.linux-amd64.tar.gz
   rm -rf /usr/local/go && tar -C /usr/local -xzf go1.16.3.linux-amd64.tar.gz
   ```

1. Export Golang environment variables

   ```sh
    export GOROOT=/usr/local/go
    export GOPATH=$HOME/go
    export GO111MODULE=on
    export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin
   ```

   You can also append the above lines to the file `${HOME}/.bashrc` and run the following command to reflect in the current Terminal session

   ```sh
   source ${HOME}/.bashrc
   ```

## Step 2 - Installing the Sentinel hub software

1. Clone the source code from the official Sentinel hub repository

   ```sh
   mkdir -p ${GOPATH}/src/github.com/sentinel-official/ && \
   cd ${GOPATH}/src/github.com/sentinel-official/ && \
   git clone https://github.com/sentinel-official/hub.git
   ```

2. Navigate to the _hub_ folder

   ```sh
   cd ${GOPATH}/src/github.com/sentinel-official/hub/
   ```

3. Checkout to the version that you want to install

   ```sh
   git checkout v0.6.0
   ```

4. Build and install the software

   ```sh
   make install
   ```

5. Verify correct version of the software

```
    $: sentinelhub version --long
    name: sentinel
    server_name: sentinelhub
    version: 0.6.0
    commit: 0c7964060c17daf3767c3025c076ee2ce761cf90
    build_tags: netgo,ledger
    go: go version go1.16 darwin/amd64
```
