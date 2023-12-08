import { cookies } from 'next/headers'

import { COOKIE } from '@/constants'
import Base from '@/screen/Auth/Base'
import { verification } from '@/screen/Auth/service'
import VerificationScreen from '@/screen/Auth/Verification/Screen'
import { getTitleDescription } from '@/screen/Auth/Verification/utils'

export default async function Verification() {
  const token = cookies().get(COOKIE.AuthTokenVerify)?.value
  const res = await verification({
    token: token || '',
  })

  console.log(res)
  const { title, description } = getTitleDescription(res?.data?.step || 0)

  return (
    <Base title={title} description={description}>
      <VerificationScreen.Back />
      {res.code === 200 ? (
        <VerificationScreen {...res} />
      ) : (
        <VerificationScreen.Error message={res.message} />
      )}
    </Base>
  )
}
