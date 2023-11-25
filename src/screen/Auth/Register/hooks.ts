import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import schema from './schema'
import { RegisterProps } from './Screen'

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

  const { isDirty, isValid } = form.formState
  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data)
    // dummy, reload if success
    router.replace('/verification')
  }

  return {
    form,
    isDisable: !isDirty || !isValid,
    onSubmit,
  }
}

export default useRegister
