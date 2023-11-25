'use client'

import { SuccessResponse } from '@/@types'

import OtpScreen from '../Otp/Screen'
import { AuthVerificationResponse, AuthVerificationStep } from '../types'

interface VerificationScreenErrorProps {
  message?: string
}

const VerificationScreenError: React.FC<VerificationScreenErrorProps> = ({
  message,
}) => {
  return <h1>{message}</h1>
}

const VerificationScreen: React.FC<
  SuccessResponse<AuthVerificationResponse>
> = ({ data, message }) => {
  switch (data.step) {
    case AuthVerificationStep.Register:
      return <h1>{message}</h1>
    case AuthVerificationStep.Otp:
      return (
        <OtpScreen
          phoneNumber={data.phone_number}
          remainingTime={data.remaining_time}
        />
      )
    case AuthVerificationStep.Done:
      return <h1>{message}</h1>
    default:
      return <VerificationScreenError message={message} />
  }
}

export default Object.assign(VerificationScreen, {
  Error: VerificationScreenError,
})
