import * as React from 'react'
import { useWatch } from 'react-hook-form'

import { cn } from '@/utils/classes'

import { useFormField } from './Form.hook'
import { FormMessageCounterProps, FormMessageProps } from './Form.types'

const FormMessageCounter: React.FC<FormMessageCounterProps> = ({
  maxCounter = 0,
  name,
}) => {
  const watch = useWatch({ name })
  return (
    <span>
      {watch?.length}/{maxCounter}
    </span>
  )
}

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, children, maxCounter, ...props }, ref) => {
    const { error, formMessageId, name } = useFormField()

    const body = error ? String(error?.message) : children
    const hasCounter = (maxCounter || 0) > 0

    if (!body && !hasCounter) {
      return null
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn(
          'text-sm font-medium',
          body && 'text-danger-500',
          hasCounter && 'flex items-start justify-between gap-2',
          className,
        )}
        {...props}
      >
        <span>{body}</span>
        {hasCounter && <FormMessageCounter {...{ maxCounter, name }} />}
      </p>
    )
  },
)

FormMessage.displayName = 'FormMessage'

export default FormMessage
