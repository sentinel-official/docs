import {
  SentinelCore,
  Network,
  Guide,
  Nodes,
  TerminalIcon,
  ModulesIcon,
} from './icons';

const MULTI_SECTIONS = [
  [
    {
      name: 'Sentinel Core',
      section: 'core-sdk',
      description: 'Sentinel Chain Development documentation.',
    },
    {
      name: 'User Guides',
      section: 'guides',
      description: 'Guides to provide bandwidth and validate',
    },
  ],
];

const SECTIONS = [
  // no sections for default section, i.e; home
  {
    id: 'default',
    section: false,
  },
  // {
  //   id: 'guides',
  //   section: false,
  // },

  // Dropdown Sentinel Core
  {
    name: 'Sentinel Hub',
    id: 'sentinel-hub',
    icon: SentinelCore,
    section: 'core-sdk',
  },
  {
    name: 'Sentinel CLI',
    id: 'sentinel-cli',
    icon: TerminalIcon,
    section: 'core-sdk',
  },
  {
    name: 'dVPN Nodes',
    id: 'dvpn-nodes',
    icon: Nodes,
    section: 'core-sdk',
  },
  {
    name: 'SDKs',
    id: 'sdk',
    icon: ModulesIcon,
    section: 'core-sdk',
  },
  {
    name: 'Networks',
    id: 'networks',
    icon: Network,
    section: 'core-sdk',
  },

  // Dropdown Sentinel Guides
  {
    name: 'Run a dVPN Node',
    id: 'dvpn-node-setup',
    icon: Guide,
    section: 'guides',
  },
  {
    name: 'Run a Full Node',
    id: 'full-node-setup',
    icon: Guide,
    section: 'guides',
  },
  {
    name: 'Node Monitoring',
    id: 'node-monitoring',
    icon: Guide,
    section: 'guides',
  },
];

export { MULTI_SECTIONS, SECTIONS };
