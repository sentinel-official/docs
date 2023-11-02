---
title: Overview & Setup
description: What it is, Where to obtain it, and how to install it
sidebar_position: 1
---

# Node Spawner

Node Spawner is an intuitive web interface designed for hosting Sentinel dVPN nodes, whether local or remote, developed by [TkdAlex](https://github.com/Tkd-Alex), a dedicated community member and a core contributor to the Meile project.

You can find the latest release on [GitHub](https://github.com/Tkd-Alex/dvpn-node-spawner).

# Requirements

- Python 3.10 or above

# Installation

Clone the repository

```bash
git clone https://github.com/Tkd-Alex/dvpn-node-spawner.git
```

Go into the folder

```bash
cd dvpn-node-spawner
```

Create and activate a virtual enviroinment

```bash
python -m venv venv
source venv/bin/activate
```

Upgrade pip (if required) and install the requirements

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

Execute the script

```bash
python main.py
```

You will be guided through the process of setting up your local server:

<details>
<summary>Local sever fields</summary>
<p>

```bash
[?] Listen address: 127.0.0.1
[?] Listen port: 3845
[?] Would do you like to configure a simple authentication? (Y/n) (True): y

[?] Please provide a username: admin
[?] Please provide a password: **********
[?] Please type the password again: **********
```

</p>
</details>

You will receive the following output, confirming that your local server is now prepared.

<details>
<summary>Output</summary>
<p>

```bash
 * Serving Flask app 'main'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:3845
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: XXX-XXX-XXX
```

</p>
</details>

Sure, here's a corrected and improved version of your sentence:

Go to `http://127.0.0.1:3845` and enter your chosen username and password.

You will be taken to Node Spawner dashboard

![](/img/node-spawner/dashboard-1.png)

You are now ready to proceed with the node installation!