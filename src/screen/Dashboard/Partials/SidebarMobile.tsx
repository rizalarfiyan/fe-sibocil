'use client'

import Sheet from '@/components/Sheet'

import Sidebar, { SidebarProps } from './Sidebar'

type SidebarMobileProps = Pick<SidebarProps, 'className' | 'userRole'> & {
  trigger: React.ReactNode
}

const SidebarMobile: React.FC<SidebarMobileProps> = (props) => {
  const { className, userRole, trigger } = props

  return (
    <Sheet>
      <Sheet.Trigger asChild>{trigger}</Sheet.Trigger>
      <Sheet.Content
        side='left'
        className='w-full max-w-[20rem] p-0 sm:max-w-[20rem]'
      >
        <Sidebar userRole={userRole} className={className} />
      </Sheet.Content>
    </Sheet>
  )
}

export default SidebarMobile
