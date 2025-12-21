import { motion, useReducedMotion } from 'framer-motion'
import { AlertTriangle, Shield } from 'lucide-react'
import { PageGrid, SectionContainer } from '@/components/layout'
import { LEGAL_SECTIONS, RISK_SECTIONS } from '@/lib/constants'

export function LegalSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionContainer id="legal" wrapperClassName="py-24 sm:py-32" className="space-y-12">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
          Legal &amp; Risk
        </span>
        <h2 className="mt-5 text-balance text-3xl font-semibold text-white sm:text-4xl">
          Transparency around what 12C is—and isn&apos;t
        </h2>
        <p className="mt-5 text-base text-slate-300 sm:text-lg">
          The GitBook emphasizes that 12C is a utility token. Review the disclaimers and
          risk considerations before engaging with the ecosystem.
        </p>
      </div>

      <PageGrid className="gap-8">
        <motion.div
          className="space-y-4 md:col-span-6"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            prefersReducedMotion ? undefined : { duration: 0.45, ease: 'easeOut' }
          }
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
              <Shield className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              Disclaimers
            </p>
          </div>
          <div className="space-y-4">
            {LEGAL_SECTIONS.map((section) => (
              <div
                key={section.id}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-left text-sm text-slate-300 backdrop-blur"
              >
                <h3 className="text-base font-semibold text-white">{section.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="space-y-4 md:col-span-6"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 0.45, ease: 'easeOut', delay: 0.1 }
          }
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-red-400/40 bg-red-500/10 text-red-200">
              <AlertTriangle className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              Risk Factors
            </p>
          </div>
          <div className="space-y-4">
            {RISK_SECTIONS.map((section) => (
              <div
                key={section.id}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-left text-sm text-slate-300 backdrop-blur"
              >
                <h3 className="text-base font-semibold text-white">{section.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-400" aria-hidden />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </PageGrid>
    </SectionContainer>
  )
}
