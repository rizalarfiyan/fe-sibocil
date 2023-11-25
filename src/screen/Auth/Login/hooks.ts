import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { API_BASE_URL } from '@/constants'

import schema from './schema'

const useLogin = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      phone_number: '',
    },
  })

  const { isDirty, isValid } = form.formState
  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data)
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
    onSubmit,
    onGoogleLogin,
    isDisableGoogle,
  }
}

export default useLogin
