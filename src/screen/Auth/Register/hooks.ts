import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import schema from './schema'
import { RegisterProps } from './Screen'
import { register } from '../service'

const useRegister = (props: RegisterProps) => {
  const router = useRouter()

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
    onSuccess: ({ data }) => {
      //! navigate to halaman verify, send otp success, create user
      console.log('onSuccess: ', data)
      router.replace('/verification')
    },
    onError: (error) => {
      //! update with toastr
      console.log('onError: ', error.message)
    },
  })

  const { isDirty, isValid } = form.formState
  const onSubmit = (data: z.infer<typeof schema>) => {
    const token = Cookies.get('token')
    if (!token) {
      router.push('/login')
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
    onSubmit,
  }
}

export default useRegister
