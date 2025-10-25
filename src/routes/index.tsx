import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const HomePage = lazy(() => import('@/pages/home/home-page'))

export function AppRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
  ])
}
