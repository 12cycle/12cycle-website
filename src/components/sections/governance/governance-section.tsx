import { motion, useReducedMotion } from 'framer-motion'
import { Coins, Scale, Sparkles } from 'lucide-react'
import { SectionContainer } from '@/components/layout'
import { EXTERNAL_LINKS, SITE_NAME } from '@/lib/constants'

const GOVERNANCE_PILLARS = [
  {
    id: 'voting',
    title: 'Hybrid Voting Model',
    description:
      'Token holders submit proposals, but PoC reputation stored in SBT-12C adds multipliers so dedicated cultural contributors carry more weight.',
    icon: Scale,
  },
  {
    id: 'scope',
    title: 'What The Council Decides',
    description:
      'PoC calibration, seasonal emissions, treasury spend, and lore canon (like which Zodiac Guardians unlock next) all pass through The Grand Council.',
    icon: Coins,
  },
  {
    id: 'path',
    title: 'Path to Full Decentralization',
    description:
      'Control moves toward the community as roadmap phases progress. More treasury, PoC parameters, and IP rights are delegated once the ecosystem stabilizes.',
    icon: Sparkles,
  },
] as const

export function GovernanceSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionContainer
      id="governance"
      wrapperClassName="py-24 sm:py-32"
      className="space-y-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
          The Grand Council
        </span>
        <h2 className="mt-5 text-balance text-3xl font-semibold text-white sm:text-4xl">
          Governance treats cultural contribution as reputation
        </h2>
        <p className="mt-5 text-base text-slate-300 sm:text-lg">
          The whitepaper defines a DAO where PoC reputation boosts votes. It ensures{' '}
          {SITE_NAME} decisions reflect the people organizing meetups, creating lore, and
          protecting the ecosystem.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {GOVERNANCE_PILLARS.map((pillar, index) => {
          const Icon = pillar.icon

          return (
            <motion.article
              key={pillar.id}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-left text-slate-300 shadow-[0_25px_80px_-65px_rgba(56,189,248,0.7)] backdrop-blur"
              initial={
                prefersReducedMotion ? undefined : { opacity: 0, y: 18, scale: 0.98 }
              }
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 0.45, ease: 'easeOut', delay: index * 0.08 }
              }
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {pillar.description}
              </p>
            </motion.article>
          )
        })}
      </div>

      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-center text-sm text-slate-300">
        <p>
          Dive deeper into the governance charter and risk controls inside the GitBook.
          You&apos;ll find the exact formulas for PoC multipliers, treasury guardrails, and
          decentralization milestones.
        </p>
        <a
          href={EXTERNAL_LINKS.whitepaper.href}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Read the governance section
          <span aria-hidden>→</span>
        </a>
      </div>
    </SectionContainer>
  )
}
