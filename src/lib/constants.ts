import type {
  ExternalLink,
  ExternalLinkId,
  SectionMeta,
  SocialLink,
  StatCard,
  TokenAllocation,
  HowToBuyStep,
  RoadmapStage,
  TeamRole,
  Partner,
  LegalSection,
} from './types'

export const SITE_NAME = '12Cycle'
export const SITE_TITLE = '12Cycle (12C)'
export const TOKEN_SYMBOL = '12C'
export const CONTRACT_ADDRESS = '0xac9aa6f04494e08cb182f2a56b9ceae9b9154444'
export const CHAIN_NAME = 'BNB Chain'
export const TOTAL_SUPPLY = 1_000_000_000
export const SITE_URL = 'https://12cycle.github.io/12cycle-website/'
export const SITE_DESCRIPTION =
  '12Cycle fuses Eastern and Western zodiac wisdom into a Proof of Culture protocol—minting soulbound destiny profiles, rewarding cultural contributions, and funding a fair-launch ecosystem on BNB Chain.'
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
  whitepaper: {
    id: 'whitepaper',
    label: 'Whitepaper',
    href: 'https://12cycle-world-whitepaper.gitbook.io/12cycle.world.whitepaper-docs/',
    description: 'Explore the full 12C ecosystem narrative',
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
  {
    id: 'whitepaper',
    label: 'Whitepaper',
    href: EXTERNAL_LINKS.whitepaper.href,
    description: EXTERNAL_LINKS.whitepaper.description,
  },
]

export const NAV_SECTIONS: SectionMeta[] = [
  { id: 'hero', label: 'Overview', href: '#hero' },
  { id: 'stats', label: 'Signals', href: '#stats' },
  { id: 'ecosystem', label: 'Ecosystem', href: '#ecosystem' },
  { id: 'architecture', label: 'Architecture', href: '#architecture' },
  { id: 'tokenomics', label: 'Token Economy', href: '#tokenomics' },
  { id: 'chart', label: 'Chart', href: '#chart' },
  { id: 'poc-flow', label: 'PoC Flow', href: '#poc-flow' },
  { id: 'governance', label: 'Governance', href: '#governance' },
  { id: 'roadmap', label: 'Roadmap', href: '#roadmap' },
  { id: 'team', label: 'Team', href: '#team' },
  { id: 'legal', label: 'Legal', href: '#legal' },
]

export const KEY_STATS: StatCard[] = [
  {
    id: 'identity',
    label: 'Identity Standard',
    value: 'SBT-12C',
    description:
      'Soulbound destiny profiles inscribe Saju and astrology data on BNB Chain, locking each cultural fingerprint.',
  },
  {
    id: 'destiny',
    label: 'Destiny Engine',
    value: 'Proof of Culture',
    description:
      'AI blends Eastern and Western zodiac models to measure resonance and convert human connections into rewards.',
  },
  {
    id: 'launch',
    label: 'Launch Stack',
    value: '4Meme Fair Launch',
    description:
      'Transparent bonding-curve liquidity formation prevents private allocations and keeps emissions community-first.',
    href: EXTERNAL_LINKS.fourMeme.href,
    hrefLabel: 'View 4Meme Listing',
  },
  {
    id: 'governance',
    label: 'Governance',
    value: 'The Grand Council',
    description:
      'Hybrid voting weights 12C tokens with PoC reputation so creators, matchmakers, and guardians steer upgrades.',
  },
]

