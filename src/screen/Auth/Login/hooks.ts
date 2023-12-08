import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ErrorResponse } from '@/@types'
import { API_BASE_URL, COOKIE } from '@/constants'
import { useToast } from '@/hooks/useToast'

import schema from './schema'
import { sendOtp } from '../service'
import { AuthSendOtpResponse } from '../types'

const useLogin = () => {
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      phone_number: '',
    },
  })

  const otp = useMutation({
    mutationFn: sendOtp,
    onSuccess: ({ data }) => {
      Cookies.set(COOKIE.AuthTokenVerify, data.token)
      router.replace('/verification')
    },
    onError: (error: ErrorResponse<AuthSendOtpResponse>) => {
      if (error?.data?.token) {
        Cookies.set(COOKIE.AuthTokenVerify, error.data.token)
        router.replace('/verification')
        return
      }

      toast({
        title: 'Error!',
        description: error.message,
        variant: 'destructive',
      })
    },
  })

  const { isDirty, isValid } = form.formState
  const onSubmit = async (data: z.infer<typeof schema>) => {
    await otp.mutateAsync({
      phone_number: data.phone_number,
    })
  }

  const [isDisableGoogle, setIsDisableGoogle] = useState(false)
  const onGoogleLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsDisableGoogle(true)
    window.location.assign(API_BASE_URL + '/auth/google')
  }

  return {
    form,
    isDisable: !isDirty || !isValid,
    isLoading: otp.isPending,
    onSubmit,
    onGoogleLogin,
    isDisableGoogle,
  }
}

export default useLogin
