'use client'

import { Plus, Search } from 'lucide-react'
import { OnChangeValue } from 'react-select'

import { cn } from '@/utils/classes'

import { SelectValue } from '@/@types'
import Button from '@/components/Button'
import DataTable, { DataTableColumn } from '@/components/DataTable'
import Dialog from '@/components/Dialog'
import Input from '@/components/Input'
import Select from '@/components/Select'
import Typography from '@/components/Typography'
import { DATATABLE_STATUS_OPTION, USER_OPTION } from '@/constants/options'

import UserScreenAction from './Action'
import Form from './Form'
import useDashboardUser from './hook'
import { getAll } from './service'
import { UserResponse } from './types'

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
  const {
    createState,
    tableRef,
    search,
    searchDebounce,
    handleSearch,
    filter,
    setFilter,
    onDelete,
  } = useDashboardUser()

  return (
    <div className='space-y-5'>
      <Typography variant='h2' as='h1'>
        List of Users
      </Typography>
      <div className='flex flex-row items-center justify-between gap-2'>
        <div className='flex justify-end gap-2'>
          <Input
            name='search'
            value={search}
            onChange={handleSearch}
            placeholder='Search...'
            rightIcon={<Search className='h-5 w-5 text-secondary-400' />}
            className='max-w-xs'
          />
          <Select
            className='w-[150px]'
            value={filter.status}
            isClearable
            options={DATATABLE_STATUS_OPTION}
            placeholder='Status'
            onChange={(val: OnChangeValue<unknown, false>) => {
              setFilter((prev) => ({
                ...prev,
                status: val as SelectValue,
              }))
            }}
          />
          <Select
            className='w-[150px]'
            value={filter.role}
            isClearable
            options={USER_OPTION}
            placeholder='Role'
            onChange={(val: OnChangeValue<unknown, false>) => {
              setFilter((prev) => ({
                ...prev,
                role: val as SelectValue,
              }))
            }}
          />
        </div>
        <div className='flex-shrink' />
        <Dialog open={createState.isOpen} onOpenChange={createState.toggle}>
          <Dialog.Trigger asChild>
            <Button rightIcon={<Plus className='ml-1 h-5 w-5' />}>
              Create User
            </Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title className='text-center'>Create User</Dialog.Title>
            </Dialog.Header>
            <Form state={createState} tableRef={tableRef} />
          </Dialog.Content>
        </Dialog>
      </div>
      <DataTable
        tableRef={tableRef}
        columns={columns}
        apiController={getAll}
        hasAutoNumber
        query={{
          search: searchDebounce || undefined,
          role: filter?.role?.value || undefined,
          status: filter?.status?.value || undefined,
        }}
        rowClassName={(row: UserResponse) => {
          return cn(row.is_deleted && !filter?.status?.value && 'text-red-500')
        }}
        actions={(idx, res: UserResponse) => (
          <UserScreenAction
            idx={idx}
            data={res}
            onDelete={onDelete}
            tableRef={tableRef}
          />
        )}
      />
    </div>
  )
}

export default UserScreen
