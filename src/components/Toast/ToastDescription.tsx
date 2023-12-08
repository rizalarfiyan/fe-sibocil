import { Description } from '@radix-ui/react-toast'
import { forwardRef } from 'react'

import { cn } from '@/utils/classes'

const ToastDescription = forwardRef<
  React.ElementRef<typeof Description>,
  React.ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
))

ToastDescription.displayName = Description.displayName

export default ToastDescription
