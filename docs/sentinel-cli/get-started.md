---
title: Get Started
sidebar_position: 2
---

To begin using the Sentinel CLI, you have two options: you can either download a pre-packaged version for [Windows](https://github.com/freQniK/cli-client/releases/download/v0.3.1/sentinelcli.exe), [MacOS](https://github.com/freQniK/cli-client/releases/download/v0.3.1/sentinelcli_darwin_arm64) or [Linux](https://github.com/freQniK/cli-client/releases/download/v0.3.1/sentinelcli_linux_x86_64), or you can build the source code, as outlined below.

# Build the Source Code

To compile the source code of Sentinel CLI into a binary, two essential steps are necessary: installing Go and executing the build process.

## Install Go

Install [Go](https://go.dev/doc/install) by following instructions there.

Verify the installation by typing `go version` in your terminal.

```bash
go version
```

You should receive this output: `go version go1.xx.x darwin/amd64`

## Build Sentinel CLI

In order to build Sentinel CLI you need the source code. Either [download the source of a release](https://github.com/freQniK/cli-client/releases) or [clone the git repository](https://github.com/freQniK/cli-client.git) and make sure you always download the **latest version**.

To download Sentinel CLI go to [this](https://github.com/freQniK/cli-client) repository

:::note
Please note that the most recent version, **0.3.1**, was released by freQnik of MathNodes and will soon be integrated into the Sentinel repository
:::

Build Sentinel from the source code:

```bash
git clone https://github.com/freQniK/cli-client.git "${HOME}/sentinelcli"
cd "${HOME}/sentinelcli"
git checkout v0.3.1 # always make sure it's the latest version
make install
sudo ln -s "${HOME}/sentinelcli" /usr/local/bin/sentinelcli
```

After building, you should see a new executable file `/usr/local/bin/sentinelcli`.