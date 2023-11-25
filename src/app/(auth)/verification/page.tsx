import { cookies } from 'next/headers'

import Base from '@/screen/Auth/Base'
import { verification } from '@/screen/Auth/service'
import VerificationScreen from '@/screen/Auth/Verification/Screen'

export default async function Verification() {
  const token = cookies().get('token')?.value || ''
  const res = await verification({
    token: token,
  })

  //! Change title
  return (
    <Base
      title='Verification'
      description='Safeguarding your journey towards sustainability with seamless and trusted user authentication.'
    >
      {res.code === 422 ? (
        <VerificationScreen.Error message={res.message} />
      ) : (
        <VerificationScreen {...res} />
      )}
    </Base>
  )
}
