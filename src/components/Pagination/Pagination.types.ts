import Button from '../Button'

export type PaginationProps = React.HTMLProps<HTMLUListElement> & {
  totalCount: number
  currentPage: number
  pageSize: number
  onPageChange?: (page: number) => void
  siblingCount?: number
  className?: string
  isFlat?: boolean
}

export type PaginationActionProps = Pick<
  PaginationProps,
  'currentPage' | 'onPageChange'
> & {
  pageNumber: number
}

export type PaginationButtonProps = React.ComponentPropsWithoutRef<
  typeof Button
> & {
  isActive?: boolean
}

export interface UsePaginationProps {
  totalCount: number
  pageSize: number
  siblingCount: number
  currentPage: number
}

export type UsePaginationArray = (string | number)[]
