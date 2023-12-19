import { getFullName } from '@/utils/user'

import Typography from '@/components/Typography'

import AvatarInformation from './AvatarInformation'
import useDashboard from '../hooks'

const HeaderInformation: React.FC = () => {
  const { user } = useDashboard()

  return (
    <div className='flex items-center gap-2'>
      <AvatarInformation
        fullName={getFullName(user.first_name, user.last_name)}
      />
      <div className='block space-y-1'>
        <Typography
          variant='p'
          as='h4'
          className='max-w-[140px] truncate font-semibold'
        >
          {getFullName(user.first_name, user.last_name)}
        </Typography>
        <Typography variant='p' className='text-xs'>
          {user.phone_number}
        </Typography>
      </div>
    </div>
  )
}

export default HeaderInformation
