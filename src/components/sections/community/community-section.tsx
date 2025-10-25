import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { AlertTriangle, Loader2 } from 'lucide-react'
import { SectionContainer } from '@/components/layout'
import { EXTERNAL_LINKS, SITE_NAME, SOCIAL_LINKS } from '@/lib/constants'

const TWITTER_HANDLE =
  SOCIAL_LINKS.find((link) => link.id === 'x')?.handle ?? '@12C_World'
const EMBED_URL = `https://twitter.com/${TWITTER_HANDLE.replace('@', '')}?ref_src=twsrc%5Etfw`

type TwitterWidgetsApi = {
  widgets?: {
    load?: () => void
  }
}

type TwitterWindow = Window &
  typeof globalThis & {
    twttr?: TwitterWidgetsApi
  }

export function CommunitySection() {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const handleLoaded = () => setStatus('loaded')
    const handleError = () => setStatus('error')

    window.addEventListener('twitter:loaded', handleLoaded)
    window.addEventListener('twitter:error', handleError)

    return () => {
      window.removeEventListener('twitter:loaded', handleLoaded)
      window.removeEventListener('twitter:error', handleError)
    }
  }, [])

  useEffect(() => {
    const existingScript = document.querySelector('script#twitter-wjs')

    if (existingScript) {
      setStatus('loaded')
      return
    }

    const script = document.createElement('script')
    script.id = 'twitter-wjs'
    script.async = true
    script.src = '/scripts/twitter-widget.js'
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  useEffect(() => {
    if (status !== 'loaded') {
      return
    }

    const twitterWindow = window as TwitterWindow
    const loadWidgets = () => {
      const load = twitterWindow.twttr?.widgets?.load
      if (!load) {
        return false
      }
      load()
      return true
    }

    if (loadWidgets()) {
      return
    }

    const interval = window.setInterval(() => {
      if (loadWidgets()) {
        clearInterval(interval)
      }
    }, 200)

    return () => {
      clearInterval(interval)
    }
  }, [status])

  return (
    <SectionContainer
      id="community"
      wrapperClassName="py-24 sm:py-32"
      className="space-y-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
          Community
        </span>
        <h2 className="mt-5 text-balance text-3xl font-semibold text-white sm:text-4xl">
          Stay synced with the {SITE_NAME} orbit
        </h2>
        <p className="mt-5 text-base text-slate-300 sm:text-lg">
          Live threads, cycle milestones, and ecosystem alpha drop first on X. Follow our
          official handle to track launches and liquidity rotations in real-time.
        </p>
      </div>

      <motion.div
        className="mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_25px_90px_-60px_rgba(56,189,248,0.65)] backdrop-blur"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={prefersReducedMotion ? undefined : { duration: 0.6, ease: 'easeOut' }}
      >
        {status === 'loading' && (
          <div
            className="flex min-h-[360px] flex-col items-center justify-center gap-3 text-slate-300"
            role="status"
            aria-live="polite"
          >
            <Loader2 className="h-6 w-6 animate-spin text-primary" aria-hidden="true" />
            <p className="text-sm font-medium">Connecting to X timeline...</p>
          </div>
        )}

        {status === 'error' && (
          <div
            className="flex min-h-[360px] flex-col items-center justify-center gap-4 rounded-2xl border border-red-400/30 bg-red-500/5 p-8 text-center text-sm text-red-100"
            role="alert"
          >
            <AlertTriangle className="h-6 w-6 text-red-300" aria-hidden="true" />
            <div className="space-y-2">
              <p className="text-base font-semibold text-red-200">
                We&apos;re hitting the X rate-limit
              </p>
              <p>
                The embedded timeline can temporarily fail when X rate-limits guest
                requests. Open our profile directly for the latest updates.
              </p>
            </div>
            <a
              href={EXTERNAL_LINKS.x.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary/60 hover:text-primary/80"
            >
              Visit on X
            </a>
          </div>
        )}

        <div
          className={
            status === 'loading'
              ? 'pointer-events-none h-0 overflow-hidden opacity-0'
              : 'opacity-100 transition-opacity duration-300'
          }
        >
          <blockquote className="twitter-timeline" data-theme="dark">
            <a href={EMBED_URL}>Tweets by {TWITTER_HANDLE}</a>
          </blockquote>
        </div>
      </motion.div>
    </SectionContainer>
  )
}
