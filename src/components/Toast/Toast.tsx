import { Root } from '@radix-ui/react-toast'
import { VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

import { toastVariants } from './Toast.styles'

const Toast = forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <Root
      ref={ref}
      className={toastVariants({ variant, className })}
      {...props}
    />
  )
})

Toast.displayName = Root.displayName

export default Toast
