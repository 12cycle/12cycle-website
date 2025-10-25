import { useMemo, useState, type ReactNode } from 'react'
import { ScrollContext } from './scroll-context'

type ScrollProviderProps = {
  children: ReactNode
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const value = useMemo(
    () => ({
      activeSection,
      setActiveSection,
    }),
    [activeSection],
  )

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}
