import { type ComponentType } from 'react'

export type SectionId =
  | 'hero'
  | 'stats'
  | 'about'
  | 'tokenomics'
  | 'how-to-buy'
  | 'chart'
  | 'community'
  | 'roadmap'

export type SectionMeta = {
  id: SectionId
  label: string
  href: `#${SectionId}`
  description?: string
}

export type ExternalLinkId = 'fourMeme' | 'dexscreener' | 'x' | 'pancakeswap'

export type ExternalLink = {
  id: ExternalLinkId
  label: string
  href: string
  description?: string
}

export type SocialLink = ExternalLink & {
  handle?: string
}

export type StatCard = {
  id: string
  label: string
  value: string
  description?: string
  href?: string
  hrefLabel?: string
  icon?: ComponentType<{ className?: string }>
}

export type TokenAllocation = {
  id: string
  label: string
  value: number
  description?: string
  color: string
  accentClass: string
}

export type HowToBuyIconType = 'wallet' | 'coins' | 'swap' | 'radar'

export type HowToBuyStep = {
  id: string
  title: string
  description: string
  icon: HowToBuyIconType
  highlight?: string
  href?: string
  hrefLabel?: string
}

export type RoadmapStatus = 'completed' | 'in-progress' | 'upcoming'

export type RoadmapStage = {
  id: string
  title: string
  description: string
  quarter: string
  status: RoadmapStatus
  items: string[]
}
