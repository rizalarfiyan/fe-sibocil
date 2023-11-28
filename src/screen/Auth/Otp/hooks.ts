import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useState } from 'react'

import { verificationOtp } from '../service'

const useOtp = () => {
  const [otp, setOtp] = useState('')

  const onResendOtp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const apiVerificationOtp = useMutation({
    mutationFn: verificationOtp,
    onSuccess: ({ data }) => {
      //! navigate to halaman verify, send otp success, create user
      console.log('onSuccess: ', data)
    },
    onError: (error) => {
      //! update with toastr
      console.log('onError: ', error.message)
    },
  })

  const onSubmitOtp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    apiVerificationOtp.mutate({
      otp,
      token: Cookies.get('token') || '',
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
