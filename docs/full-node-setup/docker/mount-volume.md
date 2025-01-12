---
title: Mount a Volume
sidebar_position: 4
---

# Mount a Volume

Mounting a volume allows you to transfer files between the host and the container.

Create an empty directory on your host:

```bash
mkdir <volume-directory-name>
```

Attach the directory as a bind mount:

```bash
docker run -dit \
  --name <container-name> \
  -v <host-path>:<container-path> \
  <image-tag>
```

Example:

```bash
docker run -dit \
  --name sentinel_mainnet \
  -v /home/mystuff:/mnt \
  sentinel:mainnet
```

Any files placed in `/home/mystuff` on your host will now be accessible at `/mnt` inside the container.