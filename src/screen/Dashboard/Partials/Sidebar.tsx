import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

import { AuthRole } from '@/@types'
import Typography from '@/components/Typography'

import SidebarDevide from './SidebarDevide'
import SidebarItem from './SidebarItem'

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

interface SidebarProps extends React.HTMLProps<HTMLDivElement> {
  sidebar: SidebarData[]
  userRole: AuthRole
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
  const { sidebar, userRole, className, ...rest } = props
  return (
    <div ref={ref} className={className} {...rest}>
      <Link
        href='/'
        className='mb-4 flex border-b border-secondary-200 p-1 text-center'
      >
        <div className='mx-auto justify-center gap-3 rounded-sm p-1 px-2 py-2.5 transition-colors duration-300 hover:bg-secondary-200/50'>
          <Typography as='h1' variant='h2' className='text-secondary-600'>
            Revend
          </Typography>
        </div>
      </Link>
      <div className='w-full space-y-2 px-3'>
        {sidebar.map((item, idx) => {
          switch (item.type) {
            case 'item':
              return <SidebarItem key={idx} role={userRole} {...item} />
            case 'devide':
              return <SidebarDevide key={idx} role={userRole} {...item} />
            default:
              return
          }
        })}
      </div>
    </div>
  )
})

Sidebar.displayName = 'Sidebar'

export default Sidebar
