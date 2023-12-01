import { AlertTriangle } from 'lucide-react'

import Typography from '@/components/Typography'

import VerificationBackButton from './BackButton'

interface VerificationScreenErrorProps {
  message?: string
}

const VerificationScreenError: React.FC<VerificationScreenErrorProps> = ({
  message,
}) => {
  return (
    <div className='mx-auto space-y-8 text-center'>
      <div className='space-y-2'>
        <AlertTriangle className='mx-auto h-20 w-20 text-danger-500' />
        <Typography as='p' className='text-danger-800'>
          {message}
        </Typography>
      </div>
      <VerificationBackButton className='mx-auto'>
        Back to Login
      </VerificationBackButton>
    </div>
  )
}

export default VerificationScreenError
