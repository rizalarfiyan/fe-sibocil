'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ItemSidebarRole } from './Sidebar'
import SidebarItemButton from './SidebarItemButton'
import SidebarItemLogout from './SidebarItemLogout'
import { hasRole } from './utils'

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
