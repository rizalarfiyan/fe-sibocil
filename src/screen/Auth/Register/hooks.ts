'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ErrorResponse } from '@/@types'
import { COOKIE } from '@/constants'
import { useToast } from '@/hooks/useToast'

import schema from './schema'
import { RegisterProps } from './Screen'
import { register } from '../service'
import { AuthRegisterResponse } from '../types'

const useRegister = (props: RegisterProps) => {
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      first_name: props.first_name,
      last_name: props.last_name,
      phone_number: '',
    },
  })

  const apiRegister = useMutation({
    mutationFn: register,
    onSuccess: () => {
      router.refresh()
    },
    onError: (error: ErrorResponse<AuthRegisterResponse>) => {
      if (error.code === 400) {
        Object.entries(error.data).forEach(([key, value]) => {
          form.setError(key as keyof z.infer<typeof schema>, {
            message: value as string,
          })
        })
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
  const onSubmit = (data: z.infer<typeof schema>) => {
    const token = Cookies.get(COOKIE.AuthTokenVerify)
    if (!token) {
      router.replace('/login')
    }

    apiRegister.mutate({
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
      token: token as string,
    })
  }

  return {
    form,
    isDisable: !isDirty || !isValid,
    isLoading: apiRegister.isPending,
    onSubmit,
  }
}

export default useRegister
