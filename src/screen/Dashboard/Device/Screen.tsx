'use client'

import { Pencil, Plus, Search, Trash } from 'lucide-react'

import AlertDialog from '@/components/AlertDialog'
import Button from '@/components/Button'
import DataTable, { DataTableColumn } from '@/components/DataTable'
import Input from '@/components/Input'
import Typography from '@/components/Typography'

import useDashboardDevice from './hooks'
import { getAll } from './service'
import { DeviceResponse } from './types'

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
  const {
    tableRef,
    search,
    searchDebounce,
    handleSearch,
    rowClassName,
    onDelete,
  } = useDashboardDevice()

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
        rowClassName={rowClassName}
        actions={(idx, res: DeviceResponse) => {
          return (
            <div className='flex gap-2'>
              <Button
                size='icon'
                variant='subtle'
                state='success'
                className='h-7 w-7 border border-success-500'
              >
                <Pencil className='h-4 w-4' />
              </Button>
              <AlertDialog>
                <AlertDialog.Trigger asChild>
                  <Button
                    size='icon'
                    variant='subtle'
                    state='danger'
                    className='h-7 w-7 border border-danger-500'
                  >
                    <Trash className='h-4 w-4' />
                  </Button>
                </AlertDialog.Trigger>
                <AlertDialog.Content>
                  <AlertDialog.Header>
                    <AlertDialog.Title>Are you sure?</AlertDialog.Title>
                    <AlertDialog.Description>
                      Make sure you want to{' '}
                      {res.is_deleted ? 'restore' : 'delete'} the device?
                    </AlertDialog.Description>
                  </AlertDialog.Header>
                  <AlertDialog.Footer>
                    <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                    <AlertDialog.Action onClick={onDelete(idx)}>
                      Delete
                    </AlertDialog.Action>
                  </AlertDialog.Footer>
                </AlertDialog.Content>
              </AlertDialog>
            </div>
          )
        }}
      />
    </div>
  )
}

export default DeviceScreen
