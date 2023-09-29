---
title: Build
sidebar_position: 2
---

# Build the Source Code


## Install Go 1.21

Currently, Sentinel uses Go 1.21 to compile the code.

Install [Go 1.21](https://go.dev/doc/install) by following instructions there.

Verify the installation by typing `go version` in your terminal.

```sh
$ go version
go version go1.21.1 darwin/amd64
```

## Build Sentinel

In order to build Sentinel you need the source code. Either [download the source of a release](https://github.com/sentinel-official/hub/releases) or [clone the git repository](https://github.com/sentinel-official/hub.git) and make sure you always download the **latest version**.

Build Sentinel from the source code:

```bash
git clone https://github.com/sentinel-official/hub.git "${HOME}/sentinelhub"
cd "${HOME}/sentinelhub"
git checkout v0.11.3 # always make sure it's the latest version
make install
sudo ln -s "${GOBIN}/sentinelhub" /usr/local/bin/sentinelhub
```

After building, you should see a new executable file `/usr/local/bin/sentinelhub`.