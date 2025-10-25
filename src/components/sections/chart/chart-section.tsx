import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Loader2 } from 'lucide-react'
import { PageGrid, SectionContainer } from '@/components/layout'
import { EXTERNAL_LINKS, TOKEN_SYMBOL } from '@/lib/constants'

const DEXSCREENER_SRC =
  'https://dexscreener.com/bsc/0xac9aa6f04494e08cb182f2a56b9ceae9b9154444?embed=1&theme=dark'

export function ChartSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin.includes('dexscreener.com') &&
        event.data === 'dexscreener:loaded'
      ) {
        setIsLoaded(true)
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  return (
    <SectionContainer id="chart" wrapperClassName="py-24 sm:py-32" className="space-y-12">
      <PageGrid className="items-center gap-10 md:gap-14">
        <motion.div
          className="md:col-span-5"
          initial={prefersReducedMotion ? undefined : { opacity: 0, x: -18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            prefersReducedMotion ? undefined : { duration: 0.5, ease: 'easeOut' }
          }
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
            Live Chart
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold text-white sm:text-4xl">
            Monitor {TOKEN_SYMBOL} liquidity in real-time
          </h2>
          <p className="mt-5 text-base text-slate-300 sm:text-lg">
            Dexscreener&apos;s embedded chart lets you monitor price action, depth, and
            volume as the 12Cycle loops activate. For the latest liquidity movements, open
            the full chart in a separate tab.
          </p>
          <a
            href={EXTERNAL_LINKS.dexscreener.href}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            View on Dexscreener
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          className="md:col-span-7"
          initial={prefersReducedMotion ? undefined : { opacity: 0, x: 18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 0.5, ease: 'easeOut', delay: 0.1 }
          }
        >
          <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-[0_25px_90px_-55px_rgba(56,189,248,0.65)]">
            {!isLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950/90">
                <Loader2
                  className="h-6 w-6 animate-spin text-primary"
                  aria-hidden="true"
                />
                <p className="text-sm font-medium text-slate-300">
                  Loading live chart...
                </p>
              </div>
            )}
            <iframe
              title="Dexscreener chart"
              src={DEXSCREENER_SRC}
              className="h-[420px] w-full border-0 bg-slate-950"
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </motion.div>
      </PageGrid>
    </SectionContainer>
  )
}
