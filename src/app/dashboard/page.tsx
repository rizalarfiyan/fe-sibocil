'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

import Button from '@/components/Button'
import Typography from '@/components/Typography'
import { COOKIE } from '@/constants'

export default function Dashboard() {
  const route = useRouter()
  const onLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    Cookies.remove(COOKIE.AuthToken)
    route.replace('/login')
  }

  return (
    <div className='flex h-full min-h-screen w-full flex-col items-center justify-center gap-4'>
      <Typography variant='h1' as='h1'>
        Dashboard
      </Typography>
      <Button variant='outline' state='secondary' onClick={onLogout}>
        Logout
      </Button>
    </div>
  )
}
