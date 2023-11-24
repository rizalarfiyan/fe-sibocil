'use client'

import { Slot } from '@radix-ui/react-slot'
import { forwardRef } from 'react'

import useTypographyStyle from './Typography.styles'
import { TypographyProps } from './Typography.types'

const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ variant, className, as, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : as || 'p'
    const classNames = useTypographyStyle({ variant, className, as })

    return (
      <Comp className={classNames} ref={ref} {...props}>
        {children}
      </Comp>
    )
  },
)

Typography.displayName = 'Typography'

export default Typography
