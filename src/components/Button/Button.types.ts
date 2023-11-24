import { VariantProps } from 'class-variance-authority'

import { buttonVariants } from './Button.styles'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  rightIcon?: React.ReactElement
  leftIcon?: React.ReactElement
  isLoading?: boolean
  isFluid?: boolean
}
