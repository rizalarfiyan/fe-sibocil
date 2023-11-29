'use client'

import Spinner from '@/components/Spinner'
import Typography from '@/components/Typography'

import useDone from './hooks'

interface DoneProps {
  token: string
  message: string
}

const DoneScreen: React.FC<DoneProps> = ({ token, message }) => {
  useDone(token)

  return (
    <div className='space-y-8'>
      <div className='flex justify-center'>
        <Spinner className='h-14 w-14' />
      </div>
      <div className='space-y-2 text-center'>
        <Typography variant='p' className='text-secondary-600'>
          {message}
        </Typography>
      </div>
    </div>
  )
}

export default DoneScreen
