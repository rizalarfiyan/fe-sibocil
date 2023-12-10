'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { hasRole } from '@/utils/components'

import { ItemSidebarRole } from './Sidebar.types'
import SidebarItemButton from './SidebarItemButton'
import SidebarItemLogout from './SidebarItemLogout'

const SidebarItem: React.FC<ItemSidebarRole> = (props) => {
  const { href, title, icon, role, roles } = props
  const currentPage = usePathname()

  if (!hasRole(role, roles)) return

  if (href === 'logout') {
    return <SidebarItemLogout>{title}</SidebarItemLogout>
  }

  const isActive = currentPage === href
  return (
    <SidebarItemButton icon={icon} isActive={isActive}>
      <Link href={href}>{title}</Link>
    </SidebarItemButton>
  )
}

export default SidebarItem
