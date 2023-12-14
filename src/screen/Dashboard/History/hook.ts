import { useRef, useState } from 'react'

import { SelectValue } from '@/@types'
import { DataTableHandle } from '@/components/DataTable'
import useDebounce from '@/hooks/useDebounce'

import useDashboard from '../hooks'

const useDashboardHistory = () => {
  const { user } = useDashboard()
  const tableRef = useRef<DataTableHandle>(null)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<{
    user: SelectValue | null
    device: SelectValue | null
  }>({
    user: null,
    device: null,
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
