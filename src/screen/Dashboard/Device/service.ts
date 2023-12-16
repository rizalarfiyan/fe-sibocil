import { requestHandler } from '@/utils/request'

import { BaseRequestByIdPayload, BaseResponseList, SelectValue } from '@/@types'
import { BaseRequestListPayload } from '@/@types'
import axios from '@/libs/axios'

import {
  CreateDeviceRequest,
  DeviceResponse,
  UpdateDeviceRequest,
} from './types'

const getAll = requestHandler<
  BaseRequestListPayload,
  BaseResponseList<DeviceResponse>
>((params) => axios.get('/device', { params }))

const getAllDropdown = requestHandler<
  BaseRequestListPayload,
  BaseResponseList<SelectValue>
>((params) => axios.get('/device/dropdown', { params }))

const create = requestHandler<CreateDeviceRequest, BaseResponseList<null>>(
  (params) => axios.post('/device', { ...params }),
)

const update = requestHandler<UpdateDeviceRequest, BaseResponseList<null>>(
  (params) => axios.put('/device/' + params?.id, { ...params }),
)

const toggleDelete = requestHandler<
  BaseRequestByIdPayload,
  BaseResponseList<null>
>((params) => axios.delete('/device/' + params?.id))

export { create, getAll, getAllDropdown, toggleDelete, update }
