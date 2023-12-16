import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import copy from 'copy-to-clipboard'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { dialogClose } from '@/utils/components'

import { ErrorResponse } from '@/@types'
import { DataTableHandle } from '@/components/DataTable'
import { DEFAULT_DATATABLE_STATUS } from '@/constants/options'
import useDebounce from '@/hooks/useDebounce'
import useDisclosure from '@/hooks/useDisclosure'
import { useToast } from '@/hooks/useToast'

import schema from './schema'
import { create, toggleDelete, update } from './service'
import { DeviceScreenFormProps, FilterDevice } from './types'

export const useDashboardDeviceForm = (props: DeviceScreenFormProps) => {
  const { tableRef, fill, idx, state } = props
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      token: fill?.token ?? '',
      name: fill?.name ?? '',
      location: fill?.location ?? '',
    },
  })

  const { toast } = useToast()
  const apiCreate = useMutation({
    mutationFn: create,
    onSuccess: () => {
      state.close()
      dialogClose(() => tableRef.current?.update())
    },
    onError: (error: ErrorResponse<object | null>) => {
      if (error.code === 400) {
        if (!error?.data) return
        Object.entries(error.data).forEach(([key, value]) => {
          form.setError(key as keyof z.infer<typeof schema>, {
            message: value as string,
          })
        })
        return
      }

      state.close()
      dialogClose(() => {
        toast({
          title: 'Error!',
          description: error.message,
          variant: 'destructive',
        })
      })
    },
  })

  const apiUpdate = useMutation({
    mutationFn: update,
    onSuccess: () => {
      state.close()
      dialogClose(() => tableRef.current?.update())
    },
    onError: (error: ErrorResponse<object | null>) => {
      if (error.code === 400) {
        if (!error?.data) return
        Object.entries(error.data).forEach(([key, value]) => {
          form.setError(key as keyof z.infer<typeof schema>, {
            message: value as string,
          })
        })
        return
      }

      state.close()
      dialogClose(() => {
        toast({
          title: 'Error!',
          description: error.message,
          variant: 'destructive',
        })
      })
    },
  })

  const { isDirty, isValid } = form.formState
  const onSubmit = (data: z.infer<typeof schema>) => {
    if (!idx || idx === '') {
      apiCreate.mutate({
        name: data.name,
        location: data.location,
      })
      return
    }

    apiUpdate.mutate({
      id: idx,
      name: data.name,
      location: data.location,
    })
  }

  const tooltip = useDisclosure()
  const onCopy = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    if (!fill?.token) return
    if (copy(fill.token)) {
      tooltip.open()
    }
  }

  return {
    form,
    isDisable: !isDirty || !isValid,
    onSubmit,
    onCopy,
    tooltip,
  }
}

const useDashboardDevice = () => {
  const createState = useDisclosure()
  const tableRef = useRef<DataTableHandle>(null)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<FilterDevice>({
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
    createState,
    tableRef,
    search,
    searchDebounce,
    handleSearch,
    onDelete,
    filter,
    setFilter,
  }
}

export default useDashboardDevice
