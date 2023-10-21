---
title: Install Golang
sidebar_position: 3
---

# Install Golang

## Manually

This method should work on all Linux systems, although it is intended for more experienced users. If you are using Ubuntu, you may prefer to try a faster method located at the bottom of the page.

### Download & Unpack

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

### Export Golang environment variables

Open the .bashrc file

```bash
sudo nano ${HOME}/.bashrc
```

Append the below lines to the file

```bash title=${HOME}/.bashrc
export GOROOT=/usr/local/lib/go
export GOPATH=${HOME}/go
export GOBIN=${GOPATH}/bin
export PATH=${PATH}:${GOROOT}/bin:${GOBIN}
```

Source the file to reflect in the current Terminal session

```bash
source ${HOME}/.bashrc
```

## Ubuntu

If you use Ubuntu and find problems with the manual methos try this alternative one

Add the repository

```bash
sudo add-apt-repository ppa:longsleep/golang-backports
```

Install Golang

```bash
sudo apt-get install -y golang-go
```