---
title: Install Golang
sidebar_position: 3
---

# Install Golang

Get a copy of the last Golang version and unpack it

```bash
cd ~ && \
curl -OL https://golang.org/dl/go1.20.2.linux-amd64.tar.gz && \
tar -C ${HOME} -xvf go1.20.2.linux-amd64.tar.gz
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