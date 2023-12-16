import { useRef, useState } from 'react'

import { DataTableHandle } from '@/components/DataTable'
import { DEFAULT_DATATABLE_STATUS } from '@/constants/options'
import useDebounce from '@/hooks/useDebounce'

import { FilterHistory } from './types'
import useDashboard from '../hooks'

const useDashboardHistory = () => {
  const { user } = useDashboard()
  const tableRef = useRef<DataTableHandle>(null)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<FilterHistory>({
    user: null,
    device: null,
    status: DEFAULT_DATATABLE_STATUS,
  })
  const searchDebounce = useDebounce(search, 400)
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  return {
    tableRef,
    search,
    filter,
    setFilter,
    searchDebounce,
    handleSearch,
    role: user.role,
  }
}

export default useDashboardHistory
