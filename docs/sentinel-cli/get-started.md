---
title: Get Started
sidebar_position: 2
---

# Get Sentinel CLI

To begin using the Sentinel CLI, you have the option to either download the binary packages or build it from the source code.

## Download Binary Packages

Binary packages and source code can be downloaded from the [Official Repository](https://github.com/sentinel-official/cli-client/releases).

## Build the Source Code

To compile the source code of Sentinel CLI into a binary, two essential steps are necessary: installing Go and executing the build process.

### Install Go

Install [Go](https://go.dev/doc/install) by following instructions there.

Verify the installation by typing `go version` in your terminal.

```bash
go version
```

You should receive this output: `go version goX.X.X darwin/amd64`

### Build the binary

In order to build Sentinel CLI you need the source code. Either download the source of a release or clone the Git Repository and make sure it is the **latest version**.

To download Sentinel CLI go to [the Official Repository](https://github.com/sentinel-official/cli-client)

Build Sentinel from the source code:

```bash
git clone https://github.com/sentinel-official/cli-client.git "${HOME}/sentinelcli"
cd "${HOME}/sentinelcli"
git checkout vX.X.X # always make sure it's the latest version
make install
sudo ln -s "${HOME}/sentinelcli" /usr/local/bin/sentinelcli
```

Upon completion of the installation process, you will find a new executable file located at `/usr/local/bin/sentinelcli`. This file can be launched from your terminal.

```bash
sentinelcli
```