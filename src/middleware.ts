import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { COOKIE } from './constants'

const handleVerification = (req: NextRequest) => {
  const tokenName = COOKIE.TokenAuthVerify
  const cookieToken = req.cookies.get(tokenName)?.value
  const paramToken = req.nextUrl.searchParams.get(tokenName)
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

export function middleware(req: NextRequest) {
  switch (req.nextUrl.pathname) {
    case '/verification':
      return handleVerification(req)
  }
}

export const config = {
  matcher: ['/verification'],
}
