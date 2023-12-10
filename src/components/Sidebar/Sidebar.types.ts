import { LucideIcon } from 'lucide-react'

import { AuthRole } from '@/@types'

export type ItemSidebar = {
  type: 'item'
  title: string
  href: string
  icon?: LucideIcon
  roles?: AuthRole[]
}

export type DevideSidebar = {
  type: 'devide'
  title: string
  items: ItemSidebar[]
}

type SidebarWithRole = {
  role: AuthRole
}

export type ItemSidebarRole = ItemSidebar & SidebarWithRole
export type DevideSidebarRole = DevideSidebar & SidebarWithRole

export type SidebarData = ItemSidebar | DevideSidebar

export interface SidebarProps extends React.HTMLProps<HTMLDivElement> {
  userRole: AuthRole
}

export interface SidebarItemButtonProps
  extends Pick<ItemSidebarRole, 'icon'>,
    React.PropsWithChildren {
  isActive?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export type SidebarMobileProps = Pick<
  SidebarProps,
  'className' | 'userRole'
> & {
  trigger: React.ReactNode
}
