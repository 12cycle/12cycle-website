import { createContext, useContext } from 'react'

export type ScrollContextValue = {
  activeSection: string | null
  setActiveSection: (sectionId: string) => void
}

export const ScrollContext = createContext<ScrollContextValue | undefined>(undefined)

export function useScrollContext() {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScrollContext must be used within ScrollProvider')
  }
  return context
}
