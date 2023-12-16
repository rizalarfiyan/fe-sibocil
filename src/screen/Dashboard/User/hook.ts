import { useMutation } from '@tanstack/react-query'
import { useRef, useState } from 'react'

import { ErrorResponse } from '@/@types'
import { DataTableHandle } from '@/components/DataTable'
import { DEFAULT_DATATABLE_STATUS } from '@/constants/options'
import useDebounce from '@/hooks/useDebounce'
import { useToast } from '@/hooks/useToast'

import { toggleDelete } from './service'
import { FilterUser } from './types'

const useDashboardUser = () => {
  const tableRef = useRef<DataTableHandle>(null)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<FilterUser>({
    role: null,
    status: DEFAULT_DATATABLE_STATUS,
  })
  const searchDebounce = useDebounce(search, 400)
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setSearch(event.target.value)
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
    filter,
    setFilter,
    onDelete,
  }
}

export default useDashboardUser
