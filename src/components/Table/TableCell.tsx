import { forwardRef } from 'react'

import { cn } from '@/utils/classes'

const TableCell = forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
    {...props}
  />
))

TableCell.displayName = 'TableCell'

export default TableCell
