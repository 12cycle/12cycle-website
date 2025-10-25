import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, render } from '@testing-library/react'
import { useState } from 'react'
import { useSectionInView } from '@/hooks/use-section-in-view'

type ObserverInstance = {
  trigger: (entries: IntersectionObserverEntry[]) => void
  observe: ReturnType<typeof vi.fn>
  disconnect: ReturnType<typeof vi.fn>
  options?: IntersectionObserverInit
}

const originalObserver = globalThis.IntersectionObserver

function setupIntersectionObserverMock(instances: ObserverInstance[]) {
  class MockIntersectionObserver {
    observe = vi.fn()
    disconnect = vi.fn()
    takeRecords = vi.fn(() => [] as IntersectionObserverEntry[])
    callback: IntersectionObserverCallback
    options?: IntersectionObserverInit

    constructor(
      callback: IntersectionObserverCallback,
      options?: IntersectionObserverInit,
    ) {
      this.callback = callback
      this.options = options
      instances.push(this)
    }

    trigger(entries: IntersectionObserverEntry[]) {
      this.callback(entries, this as unknown as IntersectionObserver)
    }
  }

  // @ts-expect-error override for tests
  globalThis.IntersectionObserver = MockIntersectionObserver
}

function TestSection({ id }: { id: string }) {
  const [active, setActive] = useState<string | null>(null)
  useSectionInView({ sectionId: id, onInView: setActive })
  return (
    <>
      <div id={id} data-active={active === id}>
        content
      </div>
      <span data-testid="active">{active}</span>
    </>
  )
}

describe('useSectionInView', () => {
  afterEach(() => {
    cleanup()
    globalThis.IntersectionObserver = originalObserver
  })

  it('observes target section and triggers callback when entering view', async () => {
    const instances: ObserverInstance[] = []
    setupIntersectionObserverMock(instances)

    const { getByTestId } = render(<TestSection id="section-test" />)

    expect(instances).toHaveLength(1)
    const instance = instances[0]

    const target = document.getElementById('section-test')
    expect(instance.observe).toHaveBeenCalledWith(target)
    expect(instance.options?.rootMargin).toBe('-40% 0px -40% 0px')

    await act(async () => {
      instance.trigger([
        { target: target!, isIntersecting: true } as IntersectionObserverEntry,
      ])
    })

    expect(getByTestId('active').textContent).toBe('section-test')
  })

  it('disconnects observer on unmount', () => {
    const instances: ObserverInstance[] = []
    setupIntersectionObserverMock(instances)

    const { unmount } = render(<TestSection id="section-teardown" />)
    expect(instances).toHaveLength(1)

    const instance = instances[0]
    unmount()

    expect(instance.disconnect).toHaveBeenCalled()
  })
})
