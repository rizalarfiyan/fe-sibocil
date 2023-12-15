/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef } from '@tanstack/react-table'
import { Ref } from 'react'

import {
  BaseApiResponse,
  BaseError,
  BaseResponse,
  BaseResponseList,
  QueryParams,
  QuerySorting,
} from '@/@types'

export interface DataTableProps {
  tableRef?: Ref<DataTableHandle> | null
  apiController: (
    params?: any,
  ) => BaseResponse<BaseResponseList<any>, BaseError<BaseApiResponse<any>>>
  keyId?: string
  perPage?: number
  debounceSorting?: number
  hasAutoNumber?: boolean
  query?: QueryParams
  columns: ColumnDef<any>[]
  defaultSort?: QuerySorting
  className?: string
  actions?: (idx: string, row: any) => React.ReactNode
  rowClassName?: (row: any) => string
}

export interface DataTableHandle {
  update: () => void
}

export type DataTableColumn = ColumnDef<any>[]

export type DataTableStatus =
  | { icon: React.ReactNode; message: string }
  | null
  | undefined
