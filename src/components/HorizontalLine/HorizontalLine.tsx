import * as React from 'react'

import { cn } from '@/utils/classes'

import {
  HorizontalLineProps,
  OnlyHorizontalLineProps,
} from './HorizontalLine.types'

const OnlyHorizontalLine: React.FC<OnlyHorizontalLineProps> = ({
  lineHeight = '1.5px',
  lineClassName,
}) => {
  return (
    <div
      className={cn(
        'w-full flex-grow rounded-md bg-secondary-200',
        lineClassName,
      )}
      style={{
        height: lineHeight,
      }}
    />
  )
}

const HorizontalLine = React.forwardRef<HTMLDivElement, HorizontalLineProps>(
  (props, ref) => {
    const { className, title, lineHeight, lineClassName, children, ...rest } =
      props
    const content = title || children
    return (
      <div
        ref={ref}
        className={cn('relative flex items-center py-5 text-center', className)}
        {...rest}
      >
        <OnlyHorizontalLine {...{ lineHeight, lineClassName }} />
        <div className='flex-shrink px-4'>{content}</div>
        <OnlyHorizontalLine {...{ lineHeight, lineClassName }} />
      </div>
    )
  },
)

HorizontalLine.displayName = 'HorizontalLine'

export default HorizontalLine
