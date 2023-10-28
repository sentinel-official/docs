import {
  SentinelCore,
  Network,
  Guides,
  NodeSpawner,
} from './icons';

const MULTI_SECTIONS = [
  [
    {
      name: 'Sentinel Core',
      section: 'core-sdk',
      description: 'Sentinel Chain Development documentation.',
    },
    {
      name: 'Guides',
      section: 'guides',
      description: 'Guides to provide bandwidth and validate',
    },
    {
      name: 'Tools',
      section: 'tools',
      description: 'Tools to facilitate the interaction with the blockchain',
    }
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
    id: 'sentinel-core',
    icon: SentinelCore,
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
    name: 'Guides',
    id: 'guides',
    icon: Guides,
    section: 'guides',
  },
  {
    name: 'dVPN Node Setup',
    id: 'node-setup',
    icon: Guides,
    section: 'guides',
  },
  {
    name: 'Validator Setup',
    id: 'validator-setup',
    icon: Guides,
    section: 'guides',
  },

  // Dropdown Tools
  {
    name: 'Node Spawner',
    id: 'tools',
    icon: NodeSpawner,
    section: 'tools',
  },
];

export { MULTI_SECTIONS, SECTIONS };
