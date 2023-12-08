import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

import { AuthToken } from '@/@types'
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

export const extractToken = (token: string): AuthToken | undefined => {
  try {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const decodedToken = JSON.parse(
      Buffer.from(base64, 'base64').toString('utf-8'),
    )
    return decodedToken
  } catch (error) {
    return
  }
}

export const isTokenExpired = (token: string) => {
  const decodedToken = extractToken(token)
  if (!decodedToken) {
    return false
  }

  const currentTime = Math.floor(Date.now() / 1000)
  return decodedToken.exp < currentTime
}
