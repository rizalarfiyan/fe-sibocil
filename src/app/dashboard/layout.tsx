import { Cpu, History, LayoutDashboard, User, Users } from 'lucide-react'

import Layout from '@/screen/Dashboard/Layout'
import { SidebarData } from '@/screen/Dashboard/Partials/Sidebar'

const sidebar: SidebarData[] = [
  {
    type: 'item',
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    type: 'devide',
    title: 'Revend',
    items: [
      {
        type: 'item',
        title: 'History',
        href: '/dashboard/history',
        icon: History,
      },
    ],
  },
  {
    type: 'devide',
    title: 'Management',
    items: [
      {
        type: 'item',
        title: 'Users',
        href: '/dashboard/users',
        icon: Users,
        roles: ['admin'],
      },
      {
        type: 'item',
        title: 'Devices',
        href: '/dashboard/devices',
        icon: Cpu,
        roles: ['admin'],
      },
    ],
  },
  {
    type: 'devide',
    title: 'Me',
    items: [
      {
        type: 'item',
        title: 'Profile',
        href: '/dashboard/profile',
        icon: User,
      },
      {
        type: 'item',
        title: 'Logout',
        href: 'logout',
      },
    ],
  },
]

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return <Layout sidebar={sidebar}>{children}</Layout>
}
