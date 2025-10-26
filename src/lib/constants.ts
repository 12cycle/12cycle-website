import type {
  ExternalLink,
  ExternalLinkId,
  SectionMeta,
  SocialLink,
  StatCard,
  TokenAllocation,
  HowToBuyStep,
  RoadmapStage,
} from './types'

export const SITE_NAME = '12Cycle'
export const TOKEN_SYMBOL = '12C'
export const CONTRACT_ADDRESS = '0xac9aa6f04494e08cb182f2a56b9ceae9b9154444'
export const CHAIN_NAME = 'BNB Chain'
export const TOTAL_SUPPLY = 1_000_000_000
export const SITE_URL = 'https://12cycle.github.io/12cycle-website/'
export const SITE_DESCRIPTION =
  '12Cycle is expanding the on-chain liquidity loop with cinematic storytelling, live liquidity telemetry, and community-first tokenomics.'
export const OG_IMAGE_URL = `${SITE_URL}og-image.png`
export const TWITTER_HANDLE = '@12C_World'

export const EXTERNAL_LINKS: Record<ExternalLinkId, ExternalLink> = {
  fourMeme: {
    id: 'fourMeme',
    label: 'Four.meme',
    href: 'https://four.meme/token/0xac9aa6f04494e08cb182f2a56b9ceae9b9154444',
    description: 'Token tracker on four.meme',
  },
  dexscreener: {
    id: 'dexscreener',
    label: 'Dexscreener',
    href: 'https://dexscreener.com/bsc/0xac9aa6f04494e08cb182f2a56b9ceae9b9154444',
    description: 'Live liquidity and price chart',
  },
  x: {
    id: 'x',
    label: 'X (Twitter)',
    href: 'https://x.com/12C_World',
    description: 'Follow 12Cycle updates on X',
  },
  pancakeswap: {
    id: 'pancakeswap',
    label: 'PancakeSwap',
    href: 'https://pancakeswap.finance/swap',
    description: 'Swap tokens on PancakeSwap',
  },
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'x',
    label: 'X (Twitter)',
    href: EXTERNAL_LINKS.x.href,
    description: EXTERNAL_LINKS.x.description,
    handle: TWITTER_HANDLE,
  },
  {
    id: 'fourMeme',
    label: 'Four.meme',
    href: EXTERNAL_LINKS.fourMeme.href,
    description: EXTERNAL_LINKS.fourMeme.description,
  },
]

export const NAV_SECTIONS: SectionMeta[] = [
  { id: 'hero', label: 'Overview', href: '#hero' },
  { id: 'stats', label: 'Key Stats', href: '#stats' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'tokenomics', label: 'Tokenomics', href: '#tokenomics' },
  { id: 'how-to-buy', label: 'How to Buy', href: '#how-to-buy' },
  { id: 'chart', label: 'Chart', href: '#chart' },
  { id: 'community', label: 'Community', href: '#community' },
  { id: 'roadmap', label: 'Roadmap', href: '#roadmap' },
]

export const KEY_STATS: StatCard[] = [
  {
    id: 'chain',
    label: 'Primary Chain',
    value: CHAIN_NAME,
    description:
      'Optimized for low fees and fast transactions, ideal for on-chain loops.',
  },
  {
    id: 'liquidity',
    label: 'Liquidity Pools',
    value: 'Coming Soon',
    description:
      'Live pool data will be surfaced as the protocol activates cross-cycle swaps.',
    href: EXTERNAL_LINKS.dexscreener.href,
    hrefLabel: 'Track on Dexscreener',
  },
  {
    id: 'supply',
    label: 'Token Supply',
    value: TOTAL_SUPPLY.toLocaleString('en-US'),
    description:
      'Fixed supply powering the 12-cycle distribution. Detailed tokenomics arriving shortly.',
  },
  {
    id: 'security',
    label: 'Contract Integrity',
    value: 'Audits Pending',
    description:
      'Independent security partners are reviewing the core loop contracts before mainnet launch.',
    href: EXTERNAL_LINKS.fourMeme.href,
    hrefLabel: 'View Contract Details',
  },
]

