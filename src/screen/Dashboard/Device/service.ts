import { requestHandler } from '@/utils/request'

import { BaseResponseList, SelectValue } from '@/@types'
import { BaseRequestListPayload } from '@/@types'
import axios from '@/libs/axios'

import { DeviceResponse } from './types'

const getAll = requestHandler<
  BaseRequestListPayload,
  BaseResponseList<DeviceResponse>
>((params) => axios.get('/device', { params }))

const getAllDropdown = requestHandler<
  BaseRequestListPayload,
  BaseResponseList<SelectValue>
>((params) => axios.get('/device/dropdown', { params }))

export { getAll, getAllDropdown }
