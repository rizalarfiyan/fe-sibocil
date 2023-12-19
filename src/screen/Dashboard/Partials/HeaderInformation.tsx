import { getAvatarName, getFullName } from '@/utils/user'

import Typography from '@/components/Typography'

import useDashboard from '../hooks'

const HeaderInformation: React.FC = () => {
  const { user } = useDashboard()

  return (
    <div className='flex items-center gap-2'>
      <div className='flex h-12 w-12 items-center justify-center rounded-md border border-secondary-200 bg-secondary-100'>
        <Typography variant='h4' as='p' className='text-secondary-600'>
          {getAvatarName(getFullName(user.first_name, user.last_name))}
        </Typography>
      </div>
      <div className='block space-y-1'>
        <Typography
          variant='p'
          as='h4'
          className='max-w-[140px] truncate font-semibold'
        >
          {getFullName(user.first_name, user.last_name)}
        </Typography>
        <Typography variant='p' className='text-xs'>
          +{user.phone_number}
        </Typography>
      </div>
    </div>
  )
}

export default HeaderInformation
