import { z } from 'zod'

import { BaseRequestByIdPayload, SelectValue } from '@/@types'
import { DataTableHandle } from '@/components/DataTable'
import { UseDisclosure } from '@/hooks/useDisclosure'

import schema from './schema'

export type DeviceScreenFormProps = {
  idx?: string
  fill?: z.infer<typeof schema>
  tableRef: React.MutableRefObject<DataTableHandle | null>
  state: UseDisclosure
}

export type DeviceScreenActionProps = {
  tableRef: React.MutableRefObject<DataTableHandle | null>
  idx: string
  data: DeviceResponse
  onDelete: (
    idx: string,
  ) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export type DeviceResponse = {
  id: string
  token: string
  name: string
  location: string
  is_deleted: boolean
}

export type CreateDeviceRequest = {
  name: string
  location: string
}

export type UpdateDeviceRequest = BaseRequestByIdPayload & CreateDeviceRequest

export interface FilterDevice {
  status: SelectValue | null
}
