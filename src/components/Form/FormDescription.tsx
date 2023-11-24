import * as React from 'react'

import { cn } from '@/utils/classes'

import { useFormField } from './Form.hook'
import { FormDescriptionProps } from './Form.types'

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  FormDescriptionProps
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
})

FormDescription.displayName = 'FormDescription'

export default FormDescription
