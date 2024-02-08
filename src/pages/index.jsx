import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';
import { DyteButton } from '@dytesdk/react-ui-kit';

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from '../components/HomepageComponents';

// Icons
import {
  APIReferenceIcon,
  TerminalIcon,
  Guide,
  Network,
  SentinelCore,
  Download,
  GrowthDao,
  Wallet,
  DvpnCoin,
  Whitepaper,
} from '../icons';

export default function Homepage() {
  const router = useHistory();

  return (
    <Layout
      description="The Sentinel blockchain is a decentralized network, ran by 80+ validators and full nodes, with many front-ends and development teams on it. 🚀"
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <div className='margin-bottom--lg'>
            <h2>Sentinel Docs</h2>
            <p>
              The Sentinel blockchain is a decentralized network, ran by 80+ validators and full nodes, with many front-ends and development teams on it. Explore our docs and examples to quickly learn, develop & integrate with the Sentinel blockchain.
            </p>
            <DyteButton onClick={() => router.push('getting-started/introduction')}>
              Get Started &rarr;
            </DyteButton>
          </div>

          <Section title="Learn about Sentinel dVPN">
            <Card
              title="What is Sentinel dVPN?"
              description="Sentinel is a decentralized virtual private network (dVPN) built on top of the Cosmos blockchain. It allows users to connect to the internet privately and securely by routing their traffic through a network of distributed nodes."
              to="/getting-started/introduction"
              icon={<SentinelCore />}
            />
            <Card
              title="The DVPN Coin"
              description="The DVPN coin is a governance coin that allows staked coin holders to decide the future of the protocol, including every implementation detail. "
              to="/getting-started/dvpn-coin"
              icon={<DvpnCoin />}
              svgFile=""
            />
            <Card
              title="Whitepaper"
              description="For a comprehensive examination of this subject and a detailed analysis, please feel free to review our white paper, which is accessible."
              to="/getting-started/whitepaper"
              icon={<Whitepaper />}
            />
          </Section>

          <Section title="The dVPN Experience">
            <Card
              title="Download dVPN apps"
              description="A comprehensive list of decentralized solutions built on top of Sentinel blockchain. These solutions enable you to access hundreds of community-managed nodes worldwide, providing a private and secure gateway to the internet."
              to="/getting-started/apps/"
              icon={<Download />}
              svgFile=""
            />
            <Card
              title="Wallets"
              description="Learn about how to start using blockchain apps, stake your coins and manage them in just one wallet."
              to="/getting-started/wallets"
              icon={<Wallet />}
            />
            <Card
              title="Staking"
              description="Discover all you need to know about staking your DVPN coins, from selecting the ideal validator to streamlining the process with the REStake app.."
              to="/getting-started/staking-delegating"
              icon={<GrowthDao />}
              svgFile=""
            />
          </Section>

          <Section title="Developers" id="web-sdks" hasSubSections>
            <Section
              title="⚙️ Chain Development"
              id="core-sdks"
              HeadingTag="h4"
              description={
                <>
                  Everything that is needed to learn about the Sentinel core chain development.
                </>
              }
            >
              <Card
                title="Sentinel Hub"
                description="Getting started with Sentinel codebase"
                to="/sentinel-hub/"
                icon={<SentinelCore />}
              />
              <Card
                title="Sentinel CLI"
                description="A command line tool to interact with Sentinel Blockchain"
                to="/sentinel-cli"
                icon={<TerminalIcon />}
                svgFile=""
              />
              <Card
                title="Networks"
                description="Explore the Sentinel network."
                to="/networks/"
                icon={<Network />}
                svgFile=""
              />
            </Section>
          </Section>

          <Section title="📜 User Guides">
            <Card
              title="Run a Node"
              description="Learn on how deploy a Sentinel Node"
              to="/node-setup"
              icon={<Guide />}
              svgFile=""
            />
            <Card
              title="Run a Validator"
              description="Set up a full node and Validate the Network"
              to="/validator-setup"
              icon={<Guide />}
              svgFile=""
            />
            <Card
              title="API Reference"
              description="Sentinel RPC and LCD API Reference"
              to="/apis"
              icon={<APIReferenceIcon />}
            />
          </Section>

        </div>
      </div>
    </Layout>
  );
}
