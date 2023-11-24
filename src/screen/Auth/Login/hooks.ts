import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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

  const onGoogleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return {
    form,
    isDisable: !isDirty || !isValid,
    onSubmit,
    onGoogleLogin,
  }
}

export default useLogin
