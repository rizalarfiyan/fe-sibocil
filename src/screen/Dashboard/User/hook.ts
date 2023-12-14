import { useRef, useState } from 'react'

import { SelectValue } from '@/@types'
import { DataTableHandle } from '@/components/DataTable'
import useDebounce from '@/hooks/useDebounce'

const useDashboardUser = () => {
  const tableRef = useRef<DataTableHandle>(null)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<SelectValue | null>(null)
  const searchDebounce = useDebounce(search, 400)
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  return {
    tableRef,
    search,
    searchDebounce,
    handleSearch,
    filter,
    setFilter,
  }
}

export default useDashboardUser
