import { cva } from 'class-variance-authority'

import { cn, createMemoClass } from '@/utils/classes'

import { LabelProps } from './Label.types'

export const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
)

export default createMemoClass<LabelProps>(({ className }) => {
  return cn(labelVariants({ className }))
})
