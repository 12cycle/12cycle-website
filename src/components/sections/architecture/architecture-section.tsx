import { motion, useReducedMotion } from 'framer-motion'
import { Cpu, Layers, Shield, Sparkles } from 'lucide-react'
import { PageGrid, SectionContainer } from '@/components/layout'
import { SITE_NAME } from '@/lib/constants'

const INFRA_LAYERS = [
  {
    id: 'identity',
    title: 'Layer 1 · Identity',
    description: 'Soulbound Tokens (SBT-12C) inscribe every user’s saju and astrological signature on BNB Chain.',
    items: [
      'Immutable reputation that records Proof of Culture (PoC) contributions.',
      'Low-fee BNB Chain transactions make re-minting and updates sustainable across the globe.',
    ],
    icon: Shield,
  },
  {
    id: 'liquidity',
    title: 'Layer 2 · Launch & Liquidity',
    description:
      '4Meme’s fair-launch bonding curve forms transparent liquidity before moving into PancakeSwap pools.',
    items: [
      'No private rounds or insider unlocks—only community-driven price discovery.',
      'Liquidity migrates to public DEXs once bonding-curve targets are reached.',
    ],
    icon: Layers,
  },
  {
    id: 'logic',
    title: 'Layer 3 · Logic & Matching',
    description:
      'An AI engine cross-references Eastern and Western zodiac data to calculate Destiny Resonance in real time.',
    items: [
      'BSC block production keeps matching and reward calculations instant.',
      'Resonance feeds directly into PoC rewards and governance multipliers.',
    ],
    icon: Cpu,
  },
] as const

const COMPONENT_CALLOUTS = [
  {
    id: 'sbt',
    title: 'SBT-12C · Destiny Passports',
    copy: 'Non-transferable digital DNA anchoring every cultural action, meetup, or lore creation.',
  },
  {
    id: 'bonding-curve',
    title: '4Meme Bonding Curve',
    copy: 'Fair Launch model that stabilizes emissions and seeds a treasury without VC pressure.',
  },
  {
    id: 'ace',
    title: 'AI Compatibility Engine',
    copy: 'Fuses Five Elements, planetary alignments, and on-chain telemetry to recommend high-value encounters.',
  },
] as const

const FLOW_STEPS = [
  'Fair Launch → Treasury + Liquidity formation',
  'Onboarding → Destiny profiles minted as SBT-12C',
  'Cultural Interaction → AI validates resonance',
  'Value Distribution → PoC rewards + governance boosts',
] as const

export function ArchitectureSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionContainer
      id="architecture"
      wrapperClassName="py-24 sm:py-32"
      className="space-y-14"
    >
      <PageGrid className="items-start gap-10">
        <motion.div
          className="md:col-span-5 space-y-6"
          initial={prefersReducedMotion ? undefined : { opacity: 0, x: -18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            prefersReducedMotion ? undefined : { duration: 0.5, ease: 'easeOut' }
          }
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
            Architecture
          </span>
          <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">
            A three-layer destiny protocol built on BNB Chain
          </h2>
          <p className="text-base text-slate-300 sm:text-lg">
            The whitepaper outlines how identity, liquidity, and logic interlock so that{' '}
            {SITE_NAME} can transform cultural resonance into verifiable economic flow.
            Each layer is modular yet synchronized by the Proof of Culture oracle.
          </p>

          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 text-sm text-slate-200 shadow-inner shadow-primary/20">
            <p className="font-semibold uppercase tracking-[0.3em] text-slate-400">
              Data &amp; Value Circulation
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {FLOW_STEPS.map((step) => (
                <li key={step} className="flex items-start gap-2">
                  <Sparkles className="mt-1 h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-7 space-y-6"
          initial={prefersReducedMotion ? undefined : { opacity: 0, x: 18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            prefersReducedMotion ? undefined : { duration: 0.5, ease: 'easeOut', delay: 0.1 }
          }
        >
          {INFRA_LAYERS.map((layer) => {
            const Icon = layer.icon

            return (
              <article
                key={layer.id}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_25px_80px_-55px_rgba(56,189,248,0.7)] backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {layer.title}
                  </p>
                </div>
                <p className="mt-4 text-base font-semibold text-white">{layer.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {layer.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </motion.div>
      </PageGrid>

      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={prefersReducedMotion ? undefined : { duration: 0.5, ease: 'easeOut' }}
      >
        {COMPONENT_CALLOUTS.map((callout) => (
          <div
            key={callout.id}
            className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm text-slate-300 backdrop-blur"
          >
            <h3 className="text-base font-semibold text-white">{callout.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{callout.copy}</p>
          </div>
        ))}
      </motion.div>
    </SectionContainer>
  )
}
