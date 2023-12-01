import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

import { COOKIE } from '@/constants'

const useVerificationBack = () => {
  const route = useRouter()
  const onBackToLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    Cookies.remove(COOKIE.AuthTokenVerify)
    route.replace('/login')
  }

  return {
    onBackToLogin,
  }
}

export default useVerificationBack
