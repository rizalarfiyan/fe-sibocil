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
    <>
      <Typography variant='h1' as='h1'>
        Dashboard
      </Typography>
      <Button variant='outline' state='secondary' onClick={onLogout}>
        Logout
      </Button>
    </>
  )
}
