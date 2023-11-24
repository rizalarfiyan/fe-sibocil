import { Slot } from '@radix-ui/react-slot'
import { FieldPath, FieldValues } from 'react-hook-form'

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

export type FormItemContextValue = {
  id: string
}

export type FormControlElementProps = React.ElementRef<typeof Slot>
export type FormControlProps = React.ComponentPropsWithoutRef<typeof Slot>
export type FormDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>
export type FormItemProps = React.HTMLAttributes<HTMLDivElement>

export interface FormMessageProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  maxCounter?: number
}

export interface FormMessageCounterProps
  extends Pick<FormMessageProps, 'maxCounter'> {
  name: string
}
