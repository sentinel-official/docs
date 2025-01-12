---
title: Build
sidebar_position: 3
---

# Build the Docker Images

1. Clone or copy the Dockerfiles and any state-sync scripts into a local directory.

2. Navigate to that directory.

3. Build your image:

```bash
docker build -t <image-tag> -f /path/to/dockerfile .
```

Example:

```bash
docker build -t sentinel:mainnet -f dockerfile_sentinel_main .
```

4. Run a container from your newly built image:

```bash
docker run -dit --name <container-name> <image-tag>
```

Example:

```bash
docker run -dit --name sentinel_mainnet sentinel:mainnet
```

5. Exec into your running container:

```bash
docker exec -it <container-name> bash
```
  
Example:

```bash
docker exec -it sentinel_mainnet bash
```
   
6. State-Sync (once inside the container):

```bash
./state-sync.sh
```

- This script may have a slightly different name for testnet and cosmovisor variants
- Run `cat nohup` to view script output

7. Change Passwords

```bash
chpasswd root
chpasswd sentinel
```

8. Transaction Setup

- Import your node key (e.g., `sentinelhub keys add ...`).  
- If you are a validator, copy your validator private key JSON into the container (see [Mount a Volume](/full-node-setup/docker/mount-volume) section).  
- A TMKMS Docker image is in testing and will be released soon.