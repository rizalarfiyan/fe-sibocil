'use client'

import { Search } from 'lucide-react'
import { useRef, useState } from 'react'

import { getFullName } from '@/utils/user'

import Button from '@/components/Button'
import DataTable, {
  DataTableColumn,
  DataTableHandle,
} from '@/components/DataTable'
import Input from '@/components/Input'
import Typography from '@/components/Typography'
import useDebounce from '@/hooks/useDebounce'

import { getAll } from './service'
import { HistoryResponse } from './types'

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
  const tableRef = useRef<DataTableHandle>(null)
  const [search, setSearch] = useState('')
  const searchDebounce = useDebounce(search, 400)
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

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
        <Button>Action Here</Button>
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

export default HistoryScreen
