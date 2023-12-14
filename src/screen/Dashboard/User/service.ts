import { requestHandler } from '@/utils/request'

import { BaseResponseList, SelectValue } from '@/@types'
import { BaseRequestPayload } from '@/@types'
import axios from '@/libs/axios'

import { UserResponse } from './types'

const getAll = requestHandler<
  BaseRequestPayload,
  BaseResponseList<UserResponse>
>((params) => axios.get('/user', { params }))

const getAllDropdown = requestHandler<
  BaseRequestPayload,
  BaseResponseList<SelectValue>
>((params) => axios.get('/user/dropdown', { params }))

export { getAll, getAllDropdown }
