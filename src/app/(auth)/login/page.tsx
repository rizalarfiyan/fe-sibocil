import Base from '@/screen/Auth/Base'
import LoginScreen from '@/screen/Auth/Login/Screen'

export default function Login() {
  return (
    <Base
      title='Login'
      description='Your gateway to a sustainable future, where recycling meets innovation in the palm of your hand.'
      hasBack
    >
      <LoginScreen />
    </Base>
  )
}
