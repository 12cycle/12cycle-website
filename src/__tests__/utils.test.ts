import { describe, expect, it } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn utility', () => {
  it('merges tailwind class names with precedence', () => {
    expect(cn('px-2 py-3', 'px-4', false, undefined, 'bg-slate-900')).toBe(
      'py-3 px-4 bg-slate-900',
    )
  })

  it('filters falsy values', () => {
    expect(cn('text-white', null, undefined, '', 'font-bold')).toBe(
      'text-white font-bold',
    )
  })
})
