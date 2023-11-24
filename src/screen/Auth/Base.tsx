import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import Button from '@/components/Button'
import Typography from '@/components/Typography'

interface BaseProps {
  title: string
  description: string
  hasBack?: boolean
  children?: React.ReactNode
}

const Base: React.FC<BaseProps> = (props) => {
  const { title, description, hasBack, children } = props

  return (
    <div className='w-full max-w-md space-y-10'>
      {hasBack && (
        <Button
          size='icon'
          variant='outline'
          state='secondary'
          className='absolute left-5 top-5 border-secondary-200'
          asChild
        >
          <Link href='/'>
            <ArrowLeft />
          </Link>
        </Button>
      )}
      <div className='space-y-2 text-center'>
        <Typography variant='h2' as='h1'>
          {title}
        </Typography>
        <Typography variant='p' className='text-secondary-500'>
          {description}
        </Typography>
      </div>
      {children}
    </div>
  )
}

export default Base
