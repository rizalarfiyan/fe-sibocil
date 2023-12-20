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
import { AUTH_ROLE_OPTION, DATATABLE_STATUS_OPTION } from '@/constants/options'

import UserScreenAction from './Action'
import Form from './Form'
import useDashboardUser from './hook'
import { getAll } from './service'
import { UserResponse } from './types'
import DashboardTitle from '../Partials/DashboardTitle'

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
    <div className='space-y-10'>
      <DashboardTitle
        title='User'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.'
      />
      <div className='space-y-5'>
        <div className='flex flex-col items-center justify-between gap-2 xl:flex-row'>
          <div className='flex w-full flex-wrap justify-center gap-2 xl:flex-nowrap xl:justify-start'>
            <Input
              name='search'
              value={search}
              onChange={handleSearch}
              placeholder='Search...'
              rightIcon={<Search className='h-5 w-5 text-secondary-400' />}
              className='max-w-xs'
            />
            <Select
              className='w-[160px]'
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
              className='w-[160px]'
              value={filter.role}
              isClearable
              options={AUTH_ROLE_OPTION}
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
              <Button
                rightIcon={<Plus className='ml-1 h-5 w-5' />}
                className='whitespace-nowrap'
              >
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
            return cn(
              row.is_deleted && !filter?.status?.value && 'text-red-500',
            )
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
    </div>
  )
}

export default UserScreen
