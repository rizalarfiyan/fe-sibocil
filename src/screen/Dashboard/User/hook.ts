import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { dialogClose } from '@/utils/components'

import { ErrorResponse } from '@/@types'
import { DataTableHandle } from '@/components/DataTable'
import { AUTH_ROLE } from '@/constants'
import { DEFAULT_DATATABLE_STATUS } from '@/constants/options'
import useDebounce from '@/hooks/useDebounce'
import useDisclosure from '@/hooks/useDisclosure'
import { useToast } from '@/hooks/useToast'

import schema from './schema'
import { create, toggleDelete, update } from './service'
import { FilterUser, UserScreenFormProps } from './types'

export const useDashboardUserForm = (props: UserScreenFormProps) => {
  const { tableRef, fill, idx, state, isView } = props
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      first_name: fill?.first_name ?? '',
      last_name: fill?.last_name,
      phone_number: fill?.phone_number ?? '',
      identity: fill?.identity ?? '',
      google_id: fill?.google_id,
      role: fill?.role ?? AUTH_ROLE.guest,
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
    if (isView) return
    if (!idx || idx === '') {
      apiCreate.mutate({
        first_name: data.first_name,
        last_name: data?.last_name,
        phone_number: data.phone_number,
        identity: data.identity,
        google_id: data?.google_id,
        role: data.role,
      })
      return
    }

    apiUpdate.mutate({
      id: idx,
      first_name: data.first_name,
      last_name: data?.last_name,
      phone_number: data.phone_number,
      identity: data.identity,
      google_id: data?.google_id,
      role: data.role,
    })
  }

  return {
    form,
    isDisable: !isDirty || !isValid,
    onSubmit,
    isUpdate: idx && idx !== '',
  }
}

const useDashboardUser = () => {
  const createState = useDisclosure()
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
    createState,
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
