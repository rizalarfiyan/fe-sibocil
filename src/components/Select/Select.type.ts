/* eslint-disable @typescript-eslint/no-explicit-any */
import { Props } from 'react-select'

import {
  BaseApiResponse,
  BaseError,
  BaseResponse,
  BaseResponseList,
  QueryParams,
  SelectValue,
} from '@/@types'

export interface SelectPaginationProps extends Props<SelectValue> {
  apiController: (
    params?: any,
  ) => BaseResponse<BaseResponseList<any>, BaseError<BaseApiResponse<any>>>

  perPage?: number
  debounceTimeout?: number
  searchKey?: string
  valueKey?: string
  labelKey?: string
  isAllData?: boolean
  query?: QueryParams
  value?: any
  className?: string
}
