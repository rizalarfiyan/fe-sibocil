import { requestHandler } from '@/utils/request'

import { BaseResponseList } from '@/@types'
import { BaseRequestPayload } from '@/@types/request'
import axios from '@/libs/axios'

import { DeviceResponse } from './types'

const getAll = requestHandler<
  BaseRequestPayload,
  BaseResponseList<DeviceResponse>
>((params) => axios.get('/device', { params }))

export { getAll }
