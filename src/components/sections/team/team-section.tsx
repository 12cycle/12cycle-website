import { motion, useReducedMotion } from 'framer-motion'
import { Users } from 'lucide-react'
import { PageGrid, SectionContainer } from '@/components/layout'
import { CORE_TEAM_ROLES, STRATEGIC_PARTNERS } from '@/lib/constants'

export function TeamSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionContainer id="team" wrapperClassName="py-24 sm:py-32" className="space-y-12">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
          Team &amp; Alliances
        </span>
        <h2 className="mt-5 text-balance text-3xl font-semibold text-white sm:text-4xl">
          Builders, storytellers, and partners expanding 12C
        </h2>
        <p className="mt-5 text-base text-slate-300 sm:text-lg">
          The whitepaper lists open leadership roles plus strategic alliances with
          blockchain, launchpad, AR, and IP studios. Everyone converges to translate the 12
          Zodiac canon into interactive culture.
        </p>
      </div>

      <PageGrid className="gap-8">
        <motion.div
          className="space-y-4 md:col-span-6"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
              <Users className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                Core Team
              </p>
              <p className="text-sm text-slate-500">Roles forming now</p>
            </div>
          </div>
          <div className="space-y-4">
            {CORE_TEAM_ROLES.map((role) => (
              <div
                key={role.id}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-left text-sm text-slate-300 backdrop-blur"
              >
                <p className="text-base font-semibold text-white">{role.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="space-y-4 md:col-span-6"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 0.5, ease: 'easeOut', delay: 0.1 }
          }
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 text-accent/80">
              <Users className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                Strategic Partners
              </p>
              <p className="text-sm text-slate-500">Ecosystem allies</p>
            </div>
          </div>
          <div className="space-y-4">
            {STRATEGIC_PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-left text-sm text-slate-300 backdrop-blur"
              >
                <p className="text-base font-semibold text-white">{partner.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </PageGrid>
    </SectionContainer>
  )
}
