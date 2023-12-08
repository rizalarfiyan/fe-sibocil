import { isLoggedIn } from '@/utils/auth'

export const getBackUrl = () => {
  const isLogin = isLoggedIn()
  if (isLogin) {
    return {
      href: '/dashboard',
      title: 'Back to Dashboard',
    }
  }

  return {
    href: '/',
    title: 'Back to Home',
  }
}
