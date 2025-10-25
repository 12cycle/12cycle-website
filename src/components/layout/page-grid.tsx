import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type PageGridProps = {
  children: ReactNode
  className?: string
}

export function PageGrid({ children, className }: PageGridProps) {
  return (
    <div
      className={cn(
        'grid gap-10 md:grid-cols-12 md:gap-x-12 md:gap-y-16 xl:gap-x-16',
        className,
      )}
    >
      {children}
    </div>
  )
}
