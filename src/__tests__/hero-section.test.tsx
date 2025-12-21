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
    const navigatorWithClipboard = globalThis.navigator as { clipboard?: Pick<Clipboard, 'writeText'> }
    delete navigatorWithClipboard.clipboard
  }
  vi.restoreAllMocks()
})

describe('HeroSection', () => {
  it('renders headline and CTA buttons', () => {
    renderWithScrollContext(<HeroSection />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /proof of culture turns destiny into digital capital/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /copy contract/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /read the whitepaper/i }),
    ).toHaveAttribute('href', expect.stringContaining('gitbook'))
  })

  it('copies contract address and shows toast', async () => {
    const user = userEvent.setup()
    const writeText = vi.fn<(text: string) => Promise<void>>().mockResolvedValue(undefined)
    const navigatorWithClipboard = globalThis.navigator as {
      clipboard?: Pick<Clipboard, 'writeText'>
    }

    Object.defineProperty(navigatorWithClipboard, 'clipboard', {
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
