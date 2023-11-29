'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { COOKIE } from '@/constants'

const useDone = (token: string) => {
  const router = useRouter()

  useEffect(() => {
    Cookies.remove(COOKIE.AuthTokenVerify)
    Cookies.set(COOKIE.AuthToken, token)

    const timeout = setTimeout(() => {
      router.push('/dashboard')
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])
}

export default useDone
