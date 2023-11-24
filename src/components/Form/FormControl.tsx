import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import { useFormField } from './Form.hook'
import { FormControlElementProps, FormControlProps } from './Form.types'

const FormControl = React.forwardRef<FormControlElementProps, FormControlProps>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } =
      useFormField()

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={
          !error
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formMessageId}`
        }
        aria-invalid={!!error}
        {...props}
      />
    )
  },
)

FormControl.displayName = 'FormControl'

export default FormControl
