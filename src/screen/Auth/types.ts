export enum AuthVerificationStep {
  Register = 1,
  Otp = 2,
  Done = 3,
}

export interface AuthVerificationRequest {
  Token: string
}

export interface AuthVerificationResponse {
  Step: AuthVerificationStep
  Token: string
}
