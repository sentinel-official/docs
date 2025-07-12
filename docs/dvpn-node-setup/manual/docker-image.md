---
title: Preparing Sentinel Docker image
description: Choose between prebuilt or from source
sidebar_position: 3
---

# Preparing Sentinel Docker Image

## Method 1 - Prebuilt

### x86_64

Pull the image (check your desired version from this [link](https://github.com/sentinel-official/dvpn-node/pkgs/container/dvpn-node))

```bash
docker pull ghcr.io/sentinel-official/dvpn-node:latest
```

Tag the image

```bash
docker tag ghcr.io/sentinel-official/dvpn-node:latest sentinel-dvpn-node
```

### ARM7

```bash
docker pull wajatmaka/sentinel-arm7-debian:v0.7.1
```

### AArch64 (ARM64)

```bash
docker pull wajatmaka/sentinel-aarch64-alpine:v0.7.1
```

## Method 2 - From Source

### Clone the GitHub repository

```bash
git clone https://github.com/sentinel-official/dvpn-node.git \
    ${HOME}/dvpn-node/
```

### Checkout to the latest tag

- Option 1 - Automatic to the latest tag

```bash
cd ${HOME}/dvpn-node/ && \
commit=$(git rev-list --tags --max-count=1) && \
git checkout $(git describe --tags ${commit})
```

- Option 2 - Manual (if the previous command does not work for some reasons). Check [here](https://github.com/sentinel-official/dvpn-node/releases) for the last current release

```bash
cd ~/dvpn-node && \
git fetch && \
git checkout vX.X.X
```

### Build the image

```bash
docker build --file Dockerfile \
    --tag sentinel-dvpn-node \
    --force-rm \
    --no-cache \
    --compress .
```

## Create a self-signed TLS certificate

```bash
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

You will be asked to fill in some fields. Please insert the country while you can leave the others blank. If you want to automate this process, just add the following line to the command above:

```bash
-subj "/C=NA/ST=NA/L=./O=NA/OU=./CN=." \
```