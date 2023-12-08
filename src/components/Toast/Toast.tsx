import { Root } from '@radix-ui/react-toast'
import { VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

import { toastVariants } from './Toast.styles'
import useToastStyle from './Toast.styles'

const Toast = forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  const classNames = useToastStyle({
    className,
    variant,
  })

  return <Root ref={ref} className={classNames} {...props} />
})

Toast.displayName = Root.displayName

export default Toast
