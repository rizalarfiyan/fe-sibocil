import { requestHandler } from '@/utils/request'

import { BaseRequestByIdPayload, BaseResponseList, SelectValue } from '@/@types'
import { BaseRequestListPayload } from '@/@types'
import axios from '@/libs/axios'

import { CreateUserRequest, UpdateUserRequest, UserResponse } from './types'

const getAll = requestHandler<
  BaseRequestListPayload,
  BaseResponseList<UserResponse>
>((params) => axios.get('/user', { params }))

const getAllDropdown = requestHandler<
  BaseRequestListPayload,
  BaseResponseList<SelectValue>
>((params) => axios.get('/user/dropdown', { params }))

const create = requestHandler<CreateUserRequest, BaseResponseList<null>>(
  (params) => axios.post('/user', { ...params }),
)

const update = requestHandler<UpdateUserRequest, BaseResponseList<null>>(
  (params) => axios.put('/user/' + params?.id, { ...params }),
)

const toggleDelete = requestHandler<
  BaseRequestByIdPayload,
  BaseResponseList<null>
>((params) => axios.delete('/user/' + params?.id))

export { create, getAll, getAllDropdown, toggleDelete, update }
