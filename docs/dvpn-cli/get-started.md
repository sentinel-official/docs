---
title: Get Started
sidebar_position: 2
---

# Get Sentinel dVPN CLI

To begin using the Sentinel dVPN CLI, two essential steps are necessary: installing Go and executing the build process.

### Install Go

Install [Go](https://go.dev/doc/install) by following instructions there.

Verify the installation by typing `go version` in your terminal.

```bash
go version
```

You should receive this output: `go version goX.X.X darwin/amd64`

## Build the Binary

In order to build Sentinel dVPN CLI you need the source code. Either download the source of a release or clone the Git Repository and make sure it is the **latest version**.


#### From GitHub Repository

Clone the GitHub repository:

```bash
git clone https://github.com/sentinel-official/sentinel-dvpncli.git "${HOME}/sentinel-dvpncli"
```

Checkout to the latest tag:

```bash
cd "${HOME}/sentinel-dvpncli"
commit=$(git rev-list --tags --max-count=1) && \
git checkout $(git describe --tags ${commit})
```

Build the Binary

```bash
make install
sudo ln -s "${HOME}/sentinel-dvpncli" /usr/local/bin/sentinel-dvpncli
```

### From Source File

To download Sentinel dVPN CLI go to [the Official Repository](https://github.com/sentinel-official/sentinel-dvpncli/releases) and download the last source code (either `.tar.gz` or `.zip`)

Extract the archive:

```bash
tar xvzf sentinel-dvpncli-X.X.X.tar.gz
```

Build the binary

```bash
cd sentinel-dvpncli-X.X.X
make install
sudo ln -s "${HOME}/sentinel-dvpncli" /usr/local/bin/sentinel-dvpncli
```

Upon completion of the installation process, you will find a new executable file located at `/usr/local/bin/sentinel-dvpncli`. This file can be launched from your terminal.

```bash
sentinel-dvpncli
```