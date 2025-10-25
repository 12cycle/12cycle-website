import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { PageGrid, SectionContainer } from '@/components/layout'
import { SITE_NAME, TOKEN_SYMBOL } from '@/lib/constants'

const CYCLE_FACETS = [
  {
    id: 'liquidity',
    title: 'Sustained Liquidity',
    copy: 'Capital rotates through curated pools to maintain depth and reduce slippage across every cycle.',
  },
  {
    id: 'community',
    title: 'Community Amplified',
    copy: 'Token holders govern the flow of each loop, balancing growth incentives with risk oversight.',
  },
  {
    id: 'automation',
    title: 'Automation Ready',
    copy: 'Smart routing unlocks programmatic compounding while preserving transparency for auditors and analysts.',
  },
] as const

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionContainer id="about" wrapperClassName="py-24 sm:py-32" className="space-y-12">
      <PageGrid>
        <motion.div
          className="md:col-span-5"
          initial={prefersReducedMotion ? undefined : { opacity: 0, x: -18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            prefersReducedMotion ? undefined : { duration: 0.5, ease: 'easeOut' }
          }
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
            About the Loop
          </p>
          <h2 className="mt-5 text-balance text-3xl font-semibold text-white sm:text-4xl">
            A 12-phase engine for liquidity in constant motion
          </h2>
          <p className="mt-5 text-base text-slate-300 sm:text-lg">
            {SITE_NAME} choreographs a closed loop of curated pools, incentivized actors,
            and real-time telemetry. The result is a rhythm that keeps {TOKEN_SYMBOL}{' '}
            circulating through deep liquidity while steadily rewarding the community that
            powers it.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {CYCLE_FACETS.map((facet) => (
              <Fragment key={facet.id}>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 backdrop-blur transition hover:border-primary/30">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                    {facet.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {facet.copy}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-12 flex w-full max-w-xl items-center justify-center md:col-span-7 md:mt-0"
          initial={prefersReducedMotion ? undefined : { opacity: 0, x: 18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            prefersReducedMotion ? undefined : { duration: 0.5, ease: 'easeOut' }
          }
        >
          <div className="pointer-events-none absolute inset-0 rounded-[40px] border border-primary/20 bg-gradient-to-br from-primary/10 via-slate-950/80 to-accent/20 blur-xl" />

          <div className="relative flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-[40px] border border-white/10 bg-slate-950/70 p-10 shadow-[0_30px_90px_-50px_rgba(56,189,248,0.6)]">
            <div className="absolute inset-0 opacity-80">
              <div className="absolute inset-6 rounded-[32px] border border-white/10" />
              <div className="absolute inset-12 rounded-[28px] border border-primary/20" />
              <div className="absolute inset-20 rounded-[24px] border border-accent/20" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center text-slate-200">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                Cycle Diagram
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-white">12 Nodes</h3>
              <p className="mt-3 max-w-[16rem] text-sm text-slate-300">
                Liquidity, incentives, and governance flow through repeating phases to
                maintain momentum.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/80">
                <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                  Deploy
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-accent/80">
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  Amplify
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-slate-200">
                  Retune
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </PageGrid>
    </SectionContainer>
  )
}