export const TOKEN_ALLOCATION: TokenAllocation[] = [
  {
    id: 'liquidity',
    label: 'Liquidity + DEX Pairing',
    value: 38,
    description: 'Reserved to seed deep liquidity across the initial 12-cycle pools.',
    color: '#38bdf8',
    accentClass: 'from-sky-400/70 to-sky-500/40',
  },
  {
    id: 'ecosystem',
    label: 'Ecosystem Growth',
    value: 22,
    description: 'Partnerships, marketing beats, and community initiatives.',
    color: '#c084fc',
    accentClass: 'from-fuchsia-400/70 to-fuchsia-500/40',
  },
  {
    id: 'rewards',
    label: 'Cycle Rewards',
    value: 18,
    description: 'Incentives for active loop participants staking and compounding.',
    color: '#34d399',
    accentClass: 'from-emerald-400/70 to-emerald-500/40',
  },
  {
    id: 'treasury',
    label: 'Protocol Treasury',
    value: 12,
    description: 'Multi-sig governed reserve supporting audits, tooling, and R&D.',
    color: '#60a5fa',
    accentClass: 'from-blue-400/70 to-blue-500/40',
  },
  {
    id: 'team',
    label: 'Core Contributors',
    value: 10,
    description: 'Vested issuance aligning builders with the long-term 12Cycle vision.',
    color: '#8b5cf6',
    accentClass: 'from-violet-400/70 to-violet-500/40',
  },
]

export const HOW_TO_BUY_STEPS: HowToBuyStep[] = [
  {
    id: 'wallet',
    title: 'Set up your wallet',
    description:
      'Install a Web3 wallet like MetaMask or Rabby, configure it for the BNB Chain network, and secure your seed phrase.',
    icon: 'wallet',
    highlight: 'BNB Chain RPC ready',
  },
  {
    id: 'fund',
    title: 'Fund with BNB',
    description:
      'Bridge or transfer BNB into your wallet to cover {TOKEN_SYMBOL} swaps and gas fees along the 12Cycle pools.',
    icon: 'coins',
    highlight: 'Keep a buffer for gas',
  },
  {
    id: 'swap',
    title: 'Swap on PancakeSwap',
    description:
      'Visit the official PancakeSwap pair, connect your wallet, and trade BNB for {TOKEN_SYMBOL}. Confirm slippage settings before executing.',
    icon: 'swap',
    highlight: 'Use the verified contract',
    href: EXTERNAL_LINKS.pancakeswap.href,
    hrefLabel: 'Open PancakeSwap',
  },
  {
    id: 'track',
    title: 'Track your position',
    description:
      'Add the token contract to your wallet, monitor liquidity on Dexscreener, and join the {SITE_NAME} community for cycle updates.',
    icon: 'radar',
    highlight: 'Stay in sync with loops',
    href: EXTERNAL_LINKS.dexscreener.href,
    hrefLabel: 'View live chart',
  },
]

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    id: 'phase-0',
    title: 'Genesis Loop Calibration',
    description:
      'Architect protocol scaffolding, align launch partners, and validate the multi-cycle flow with a seeded beta community.',
    quarter: 'Q1 2025',
    status: 'completed',
    items: [
      'Launch brand identity and single-page teaser',
      'Deploy base smart contracts to testnet',
      'Recruit initial community validators and liquidity partners',
    ],
  },
  {
    id: 'phase-1',
    title: 'Cycle Launch & Liquidity Sync',
    description:
      'Initiate the first 12-cycle loop, onboard market makers, and surface live telemetry to the public dashboard.',
    quarter: 'Q2 2025',
    status: 'in-progress',
    items: [
      'Deploy liquidity pools and bonding curves to mainnet',
      'Open staking and reward distribution portal',
      'Release live chart integrations and on-chain analytics',
    ],
  },
  {
    id: 'phase-2',
    title: 'Ecosystem Amplification',
    description:
      'Layer in partner apps, automate cross-cycle routing, and scale community governance as volume accelerates.',
    quarter: 'Q3 2025',
    status: 'upcoming',
    items: [
      'Launch partner integrations with DEX tooling',
      'Ship governance portal and quadratic voting flows',
      'Roll out advanced routing strategies for compounding loops',
    ],
  },
  {
    id: 'phase-3',
    title: 'Global Expansion & Data Streams',
    description:
      'Expand cross-chain pathways, expose data APIs, and prepare for real-world onramps into 12Cycle liquidity.',
    quarter: 'Q4 2025',
    status: 'upcoming',
    items: [
      'Bridge to secondary chains and L2 ecosystems',
      'Launch public analytics API and data sandbox',
      'Integrate fiat onramps and institutional liquidity providers',
    ],
  },
]
