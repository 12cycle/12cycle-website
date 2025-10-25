import { Suspense } from 'react'
import { AppRoutes } from '@/routes'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Suspense
        fallback={
          <div
            className="flex min-h-screen items-center justify-center text-sm text-slate-400"
            role="status"
            aria-live="polite"
          >
            Loading...
          </div>
        }
      >
        <AppRoutes />
      </Suspense>
    </>
  )
}
