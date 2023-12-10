'use client'

import { useRef } from 'react'

import DataTable from '@/components/DataTable/DataTable'
import {
  DataTableColumn,
  DataTableHandle,
} from '@/components/DataTable/DataTable.types'
import Typography from '@/components/Typography'

import { getAll } from './service'

const columns: DataTableColumn = [
  {
    accessorKey: 'first_name',
    header: 'First Name',
    enableSorting: true,
  },
  {
    accessorKey: 'last_name',
    header: 'Last Name',
    enableSorting: true,
  },
  {
    accessorKey: 'identity',
    header: 'Identity',
    enableSorting: true,
  },
  {
    accessorKey: 'phone_number',
    header: 'Phone Number',
    enableSorting: true,
  },
  {
    accessorKey: 'role',
    header: 'Role',
    enableSorting: true,
  },
]

const UserScreen: React.FC = () => {
  const tableRef = useRef<DataTableHandle>(null)

  return (
    <>
      <Typography variant='h2' as='h1'>
        Get list of Users
      </Typography>
      <DataTable
        tableRef={tableRef}
        columns={columns}
        apiController={getAll}
        hasAutoNumber
      />
    </>
  )
}

export default UserScreen
