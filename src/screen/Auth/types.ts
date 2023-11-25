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
