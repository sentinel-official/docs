---
title: Install Dependencies
description: Everything you need before installing TMKMS
sidebar_position: 2
---

# Install Dependencies

Start by opening the node you intend to run TMKMS (not the node you validate on) and install the following dependencies

### Install Rust

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Source the `env` file

```bash
source $HOME/.cargo/env
```

### Install dependencies

```bash
sudo apt update && \
sudo apt install git build-essential ufw curl jq snapd --yes
```

### Install Libusb

```bash
apt install libusb-1.0-0-dev
```

If on x86_64 architecture:

```bash
export RUSTFLAGS=-Ctarget-feature=+aes,+ssse3
```