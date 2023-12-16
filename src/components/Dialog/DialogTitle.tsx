import { Title } from '@radix-ui/react-dialog'
import { forwardRef } from 'react'

import Typography from '../Typography'

const DialogTitle = forwardRef<
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

DialogTitle.displayName = Title.displayName

export default DialogTitle
