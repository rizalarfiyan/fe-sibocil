import { useRef, useState } from 'react'

import { DataTableHandle } from '@/components/DataTable'
import useDebounce from '@/hooks/useDebounce'

const useDashboardDevice = () => {
  const tableRef = useRef<DataTableHandle>(null)
  const [search, setSearch] = useState('')
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
  }
}

export default useDashboardDevice