export const TOKEN_ALLOCATION: TokenAllocation[] = [
  {
    id: 'liquidity',
    label: 'Liquidity Provision (LP)',
    value: 25,
    description:
      'Core liquidity for the 4Meme bonding curve and upcoming PancakeSwap pools.',
    color: '#22d3ee',
    accentClass: 'from-cyan-400/70 to-sky-500/40',
  },
  {
    id: 'public-launch',
    label: 'Public Launch (4Meme)',
    value: 25,
    description:
      'Fair Launch tranche that keeps every participant on equal footing with no private rounds.',
    color: '#a855f7',
    accentClass: 'from-fuchsia-500/70 to-violet-500/40',
  },
  {
    id: 'poc',
    label: 'Proof of Culture (PoC)',
    value: 15,
    description:
      'Rewards for cultural quests, compatibility missions, and offline meetups recorded on-chain.',
    color: '#34d399',
    accentClass: 'from-emerald-400/70 to-lime-400/40',
  },
  {
    id: 'ecosystem',
    label: 'Ecosystem & Marketing',
    value: 15,
    description: 'Partnerships, creator licensing, and global IP expansion.',
    color: '#f472b6',
    accentClass: 'from-rose-400/70 to-pink-500/40',
  },
  {
    id: 'team',
    label: 'Team & Development',
    value: 10,
    description: 'Core contributors scaling the AI engine, AR interface, and compliance stack.',
    color: '#60a5fa',
    accentClass: 'from-blue-400/70 to-indigo-500/40',
  },
  {
    id: 'treasury',
    label: 'Treasury & Reserve',
    value: 10,
    description: 'Grand Council-managed reserves for governance votes and emergency runway.',
    color: '#facc15',
    accentClass: 'from-amber-300/70 to-amber-500/40',
  },
]

export const HOW_TO_BUY_STEPS: HowToBuyStep[] = [
  {
    id: 'launch',
    title: 'Join the 4Meme Fair Launch',
    description:
      'Secure {TOKEN_SYMBOL} directly from the transparent bonding curve. Everyone shares the same entry price—no insider rounds or unlock cliffs.',
    icon: 'coins',
    highlight: 'Equal access for all',
    href: EXTERNAL_LINKS.fourMeme.href,
    hrefLabel: 'Open 4Meme',
  },
  {
    id: 'mint',
    title: 'Mint your destiny profile',
    description:
      'Input your Saju (Four Pillars) and astrological data to mint the SBT-12C identity on BNB Chain. This soulbound token anchors every Proof of Culture action.',
    icon: 'wallet',
    highlight: 'Soulbound identity ready',
  },
  {
    id: 'resonate',
    title: 'Trigger Proof of Culture',
    description:
      'Complete cultural quests, host meetups, or match compatible guardians. AI calculates resonance and streams PoC rewards back to your destiny profile.',
    icon: 'swap',
    highlight: 'Earn PoC multipliers',
  },
  {
    id: 'council',
    title: 'Claim your council seat',
    description:
      'Stake your reputation in The Grand Council, where PoC multipliers boost your vote on emissions, treasury strategy, and new lore drops for {SITE_NAME}.',
    icon: 'radar',
    highlight: 'Reputation-weighted votes',
    href: EXTERNAL_LINKS.whitepaper.href,
    hrefLabel: 'Read governance charter',
  },
]

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    id: 'phase-1',
    title: 'Genesis & Fair Launch',
    description:
      'Translate lore into on-chain value by launching 12C via 4Meme and bootstrapping the first liquidity anchors.',
    quarter: 'Q4 2025',
    status: 'in-progress',
    items: [
      'Execute the public 4Meme Fair Launch with transparent bonding-curve pricing.',
      'Recruit Genesis contributors and host global lore reveals for the 12 Zodiac Guardians.',
      'Migrate bonded liquidity to PancakeSwap once curve targets are met.',
    ],
  },
  {
    id: 'phase-2',
    title: 'Ecosystem Expansion & DApp Launch',
    description:
      'Ship the 12C Compass dApp, SocialFi flows, and creator tooling so every contribution becomes Proof of Culture data.',
    quarter: '2026',
    status: 'upcoming',
    items: [
      'Launch the 12C Compass app for destiny minting and live compatibility guidance.',
      'Activate Connect-to-Earn SocialFi quests plus the 12 Zodiac Guardian character IP.',
      'Open the creator program and NFT marketplace for lore-driven content.',
    ],
  },
  {
    id: 'phase-3',
    title: 'Meta-Culture & Future Tech Integration',
    description:
      'Blend AR, gaming, and real-world meetups so destiny data powers daily experiences.',
    quarter: '2027',
    status: 'upcoming',
    items: [
      'Ship The Destiny Chronicles meta-game with stats derived from on-chain Saju.',
      'Release the Destiny Vision smart-glass interface for real-time compatibility cues.',
      'Host AR-powered global meetup tours that merge online and offline resonance.',
    ],
  },
  {
    id: 'phase-4',
    title: 'The 12C Universe',
    description:
      'Scale toward a universal Proof of Culture oracle, powering governance, AR gaming, and cultural finance worldwide.',
    quarter: '2028+',
    status: 'upcoming',
    items: [
      'Finalize full DAO control of emissions, treasury, and lore canon.',
      'Expand AR location-based experiences with guardian collections worldwide.',
      'Extend the destiny oracle API into partner apps and Web2 cultural platforms.',
    ],
  },
]

