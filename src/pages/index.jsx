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
  P2pCoin,
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
            The Sentinel P2P blockchain is a layer-one peer-to-peer bandwidth marketplace DePIN blockchain which is used to power services like decentralized VPNs (dVPNs) and training data acquisition for AI models. Ran by 80+ validators and full nodes, with many front-ends and development teams on it. Explore our docs and examples to quickly learn, develop & integrate with the Sentinel blockchain.
            </p>
            <DyteButton onClick={() => router.push('get-started/introduction')}>
              Get Started &rarr;
            </DyteButton>
          </div>

          <Section title="Learn about Sentinel P2P">
            <Card
              title="What is Sentinel P2P?"
              description="Sentinel is a decentralized virtual private network (P2P) built on top of the Cosmos blockchain. It allows users to connect to the internet privately and securely by routing their traffic through a network of distributed nodes."
              to="/get-started/introduction"
              icon={<SentinelCore />}
            />
            <Card
              title="The P2P Coin"
              description="The P2P coin is a governance coin that allows staked coin holders to decide the future of the protocol, including every implementation detail. "
              to="/p2p-coin"
              icon={<P2pCoin />}
              svgFile=""
            />
            <Card
              title="Whitepaper"
              description="For a comprehensive examination of this subject and a detailed analysis, please feel free to review our white paper, which is accessible."
              to="/get-started/whitepaper"
              icon={<Whitepaper />}
            />
          </Section>

          <Section title="The dVPN Experience">
            <Card
              title="dVPN apps"
              description="A comprehensive list of decentralized solutions built on top of Sentinel blockchain. These solutions enable you to access hundreds of community-managed nodes worldwide, providing a private and secure gateway to the internet."
              to="/get-started/apps/"
              icon={<Download />}
              svgFile=""
            />
            <Card
              title="Wallets"
              description="Learn about how to start using blockchain apps, stake your coins and manage them in just one wallet."
              to="/get-started/wallets"
              icon={<Wallet />}
            />
            <Card
              title="Staking"
              description="Discover all you need to know about staking your P2P coins, from selecting the ideal validator to streamlining the process with the REStake app.."
              to="/p2p-coin/staking/concepts"
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
              title="Run a dVPN Node"
              description="Learn how to deploy a dVPN Node to provide bandwidth and earn P2P coins."
              to="/dvpn-node-setup"
              icon={<Guide />}
              svgFile=""
            />
            <Card
              title="Run a Full Node & Validate"
              description="Learn how to set up a Full Node and effectively communicate with the Sentinel Blockchain."
              to="/full-node-setup"
              icon={<Guide />}
              svgFile=""
            />
            <Card
              title="Node Monitoring"
              description="Learn how to monitor your node"
              to="/node-monitoring"
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
