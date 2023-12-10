'use client'

import { Close, Content } from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { forwardRef } from 'react'

import { SheetPortal } from '.'
import useSheetStyle from './Sheet.styles'
import { SheetContentProps } from './Sheet.types'
import SheetOverlay from './SheetOverlay'

const SheetContent = forwardRef<
  React.ElementRef<typeof Content>,
  SheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => {
  const classNames = useSheetStyle({
    side,
    className,
  })

  return (
    <SheetPortal>
      <SheetOverlay />
      <Content ref={ref} className={classNames} {...props}>
        {children}
        <Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800'>
          <X className='h-4 w-4' />
          <span className='sr-only'>Close</span>
        </Close>
      </Content>
    </SheetPortal>
  )
})

SheetContent.displayName = Content.displayName

export default SheetContent
