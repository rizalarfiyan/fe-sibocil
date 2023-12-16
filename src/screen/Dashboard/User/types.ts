import { AuthRole, SelectValue } from '@/@types'

export type UserResponse = {
  id: string
  first_name: string
  last_name: string
  phone_number: string
  identity: string
  role: AuthRole
  is_deleted: boolean
}

export interface FilterUser {
  role: SelectValue | null
  status: SelectValue | null
}
