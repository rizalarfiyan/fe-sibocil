import { forwardRef } from 'react'

import { cn } from '@/utils/classes'

const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-slate-500 dark:text-slate-400', className)}
    {...props}
  />
))

TableCaption.displayName = 'TableCaption'

export default TableCaption
