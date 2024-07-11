---
title: Setup & Configuration
description: A step-by-step procedure to prepare you REStake service
sidebar_position: 2
---

# Setup & Configuration

## Install Docker

Install Docker Engine from official [site](https://docs.docker.com/engine/)

## Create a mnemonic you will use only for Restake.app

Download `Sentinel CLI` from [here](https://github.com/sentinel-official/cli-client/releases) and install it by typing:

```bash
wget https://github.com/sentinel-official/cli-client/releases/download/v0.X.X/sentinelcli_linux_x86_64.tar.gz
tar xvzf sentinelcli_linux_x86_64.tar.gz
sudo mv ${HOME}/sentinelcli /usr/local/bin
```

To create a mnemonic type:

```bash
sentinelcli keys add keyname
```

Create a passphrase and take note of both mnemonic and operator address (also make sure to **add funds** into it)

## Clone and configure Restake

Clone the repository and copy the sample .env file ready for your mnemonic

```bash
git clone https://github.com/eco-stake/restake.git
```

Go into Restake directory

```bash
cd restake
```

Create your `.env` file from the sample `.env.sample`

```bash
cp .env.sample .env
```

Open `.env` file:

```bash
sudo nano .env
```

Add your mnemonic:

```bash
MNEMONIC=my hot wallet seed words here that has minimal funds
```

Open the `Dockerfile` and if the node version is not the last, update it manually (I put 20 instead 18)

```bash
sudo nano Dockerfile
```

Pre-build your Docker containers with the following commands:

```bash
docker compose run --rm app npm install
docker compose build --no-cache
```

Go into `src` directory

```bash
cd src/
```

Create your `.networks.local.json` file from the sample .networks.local.json.sample and open it:

```bash
cp networks.local.json.sample networks.local.json
sudo nano networks.local.json
```

Replace the file with this code block and, on `restUrl` field, select your desired one from [here](https://cosmos.directory/sentinel/nodes) and click on REST tab:

```bash title=".networks.local.json"
{
  "sentinel": {
    "prettyName": "Sentinel 881",
    "restUrl": [
      "https://api.sentinel.quokkastake.io:443" 
    ],
    "autostake": {
      "correctSlip44": false
    }
  }
}
```

## Running the script

Run this command adding as last word sentinel which is the network we are going to enable

```bash
sudo docker compose run --rm app npm run autostake sentinel
```

You should see something like that:

```bash
> restake@0.1.0 autostake
> node scripts/autostake.mjs sentinel

[09:30:19.711] ⚛
[09:30:20.268] Loaded Sentinel 881
[09:30:20.458] Bot address is sent1eyhgvkqu48luluafpfn4myg5jr04g6zje9zkkf
[09:30:20.459] Not an operator
[09:30:20.460] Autostake finished
```

The message `"Not an Operator"` is fine as we have to submit our operator to Chain Registry

## Setting up a timer to run the script on a schedule

You should setup your script to run at the same time each day. We will use the methos based on systemd-timer which allows to run a one-off service with specified rules. This method is arguably preferable to crontab, which we will not cover.

### Create a systemd unit file

The unit file describes the application to run. We define a dependency with the timer with the Wants statement.
Create the `restake.service` file

```bash
sudo nano /etc/systemd/system/restake.service
```

Add the following code block

<details>
<summary>restake.service</summary>
<p>

```bash title="/etc/systemd/system/restake.service"
[Unit]
Description=restake service with docker compose
Requires=docker.service
After=docker.service
Wants=restake.timer

[Service]
Type=oneshot
WorkingDirectory=/home/trinity/restake
ExecStart=/usr/bin/docker compose run --rm app npm run autostake sentinel

[Install]
WantedBy=multi-user.target
```

</p>
</details>

### Create a systemd timer file

The timer file defines the rules for running the restake service every hour. All rules are described in the [systemd documentation](https://www.freedesktop.org/software/systemd/man/systemd.timer.html).

Create the `restake.timer` file

```bash
sudo nano /etc/systemd/system/restake.timer
```

Add the following code block

<details>
<summary>restake.timer</summary>
<p>

```bash title="/etc/systemd/system/restake.timer"
[Unit]
Description=Restake bot timer

[Timer]
AccuracySec=1min
OnCalendar=*-*-* *:00:00

[Install]
WantedBy=timers.target
```

</p>
</details>

### Enable and start the 2 created services

```bash
sudo systemctl enable restake.service
sudo systemctl enable restake.timer
sudo systemctl start restake.timer
```

**Check the restake.timer status**

With `systemctl`

```bash
sudo systemctl status restake.timer
```

Or with `journalctl` in real time:

```bash
sudo journalctl -u restake.service -f --output=cat
```

You should see something like that:

```bash
● restake.timer - Restake bot timer
     Loaded: loaded (/etc/systemd/system/restake.timer; enabled; vendor preset: enabled)
     Active: active (waiting) since Thu 2023-07-13 12:24:40 UTC; 4min 19s ago
    Trigger: Thu 2023-07-13 13:00:00 UTC; 30min left
   Triggers: ● restake.service

Jul 13 12:24:40 trinity-management systemd[1]: Started Restake bot timer.
```

**Check the restake.service status**

```bash
sudo systemctl status restake.service
```

You should see something like that:

```bash
● restake.service - restake service with docker compose
     Loaded: loaded (/etc/systemd/system/restake.service; enabled; vendor preset: enabled)
     Active: inactive (dead)
TriggeredBy: ● restake.timer
```

Now you are ready to submit your operator to Restake.app