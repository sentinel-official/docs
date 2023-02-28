# Installation

## Install the dependencies

### Linux

``` sh
sudo apt-get update && \
sudo apt-get install curl openresolv wireguard-tools && \
sudo sh -c "curl -fsLS https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh | bash -s -- --version v5.2.1"
```

### Mac

``` sh
/bin/bash -c "$(curl -fsLS https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" && \
brew install v2ray wireguard-tools
```

???+ tip "Tip"
    To install the dependencies you can also use [MacPorts](https://www.macports.org "MacPorts")

## Prebuilt binaries

``` sh
curl -fsLS https://raw.githubusercontent.com/sentinel-official/cli-client/development/scripts/install.sh | sh
```

## From source

TBU
