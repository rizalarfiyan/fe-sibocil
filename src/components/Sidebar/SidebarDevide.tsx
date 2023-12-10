'use client'

import { hasRoleNested } from '@/utils/components'

import HorizontalLine from '@/components/HorizontalLine'
import Typography from '@/components/Typography'

import { DevideSidebarRole } from './Sidebar.types'
import SidebarItem from './SidebarItem'

const SidebarDevide: React.FC<DevideSidebarRole> = (props) => {
  const { items, role, title } = props

  if (!hasRoleNested(role, items)) return

  return (
    <div className='pt-1 sm:pt-3'>
      <HorizontalLine lineHeight={1} rightOnly className='py-0 pb-2'>
        <Typography as='span' variant='small' className='text-secondary-400'>
          {title}
        </Typography>
      </HorizontalLine>
      <div className='space-y-2'>
        {items.map((item, idx) => {
          return <SidebarItem key={idx} role={role} {...item} />
        })}
      </div>
    </div>
  )
}

export default SidebarDevide
