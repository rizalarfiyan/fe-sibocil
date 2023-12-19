import { requestHandler } from '@/utils/request'

import { BaseResponseList, QueryParams } from '@/@types'
import { BaseRequestListPayload } from '@/@types'
import axios from '@/libs/axios'

import { HistoryResponse } from './types'

const getAll = requestHandler<
  BaseRequestListPayload | QueryParams<string>,
  BaseResponseList<HistoryResponse>
>((params) => axios.get('/history', { params }))

export { getAll }
