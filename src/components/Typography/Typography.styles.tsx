import { cva } from 'class-variance-authority'

import { cn, createMemoClass } from '@/utils/classes'

import { RequiredPartial } from '@/@types'

import { DefaultTypography, TypographyProps } from './Typography.types'

const defaultTypography: DefaultTypography = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h4',
  h6: 'h4',
  p: 'p',
  span: 'p',
}

export const typographyVariants = cva(
  'text-secondary-800 dark:text-secondary-100',
  {
    variants: {
      variant: {
        h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
        h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
        h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
        p: 'leading-tight',
        lead: 'text-xl text-secondary-400',
        large: 'text-lg font-semibold',
        small: 'text-sm font-medium leading-none',
        muted: 'text-sm text-secondary-400',
        link: 'underline decoration-primary-500/50 decoration-2 underline-offset-2',
        custom: '',
      },
    },
    defaultVariants: {
      variant: 'p',
    },
  },
)

export default createMemoClass<RequiredPartial<TypographyProps, 'as'>>(
  ({ as, variant, className }) => {
    return cn(
      typographyVariants({
        variant: variant ?? defaultTypography[as],
        className,
      }),
    )
  },
)
