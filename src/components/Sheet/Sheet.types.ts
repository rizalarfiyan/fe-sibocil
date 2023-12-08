import { Content } from '@radix-ui/react-dialog'
import { VariantProps } from 'class-variance-authority'

import { sheetVariants } from './Sheet.styles'

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof Content>,
    VariantProps<typeof sheetVariants> {}
