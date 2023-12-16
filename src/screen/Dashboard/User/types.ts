import { z } from 'zod'

import { AuthRole, BaseRequestByIdPayload, SelectValue } from '@/@types'
import { DataTableHandle } from '@/components/DataTable'
import { UseDisclosure } from '@/hooks/useDisclosure'

import schema from './schema'

export type UserScreenFormProps = {
  idx?: string
  fill?: z.infer<typeof schema>
  tableRef: React.MutableRefObject<DataTableHandle | null>
  state: UseDisclosure
  isView?: boolean
}

export type UserScreenActionProps = {
  tableRef: React.MutableRefObject<DataTableHandle | null>
  idx: string
  data: UserResponse
  onDelete: (
    idx: string,
  ) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export type UserResponse = {
  id: string
  first_name: string
  last_name: string
  phone_number: string
  identity: string
  role: AuthRole
  google_id: string
  is_deleted: boolean
}

export interface FilterUser {
  role: SelectValue | null
  status: SelectValue | null
}

export type CreateUserRequest = {
  first_name: string
  last_name?: string
  phone_number: string
  google_id?: string
  role: string
  identity: string
}

export type UpdateUserRequest = BaseRequestByIdPayload & CreateUserRequest
