import { AuthRole } from '@/@types'

export type UserResponse = {
  id: string
  first_name: string
  last_name: string
  phone_number: string
  identity: string
  role: AuthRole
  is_deleted: boolean
}
