'use client'

import DashboardTitle from '../Partials/DashboardTitle'

const ProfileScreen: React.FC = () => {
  return (
    <div className='space-y-10'>
      <DashboardTitle
        title='Profile'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.'
      />
      <div className='space-y-5'></div>
    </div>
  )
}

export default ProfileScreen
