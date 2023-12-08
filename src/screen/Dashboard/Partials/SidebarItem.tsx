import Link from 'next/link'

import { ItemSidebarRole } from './Sidebar'
import SidebarItemButton from './SidebarItemButton'
import SidebarItemLogout from './SidebarItemLogout'
import { hasRole } from './utils'

const SidebarItem: React.FC<ItemSidebarRole> = (props) => {
  const { href, title, icon, role, roles } = props

  if (!hasRole(role, roles)) return

  if (href === 'logout') {
    return <SidebarItemLogout>{title}</SidebarItemLogout>
  }

  return (
    <SidebarItemButton icon={icon}>
      <Link href={href}>{title}</Link>
    </SidebarItemButton>
  )
}

export default SidebarItem
