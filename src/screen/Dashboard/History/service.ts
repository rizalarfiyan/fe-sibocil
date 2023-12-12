import { requestHandler } from '@/utils/request'

import { BaseResponseList } from '@/@types'
import { BaseRequestPayload } from '@/@types/request'
import axios from '@/libs/axios'

import { HistoryResponse } from './types'

const getAll = requestHandler<
  BaseRequestPayload,
  BaseResponseList<HistoryResponse>
>((params) => axios.get('/history', { params }))

export { getAll }
