import { type ReactNode } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSection } from '@/components/sections'
import { ScrollContext } from '@/providers/scroll-context'

function renderWithScrollContext(ui: ReactNode) {
  return render(
    <ScrollContext.Provider value={{ activeSection: null, setActiveSection: vi.fn() }}>
      {ui}
    </ScrollContext.Provider>,
  )
}

afterEach(() => {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis.navigator, 'clipboard')
  if (descriptor && descriptor.configurable) {
    delete (globalThis.navigator as Record<string, unknown>).clipboard
  }
  vi.restoreAllMocks()
})

describe('HeroSection', () => {
  it('renders headline and CTA buttons', () => {
    renderWithScrollContext(<HeroSection />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /liquidity cycling that keeps the ecosystem moving/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /copy contract/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy on pancakeswap/i })).toHaveAttribute(
      'href',
      expect.stringContaining('pancakeswap'),
    )
  })

  it('copies contract address and shows toast', async () => {
    const user = userEvent.setup()
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(globalThis.navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText,
      },
    })

    renderWithScrollContext(<HeroSection />)
    await user.click(screen.getByRole('button', { name: /copy contract/i }))

    expect(writeText).toHaveBeenCalled()
    const status = await screen.findByRole('status')
    expect(status).toHaveTextContent(/contract address copied to clipboard/i)
  })
})
