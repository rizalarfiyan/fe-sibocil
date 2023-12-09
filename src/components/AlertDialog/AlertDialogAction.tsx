import { Action } from '@radix-ui/react-alert-dialog'
import { forwardRef } from 'react'

import Button from '../Button'

const AlertDialogAction = forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ variant, state, ...props }, ref) => (
  <Action asChild>
    <Button
      ref={ref}
      variant={variant || 'solid'}
      state={state || 'danger'}
      {...props}
    />
  </Action>
))

AlertDialogAction.displayName = Action.displayName

export default AlertDialogAction
