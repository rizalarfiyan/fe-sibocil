import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

import { COOKIE } from '@/constants'

const baseIsLoggedIn = (token?: string): boolean => {
  if (token) {
    return !isTokenExpired(token)
  }

  return false
}

export const isLoggedInMiddleware = (req: NextRequest): boolean => {
  const cookieAuth = req.cookies.get(COOKIE.AuthToken)?.value
  return baseIsLoggedIn(cookieAuth)
}

export const isLoggedIn = (): boolean => {
  const cookieAuth = cookies().get(COOKIE.AuthToken)?.value
  return baseIsLoggedIn(cookieAuth)
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
