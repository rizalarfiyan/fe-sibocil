import Link from 'next/link'

import Button from '@/components/Button'

export default function Home() {
  return (
    <div className='flex h-full min-h-screen w-full flex-col items-center justify-center gap-3'>
      <h1 className='text-4xl font-semibold text-secondary-800'>
        Hello World!
      </h1>
      <Button variant='outline' state='secondary' asChild>
        <Link href='/login'>Login</Link>
      </Button>
    </div>
  )
}
