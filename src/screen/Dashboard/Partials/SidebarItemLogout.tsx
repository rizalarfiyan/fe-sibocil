'use client'

import Cookies from 'js-cookie'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { COOKIE } from '@/constants'

import SidebarItemButton from './SidebarItemButton'

const SidebarItemLogout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const route = useRouter()
  const onLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    Cookies.remove(COOKIE.AuthToken)
    route.replace('/login')
  }

  return (
    <SidebarItemButton icon={LogOut} onClick={onLogout}>
      {children}
    </SidebarItemButton>
  )
}

export default SidebarItemLogout