export const CORE_TEAM_ROLES: TeamRole[] = [
  {
    id: 'ceo',
    title: 'CEO — Vision Orchestrator',
    description:
      'Bridges ancient destiny lore with Web3 market strategy to keep the 12C universe cohesive.',
  },
  {
    id: 'cto',
    title: 'CTO — Destiny Protocol Lead',
    description:
      'Architects the BNB Chain stack, AI compatibility engine, and AR integrations that power Proof of Culture.',
  },
  {
    id: 'cco',
    title: 'CCO — Cultural Creative Officer',
    description:
      'Expands the 12 Zodiac Guardian IP through comics, animation, and partner media.',
  },
  {
    id: 'cmo',
    title: 'CMO — SocialFi Catalyst',
    description:
      'Activates the global community, aligning SocialFi incentives with fair launch principles.',
  },
  {
    id: 'cgo',
    title: 'CGO — Game & Economy Architect',
    description:
      'Designs the destiny-driven game loops and sustainable rewards behind the Play-to-Prosper vision.',
  },
]

export const STRATEGIC_PARTNERS: Partner[] = [
  {
    id: 'bnb',
    label: 'BNB Chain',
    description:
      'Provides the low-fee, high-throughput infrastructure that keeps destiny inscriptions affordable worldwide.',
  },
  {
    id: 'fourmeme',
    label: '4Meme',
    description: `Hosts the fair launch bonding curve so the community controls the initial discovery of ${TOKEN_SYMBOL}.`,
  },
  {
    id: 'pancakeswap',
    label: 'PancakeSwap',
    description:
      'Enables deep secondary liquidity once the bonding curve target transfers into public pools.',
  },
  {
    id: 'ar-tech',
    label: 'AR-Tech Alliances',
    description:
      'Smart-glass partners powering the Destiny Vision interface for real-time compatibility overlays.',
  },
  {
    id: 'content-hubs',
    label: 'Global Content Hubs',
    description:
      'Studios and merchandise partners that bring the 12 Zodiac Guardians to mainstream culture.',
  },
]

export const LEGAL_SECTIONS: LegalSection[] = [
  {
    id: 'general',
    title: 'General Disclaimer',
    items: [
      '12C is a utility token for the Proof of Culture ecosystem and is not a security or investment contract.',
      'Nothing on this site constitutes financial, legal, or tax advice. Consult professionals before participating.',
    ],
  },
  {
    id: 'forward-looking',
    title: 'No Guarantees & Forward-Looking Statements',
    items: [
      'Token value, liquidity, and exchange listings are not guaranteed and may change with market conditions.',
      'Roadmap milestones depend on technical and regulatory factors; timelines may shift without notice.',
    ],
  },
  {
    id: 'restricted',
    title: 'Restricted Jurisdictions',
    items: [
      'Residents of regions that ban or heavily restrict crypto participation—including the USA, China, and sanctioned countries—must not interact with the token.',
      'Participants are solely responsible for complying with applicable local laws and regulations.',
    ],
  },
]

export const RISK_SECTIONS: LegalSection[] = [
  {
    id: 'market',
    title: 'Market & Liquidity Risk',
    items: [
      'Bonding-curve launches can experience sharp volatility, and secondary market liquidity is not guaranteed.',
      'Liquidity migration to exchanges such as PancakeSwap depends on reaching curve targets and community demand.',
    ],
  },
  {
    id: 'technical',
    title: 'Technical & Platform Risk',
    items: [
      'Smart contracts may contain undiscovered vulnerabilities even after audits and community review.',
      'BNB Chain congestion, forks, or outages can disrupt minting, governance, and reward distribution.',
    ],
  },
  {
    id: 'regulatory',
    title: 'Regulatory & Legal Risk',
    items: [
      'Shifts in digital asset regulation could limit or prohibit aspects of the 12C ecosystem.',
      'Users bear full responsibility for monitoring compliance obligations in their jurisdiction.',
    ],
  },
]
