import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowLeftRight,
  Coins,
  ExternalLink,
  Radar,
  Sparkles,
  Wallet,
} from 'lucide-react'
import { PageGrid, SectionContainer } from '@/components/layout'
import { HOW_TO_BUY_STEPS, SITE_NAME, TOKEN_SYMBOL } from '@/lib/constants'
import type { HowToBuyIconType } from '@/lib/types'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<HowToBuyIconType, React.ComponentType<{ className?: string }>> = {
  wallet: Wallet,
  coins: Coins,
  swap: ArrowLeftRight,
  radar: Radar,
}

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 16 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: index * 0.08 },
  }),
}

export function HowToBuySection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionContainer
      id="how-to-buy"
      wrapperClassName="py-24 sm:py-32"
      className="space-y-12"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
          How to Buy
        </span>
        <h2 className="mt-5 text-balance text-3xl font-semibold text-white sm:text-4xl">
          Four quick steps to join the {SITE_NAME} loop
        </h2>
        <p className="mt-5 text-base text-slate-300 sm:text-lg">
          Follow this guided path to secure {TOKEN_SYMBOL}, start cycling liquidity, and
          stay in sync with our roadmap milestones.
        </p>
      </div>

      <PageGrid className="grid-cols-1 md:grid-cols-12">
        {HOW_TO_BUY_STEPS.map((step, index) => {
          const Icon = ICON_MAP[step.icon]

          return (
            <motion.article
              key={step.id}
              className={cn(
                'group relative flex h-full flex-col rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_60px_-45px_rgba(56,189,248,0.45)] backdrop-blur transition hover:border-primary/40 hover:shadow-[0_30px_90px_-60px_rgba(56,189,248,0.7)]',
                'md:col-span-6 xl:col-span-3',
              )}
              initial={prefersReducedMotion ? undefined : 'hidden'}
              whileInView={prefersReducedMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              variants={prefersReducedMotion ? undefined : CARD_VARIANTS}
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-70" />
              <div className="flex flex-1 flex-col gap-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary transition group-hover:border-primary/50 group-hover:text-primary/80">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Step {index + 1}
                  </span>
                </div>

                <div className="space-y-3 text-left">
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {step.description.replace('{TOKEN_SYMBOL}', TOKEN_SYMBOL)}
                  </p>
                  {step.highlight && (
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-accent/80">
                      <Sparkles className="h-3 w-3" aria-hidden="true" />
                      {step.highlight.replace('{SITE_NAME}', SITE_NAME)}
                    </div>
                  )}
                </div>

                {step.href && step.hrefLabel && (
                  <a
                    href={step.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    {step.hrefLabel}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </motion.article>
          )
        })}
      </PageGrid>
    </SectionContainer>
  )
}
