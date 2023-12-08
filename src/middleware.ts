import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { COOKIE } from './constants'
import { isLoggedInMiddleware } from './utils/auth'

const handleToDashboard = (req: NextRequest) => {
  const cookieAuth = isLoggedInMiddleware(req)
  if (cookieAuth) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }
}

const handleToLogin = (req: NextRequest) => {
  const cookieAuth = isLoggedInMiddleware(req)
  if (!cookieAuth) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

const handleToVerification = (req: NextRequest) => {
  const cookieToken = req.cookies.get(COOKIE.AuthTokenVerify)?.value
  if (cookieToken) {
    return NextResponse.redirect(new URL('/verification', req.url))
  }
}

const handleVerification = (req: NextRequest) => {
  const dashboard = handleToDashboard(req)
  if (dashboard) return dashboard

  const tokenName = COOKIE.AuthTokenVerify
  const cookieToken = req.cookies.get(tokenName)?.value
  const paramToken = req.nextUrl.searchParams.get('token')
  if (!cookieToken && !paramToken) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (!paramToken) {
    return
  }

  const redirect = NextResponse.redirect(new URL(req.nextUrl.pathname, req.url))
  redirect.cookies.set(tokenName, paramToken)
  return redirect
}

const handleDashboard = (req: NextRequest) => {
  const verification = handleToVerification(req)
  if (verification) return verification

  const login = handleToLogin(req)
  if (login) {
    login.cookies.delete(COOKIE.AuthTokenVerify)
    login.cookies.delete(COOKIE.AuthToken)
  }

  return login
}

const handleLogin = (req: NextRequest) => {
  const verification = handleToVerification(req)
  if (verification) return verification

  return handleToDashboard(req)
}

export function middleware(req: NextRequest) {
  switch (req.nextUrl.pathname) {
    case '/verification':
      return handleVerification(req)
    case '/login':
      return handleLogin(req)
  }

  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    return handleDashboard(req)
  }
}

export const config = {
  matcher: ['/verification', '/login', '/dashboard/:path*'],
}
