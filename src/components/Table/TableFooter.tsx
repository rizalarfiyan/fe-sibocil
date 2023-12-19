import { forwardRef } from 'react'

import { cn } from '@/utils/classes'

const TableFooter = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0',
      className,
    )}
    {...props}
  />
))

TableFooter.displayName = 'TableFooter'

export default TableFooter
