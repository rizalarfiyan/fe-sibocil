import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

import NotFoundVector from '@/assets/graphics/not-found.svg'
import Button from '@/components/Button'
import Typography from '@/components/Typography'

import { getBackUrl } from './utils'

const ErrorNotFound: React.FC = () => {
  const action = getBackUrl()

  return (
    <div className='container flex h-full min-h-screen w-full flex-col items-center justify-center gap-2 py-10 text-center'>
      <NotFoundVector className='h-auto w-full max-w-md' />
      <div className='mx-auto max-w-sm space-y-6'>
        <div className='space-y-2'>
          <Typography as='h1' variant='h2'>
            This Page Does Not Exist
          </Typography>
          <Typography as='p' className='text-secondary-600'>
            We&#x27;re sorry, but it appears the website address you entered was
            incorrect.
          </Typography>
        </div>
        <Button
          asChild
          variant='outline'
          state='secondary'
          leftIcon={<ChevronLeft className='mr-2 h-5 w-5' />}
          className='border-secondary-300'
        >
          <Link href={action.href}>{action.title}</Link>
        </Button>
      </div>
    </div>
  )
}

export default ErrorNotFound
