import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Fingerprint, Gavel, Rocket, Sparkles } from 'lucide-react'
import { PageGrid, SectionContainer } from '@/components/layout'
import { KEY_STATS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const ICON_MAP = {
  identity: Fingerprint,
  destiny: Sparkles,
  launch: Rocket,
  governance: Gavel,
} as const

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 12 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

export function KeyStatsSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionContainer
      id="stats"
      wrapperClassName="py-24 sm:py-28 md:py-32"
      className="space-y-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">
          Signals carried forward from the whitepaper
        </h2>
        <p className="mt-4 text-base text-slate-300 sm:text-lg">
          Identity, incentives, launch mechanics, and governance are all defined in the
          GitBook. These highlights summarize how Proof of Culture becomes a living
          protocol.
        </p>
      </div>

      <PageGrid className="grid-cols-1 md:grid-cols-12">
        {KEY_STATS.map((stat, index) => {
          const Icon = ICON_MAP[stat.id as keyof typeof ICON_MAP] ?? Sparkles

          return (
            <motion.article
              key={stat.id}
              className={cn(
                'relative rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_50px_-35px_rgba(148,163,184,0.45)] backdrop-blur-xl transition hover:border-primary/40 hover:shadow-[0_25px_80px_-40px_rgba(59,130,246,0.55)]',
                'md:col-span-6',
              )}
              initial={prefersReducedMotion ? undefined : 'hidden'}
              whileInView={prefersReducedMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.25 }}
              custom={index}
              variants={prefersReducedMotion ? undefined : CARD_VARIANTS}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-60" />
              <div className="flex flex-col gap-4 text-left">
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-white">{stat.value}</p>
                  </div>
                </div>

                {stat.description && (
                  <p className="text-sm leading-relaxed text-slate-300">
                    {stat.description}
                  </p>
                )}

                {stat.href && stat.hrefLabel && (
                  <a
                    href={stat.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    {stat.hrefLabel}
                    <span aria-hidden>→</span>
                  </a>
                )}
              </div>
            </motion.article>
          )
        })}
      </PageGrid>

      <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-slate-950/50 px-6 py-6 text-center text-sm text-slate-400 backdrop-blur">
        <p>
          Live dashboards will arrive with the 12C Compass dApp. Until then, reference the
          public resources below for the most current launch and governance notes.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-primary">
          {KEY_STATS.filter((stat) => stat.href && stat.hrefLabel).map((stat) => (
            <Fragment key={stat.id}>
              <a
                href={stat.href}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-primary/40 underline-offset-4 transition hover:decoration-primary"
              >
                {stat.hrefLabel}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
