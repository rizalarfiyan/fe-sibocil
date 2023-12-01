import { SuccessResponse } from '@/@types'

import VerificationBackButton from './BackButton'
import VerificationScreenError from './Error'
import DoneScreen from '../Done/Screen'
import OtpScreen from '../Otp/Screen'
import RegisterScreen from '../Register/Screen'
import { AuthVerificationResponse, AuthVerificationStep } from '../types'

const VerificationScreen: React.FC<
  SuccessResponse<AuthVerificationResponse>
> = ({ data, message }) => {
  switch (data.step) {
    case AuthVerificationStep.Register:
      return (
        <RegisterScreen
          first_name={data.first_name}
          last_name={data.last_name}
        />
      )
    case AuthVerificationStep.Otp:
      return (
        <OtpScreen
          phoneNumber={data.phone_number}
          remainingTime={data.remaining_time}
        />
      )
    case AuthVerificationStep.Done:
      return <DoneScreen message={message} token={data.token} />
    default:
      return <VerificationScreenError message={message} />
  }
}

export default Object.assign(VerificationScreen, {
  Error: VerificationScreenError,
  Back: VerificationBackButton,
})
