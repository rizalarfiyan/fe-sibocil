import React from 'react'

import { cn } from '@/utils/classes'

import { InputProps } from './Input.types'
import InputIcon from './InputIcon'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, rightIcon, leftIcon, type, parentClassName, ...props },
    ref,
  ) => {
    return (
      <div className={cn('relative', parentClassName)}>
        {leftIcon && <InputIcon>{leftIcon}</InputIcon>}
        <input
          type={type}
          className={cn(
            'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            rightIcon && 'pl-10',
            leftIcon && 'pr-10',
            className,
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && <InputIcon>{rightIcon}</InputIcon>}
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
