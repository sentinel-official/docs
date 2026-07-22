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
docker pull ghcr.io/sentinel-official/sentinel-dvpnx:v9.0.0@sha256:49f7a11ae56baaa2c43de4384b56beff787e8d408bc37196cf63e3f6c10beca5
```

### AArch64 (ARM64)

```bash
docker pull ghcr.io/sentinel-official/sentinel-dvpnx:v9.0.0@sha256:44ad033534485d34c823aff676f7696f35ee0c460ad64b231af93d42b6acd741
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
