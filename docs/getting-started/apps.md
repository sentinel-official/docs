---
title: dVPN Apps 
description: A list of apps entirely built on Sentinel
sidebar_position: 7
---

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from '../../src/components/HomepageComponents';

import {
  Decentr,
  Carbon,
  Meile,
  Basedvpn,
  Foxta,
  Solar,
} from '../../src/icons';

The following dVPN apps are built on top of the Sentinel Protocol. This is why we refer to Sentinel as a network of independent dVPN (decentralized Virtual Private Network) applications, rather than just a single consumer-facing dVPN.

<Section id="web-sdks" hasSubSections>
    <Section
              title="⚙️ White-labels that build their app on the Sentinel Protocol"
              id="core-sdks"
              HeadingTag="h4"
              description={
                <>
                  Everything that is needed to learn about the Sentinel core chain development. 
                </>
              }
            >
    <Card
        title="Solar dVPN"
        description="SOLAR dVPN is a blockchain-based decentralized VPN service. Using mobile & desktop apps, it allows you to access hundreds of community-managed servers all around the world and use them as your private & secure gateway to the Internet."
        to="https://dvpn.solar/"
        icon={<Solar />}
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
        title="BasedVPN"
        description="BasedVPN is an entirely free and fully decentralized service created by volunteers who prioritize digital human rights, offering powerful features like WireGuard and V2Ray support to break through internet censorship, even in countries like China."
        to="https://basedapps.co.uk/"
        icon={<Basedvpn />}
        svgFile=""
    />
    </Section>
</Section>

<Section id="web-sdks" hasSubSections>
    <Section
              title="⚙️ 3rd party apps that have Sentinel integrated"
              id="core-sdks"
              HeadingTag="h4"
              description={
                <>
                  Apps that Integrates Sentinel among their functions. 
                </>
              }
            >
    <Card
        title="Decentr Browser"
        description="Decentr is a browser with unparalleled speed, security and utility. Included in the browser release is Sentinel dVPN and Adblock."
        to="https://decentr.net/"
        icon={<Decentr />}
        svgFile=""
    />
    <Card
        title="Carbon Browser"
        description="Carbon is a decentralized browser with AdBlock, Sentinel dVPN, Crypto Wallet, 100% Privacy and many other features."
        to="https://carbon.website/"
        icon={<Carbon />}
        svgFile=""
    />
    <Card
        title="Foxta - dVPN Private Browser"
        description="Foxta is a Private Browser with Sentinel VPN Integration and Wireguard protocol integration."
        to="https://play.google.com/store/apps/details?id=com.ryn.vpn.privatedns.proxy.fast.mini.web.browser&pli=1"
        icon={<Foxta />}
        svgFile=""
    />
    </Section>
</Section>