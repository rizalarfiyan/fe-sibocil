export interface HorizontalLineProps
  extends React.HTMLProps<HTMLDivElement>,
    OnlyHorizontalLineProps {
  title?: string
}

export interface OnlyHorizontalLineProps {
  lineHeight?: number | string
  lineClassName?: string
}
