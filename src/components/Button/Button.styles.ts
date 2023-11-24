import { cva } from 'class-variance-authority'

import { cn, createMemoClass } from '@/utils/classes'

import { ButtonProps } from './Button.types'

const variantState = {
  primary: {
    solid: 'bg-primary-600 text-white hover:bg-primary-600/90',
    outline:
      'bg-white text-primary-800 border border-primary-600 hover:bg-primary-600/10',
    ghost: 'bg-transparent text-primary-800 hover:bg-primary-600/10',
    subtle:
      'bg-transparent text-primary-800 bg-primary-50 hover:bg-primary-100',
  },
  secondary: {
    solid: 'bg-secondary-600 text-white hover:bg-secondary-600/90',
    outline:
      'bg-white text-secondary-800 border border-secondary-600 hover:bg-secondary-600/10',
    ghost: 'bg-transparent text-secondary-800 hover:bg-secondary-600/10',
    subtle:
      'bg-transparent text-secondary-800 bg-secondary-50 hover:bg-secondary-100',
  },
  success: {
    solid: 'bg-success-600 text-white hover:bg-success-600/90',
    outline:
      'bg-white text-success-800 border border-success-600 hover:bg-success-600/10',
    ghost: 'bg-transparent text-success-800 hover:bg-success-600/10',
    subtle:
      'bg-transparent text-success-800 bg-success-50 hover:bg-success-100',
  },
  info: {
    solid: 'bg-info-600 text-white hover:bg-info-600/90',
    outline:
      'bg-white text-info-800 border border-info-600 hover:bg-info-600/10',
    ghost: 'bg-transparent text-info-800 hover:bg-info-600/10',
    subtle: 'bg-transparent text-info-800 bg-info-50 hover:bg-info-100',
  },
  warning: {
    solid: 'bg-warning-600 text-white hover:bg-warning-600/90',
    outline:
      'bg-white text-warning-800 border border-warning-600 hover:bg-warning-600/10',
    ghost: 'bg-transparent text-warning-800 hover:bg-warning-600/10',
    subtle:
      'bg-transparent text-warning-800 bg-warning-50 hover:bg-warning-100',
  },
  danger: {
    solid: 'bg-danger-600 text-white hover:bg-danger-600/90',
    outline:
      'bg-white text-danger-800 border border-danger-600 hover:bg-danger-600/10',
    ghost: 'bg-transparent text-danger-800 hover:bg-danger-600/10',
    subtle: 'bg-transparent text-danger-800 bg-danger-50 hover:bg-danger-100',
  },
}

type CompoundVariant = {
  variant: keyof typeof variantState.primary
  state: keyof typeof variantState
  className: string
}

const compoundVariants: CompoundVariant[] = []
for (const [state, variants] of Object.entries(variantState)) {
  for (const [variant, className] of Object.entries(variants)) {
    compoundVariants.push({
      variant: variant as keyof typeof variantState.primary,
      state: state as keyof typeof variantState,
      className,
    })
  }
}

export const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium ring-offset-white focus-visible:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:opacity-50',
  {
    variants: {
      variant: {
        solid: '',
        outline: '',
        ghost: '',
        subtle: '',
      },
      state: {
        primary: '',
        secondary: '',
        success: '',
        info: '',
        warning: '',
        danger: '',
      },
      size: {
        md: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
      rounded: {
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    compoundVariants,
    defaultVariants: {
      variant: 'solid',
      state: 'primary',
      size: 'md',
      rounded: 'md',
    },
  },
)

export default createMemoClass<ButtonProps>(
  ({
    className,
    variant,
    size,
    rounded,
    state,
    isLoading,
    isFluid,
    disabled,
  }) => {
    return cn(
      isLoading && 'cursor-progress',
      isFluid && 'w-full',
      disabled && 'cursor-not-allowed',
      buttonVariants({ variant, size, rounded, state, className }),
    )
  },
)
