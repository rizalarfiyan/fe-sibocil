import { requestHandler, saveRequestHandler } from '@/utils/request'

import { RequestWithHeaderAuth } from '@/@types/request'
import axios from '@/libs/axios'

import {
  AuthMeResponse,
  AuthRegisterRequest,
  AuthRegisterResponse,
  AuthSendOtpRequest,
  AuthSendOtpResponse,
  AuthSendVerificationOtpRequest,
  AuthVerificationRequest,
  AuthVerificationResponse,
} from './types'

const me = requestHandler<RequestWithHeaderAuth, AuthMeResponse>((params) =>
  axios.get('/auth/me', { ...params }),
)

const verification = saveRequestHandler<
  AuthVerificationRequest,
  AuthVerificationResponse
>((params) => axios.post('/auth/verification', { ...params }))

const sendOtp = requestHandler<AuthSendOtpRequest, AuthSendOtpResponse>(
  (params) => axios.post('/auth/otp', { ...params }),
)

const verificationOtp = requestHandler<
  AuthSendVerificationOtpRequest,
  AuthSendOtpResponse
>((params) => axios.post('/auth/otp/verification', { ...params }))

const register = requestHandler<AuthRegisterRequest, AuthRegisterResponse>(
  (params) => axios.post('/auth/register', { ...params }),
)

export { me, register, sendOtp, verification, verificationOtp }
