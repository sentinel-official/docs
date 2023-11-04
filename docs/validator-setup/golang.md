---
title: Install Golang
sidebar_position: 3
---

# Install Golang

First of all install some required packages

```bash
sudo apt-get install -y curl git jq make unzip
```

You now have two methods for installing Golang.

## Ubuntu

To install Go on Ubuntu, you can easily follow the steps provided.

Add the repository

```bash
sudo add-apt-repository ppa:longsleep/golang-backports
```

Install Golang

```bash
sudo apt-get install -y golang-go
```

## Manually

This method should work on all Linux systems, although it is intended for more experienced users.

Get a copy of the last Golang version and unpack it

```bash
cd ~ && \
curl -OL https://golang.org/dl/go1.21.3.linux-amd64.tar.gz && \
tar -C ${HOME} -xvf go1.21.3.linux-amd64.tar.gz
```

Move the extracted go into `/usr/local/lib/go`
```bash
sudo mv ${HOME}/go /usr/local/lib/go
```

## Export Golang environment variables

Now that you've successfully installed Golang, it's essential to configure its environmental variables.

Open the .bashrc file

```bash
sudo nano ${HOME}/.bashrc
```

If you installed Golang via PPA, add this line:

```bash
export GOROOT=/usr/lib/go
```

Otherwise, add this line

```bash
export GOROOT=/usr/local/lib/go
```

Then add these lines below to the file:

```bash title=${HOME}/.bashrc
export GOPATH=${HOME}/go
export GOBIN=${GOPATH}/bin
export PATH=${PATH}:${GOROOT}/bin:${GOBIN}
```

Source the file to reflect changes in the current Terminal session.

```bash
source ${HOME}/.bashrc
```