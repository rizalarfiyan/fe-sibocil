import { useMutation } from '@tanstack/react-query'
import { useRef, useState } from 'react'

import { cn } from '@/utils/classes'

import { ErrorResponse } from '@/@types'
import { DataTableHandle } from '@/components/DataTable'
import useDebounce from '@/hooks/useDebounce'
import { useToast } from '@/hooks/useToast'

import { toggleDelete } from './service'
import { DeviceResponse } from './types'

const useDashboardDevice = () => {
  const tableRef = useRef<DataTableHandle>(null)
  const [search, setSearch] = useState('')
  const searchDebounce = useDebounce(search, 400)
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  const rowClassName = (row: DeviceResponse) => {
    return cn(row.is_deleted && 'text-red-500')
  }

  const { toast } = useToast()
  const deleteApi = useMutation({
    mutationFn: toggleDelete,
    onSuccess: () => {
      tableRef.current?.update()
    },
    onError: (error: ErrorResponse<null>) => {
      toast({
        title: 'Error!',
        description: error.message,
        variant: 'destructive',
      })
    },
  })

  const onDelete = (id: string) => {
    return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      deleteApi.mutate({ id })
    }
  }

  return {
    tableRef,
    search,
    searchDebounce,
    handleSearch,
    rowClassName,
    onDelete,
  }
}

export default useDashboardDevice
