import * as React from 'react'

import { cn } from '@/utils/classes'

import { useFormField } from './Form.hook'
import Label, { LabelElementProps, LabelProps } from '../Label'

const FormLabel = React.forwardRef<LabelElementProps, LabelProps>(
  ({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField()

    return (
      <Label
        ref={ref}
        className={cn(error && 'text-danger-500', className)}
        htmlFor={formItemId}
        {...props}
      />
    )
  },
)
FormLabel.displayName = 'FormLabel'

export default FormLabel
