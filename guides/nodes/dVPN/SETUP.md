# Setup

Minimum machine configuration required

| Key              | Value        |
| ---------------- | ------------ |
| CPU cores        | 2GHz, 1      |
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

5. Add user to Docker group

    ``` sh
    sudo usermod -aG docker $(whoami)
    ```

6. Reboot the machine

## Step 2 - Enable IPv6 support for Docker (optional)

1. Open the file `/etc/docker/daemon.json` with a text editor

2. Paste the following configuration

    ``` text
    {
        "ipv6": true,
        "fixed-cidr-v6": "2001:db8:1::/64"
    }
    ```

3. Save the file

4. Restart the Docker process

    ``` sh
    sudo systemctl restart docker
    ```

5. Install `iptables-persistent` package

    ``` sh
    sudo apt-get install --yes iptables-persistent
    ```

6. Enable NAT for the private Docker subnet on the host

    ``` sh
    rule="POSTROUTING -s 2001:db8:1::/64 ! -o docker0 -j MASQUERADE" && \
    sudo ip6tables -t nat -C ${rule} || \
    sudo ip6tables -t nat -A ${rule} && \
    sudo ip6tables-save > /etc/iptables/rules.v6
    ```

## Step 3 - Build the Docker image of dVPN node

1. Clone the GitHub repository

    ``` sh
    git clone https://github.com/sentinel-official/dvpn-node.git \
        ${HOME}/dvpn-node/
    ```

2. Change the working directory and checkout to the latest tag

    ``` sh
    cd ${HOME}/dvpn-node/ && \
    commit=$(git rev-list --tags --max-count=1) && \
    git checkout $(git describe --tags ${commit})
    ```

3. Build the image

    ``` sh
    docker build --file Dockerfile \
        --tag sentinel-dvpn-node \
        --force-rm \
        --no-cache \
        --compress .
    ```

## Step 4 - Create a self-signed TLS certificate

1. Install `openssl` package

    ``` sh
    sudo apt-get install --yes openssl
    ```

2. Create a certificate

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
