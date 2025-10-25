import { type MouseEvent, useCallback, useState } from 'react'
import LogoImage from '@/assets/logo-1024.png'
import { NAV_SECTIONS, SITE_NAME } from '@/lib/constants'
import { useScrollContext } from '@/providers/scroll-context'
import { cn } from '@/lib/utils'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { activeSection } = useScrollContext()

  const handleNavClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, target: string) => {
      event.preventDefault()
      setIsMenuOpen(false)

      const sectionId = target.startsWith('#') ? target.slice(1) : target
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    },
    [],
  )

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a
          href="#hero"
          className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.4em] text-primary md:text-xs"
          aria-label="Go to hero section"
          onClick={(event) => handleNavClick(event, '#hero')}
        >
          <img
            src={LogoImage}
            alt=""
            aria-hidden="true"
            className="h-7 w-7 rounded-full object-cover"
          />
          <span>{SITE_NAME}</span>
        </a>

        <nav
          className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex"
          aria-label="Primary"
        >
          {NAV_SECTIONS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className={cn(
                'transition hover:text-primary focus-visible:outline-none focus-visible:text-primary',
                activeSection === link.id ? 'text-primary' : undefined,
              )}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={cn(
          'border-t border-white/10 bg-slate-950/95 px-6 py-6 text-sm text-slate-200 md:hidden',
          isMenuOpen ? 'block' : 'hidden',
        )}
        aria-label="Mobile"
      >
        <div className="flex flex-col gap-4">
          {NAV_SECTIONS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-full bg-slate-900/60 px-4 py-2 font-medium transition hover:bg-slate-800 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
                activeSection === link.id
                  ? 'border border-primary/70 text-primary'
                  : undefined,
              )}
              onClick={(event) => handleNavClick(event, link.href)}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
