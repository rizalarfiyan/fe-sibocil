import { requestHandler } from '@/utils/request'

import axios from '@/libs/axios'

import { AuthVerificationRequest, AuthVerificationResponse } from './types'

const verification = requestHandler<
  AuthVerificationRequest,
  AuthVerificationResponse
>((params) => axios.post('/auth/verification', { ...params }))

export { verification }
