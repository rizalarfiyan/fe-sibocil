import Link from 'next/link'

import Button from '@/components/Button'
import Typography from '@/components/Typography'

export default function Home() {
  return (
    <div className='flex h-full min-h-screen w-full flex-col items-center justify-center gap-8'>
      <div className='space-y-1 text-center'>
        <Typography variant='h1' as='h1' className='text-secondary-800'>
          Revend
        </Typography>
        <Typography variant='h4' as='h2' className='text-secondary-600'>
          (Recycle Vending Machine)
        </Typography>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant='outline' state='secondary' asChild>
          <Link href='/login'>Login</Link>
        </Button>
        <Button variant='outline' state='secondary' asChild>
          <Link href='/dashboard'>Dashboard</Link>
        </Button>
      </div>
    </div>
  )
}
