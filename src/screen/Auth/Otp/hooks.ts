import { useState } from 'react'

const useOtp = () => {
  const [otp, setOtp] = useState('')

  const onResendOtp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const onSubmitOtp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return {
    otp,
    setOtp,
    isDisable: otp.length !== 6,
    onResendOtp,
    onSubmitOtp,
  }
}

export default useOtp
