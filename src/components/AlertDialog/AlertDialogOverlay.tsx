import { Overlay } from '@radix-ui/react-alert-dialog'
import { forwardRef } from 'react'

import { cn } from '@/utils/classes'

const AlertDialogOverlay = forwardRef<
  React.ElementRef<typeof Overlay>,
  React.ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
  <Overlay
    className={cn(
      'fixed inset-0 z-50 bg-white/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-slate-950/80',
      className,
    )}
    {...props}
    ref={ref}
  />
))

AlertDialogOverlay.displayName = Overlay.displayName

export default AlertDialogOverlay
