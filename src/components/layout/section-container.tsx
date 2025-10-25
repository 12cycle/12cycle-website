import { type ReactNode } from 'react'
import { useSectionInView } from '@/hooks/use-section-in-view'
import { useScrollContext } from '@/providers/scroll-context'
import { cn } from '@/lib/utils'

type SectionContainerProps = {
  id?: string
  className?: string
  children: ReactNode
  wrapperClassName?: string
}

export function SectionContainer({
  id,
  className,
  wrapperClassName,
  children,
}: SectionContainerProps) {
  const { setActiveSection } = useScrollContext()

  useSectionInView({
    sectionId: id,
    onInView: setActiveSection,
  })

  return (
    <section
      id={id}
      className={cn(
        'relative isolate overflow-hidden py-20 sm:py-24 md:py-32',
        wrapperClassName,
      )}
    >
      <div className={cn('container mx-auto max-w-6xl', className)}>{children}</div>
    </section>
  )
}
