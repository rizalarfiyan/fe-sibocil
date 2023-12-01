import { cookies } from 'next/headers'

import { COOKIE } from '@/constants'
import Base from '@/screen/Auth/Base'
import { verification } from '@/screen/Auth/service'
import VerificationScreen from '@/screen/Auth/Verification/Screen'

export default async function Verification() {
  const token = cookies().get(COOKIE.AuthTokenVerify)?.value
  const res = await verification({
    token: token || '',
  })

  //! Change title
  return (
    <Base
      title='Verification'
      description='Safeguarding your journey towards sustainability with seamless and trusted user authentication.'
    >
      <VerificationScreen.Back />
      {res.code === 200 ? (
        <VerificationScreen {...res} />
      ) : (
        <VerificationScreen.Error message={res.message} />
      )}
    </Base>
  )
}
