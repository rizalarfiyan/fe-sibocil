'use client'

import { Plus, Search } from 'lucide-react'

import Button from '@/components/Button'
import DataTable, { DataTableColumn } from '@/components/DataTable'
import Input from '@/components/Input'
import Typography from '@/components/Typography'

import useDashboardDevice from './hooks'
import { getAll } from './service'

const columns: DataTableColumn = [
  {
    accessorKey: 'token',
    header: 'Token',
    enableSorting: true,
  },
  {
    accessorKey: 'name',
    header: 'Name',
    enableSorting: true,
  },
  {
    accessorKey: 'location',
    header: 'Location',
    enableSorting: true,
  },
]

const DeviceScreen: React.FC = () => {
  const { tableRef, search, searchDebounce, handleSearch } =
    useDashboardDevice()

  return (
    <div className='space-y-5'>
      <Typography variant='h2' as='h1'>
        List of Devices
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
        <Button rightIcon={<Plus className='ml-1 h-5 w-5' />}>
          Add Device
        </Button>
      </div>
      <DataTable
        tableRef={tableRef}
        columns={columns}
        apiController={getAll}
        hasAutoNumber
        query={{
          search: searchDebounce || undefined,
        }}
      />
    </div>
  )
}

export default DeviceScreen
