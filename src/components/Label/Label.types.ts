import { Root } from '@radix-ui/react-label'
import { type VariantProps } from 'class-variance-authority'

import { labelVariants } from './Label.styles'

export type LabelElementProps = React.ElementRef<typeof Root>

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof Root>,
    VariantProps<typeof labelVariants> {}
