import { cn } from '@/utils/classes'

import Button from '@/components/Button'

import { ItemSidebarRole } from './Sidebar'

export interface SidebarItemButtonProps
  extends Pick<ItemSidebarRole, 'icon'>,
    React.PropsWithChildren {
  isActive?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const SidebarItemButton: React.FC<SidebarItemButtonProps> = (props) => {
  const { icon: Icon, onClick, isActive, children } = props

  return (
    <Button
      isFluid
      asChild={!onClick}
      variant='outline'
      state={isActive ? 'primary' : 'secondary'}
      leftIcon={Icon && <Icon className='mr-2 h-4 w-4' />}
      className={cn(
        'justify-start border-secondary-200',
        isActive && 'border-primary-500 bg-primary-100 hover:bg-primary-200',
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default SidebarItemButton
