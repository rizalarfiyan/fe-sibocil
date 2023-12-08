import { Close } from '@radix-ui/react-toast'
import { X } from 'lucide-react'
import { forwardRef } from 'react'

import { cn } from '@/utils/classes'

const ToastClose = forwardRef<
  React.ElementRef<typeof Close>,
  React.ComponentPropsWithoutRef<typeof Close>
>(({ className, ...props }, ref) => (
  <Close
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-slate-950/50 opacity-0 transition-opacity hover:text-slate-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-slate-50/50 dark:hover:text-slate-50',
      className,
    )}
    toast-close=''
    {...props}
  >
    <X className='h-4 w-4' />
  </Close>
))

ToastClose.displayName = Close.displayName

export default ToastClose
