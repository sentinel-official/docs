# Sentinel dVPN Node on Windows Subsystem for Linux (experimental)

**NOTE:** THis is experimental guide to run Sentinel dVPN Node on Windows SUbsystem for Linux. Due to dynamic development of WSL methodology might change. However, it is technically possible and interesting exercise.

<!-- MarkdownTOC autolink="true" -->

- [Prepare Windows 10](#prepare-windows-10)
    - [WSL Installation](#wsl-installation)
    - [Switch to WSL 2](#switch-to-wsl-2)
    - [Install Ubuntu 20.04 LTS](#install-ubuntu-2004-lts)
- [Prepare Ubuntu 20.04 LTS](#prepare-ubuntu-2004-lts)
    - [Install updates](#install-updates)
    - [Install Go](#install-go)
        - [Download and extract repository](#download-and-extract-repository)
        - [Add Go path to global environment](#add-go-path-to-global-environment)
        - [Add user-specific variable](#add-user-specific-variable)
    - [Install other required packages](#install-other-required-packages)
- [Rebuild Kernel](#rebuild-kernel)
- [Sentinel dVPN Node Deployment](#sentinel-dvpn-node-deployment)
    - [Build dVPN Node](#build-dvpn-node)
    - [Configure dVPN Node](#configure-dvpn-node)
    - [Start dVPN Node](#start-dvpn-node)
- [Network configuration](#network-configuration)
    - [Allow communication to WSL instance](#allow-communication-to-wsl-instance)
    - [Router reconfiguration](#router-reconfiguration)
- [Troubleshooting](#troubleshooting)
    - [Wireguard interface already exists](#wireguard-interface-already-exists)
    - [Wireguard kernel module missing](#wireguard-kernel-module-missing)

<!-- /MarkdownTOC -->


## Prepare Windows 10

Deployment of Sentinel dVPN Node was tested using following system:
 - Windows 10 Professionsl
 - Version 21H1
 - Windows Subsystem for Linux 2


### WSL Installation

Let's install Windows SUbsystem for Linux.

Start PowerShell console with *Administrative* privileges and run following command in order to install **Windows Subsystem for Linux**:

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

Once WSL will be installed system will ask to reboot. Answer **no** and execute following command in order to install **Virtual Machine Platform** (required for WSL 2):

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform
```

Next you need to download Linux kernel update package provided by Microsoft.

Link is [here](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi).

Once downloaded install it and then reboot computer.

**NOTE:** If you try that on virtual machine make sure you enable virtualization support for vCPU.


### Switch to WSL 2

Now we switch to WSL 2. One of the features required for this build is ability to compile own kernel. That functionality has been introduced in WSL 2.
In order to switch to WSL 2 as default platform start PowerShell console with *Administrative* privileges and run:
```powershell
wsl --set-default-version 2
```


### Install Ubuntu 20.04 LTS

Recommended way of installing Linux for WSL is to go to Microsoft Store, hence we following recommendation in this guide.

Get Ubuntu 20.04 LTS from Microsoft Store. Here is [link](https://www.microsoft.com/store/apps/9N6SVWS3RX71).

Once installed, shortcut **Ubuntu 20.04 LTS** will be added to applications list in *Start Menu* 

**NOTE:** Microsoft Store will ask you to login when you try to install Ubuntu. Just cancel logon windows and installation will proceed. There is no need to login to Microsoft Store.

## Prepare Ubuntu 20.04 LTS

When you start Ubuntu for the first time it will take a while to initialize.

Once Ubuntu will be initialized you will get prompt to provide username and password for new instance.

```bash
Installing, this may take a few minutes...
Please create a default UNIX user account. The username does not need to match your Windows username.
For more information visit: https://aka.ms/wslusers
Enter new UNIX username: dvpn-node
New password:
Retype new password:
passwd: password updated successfully
Installation successful!
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

Welcome to Ubuntu 20.04.2 LTS (GNU/Linux 5.4.72-microsoft-standard-WSL2 x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Fri Jul  9 13:10:23 PDT 2021

  System load:  0.0                Processes:             8
  Usage of /:   0.5% of 250.98GB   Users logged in:       0
  Memory usage: 1%                 IPv4 address for eth0: 172.30.68.173
  Swap usage:   0%

1 update can be applied immediately.
To see these additional updates run: apt list --upgradable


The list of available updates is more than a week old.
To check for new updates run: sudo apt update


This message is shown once a day. To disable it please create the
/home/dvpn-node/.hushlogin file.
dvpn-node@WIN10-WSL-DVPN:~$
```

**NOTE:** In this example username is set to dvpn-node. It is just an example username and if you choose different it won't impact Sentinel dVPN Node installation.

All commands in this guide will be executed from root shell. So, once you have Ubuntu running execute:
```bash
sudo bash
cd ${HOME}
```
Run shell as root each time you restart Linux instance.


### Install updates

It is important to keep system up to date, so first thing we do is update our Ubuntu.

```bash
apt update && apt upgrade -y && apt autoremove -y
```

Linux will ask you to provide password for your user account and update will start.



### Install Go

#### Download and extract repository

```bash
GOVER=$(curl https://golang.org/VERSION?m=text)
wget https://golang.org/dl/${GOVER}.linux-amd64.tar.gz
rm -rf /usr/local/go && sudo tar -C /usr/local -xzf ${GOVER}.linux-amd64.tar.gz
```


#### Add Go path to global environment
Path to Go binaries will be added system-wide for all users.

Modify file ```/etc/environment``` and add ```:/usr/local/go/bin```


#### Add user-specific variable
Set of variables, which should be set for user(s) with need to build Go apps.

Additional libraries and modules will be stored in users folder.
```bash
cat >> ${HOME}/.bashrc <<EOL
export GOROOT=/usr/local/go
export GOPATH=\${HOME}/go
export GOBIN=\$GOPATH/bin
export PATH=\${PATH}:\${GOROOT}/bin:\${GOBIN}
EOL
source ${HOME}/.bashrc
```


### Install other required packages
As part of the overall process we need to rebuild Linux kernel as well as build certain packages for Sentinel dVPN Node.

That requires some additional development packeges to be installed.

```bash
apt install autoconf automake file g++ git libtool make unbound libunbound-dev libelf-dev build-essential pkg-config git bison flex libssl-dev bc git gcc make musl-dev autoconf automake file g++ git libtool make -y
```


## Rebuild Kernel

Let's download kernel and wireguard sources.

We will use those for new build.

```bash
git clone https://github.com/microsoft/WSL2-Linux-Kernel.git
git clone https://github.com/WireGuard/wireguard-tools.git
git clone https://github.com/WireGuard/wireguard-linux-compat.git
```

Now it is time to prepare kernel configuration for the build.

```bash
cd ~/WSL2-Linux-Kernel/
cp Microsoft/config-wsl .config
```

Edit **.config** and make sure values listed below are set to *y*:

```config
CONFIG_NETFILTER_XT_CONNMARK=y
CONFIG_NETFILTER_XT_TARGET_CONNMARK=y
CONFIG_NETFILTER_XT_TARGET_MASQUERADE=y
CONFIG_NETFILTER_XT_MATCH_CONNMARK=y
CONFIG_NF_NAT=y
CONFIG_NF_NAT_MASQUERADE=y
CONFIG_NFT_MASQ=y
CONFIG_NF_NAT_PROTO_GRE=y
CONFIG_MAY_USE_DEVLINK=y
CONFIG_NF_CT_PROTO_GRE=y
CONFIG_IP_NF_TARGET_MASQUERADE=y
CONFIG_IP6_NF_TARGET_MASQUERADE=y
CONFIG_NF_NAT_IPV4=y
CONFIG_NF_NAT_MASQUERADE_IPV4=y
CONFIG_NFT_MASQ_IPV4=y
CONFIG_NFT_MASQ_IPV6=y
CONFIG_NF_NAT_IPV6=y
CONFIG_NF_NAT_MASQUERADE_IPV6=y
```

Time to run build.

```bash
make -j $(nproc)
```

When you run kernel make some questions might show up on screen (it doesn't always happen). 
In case you will have questions, please make sure you answer *Y* to following:

```bash
IPv4 nf_tables support (NF_TABLES_IPV4) [Y/?] y
  IPv4 nf_tables route chain support (NFT_CHAIN_ROUTE_IPV4) [N/m/y/?] (NEW) Y

IPv4 NAT (NF_NAT_IPV4) [Y/?] (NEW) y
  IPv4 nf_tables nat chain support (NFT_CHAIN_NAT_IPV4) [N/m/y/?] (NEW) Y
  IPv4 masquerading support for nf_tables (NFT_MASQ_IPV4) [N/m/y/?] (NEW) Y

IPv6 nf_tables support (NF_TABLES_IPV6) [Y/?] y
  IPv6 nf_tables route chain support (NFT_CHAIN_ROUTE_IPV6) [N/m/y/?] (NEW) Y
  IPv6 nf_tables nat chain support (NFT_CHAIN_NAT_IPV6) [N/m/y/?] (NEW) Y
  IPv6 masquerade support for nf_tables (NFT_MASQ_IPV6) [N/m/y/?] (NEW)

Networking support (NET) [Y/n/?] y
  Network physical/parent device Netlink interface (NET_DEVLINK) [N/m/y/?] (NEW) Y
```

Once kernel build will finish you can build and install kernel modules.

```bash
make -j $(nproc) modules_install
```

Now as new kernel is built we need to shutdown Ubuntu instance. In PowerShel run following command:
```powershell
wsl --shutdown
```

Next step is to replace kernel. This will be done from *Windows Explorer*
Open following UNC path: **\\wsl$\Ubuntu-20.04\root\WSL2-Linux-Kernel\arch\x86\boot**

In that location you will find bzImage file. Copy this file to **C:\Windows\System32\lxss\tools** and rename it to **kernel**

Once it's done you can start Ubuntu WSL instance. It will boot up with new kernel.

Now it is time to build Wireguard components required to run Sentinel dVPN Node.

```bash
cd ~/wireguard-linux-compat/src
make -j $(nproc)
make install

cd ~/wireguard-tools/src
make -j $(nproc)
make install
```

After installation you can load Wireguard module.

```bash
modprobe wireguard
```


## Sentinel dVPN Node Deployment

### Build dVPN Node

First we download repository with dVPN Node sources.

```bash
git clone https://github.com/sentinel-official/dvpn-node.git
```

```bash
cd ${HOME}/dvpn-node/ && \
commit=$(git rev-list --tags --max-count=1) && \
git checkout $(git describe --tags ${commit})
```

```bash
make install
```

Additional component, which is required for node to operate properly is handshake service.
```bash
cd ${HOME}
git clone https://github.com/handshake-org/hnsd.git --branch=v1.0.0 --depth=1 && \
    cd hnsd/ && \
    bash autogen.sh && sh configure && make -j $(nproc)
mv hnsd ${HOME}/go/bin
```


### Configure dVPN Node

```bash
sentinelnode config init
sentinelnode wireguard config init
```

```bash
cd ${HOME}
openssl req -new -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -x509 -sha256 -days 365 -nodes -out ${HOME}/tls.crt -keyout ${HOME}/tls.key
mv ${HOME}/tls.crt ${HOME}/.sentinelnode
mv ${HOME}/tls.key ${HOME}/.sentinelnode
```

In **${HOME}/.sentinelnode/config.toml** you need to make some adjustments.

Define file where wallet information will be stored.

```toml
[keyring]
# Underlying storage mechanism for keys
backend = "file"

# Name of the key with which to sign
from = "dvpn-on-win10-wallet"
```
**NOTE:** *from* field is empty by default. Name assigned here is just an example and can be changed.


Specify price for bandwidth.
```toml
# Per Gigabyte price to charge against the provided bandwidth
price = "1500udvpn"
```
**NOTE:** THis is example price. Once network will grow pricing policy will adjust accordingly, so that can be changed in config.


Name your node. This field is required.
```toml
# Name of the node
moniker = "dvpn-on-win10"
```
**NOTE:** This is example name and can be changed to anything else.


Define URL of your node.

```toml
# API listen-address
listen_on = "0.0.0.0:53881"

# Public URL of the node
remote_url = "https://XXX.XXX.XXX.XXX:53881"
```
**NOTE:** In *remote_url* you have to replace XXX.XXX.XXX.XXX with your **public IP**. Use same port for *remote_url* as has been generated for *listen_on*. Please note that port number i sjust an example value and each deployment will have different port number generated when configuration is created.


Create wallet

```bash
sentinelnode keys add dvpn-on-win10-wallet
```
**NOTE:** Name of the wallet used in this command has to be the same as *from* field defined in **config.toml**


Once wallet is created you will see similar output.

```bash
operator: sent1...........
address: sentnode1..........

**Important** write this mnemonic phrase in a safe place
word word word word word word word word word word word word word word word word word word word word word word word word
```
At this point note line which contains *word word...* .. in real scenario it will contain seed words required to recover wallet, so it is very important.

**NOTE:** Before you start node you need to sent some $DVPN coins to wallet generated in this step. Send coins to *sent1...* address.


### Start dVPN Node
```bash
sentinelnode start
```

Once node is started you should see similar output.
```bash
root@WIN10-WSL-DVPN:~# sentinelnode start
2021-07-10T06:17:08-07:00 INF Reading the configuration file path=/root/.sentinelnode/config.toml
2021-07-10T06:17:08-07:00 INF Validating the configuration data={"chain":{"gas":200000,"gas_adjustment":1.05,"gas_prices":"0.1udvpn","id":"sentinelhub-2","rpc_address":"https://rpc.sentinel.co:443","simulate_and_execute":true},"handshake":{"enable":true,"peers":8},"keyring":{"backend":"file","from":"dvpn-on-win10-wallet"},"node":{"interval_set_sessions":120000000000,"interval_update_sessions":6900000000000,"interval_update_status":3300000000000,"listen_on":"0.0.0.0:53881","moniker":"dvpn-on-win10","price":"10000udvpn","provider":"","remote_url":"https://172.19.3.87:53881"}}
2021-07-10T06:17:08-07:00 INF Creating IPv4 pool CIDR=10.8.0.2/24
2021-07-10T06:17:08-07:00 INF Creating IPv6 pool CIDR=fd86:ea04:1115::2/120
2021-07-10T06:17:08-07:00 INF Initializing RPC HTTP client address=https://rpc.sentinel.co:443 endpoint=/websocket
2021-07-10T06:17:08-07:00 INF Initializing keyring backend=file name=sentinel
Enter keyring passphrase:
2021-07-10T06:17:11-07:00 INF Querying account address=sent1yx3pqxznqyyg4zq2upchlxw26avxc5msw5xqzc
2021-07-10T06:17:11-07:00 INF Fetching GeoIP location info...
2021-07-10T06:17:12-07:00 INF GeoIP location info city=City country=Country
2021-07-10T06:17:12-07:00 INF Performing internet speed test...
2021-07-10T06:17:25-07:00 INF Internet speed test result data={"download":"17096598","upload":"9307448"}
2021-07-10T06:17:25-07:00 INF Initializing VPN service type=1
2021-07-10T06:17:25-07:00 INF Starting VPN service type=1
[#] ip link add wg0 type wireguard
[#] wg setconf wg0 /dev/fd/63
[#] ip -4 address add 10.8.0.1/24 dev wg0
[#] ip -6 address add fd86:ea04:1115::1/120 dev wg0
[#] ip link set mtu 1420 up dev wg0
[#] iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE; ip6tables -A FORWARD -i wg0 -j ACCEPT; ip6tables -t nat -A POSTROUTING -o eth0 -j MASQUERADE;
2021-07-10T06:17:25-07:00 INF Opening the database path=/root/.sentinelnode/data.db
2021-07-10T06:17:25-07:00 INF Migrating database models...
2021-07-10T06:17:25-07:00 INF Initializing...
2021-07-10T06:17:25-07:00 INF Querying node address=sentnode1yx3pqxznqyyg4zq2upchlxw26avxc5mscz8e8w
2021-07-10T06:17:25-07:00 INF Updating node info...
2021-07-10T06:17:25-07:00 INF Preparing the transaction messages=1
2021-07-10T06:17:25-07:00 INF Querying account address=sent1yx3pqxznqyyg4zq2upchlxw26avxc5msw5xqzc
2021-07-10T06:17:26-07:00 INF Transaction info gas=60515 sequence=8
2021-07-10T06:17:26-07:00 INF Broadcasting the transaction size=307
2021-07-10T06:17:31-07:00 INF Transaction result code=0 codespace= height=1501367 tx_hash=2616B5B9EB1918D2E368BEA9B680D941B86368E73AF82D0E99DF009451AFA057
2021-07-10T06:17:31-07:00 INF Starting...
2021-07-10T06:17:31-07:00 INF Starting a job interval=3300000 name=update_status
2021-07-10T06:17:31-07:00 INF Starting a job interval=6900000 name=update_sessions
2021-07-10T06:17:31-07:00 INF Updating node status...
2021-07-10T06:17:31-07:00 INF Preparing the transaction messages=1
2021-07-10T06:17:31-07:00 INF Querying account address=sent1yx3pqxznqyyg4zq2upchlxw26avxc5msw5xqzc
2021-07-10T06:17:31-07:00 INF Starting a job interval=120000 name=set_sessions
2021-07-10T06:17:32-07:00 INF Transaction info gas=66568 sequence=9
2021-07-10T06:17:32-07:00 INF Broadcasting the transaction size=267
2021-07-10T06:17:37-07:00 INF Transaction result code=0 codespace= height=1501368 tx_hash=C59ED2FD9D7F28286171155861B948AABAD623231D4C3D2F4FE164B7415C49B0
```


## Network configuration

### Allow communication to WSL instance
WSL runs Linux instance using private IP addressing. In order to make node available to external world you need to allow communication on your Windows 10 computer.
```powershell
$wsl_ip = (wsl hostname -I).trim()
netsh interface portproxy add v4tov4 listenport=<API_PORT> connectport=<API_PORT> connectaddress=$wsl_ip
netsh interface portproxy add v4tov4 listenport=<WIREGUARD_PORT> connectport=<WIREGUARD_PORT> connectaddress=$wsl_ip
```
**NOTE:** <API_PORT> is port you can find in **${HOME}/.sentinelnode/config.toml**. <WIREGUARD_PORT> is port you can find in **${HOME}/.sentinelnode/wireguard.toml**.


### Router reconfiguration
In **${HOME}/.sentinelnode/config.toml** you added your public IP address as *remote_url* parameter. This IP and certain ports need to be redirected to IP address of your Windows 10 computer. Ports, which have to be opened and redirected are <API_PORT> and <WIREGUARD_PORT>.



## Troubleshooting

### Wireguard interface already exists

Error message
```bash
wg-quick: `wg0' already exists
Error: exit status 1
```

Fix
```bash
wg-quick down wg0
```


### Wireguard kernel module missing

Error message
```bash
[#] ip link add wg0 type wireguard
RTNETLINK answers: Operation not supported
Unable to access interface: Protocol not supported
[#] ip link delete dev wg0
Cannot find device "wg0"
Error: exit status 1
```

Fix
```bash
modprobe wireguard
```
