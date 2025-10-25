import { SITE_NAME, SOCIAL_LINKS } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950/90 text-slate-400 backdrop-blur">
      <div className="container flex flex-col gap-8 py-12 text-sm md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            {SITE_NAME} Protocol
          </p>
          <p className="max-w-xl text-pretty text-slate-400">
            This experience is for informational and community engagement purposes only.
            Nothing here should be interpreted as financial advice. Interacting with smart
            contracts involves risk—always verify addresses and double-check approvals
            before you sign.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm text-slate-200 md:items-end">
          <nav className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-3 py-1 transition hover:border-primary/70 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="space-y-1 text-right text-xs text-slate-500">
            <p>
              © {year} {SITE_NAME}. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-600">
              Built for the 12Cycle community. Dark mode optimized.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
