import { NextRequest } from 'next/server'

import { COOKIE } from '@/constants'

export const isLoggedIn = (req: NextRequest): boolean => {
  const cookieAuth = req.cookies.get(COOKIE.AuthToken)?.value
  if (cookieAuth) {
    return !isTokenExpired(cookieAuth)
  }

  return false
}

function isTokenExpired(token: string) {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const decodedToken = JSON.parse(
    Buffer.from(base64, 'base64').toString('utf-8'),
  )

  if (decodedToken.exp) {
    const currentTime = Math.floor(Date.now() / 1000)
    return decodedToken.exp < currentTime
  }

  return false
}
