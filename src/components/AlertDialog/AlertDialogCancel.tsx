import { Cancel } from '@radix-ui/react-alert-dialog'
import { forwardRef } from 'react'

import Button from '../Button'

const AlertDialogCancel = forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ variant, state, ...props }, ref) => (
  <Cancel asChild>
    <Button
      ref={ref}
      variant={variant || 'subtle'}
      state={state || 'secondary'}
      {...props}
    />
  </Cancel>
))

AlertDialogCancel.displayName = Cancel.displayName

export default AlertDialogCancel
