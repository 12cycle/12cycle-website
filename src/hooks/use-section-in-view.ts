import { useEffect } from 'react'

type UseSectionInViewParams = {
  sectionId?: string
  onInView: (sectionId: string) => void
  rootMargin?: string
}

const SECTION_OBSERVER_ROOT_MARGIN = '-40% 0px -40% 0px'

export function useSectionInView({
  sectionId,
  onInView,
  rootMargin = SECTION_OBSERVER_ROOT_MARGIN,
}: UseSectionInViewParams) {
  useEffect(() => {
    if (!sectionId) {
      return
    }

    const section = document.getElementById(sectionId)

    if (!section) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onInView(sectionId)
          }
        })
      },
      {
        rootMargin,
        threshold: 0.1,
      },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [sectionId, onInView, rootMargin])
}
