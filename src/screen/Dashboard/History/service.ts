import { requestHandler } from '@/utils/request'

import { BaseResponseList } from '@/@types'
import { BaseRequestListPayload } from '@/@types'
import axios from '@/libs/axios'

import { HistoryResponse } from './types'

const getAll = requestHandler<
  BaseRequestListPayload,
  BaseResponseList<HistoryResponse>
>((params) => axios.get('/history', { params }))

export { getAll }
