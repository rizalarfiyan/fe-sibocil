import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { COOKIE } from '@/constants'
import { useToast } from '@/hooks/useToast'

import { sendOtp, verificationOtp } from '../service'

const useOtp = (phoneNumber: string) => {
  const [otp, setOtp] = useState('')
  const router = useRouter()
  const { toast } = useToast()

  const apiResendOtp = useMutation({
    mutationFn: sendOtp,
    onSuccess: () => {
      router.replace('/verification')
    },
    onError: (error) => {
      toast({
        title: 'Error!',
        description: error.message,
        variant: 'destructive',
      })
    },
  })
  const onResendOtp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const token = Cookies.get(COOKIE.AuthTokenVerify)
    if (!token) {
      router.replace('/login')
    }

    apiResendOtp.mutate({
      phone_number: phoneNumber,
      token: token,
    })
  }

  const apiVerificationOtp = useMutation({
    mutationFn: verificationOtp,
    onSuccess: ({ data }) => {
      Cookies.remove(COOKIE.AuthTokenVerify)
      Cookies.set(COOKIE.AuthToken, data.token)
      router.replace('/dashboard')
    },
    onError: (error) => {
      toast({
        title: 'Error!',
        description: error.message,
        variant: 'destructive',
      })
    },
  })

  const onSubmitOtp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const token = Cookies.get(COOKIE.AuthTokenVerify)
    if (!token) {
      router.replace('/login')
    }

    apiVerificationOtp.mutate({
      otp,
      token: token as string,
    })
  }

  return {
    otp,
    setOtp,
    isDisable: otp.length !== 6,
    isLoading: apiVerificationOtp.isPending,
    onResendOtp,
    onSubmitOtp,
  }
}

export default useOtp
