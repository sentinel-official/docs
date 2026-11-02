---
title: Prepare the Server
sidebar_label: "🧰 Prepare the Server"
sidebar_position: 3
---

# Prepare the Server

Run every command on this page **on the server**. Written for a new Ubuntu 26.04 (x86_64) server.

## 1. Log in

A new server gives you `root`. From your computer:

```bash
ssh root@<SERVER_IP>
```

## 2. Create a user with sudo

Pick a name for `<USER>`. `adduser` asks for a password.

```bash
adduser <USER>
usermod -aG sudo <USER>
install -d -m 700 -o <USER> -g <USER> /home/<USER>/.ssh
install -m 600 -o <USER> -g <USER> ~/.ssh/authorized_keys /home/<USER>/.ssh/authorized_keys
exit
```

If you log in to `root` with a password instead of an SSH key, skip the two `install` lines.

Log back in as the new user. Run every step after this as that user.

```bash
ssh <USER>@<SERVER_IP>
```

## 3. Add swap

Without swap, the build can run out of memory.

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo "/swapfile none swap sw 0 0" | sudo tee -a /etc/fstab
```

## 4. Install the system packages

```bash
sudo apt-get update
sudo apt-get install -y ca-certificates curl git build-essential nftables
```

## 5. Install Go 1.27.3

```bash
cd /tmp
curl -fsSLo go.tgz https://go.dev/dl/go1.27.3.linux-amd64.tar.gz
echo "65efbc80fdc1fa2cd2631cad5b481777a68e8725f34e89f50fc6ac714e379b40  go.tgz" | sha256sum -c - && \
  sudo rm -rf /usr/local/go && \
  sudo tar -C /usr/local -xzf go.tgz && \
  sudo ln -sf /usr/local/go/bin/go /usr/local/bin/go
rm -f go.tgz
go version
```

If `sha256sum` doesn't print `go.tgz: OK`, nothing is installed. Run the block again.

`/tmp` is too small for the build. Make Go use a folder in your home instead:

```bash
mkdir -p "${HOME}/go-tmp"
go env -w GOTMPDIR="${HOME}/go-tmp"
```

## 6. Build and install the Sentinel binaries

On a 1-CPU server this takes about 15 minutes.

```bash
cd ~
git clone https://github.com/sentinel-official/sentinel-solana.git
cd ~/sentinel-solana

for dir in sentinel-dvpn sentinel-dvpnd; do
  make -C "$dir" build \
    SENTINEL_NETWORK=devnet \
    SENTINEL_PROGRAM_ID=J52dyXW3a6mkatvrQct3fo6dA9vqUtcsdBt5gGqrTBXs \
    SENTINEL_MINT=Hen2LVP6KooGaXEvdSyCHWghsEY4gLLn7wix8z6zHFSa
done

sudo install -m 755 sentinel-dvpn/bin/sentinel-dvpn sentinel-dvpnd/bin/sentinel-dvpnd /usr/local/bin/
sentinel-dvpnd version
```

The output must show `"network":"devnet"`.

## 7. Install the VPN software

Choose the **one** protocol your node will run, and install only its software. If `sha256sum` doesn't print `OK`, nothing is installed. Run the block again.

### WireGuard

```bash
sudo apt-get install -y wireguard-tools
```

### OpenVPN

```bash
sudo apt-get install -y openvpn
```

### V2Ray

Needs V2Ray 5. Don't use `apt install v2ray`: Ubuntu ships V2Ray 4, which doesn't work.

```bash
sudo apt-get install -y unzip
cd /tmp
curl -fsSLo v2ray.zip https://github.com/v2fly/v2ray-core/releases/download/v5.53.0/v2ray-linux-64.zip
echo "6bbb8aee65a57d0b12599b4b7c842b3ad0daca4436e661d94015c447cb31b4fa  v2ray.zip" | sha256sum -c - && \
  unzip -oqj v2ray.zip v2ray && \
  sudo install -m 755 v2ray /usr/local/bin/v2ray
rm -f v2ray v2ray.zip
v2ray version
```

### Xray

```bash
sudo apt-get install -y unzip
cd /tmp
curl -fsSLo xray.zip https://github.com/XTLS/Xray-core/releases/download/v26.3.27/Xray-linux-64.zip
echo "23cd9af937744d97776ee35ecad4972cf4b2109d1e0fe6be9930467608f7c8ae  xray.zip" | sha256sum -c - && \
  unzip -oqj xray.zip xray && \
  sudo install -m 755 xray /usr/local/bin/xray
rm -f xray xray.zip
xray version
```

### Hysteria2

The file must be named `hysteria2`.

```bash
cd /tmp
curl -fsSLo hysteria2 https://github.com/apernet/hysteria/releases/download/app/v2.9.2/hysteria-linux-amd64
echo "86fef8e2f1b2bf41318ac96724eee6c3b449e4e510022cc89658b63a6713922a  hysteria2" | sha256sum -c - && \
  sudo install -m 755 hysteria2 /usr/local/bin/hysteria2
rm -f hysteria2
hysteria2 version
```

### AmneziaWG

Needs two parts: the `awg` tools and `amneziawg-go`.

```bash
cd /tmp
git clone https://github.com/amnezia-vpn/amneziawg-tools.git
git -C amneziawg-tools checkout 61e741780e8465a67a7d7fb6cffe14a8a15d624a
make -C amneziawg-tools/src
make -C amneziawg-tools/src install DESTDIR=/tmp/awg-out PREFIX=/usr \
  WITH_WGQUICK=yes WITH_BASHCOMPLETION=no WITH_SYSTEMDUNITS=no
sudo install -m 755 /tmp/awg-out/usr/bin/awg /tmp/awg-out/usr/bin/awg-quick /usr/local/bin/

git clone https://github.com/amnezia-vpn/amneziawg-go.git
git -C amneziawg-go checkout 1cc94272ca8e9e223a5fe76382f5880f09d3c12d
(cd amneziawg-go && go build -o amneziawg-go .)
sudo install -m 755 amneziawg-go/amneziawg-go /usr/local/bin/amneziawg-go

rm -rf amneziawg-tools amneziawg-go /tmp/awg-out
awg --version
```

Next: [configure the node](/solana/node-operators/setup).
