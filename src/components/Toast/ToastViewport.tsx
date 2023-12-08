import { Viewport } from '@radix-ui/react-toast'
import { forwardRef } from 'react'

import { cn } from '@/utils/classes'

const ToastViewport = forwardRef<
  React.ElementRef<typeof Viewport>,
  React.ComponentPropsWithoutRef<typeof Viewport>
>(({ className, ...props }, ref) => (
  <Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-auto sm:right-0 sm:top-0 sm:flex-col md:max-w-[420px]',
      className,
    )}
    {...props}
  />
))

ToastViewport.displayName = Viewport.displayName

export default ToastViewport
