import Base from '@/screen/Auth/Base'
import LoginScreen from '@/screen/Auth/Login/Screen'

export default function Login() {
  return (
    <Base
      title='Login'
      description='Securely access your sibocil dashboard by entering your login credentials.'
      hasBack
    >
      <LoginScreen />
    </Base>
  )
}
