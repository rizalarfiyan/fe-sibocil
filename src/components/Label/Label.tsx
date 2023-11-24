import { Root } from '@radix-ui/react-label'
import React from 'react'

import { labelVariants } from './Label.styles'
import { LabelElementProps, LabelProps } from './Label.types'

const Label = React.forwardRef<LabelElementProps, LabelProps>(
  ({ className, ...props }, ref) => (
    <Root ref={ref} className={labelVariants({ className })} {...props} />
  ),
)

Label.displayName = Root.displayName

export default Label
