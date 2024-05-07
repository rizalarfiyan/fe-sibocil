'use client'

import Link from 'next/link'
import * as React from 'react'

import Typography from '@/components/Typography'
import { SIDEBAR } from '@/constants'
import useDashboard from '@/screen/Dashboard/hooks'

import SidebarDevide from './SidebarDevide'
import SidebarItem from './SidebarItem'

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, ref) => {
  const { user } = useDashboard()

  return (
    <div ref={ref} {...props}>
      <Link
        href='/'
        className='mb-4 flex border-b border-secondary-200 p-1 text-center'
      >
        <div className='mx-auto justify-center gap-3 rounded-sm p-1 px-2 py-2.5 transition-colors duration-300 hover:bg-secondary-200/50'>
          <Typography as='h1' variant='h2' className='text-secondary-600'>
            Sibocil
          </Typography>
        </div>
      </Link>
      <div className='w-full space-y-2 px-3 sm:px-4 md:px-8'>
        {SIDEBAR.map((item, idx) => {
          switch (item.type) {
            case 'item':
              return <SidebarItem key={idx} role={user.role} {...item} />
            case 'devide':
              return <SidebarDevide key={idx} role={user.role} {...item} />
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
