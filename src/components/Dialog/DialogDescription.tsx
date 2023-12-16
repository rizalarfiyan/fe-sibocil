import { Description } from '@radix-ui/react-dialog'
import { forwardRef } from 'react'

import { cn } from '@/utils/classes'

import Typography from '../Typography'

const DialogDescription = forwardRef<
  React.ElementRef<typeof Typography>,
  React.ComponentPropsWithoutRef<typeof Typography>
>(({ variant, className, ...props }, ref) => (
  <Description asChild>
    <Typography
      ref={ref}
      variant={variant || 'p'}
      className={cn('text-sm text-slate-500 dark:text-slate-400', className)}
      {...props}
    />
  </Description>
))

DialogDescription.displayName = Description.displayName

export default DialogDescription
