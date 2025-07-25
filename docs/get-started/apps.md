---
title: dVPN Apps
description: A list of apps entirely built on Sentinel
sidebar_position: 4
---

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from '../../src/components/HomepageComponents';

import {
  Decentr,
  Carbon,
  Meile,
  SentinelCore,
} from '../../src/icons';

The following dVPN apps are built on top of the Sentinel Protocol. This is why we refer to Sentinel as a network of independent dVPN (decentralized Virtual Private Network) applications, rather than just a single consumer-facing dVPN.

<Section id="web-sdks" hasSubSections>
    <Section
              title="⚙️ White-labels that build their app on the Sentinel Protocol"
              id="core-sdks"
              HeadingTag="h4"
            >
    <Card
        title="Sentinel Shield dVPN"
        description="Open source, p2p, trustless architecture powers one of the most decentralized consumer-facing DePIN applications ever created. Everything from peer discovery to connection authorization is through the blockchain; encrypted and safely in your hands, not in a VPN company's database."
        to="https://shield.sentinel.co/"
        icon={<SentinelCore />}
        svgFile=""
    />
    <Card
        title="Meile dVPN"
        description="Meile is a decentralized VPN solution built on top of the Sentinel Blockchain. Utilizing blockchain technology alongside community hosted decentralized nodes creates a private and censorship resistant network for everyone."
        to="https://mathnodes.com/index.php/meile-dvpn-client-linux-os-x/"
        icon={<Meile />}
        svgFile=""
    />
    <Card
        title="DVPN by Norse Labs"
        description="DVPN is built with uncompromising privacy and security in mind. Leveraging the blockchain technology from Sentinel and advanced encryption, it follows a Zero Trust model — users don’t have to rely on us, as independent entities manage the servers, making tracking almost impossible."
        to="https://norselabs.io/"
        svgFile="/icons/norse-labs.svg"
    />
    <Card
        title="Independent dVPN"
        description="Independent dVPN is a Turkish free and fully decentralized service created by volunteers who prioritize digital human rights, offering powerful features like WireGuard and V2Ray support."
        to="https://independentdvpn.com"
        icon=""
        svgFile="/icons/independentdvpn.svg"
    />
    <Card
        title="VALT"
        description="Take charge of your online privacy with VALT. Protect your digital footprint and earn rewards for your data. Our advanced VPN, powered by Sentinel, ensures top-notch security, keeping your information safe and inaccessible to prying eyes."
        to="http://valtdata.com/"
        icon=""
        svgFile="/icons/valt.svg"
    />
    <Card
        title="encryptSIM"
        description="encryptSIM are the creators of the world's first Web3 eSIMs. Their application, which is still in its public beta testing phase, provides no-cost dVPN service to anybody with an active eSIM plan."
        to="https://www.encryptsim.com/"
        svgFile="/icons/encryptsim.svg"
    />
    <Card
        title="DVPN Telegram Bot"
        description="An innovative mini-app created by Norse Labs and powered by the Sentinel blockchain. It lets you securely and privately connect to thousands of dVPN servers worldwide, all for free! Since it’s used via Telegram, there’s no need to download any additional apps."
        to="https://norselabs.io/products/dvpn-bot"
        svgFile="/icons/dvpn-telegram-bot.svg"
    />
    </Section>
</Section>

<!-- <Section id="web-sdks" hasSubSections>
    <Section
              title="⚙️ 3rd party apps that have Sentinel integrated"
              id="core-sdks"
              HeadingTag="h4"
            >
    <Card
        title="Decentr Browser"
        description="Decentr is a browser with unparalleled speed, security and utility. Included in the browser release is Sentinel dVPN and Adblock."
        to="https://decentr.net/"
        icon={<Decentr />}
        svgFile=""
    />
    </Section>
</Section> -->