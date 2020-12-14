# Setup

Minimum machine configuration required

| Key              | Value        |
|------------------|--------------|
| CPU cores        | 1            |
| RAM              | 1 Gigabyte   |
| Disk space       | 10 Gigabytes |
| Disk type        | HDD          |
| Operating System | Ubuntu       |

## Step 1 - Install Docker

1. Update the list of available software packages

    ``` sh
    sudo apt-get update
    ```

2. Install cURL package

    ``` sh
    sudo apt-get install --yes curl
    ```

3. Get the official Docker installation script

    ``` sh
    curl -fsSL get.docker.com -o ${HOME}/get-docker.sh
    ```

4. Install Docker

    ``` sh
    sudo sh ${HOME}/get-docker.sh
    ```

Restart the machine if required

## Step 2 - Build the Docker image of dVPN node

1. Clone the GitHub repository

    ``` sh
    git clone https://github.com/sentinel-official/dvpn-node.git \
        ${HOME}/dvpn-node
    ```

2. Change the working directory

    ``` sh
    cd ${HOME}/dvpn-node
    ```

3. Checkout to the specific branch/commit/tag if requried

    ``` sh
    git checkout BRANCH/COMMIT/TAG
    ```

4. Build the image

    ``` sh
    docker build --file Dockerfile \
        --tag sentinel-dvpn-node \
        --force-rm \
        --no-cache \
        --compress .
    ```

## Step 3 - Create a self-signed TLS certificate

1. Install OpenSSL package

    ``` sh
    sudo apt-get install --yes openssl
    ```

2. Create certificate

    ``` sh
    openssl req -new \
        -newkey ec \
        -pkeyopt ec_paramgen_curve:prime256v1 \
        -x509 \
        -sha256 \
        -days 365 \
        -nodes \
        -out ${HOME}/tls.crt \
        -keyout ${HOME}/tls.key
    ```
