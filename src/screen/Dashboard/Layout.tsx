'use client'

import { Menu } from 'lucide-react'

import Button from '@/components/Button'
import Sidebar from '@/components/Sidebar'

import DashboardProvier from './Provier'

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <DashboardProvier>
      <Sidebar className='fixed z-[50] hidden h-full min-h-screen w-80 border-r border-secondary-200 bg-white lg:block' />
      <header className='fixed top-0 z-[49] w-full border border-secondary-200 bg-white'>
        <div className='ml-0 flex h-16 items-center justify-between p-3 lg:ml-64 lg:justify-end'>
          <Sidebar.Mobile
            trigger={
              <Button
                variant='outline'
                size='icon'
                state='secondary'
                className='inline-flex border-secondary-300 lg:hidden'
              >
                <Menu className='h-5 w-5' />
              </Button>
            }
          />
          <div>User info</div>
        </div>
      </header>
      <main className='mb-0 pb-10 pt-24 md:pt-32 lg:ml-80'>
        <div className='container space-y-1 md:space-y-3'>{children}</div>
      </main>
    </DashboardProvier>
  )
}

export default Layout
