import '@testing-library/jest-dom/vitest'

class IntersectionObserverMock {
  constructor(private readonly callback: IntersectionObserverCallback) {}
  observe(element: Element) {
    const rect = element.getBoundingClientRect()
    const entry: IntersectionObserverEntry = {
      boundingClientRect: rect,
      intersectionRatio: 1,
      intersectionRect: rect,
      isIntersecting: true,
      rootBounds: null,
      target: element,
      time: Date.now(),
    }
    this.callback([entry], this as unknown as IntersectionObserver)
  }
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

if (!('IntersectionObserver' in globalThis)) {
  // @ts-expect-error assigning test shim
  globalThis.IntersectionObserver = IntersectionObserverMock
}

if (!globalThis.matchMedia) {
  globalThis.matchMedia = () => ({
    matches: false,
    media: '',
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })
}
