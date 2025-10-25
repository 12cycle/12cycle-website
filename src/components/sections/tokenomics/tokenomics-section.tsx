import { motion, useReducedMotion } from 'framer-motion'
import { PieChart } from 'lucide-react'
import { PageGrid, SectionContainer } from '@/components/layout'
import { TOKEN_ALLOCATION, TOTAL_SUPPLY, TOKEN_SYMBOL } from '@/lib/constants'
import { cn } from '@/lib/utils'

const CHART_RADIUS = 120
const STROKE_WIDTH = 24
const CIRCUMFERENCE = 2 * Math.PI * CHART_RADIUS

type ChartSlice = {
  id: string
  value: number
  dashArray: string
  dashOffset: number
  color: string
  label: string
}

export function TokenomicsSection() {
  const prefersReducedMotion = useReducedMotion()

  const totalPercent = TOKEN_ALLOCATION.reduce((acc, slice) => acc + slice.value, 0)
  let cumulative = 0

  const slices: ChartSlice[] = TOKEN_ALLOCATION.map((slice) => {
    const normalized = (slice.value / totalPercent) * CIRCUMFERENCE
    const dashArray = `${normalized} ${CIRCUMFERENCE}`
    const dashOffset = CIRCUMFERENCE - cumulative
    cumulative += normalized

    return {
      id: slice.id,
      value: slice.value,
      dashArray,
      dashOffset,
      color: slice.color,
      label: slice.label,
    }
  })

  return (
    <SectionContainer
      id="tokenomics"
      wrapperClassName="py-24 sm:py-32"
      className="space-y-16"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
          Tokenomics
        </p>
        <h2 className="mt-5 text-balance text-3xl font-semibold text-white sm:text-4xl">
          Distribution designed for sustainable momentum
        </h2>
        <p className="mt-5 text-base text-slate-300 sm:text-lg">
          Every {TOKEN_SYMBOL} minted contributes to the rhythm of the 12-cycle
          engine—balancing liquidity, rewards, protocol runway, and contributor
          incentives.
        </p>
      </div>

      <PageGrid className="items-center">
        <motion.div
          className="md:col-span-6"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            prefersReducedMotion ? undefined : { duration: 0.6, ease: 'easeOut' }
          }
        >
          <div className="relative flex items-center justify-center">
            <div
              className="absolute h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl"
              aria-hidden="true"
            />
            <svg
              viewBox="0 0 320 320"
              role="img"
              aria-label="Token allocation chart"
              className="relative z-10 h-[320px] w-[320px]"
            >
              <circle
                cx="160"
                cy="160"
                r={CHART_RADIUS}
                stroke="rgba(148, 163, 184, 0.18)"
                strokeWidth={STROKE_WIDTH}
                fill="transparent"
              />
              {slices.map((slice, index) => (
                <motion.circle
                  key={slice.id}
                  cx="160"
                  cy="160"
                  r={CHART_RADIUS}
                  fill="transparent"
                  strokeWidth={STROKE_WIDTH}
                  strokeDasharray={slice.dashArray}
                  strokeDashoffset={slice.dashOffset}
                  strokeLinecap="round"
                  className="origin-center"
                  style={{ stroke: slice.color }}
                  transform="rotate(-90 160 160)"
                  initial={
                    prefersReducedMotion ? undefined : { strokeDashoffset: CIRCUMFERENCE }
                  }
                  whileInView={
                    prefersReducedMotion
                      ? undefined
                      : { strokeDashoffset: slice.dashOffset }
                  }
                  viewport={{ once: true, amount: 0.4 }}
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { duration: 1, ease: 'easeInOut', delay: index * 0.1 }
                  }
                />
              ))}
            </svg>
            <div className="absolute flex h-36 w-36 flex-col items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-center shadow-inner shadow-primary/30">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Total Supply
              </span>
              <p className="mt-2 text-2xl font-bold text-white">
                {TOTAL_SUPPLY.toLocaleString('en-US')}
              </p>
              <p className="text-xs text-slate-400">{TOKEN_SYMBOL}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-6"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 0.6, ease: 'easeOut', delay: 0.1 }
          }
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-[0_20px_60px_-45px_rgba(56,189,248,0.6)] backdrop-blur">
            <table className="w-full border-collapse text-left text-sm text-slate-200 sm:text-base">
              <caption className="sr-only">Token allocation breakdown</caption>
              <thead>
                <tr className="border-b border-white/5 text-xs uppercase tracking-[0.25em] text-slate-500">
                  <th scope="col" className="px-6 py-4">
                    Allocation
                  </th>
                  <th scope="col" className="px-6 py-4 text-right">
                    %
                  </th>
                </tr>
              </thead>
              <tbody>
                {TOKEN_ALLOCATION.map((slice) => (
                  <tr key={slice.id} className="border-b border-white/5 last:border-0">
                    <th scope="row" className="px-6 py-5 font-semibold text-white">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              'h-3 w-3 rounded-full bg-gradient-to-br',
                              slice.accentClass,
                            )}
                            aria-hidden="true"
                          />
                          {slice.label}
                        </div>
                        {slice.description && (
                          <p className="max-w-sm text-xs font-normal text-slate-400">
                            {slice.description}
                          </p>
                        )}
                      </div>
                    </th>
                    <td className="px-6 py-5 text-right font-semibold text-primary">
                      {slice.value}%
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th
                    scope="row"
                    className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500"
                  >
                    Total
                  </th>
                  <td className="px-6 py-4 text-right text-sm font-semibold text-slate-200">
                    {totalPercent}%
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-sm text-slate-300">
            <div className="flex items-center gap-3 text-primary">
              <PieChart className="h-5 w-5" aria-hidden="true" />
              <span className="font-semibold uppercase tracking-[0.2em]">
                Cycle Cadence
              </span>
            </div>
            <p className="text-sm text-slate-400">
              Allocations unlock progressively as each cycle milestone is met. Liquidity
              and reward tranches synchronize with on-chain volume to avoid sell pressure
              spikes.
            </p>
          </div>
        </motion.div>
      </PageGrid>
    </SectionContainer>
  )
}
