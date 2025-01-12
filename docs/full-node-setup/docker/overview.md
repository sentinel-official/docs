---
title: Overview
sidebar_position: 1
---

# Running a Full Node by using Docker

Running a Full Node or Validator is now possible using Docker. You can access the GitHub repository [here](https://github.com/hindsight9923/sentinel). Special thanks to [MisfitsCrypto](https://t.me/MisfitsCrypto) for creating these Docker files!


## Overview

### No ufw or systemd

These Dockerfiles do not use ufw or systemd. Therefore, you must manually start the node sentinelhub core after restarting or redeploying the container.
Use one of the following commands inside the container:

```bash
./state-script.sh
nohup sentinelhub start &
nohup cosmovisor run start &
```

Reminder: Docker containers do not persist changes when redeployed. If you need to retain changes, modify the Dockerfile itself.

### Performance Tweaks

The Dockerfiles optimize certain parameters in config.toml and app.toml:
- Indexer is off
- Prometheus is on
- State-sync is on
- Pruning is custom (every 1000 blocks, keep last 2 snapshots)
- Testnet seeds and peers are limited due to the newer network.

### Stability

Containers have been tested on both Sentinel mainnet and testnet for 3 days and appear stable, assuming adequate hardware.

### Additional Efforts

- Prometheus container with Cloud Grafana
- TMKMS container (currently in testing)