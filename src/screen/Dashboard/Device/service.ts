import { requestHandler } from '@/utils/request'

import { BaseResponseList, SelectValue } from '@/@types'
import { BaseRequestPayload } from '@/@types'
import axios from '@/libs/axios'

import { DeviceResponse } from './types'

const getAll = requestHandler<
  BaseRequestPayload,
  BaseResponseList<DeviceResponse>
>((params) => axios.get('/device', { params }))

const getAllDropdown = requestHandler<
  BaseRequestPayload,
  BaseResponseList<SelectValue>
>((params) => axios.get('/device/dropdown', { params }))

export { getAll, getAllDropdown }
