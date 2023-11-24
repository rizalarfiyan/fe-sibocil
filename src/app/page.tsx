import Link from 'next/link'

import Button from '@/components/Button'
import Typography from '@/components/Typography'

export default function Home() {
  return (
    <div className='flex h-full min-h-screen w-full flex-col items-center justify-center gap-4'>
      <Typography variant='h1' as='h1'>
        Hello World!
      </Typography>
      <Button variant='outline' state='secondary' asChild>
        <Link href='/login'>Login</Link>
      </Button>
    </div>
  )
}
