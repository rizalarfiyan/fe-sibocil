import { requestHandler } from '@/utils/request'

import axios from '@/libs/axios'
import Base from '@/screen/Auth/Base'

interface Status {
  postgres: boolean
  redis: boolean
}

export const getHealth = requestHandler<null, Status[]>((params) =>
  axios.get('/health', { params }),
)

export default async function Test() {
  const res = await getHealth(null)
  console.log(JSON.stringify(res, null, 2))

  return <Base title='Testing' description={res.message} />
}
