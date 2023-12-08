export interface HorizontalLineProps
  extends React.HTMLProps<HTMLDivElement>,
    OnlyHorizontalLineProps {
  title?: string
  rightOnly?: boolean
  leftOnly?: boolean
}

export interface OnlyHorizontalLineProps {
  lineHeight?: number | string
  lineClassName?: string
}
