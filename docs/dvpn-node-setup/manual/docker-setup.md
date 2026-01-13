---
title: Install Docker
description: Sentinel P2P requires Docker to be installed
sidebar_position: 2
---

# Install Docker

Install dependencies

```bash
sudo apt install --yes curl git openssl
```

Get the official Docker installation script

```bash
curl -fsSL get.docker.com -o ${HOME}/get-docker.sh
```

Install Docker

```bash
sudo sh ${HOME}/get-docker.sh
```

Enable Docker

```bash
sudo systemctl enable --now docker
```

Add user to Docker group

```bash
sudo usermod -aG docker $(whoami)
```

Execute the final command to apply the changes (similar to logging in again)

```bash
sudo -i -u $(whoami)
```

## Install Portainer (optional)

If you want a nice graphic view to manager your Node container, you can install [Portainer](https://docs.portainer.io/start/install-ce/server/docker/linux):

```bash
docker volume create portainer_data
docker run -d -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
```

Now that the installation is complete, you can log into your Portainer Server instance by opening a web browser and going to:

```bash
https://localhost:9443
```