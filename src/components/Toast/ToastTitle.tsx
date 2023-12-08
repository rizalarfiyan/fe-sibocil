import { Title } from '@radix-ui/react-toast'
import { forwardRef } from 'react'

import { cn } from '@/utils/classes'

const ToastTitle = forwardRef<
  React.ElementRef<typeof Title>,
  React.ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
))

ToastTitle.displayName = Title.displayName

export default ToastTitle
