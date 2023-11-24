import * as React from 'react'

import { cn } from '@/utils/classes'

import { FormItemProps } from './Form.types'
import { FormItemContext } from './FormContext'

const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, ...props }, ref) => {
    const id = React.useId()

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn('space-y-2', className)} {...props} />
      </FormItemContext.Provider>
    )
  },
)
FormItem.displayName = 'FormItem'

export default FormItem
