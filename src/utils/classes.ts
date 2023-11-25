import { type ClassValue, clsx } from 'clsx'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createMemoClass<T>(func: (props: T) => string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function useMemoClass(args?: any) {
    const dependencies =
      typeof args === 'object' && args !== null
        ? Object.keys(args).map((key) => args[key])
        : []

    return useMemo(() => func(args), dependencies)
  }
}
