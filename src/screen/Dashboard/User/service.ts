import { requestHandler } from '@/utils/request'

import { BaseResponseList } from '@/@types'
import axios from '@/libs/axios'

import { GetAllRequest, GetAllResponse } from './types'

const getAll = requestHandler<GetAllRequest, BaseResponseList<GetAllResponse>>(
  (params) => axios.get('/user', { params }),
)

export { getAll }
