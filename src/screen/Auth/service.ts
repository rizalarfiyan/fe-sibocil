import { requestHandler, saveRequestHandler } from '@/utils/request'

import axios from '@/libs/axios'

import {
  AuthRegisterRequest,
  AuthRegisterResponse,
  AuthSendOtpRequest,
  AuthSendOtpResponse,
  AuthSendVerificationOtpRequest,
  AuthVerificationRequest,
  AuthVerificationResponse,
} from './types'

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

export { register, sendOtp, verification, verificationOtp }
