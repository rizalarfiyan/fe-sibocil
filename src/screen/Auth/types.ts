import { AuthRole } from '@/@types'

export type AuthMeResponse = {
  first_name: string
  last_name: string
  phone_number: string
  role: AuthRole
}

export enum AuthVerificationStep {
  Register = 1,
  Otp = 2,
  Done = 3,
}

export interface AuthVerificationRequest {
  token: string
}

export interface AuthVerificationRegisterResponse {
  step: AuthVerificationStep.Register
  first_name: string
  last_name: string
}

export interface AuthVerificationOtpResponse {
  step: AuthVerificationStep.Otp
  phone_number: string
  remaining_time: number
}

export interface AuthVerificationDoneResponse {
  step: AuthVerificationStep.Done
  token: string
}

export type AuthVerificationResponse =
  | AuthVerificationOtpResponse
  | AuthVerificationDoneResponse
  | AuthVerificationRegisterResponse

export type AuthSendOtpRequest = {
  phone_number: string
  token?: string
}

export type AuthSendOtpResponse = {
  token: string
}

export type AuthSendVerificationOtpRequest = {
  otp: string
  token: string
}

export type AuthSendVerificationOtpResponse = {
  token: string
}

export type AuthRegisterRequest = {
  token: string
  phone_number: string
  first_name: string
  last_name?: string
}

export type AuthRegisterResponse = {
  token: string
}
