import { VariantProps } from 'class-variance-authority'

import { typographyVariants } from './Typography.styles'

export type TypographyAlias =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'

export type DefaultTypography = Record<
  TypographyAlias,
  VariantProps<typeof typographyVariants>['variant']
>

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: TypographyAlias
  asChild?: boolean
}
