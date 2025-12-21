import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, Copy, ExternalLink } from 'lucide-react'
import LogoImage from '@/assets/logo-1024.png'
import {
  CHAIN_NAME,
  CONTRACT_ADDRESS,
  EXTERNAL_LINKS,
  SITE_NAME,
  TOKEN_SYMBOL,
} from '@/lib/constants'
import { cn } from '@/lib/utils'
import { SectionContainer } from '@/components/layout'

type ToastState = {
  message: string
  variant: 'success' | 'error'
}

export function HeroSection() {
  const [toast, setToast] = useState<ToastState | null>(null)
  const [isCopied, setIsCopied] = useState(false)
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const copyResetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const prefersReducedMotion = useReducedMotion()

  const clearTimers = useCallback(() => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current)
      toastTimerRef.current = null
    }

    if (copyResetTimerRef.current) {
      clearTimeout(copyResetTimerRef.current)
      copyResetTimerRef.current = null
    }
  }, [])

  const showToast = useCallback((state: ToastState) => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current)
    }

    setToast(state)
    toastTimerRef.current = setTimeout(() => {
      setToast(null)
      toastTimerRef.current = null
    }, 2400)
  }, [])

  const handleCopyContract = useCallback(async () => {
    try {
      if (typeof window === 'undefined') {
        return
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = CONTRACT_ADDRESS
        textarea.setAttribute('readonly', '')
        textarea.style.position = 'absolute'
        textarea.style.left = '-9999px'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }

      setIsCopied(true)
      if (copyResetTimerRef.current) {
        clearTimeout(copyResetTimerRef.current)
      }
      copyResetTimerRef.current = setTimeout(() => {
        setIsCopied(false)
        copyResetTimerRef.current = null
      }, 2000)

      showToast({
        message: 'Contract address copied to clipboard',
        variant: 'success',
      })
    } catch (error) {
      console.error('Failed to copy contract address', error)
      showToast({
        message: 'Copy failed. Please try again.',
        variant: 'error',
      })
    }
  }, [showToast])

  useEffect(() => {
    return () => {
      clearTimers()
    }
  }, [clearTimers])

  return (
    <SectionContainer
      id="hero"
      wrapperClassName="pt-20 sm:pt-28 md:pt-36"
      className="relative flex flex-col items-center text-center"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-64 flex justify-center sm:-top-72 md:-top-96">
        <div className="h-[420px] w-[420px] rounded-full bg-primary/30 blur-3xl sm:h-[520px] sm:w-[520px]" />
      </div>

      <div className="pointer-events-none absolute -bottom-64 left-1/3 hidden h-[360px] w-[360px] rounded-full bg-accent/25 blur-3xl md:block" />
      <div className="pointer-events-none absolute -right-20 top-1/3 hidden h-[320px] w-[320px] rounded-full bg-primary/20 blur-3xl lg:block" />

      <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-[0_20px_60px_-40px_rgba(59,130,246,0.6)] backdrop-blur-xl sm:p-10 md:p-16">
        <div
          className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/0 to-white/5 opacity-70"
          aria-hidden
        />
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary/80 via-primary/10 to-transparent opacity-80" />

        <div className="relative z-10 space-y-8">
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion ? undefined : { duration: 0.6, ease: 'easeOut' }
            }
            className="space-y-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase text-primary/90">
              <img
                src={LogoImage}
                alt=""
                aria-hidden="true"
                className="h-6 w-6 rounded-full object-cover"
              />
              <span className="tracking-[0.35em]">{SITE_NAME} Proof of Culture</span>
            </span>
            <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Proof of Culture turns destiny into digital capital
            </h1>
            <p className="mx-auto max-w-3xl text-pretty text-base text-slate-300 sm:text-lg">
              {SITE_NAME} reinterprets the Eastern Zodiac and Western star houses on-chain,
              minting soulbound destiny profiles and rewarding every cultural contribution
              with {TOKEN_SYMBOL}. Dive into the GitBook to see how identity, liquidity,
              and lore sync on BNB Chain.
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 0.6, ease: 'easeOut', delay: 0.1 }
            }
            className="flex flex-col items-center gap-4"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/60 px-5 py-3 text-sm text-slate-200 shadow-inner shadow-primary/10">
              <span className="font-medium text-white">{CHAIN_NAME}</span>
              <span aria-hidden className="text-slate-600">
                •
              </span>
              <code className="text-xs font-mono text-slate-400 md:text-sm">
                {CONTRACT_ADDRESS}
              </code>
            </div>

            <div className="flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
              <motion.a
                href={EXTERNAL_LINKS.whitepaper.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              >
                Read the whitepaper
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </motion.a>

              <motion.a
                href={EXTERNAL_LINKS.fourMeme.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.01 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
              >
                Join the 4Meme fair launch
                <ExternalLink className="h-4 w-4" />
              </motion.a>

              <motion.button
                type="button"
                onClick={handleCopyContract}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
                  isCopied
                    ? 'border-emerald-400/60 bg-emerald-500/10 text-emerald-300'
                    : 'bg-slate-900/60 text-slate-100 hover:border-primary/60 hover:text-primary',
                )}
                whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.01 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
              >
                {isCopied ? (
                  <>
                    Copied
                    <Check className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Copy Contract
                    <Copy className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={
              prefersReducedMotion ? undefined : { opacity: 0, y: 12, scale: 0.96 }
            }
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: 12, scale: 0.96 }}
            transition={
              prefersReducedMotion ? undefined : { duration: 0.25, ease: 'easeOut' }
            }
            role="status"
            aria-live="assertive"
            className={cn(
              'fixed top-6 right-6 z-50 flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-lg backdrop-blur',
              toast.variant === 'success'
                ? 'border-emerald-400/50 bg-emerald-500/10 text-emerald-200'
                : 'border-red-400/50 bg-red-500/10 text-red-200',
            )}
          >
            {toast.variant === 'success' ? (
              <Check className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Copy className="h-4 w-4" aria-hidden="true" />
            )}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainer>
  )
}
