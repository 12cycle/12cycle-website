import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, Clock3, Sparkles } from 'lucide-react'
import { SectionContainer } from '@/components/layout'
import { ROADMAP_STAGES, SITE_NAME } from '@/lib/constants'
import type { RoadmapStatus } from '@/lib/types'
import { cn } from '@/lib/utils'

const STATUS_ICON: Record<RoadmapStatus, React.ComponentType<{ className?: string }>> = {
  completed: CheckCircle2,
  'in-progress': Clock3,
  upcoming: Sparkles,
}

const STATUS_STYLES: Record<RoadmapStatus, string> = {
  completed: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300',
  'in-progress': 'border-primary/40 bg-primary/10 text-primary',
  upcoming: 'border-slate-500/30 bg-slate-800/60 text-slate-300',
}

export function RoadmapSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionContainer
      id="roadmap"
      wrapperClassName="py-24 sm:py-32"
      className="space-y-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
          Roadmap
        </span>
        <h2 className="mt-5 text-balance text-3xl font-semibold text-white sm:text-4xl">
          The path to a fully-orchestrated {SITE_NAME} loop
        </h2>
        <p className="mt-5 text-base text-slate-300 sm:text-lg">
          Each milestone adds reliability, liquidity, and community coordination. Track
          the cadence as we activate new phases of the 12-cycle engine.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-[calc(0.75rem)] top-16 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-primary/50 via-slate-700/60 to-transparent sm:left-[calc(2rem)]" />
        <div className="space-y-10">
          {ROADMAP_STAGES.map((stage, index) => {
            const Icon = STATUS_ICON[stage.status]
            const statusClass = STATUS_STYLES[stage.status]

            return (
              <motion.article
                key={stage.id}
                initial={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 0, x: index % 2 === 0 ? -18 : 18 }
                }
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 0.5, ease: 'easeOut', delay: index * 0.05 }
                }
                className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_25px_90px_-60px_rgba(56,189,248,0.45)] backdrop-blur sm:ml-12 sm:p-8"
              >
                <div className="absolute -left-3 top-8 hidden h-5 w-5 rounded-full border-2 border-slate-900 bg-slate-950 sm:flex" />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-3">
                    <span
                      className={cn(
                        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]',
                        statusClass,
                      )}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {stage.status === 'completed'
                        ? 'Completed'
                        : stage.status === 'in-progress'
                          ? 'In Progress'
                          : 'Up Next'}
                    </span>
                    <span className="text-sm font-semibold text-slate-400">
                      {stage.quarter}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">{stage.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {stage.description}
                  </p>
                </div>

                <ul className="space-y-2 text-sm text-slate-300">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-primary/70"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </SectionContainer>
  )
}
