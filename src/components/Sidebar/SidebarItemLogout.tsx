'use client'

import Cookies from 'js-cookie'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import AlertDialog from '@/components/AlertDialog'
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
    <AlertDialog>
      <AlertDialog.Trigger asChild>
        <SidebarItemButton icon={LogOut}>{children}</SidebarItemButton>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>Are you sure?</AlertDialog.Title>
          <AlertDialog.Description>
            Make sure you want to logout from your account.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action onClick={onLogout}>Continue</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )
}

export default SidebarItemLogout
