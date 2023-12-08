import Button from '@/components/Button'

import { ItemSidebarRole } from './Sidebar'

export interface SidebarItemButtonProps
  extends Pick<ItemSidebarRole, 'icon'>,
    React.PropsWithChildren {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const SidebarItemButton: React.FC<SidebarItemButtonProps> = (props) => {
  const { icon: Icon, onClick, children } = props

  return (
    <Button
      isFluid
      asChild={!onClick}
      variant='outline'
      state='secondary'
      leftIcon={Icon && <Icon className='mr-2 h-4 w-4' />}
      className='justify-start border-secondary-300'
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default SidebarItemButton
