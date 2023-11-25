import { cookies } from 'next/headers'

import Base from '@/screen/Auth/Base'
import { verification } from '@/screen/Auth/service'

export default async function Verification() {
  const token = cookies().get('token')?.value || ''
  const res = await verification({
    Token: token,
  })

  return <Base title='Verification' description={res.message} />
}
