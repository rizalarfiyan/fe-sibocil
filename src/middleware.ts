import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (['/otp', '/test'].includes(pathname)) {
    const cookieToken = req.cookies.get('token')?.value
    const paramToken = req.nextUrl.searchParams.get('token')
    if (!cookieToken && !paramToken) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    if (!paramToken) {
      return
    }

    const redirect = NextResponse.redirect(new URL(pathname, req.url))
    redirect.cookies.set('token', paramToken)
    return redirect
  }
}

export const config = {
  matcher: ['/otp', '/test'],
}
