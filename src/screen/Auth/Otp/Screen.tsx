'use client'

import { Dot } from 'lucide-react'
import OTPInput from 'react-otp-input'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Typography from '@/components/Typography'
import useTimeLeft from '@/hooks/timeLeft'

import useOtp from './hooks'

interface RemainingOtpProps extends OtpProps {
  onResend: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const RemainingOtp: React.FC<RemainingOtpProps> = ({
  remainingTime,
  onResend,
}) => {
  const { isFinish, time } = useTimeLeft(remainingTime)

  if (isFinish) {
    return (
      <div className='text-right'>
        <button type='button' onClick={onResend} className='underline'>
          Resend OTP
        </button>
      </div>
    )
  }

  return <div className='text-right'>Resend OTP in {time}</div>
}

interface OtpProps {
  phoneNumber: string
  remainingTime: number
}

const OtpScreen: React.FC<OtpProps> = (props) => {
  const { otp, setOtp, isDisable, onResendOtp, onSubmitOtp } = useOtp()

  return (
    <div className='space-y-8'>
      <div className='space-y-2 text-center'>
        <Typography variant='p' className='text-secondary-600'>
          OTP has been sent via Whatsapp to
        </Typography>
        <Typography variant='h4' as='p'>
          <b>{props.phoneNumber}</b>
        </Typography>
        <Typography variant='p' className='text-secondary-600'>
          Enter the OTP below to verify your account.
        </Typography>
      </div>
      <div className='space-y-2'>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputType='number'
          renderSeparator={<Dot />}
          inputStyle='!w-full arrow-hide h-16 text-xl font-semibold max-w-[50px]'
          containerStyle='justify-between'
          renderInput={(props) => <Input {...props} />}
        />
        <RemainingOtp {...props} onResend={onResendOtp} />
      </div>
      <Button isFluid disabled={isDisable} onClick={onSubmitOtp}>
        Send
      </Button>
    </div>
  )
}

export default OtpScreen
