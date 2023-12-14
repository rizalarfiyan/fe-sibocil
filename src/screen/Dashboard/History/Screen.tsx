'use client'

import { Search } from 'lucide-react'
import { OnChangeValue } from 'react-select'

import { getFullName } from '@/utils/user'

import { SelectValue } from '@/@types'
import DataTable, { DataTableColumn } from '@/components/DataTable'
import Input from '@/components/Input'
import Select from '@/components/Select'
import Typography from '@/components/Typography'
import { AUTH_ROLE } from '@/constants'

import useDashboardHistory from './hook'
import { getAll } from './service'
import { HistoryResponse } from './types'
import { getAllDropdown as getAllDropdownDevice } from '../Device/service'
import { getAllDropdown as getAllDropdownUser } from '../User/service'

const columns: DataTableColumn = [
  {
    accessorKey: 'device.name',
    header: 'Device',
    enableSorting: true,
  },
  {
    header: 'Name',
    enableSorting: true,
    accessorFn: (val: HistoryResponse) => {
      return getFullName(val.user.first_name, val.user.last_name)
    },
  },
  {
    accessorKey: 'success',
    header: 'Success',
    enableSorting: true,
  },
  {
    accessorKey: 'failed',
    header: 'Failed',
    enableSorting: true,
  },
]

const HistoryScreen: React.FC = () => {
  const {
    role,
    tableRef,
    search,
    filter,
    setFilter,
    searchDebounce,
    handleSearch,
  } = useDashboardHistory()

  return (
    <div className='space-y-5'>
      <Typography variant='h2' as='h1'>
        List of History
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
        <div className='flex w-full justify-end gap-2'>
          {role === AUTH_ROLE.admin && (
            <Select.Pagination
              className='max-w-[240px]'
              value={filter.user}
              apiController={getAllDropdownUser}
              isClearable
              placeholder='Filter by user'
              onChange={(val: OnChangeValue<unknown, false>) => {
                setFilter((prev) => ({
                  ...prev,
                  user: val as SelectValue,
                }))
              }}
            />
          )}
          <Select.Pagination
            className='max-w-[240px]'
            value={filter.device}
            apiController={getAllDropdownDevice}
            isClearable
            placeholder='Filter by device'
            onChange={(val: OnChangeValue<unknown, false>) => {
              setFilter((prev) => ({
                ...prev,
                device: val as SelectValue,
              }))
            }}
          />
        </div>
      </div>
      <DataTable
        tableRef={tableRef}
        columns={columns}
        apiController={getAll}
        hasAutoNumber
        query={{
          search: searchDebounce || undefined,
          user_id: filter.user?.value || undefined,
          device_id: filter.device?.value || undefined,
        }}
      />
    </div>
  )
}

export default HistoryScreen
