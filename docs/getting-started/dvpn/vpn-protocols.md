---
title: VPN Protocols
sidebar_position: 2
---

## V2Ray Networking Tool

The landscape of interference, blocking, and jamming technologies has evolved over the years, gradually challenging traditional VPNs, SSH tunneling, and other internet access methods. As a result, prominent entities utilize diverse measures to interfere, rendering it increasingly difficult to access geo-banned websites. This necessitates the development of evasive and masking internet technology, and that's where V2Ray comes in.

The Sentinel dVPN team has diligently worked on various VPN protocols and proxies, including V2Ray, to enhance privacy and security. V2Ray has emerged as a highly proficient network tool in recent years, renowned for its powerful features and effective firewall bypass capabilities.

Sentinel dVPN leverages V2Ray's camouflage capabilities to package traffic through the firewall using common HTTPS/TLS, significantly reducing the likelihood of V2Ray nodes being blocked or interfered with. This approach ensures a stable internet experience. It's important to note that V2Ray, in itself, is not a standalone protocol or circumvention system. Similar to how Sentinel dVPN forms an ecosystem for dVPN applications, V2Ray serves as an open-source framework allowing one or more proxies to run, incorporating various layered proxy protocols, transports, and obfuscation techniques.

## V2Ray features

- **Multiple Inbound/Outbound Proxies:** Each V2Ray instance supports multiple inbound and outbound protocols simultaneously, with each protocol functioning independently.
- **Customizable Routing:** Incoming traffic can be directed to different outbounds based on routing configurations, making it easy to route traffic based on target region or domain.
- **Multiple Protocols:** V2Ray supports various protocols, including Socks, HTTP, Shadowsocks, VMess, etc., with each protocol having its own transport like TCP, mKCP, WebSocket, etc.
- **Obfuscation:** V2Ray incorporates built-in obfuscation to conceal traffic within TLS and can run concurrently with web servers.
- **Reverse Proxy:** General support for reverse proxy, enabling the creation of tunnels to localhost.
- M**ultiple Platforms:** V2Ray runs natively on Windows, Mac OS, Linux, and more. Additionally, third-party support is available for mobile platforms.

For more in-depth information on V2Ray, you can explore the [Project V Website](https://www.v2ray.com/en).