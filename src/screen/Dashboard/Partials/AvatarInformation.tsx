import { getAvatarName } from '@/utils/user'

import Typography from '@/components/Typography'

interface AvatarProps {
  fullName: string
}

const AvatarInformation: React.FC<AvatarProps> = ({ fullName }) => {
  return (
    <div className='flex h-12 w-12 items-center justify-center rounded-md border border-secondary-200 bg-secondary-100'>
      <Typography variant='h4' as='p' className='text-secondary-600'>
        {getAvatarName(fullName)}
      </Typography>
    </div>
  )
}

export default AvatarInformation
