import { Slot, Slottable } from '@radix-ui/react-slot'
import { Loader2 } from 'lucide-react'
import * as React from 'react'

import useButtonStyle from './Button.styles'
import { ButtonProps } from './Button.types'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      state,
      isLoading,
      isFluid,
      rightIcon,
      leftIcon,
      disabled,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    const classNames = useButtonStyle({
      className,
      variant,
      size,
      rounded,
      state,
      isLoading,
      isFluid,
      disabled,
    })

    if (isLoading && Comp === 'button') {
      return (
        <Comp
          className={classNames}
          disabled={disabled || isLoading}
          ref={ref}
          {...props}
        >
          <Loader2 className='mr-2 animate-spin' />
          <span>Loading</span>
        </Comp>
      )
    }

    return (
      <Comp
        className={classNames}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {leftIcon ?? leftIcon}
        <Slottable>{children}</Slottable>
        {rightIcon ?? rightIcon}
      </Comp>
    )
  },
)

Button.displayName = 'Button'

export { Button }
