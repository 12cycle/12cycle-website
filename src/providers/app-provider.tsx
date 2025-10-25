import { type ReactNode } from 'react'
import { HashRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ScrollProvider } from './scroll-provider'

type AppProviderProps = {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <HelmetProvider>
      <HashRouter>
        <ScrollProvider>{children}</ScrollProvider>
      </HashRouter>
    </HelmetProvider>
  )
}
