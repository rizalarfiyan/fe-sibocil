import { Title } from '@radix-ui/react-alert-dialog'
import { forwardRef } from 'react'

import Typography from '../Typography'

const AlertDialogTitle = forwardRef<
  React.ElementRef<typeof Typography>,
  React.ComponentPropsWithoutRef<typeof Typography>
>(({ variant, as, ...props }, ref) => (
  <Title asChild>
    <Typography
      ref={ref}
      variant={variant || 'large'}
      as={as || 'h2'}
      {...props}
    />
  </Title>
))

AlertDialogTitle.displayName = Title.displayName

export default AlertDialogTitle
