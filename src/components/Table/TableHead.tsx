import { forwardRef } from 'react'

import { cn } from '@/utils/classes'

const TableHead = forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-12 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400 [&:has([role=checkbox])]:pr-0',
      className,
    )}
    {...props}
  />
))

TableHead.displayName = 'TableHead'

export default TableHead
