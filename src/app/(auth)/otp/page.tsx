import Base from '@/screen/Auth/Base'
import OtpScreen from '@/screen/Auth/Otp/Screen'

export default function Login() {
  return (
    <Base
      title='OTP'
      description='Ensuring secure access to a greener tomorrow, one code at a time.'
    >
      <OtpScreen phoneNumber='0895377233002' remainingTime={5} />
    </Base>
  )
}
