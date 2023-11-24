import * as React from 'react'

import { FormFieldContextValue, FormItemContextValue } from './Form.types'

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
)

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
)

export { FormFieldContext, FormItemContext }
