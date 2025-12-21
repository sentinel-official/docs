---
title: Preparing Sentinel Docker image
description: Choose between prebuilt or from source
sidebar_position: 3
---

# Preparing Sentinel Docker Image

## Method 1 - Prebuilt

### x86_64

Pull the image (check your desired version from this [link](https://github.com/sentinel-official/sentinel-dvpnx/pkgs/container/sentinel-dvpnx))

```bash
docker pull ghcr.io/sentinel-official/sentinel-dvpnx:latest
```

Tag the image

```bash
docker tag ghcr.io/sentinel-official/sentinel-dvpnx:latest sentinel-dvpnx
```
<!--
### ARM7

```bash
docker pull wajatmaka/sentinel-arm7-debian:v0.7.1
```
-->

### AArch64 (ARM64)

```bash
docker pull wajatmaka/sentinel-aarch64-alpine:v8.3.1
```

## Method 2 - From Source

### Clone the GitHub repository

```bash
git clone https://github.com/sentinel-official/sentinel-dvpnx.git \
    ${HOME}/sentinel-dvpnx/
```

### Checkout to the latest tag

- Option 1 - Automatic to the latest tag

```bash
cd ${HOME}/sentinel-dvpnx/ && \
commit=$(git rev-list --tags --max-count=1) && \
git checkout $(git describe --tags ${commit})
```

- Option 2 - Manual (if the previous command does not work for some reasons). Check [here](https://github.com/sentinel-official/sentinel-dvpnx/releases) for the last current release

```bash
cd ~/sentinel-dvpnx && \
git fetch && \
git checkout vX.X.X
```

### Build the image

Run the following command to build the image:

```bash
make build-image
```

### Verify the image

After the build completes, check that the image was created successfully by running:

```bash
docker images | grep sentinel-dvpnx
```

You should see an output similar to this:

```text
sentinel-dvpnx           latest    0994666b4eed   44 seconds ago   118MB
```
