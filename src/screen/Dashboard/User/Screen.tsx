'use client'

import { Search } from 'lucide-react'
import { OnChangeValue } from 'react-select'

import { SelectValue } from '@/@types'
import DataTable, { DataTableColumn } from '@/components/DataTable'
import Input from '@/components/Input'
import Select from '@/components/Select'
import Typography from '@/components/Typography'
import { AUTH_ROLE } from '@/constants'

import useDashboardUser from './hook'
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

const userOptions: SelectValue[] = [
  {
    label: 'Admin',
    value: AUTH_ROLE.admin,
  },
  {
    label: 'Guest',
    value: AUTH_ROLE.guest,
  },
]

const UserScreen: React.FC = () => {
  const { tableRef, search, searchDebounce, handleSearch, filter, setFilter } =
    useDashboardUser()

  return (
    <div className='space-y-5'>
      <Typography variant='h2' as='h1'>
        List of Users
      </Typography>
      <div className='flex flex-row items-center justify-between gap-2'>
        <Input
          name='search'
          value={search}
          onChange={handleSearch}
          placeholder='Search...'
          rightIcon={<Search className='h-5 w-5 text-secondary-400' />}
          className='max-w-sm'
        />
        <Select
          className='max-w-[240px]'
          value={filter}
          isClearable
          options={userOptions}
          placeholder='Filter by Role'
          onChange={(val: OnChangeValue<unknown, false>) => {
            setFilter(val as SelectValue)
          }}
        />
      </div>
      <DataTable
        tableRef={tableRef}
        columns={columns}
        apiController={getAll}
        hasAutoNumber
        query={{
          search: searchDebounce || undefined,
          role: filter?.value || undefined,
        }}
      />
    </div>
  )
}

export default UserScreen
