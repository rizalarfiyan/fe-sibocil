import { useMutation } from '@tanstack/react-query'
import { StylesConfig } from 'react-select'
import { AsyncPaginate } from 'react-select-async-paginate'

import { cn } from '@/utils/classes'
import { emptySelectValue } from '@/utils/components'

import { SelectValue } from '@/@types'

import selectStyles from './Select.style'
import { SelectPaginationProps } from './Select.type'
import SelectDropdownIndicator from './SelectDropdownIndicator'

const SelectPagination: React.FC<SelectPaginationProps> = (props) => {
  const {
    className,
    perPage = 10,
    debounceTimeout = 1000,
    searchKey = 'search',
    valueKey = 'value',
    labelKey = 'key',
    isAllData = false,
    apiController,
    query,
    value,
    ...rest
  } = props

  const api = useMutation({
    mutationFn: apiController,
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const loadOptions = async (search: string, prev: any, more: any) => {
    const page = more?.page || 1
    const rawCondition = {
      limit: perPage,
      page,
      ...(searchKey !== '' && search !== '' ? { [searchKey]: search } : {}),
      ...query,
    }

    return await api
      .mutateAsync({ ...rawCondition })
      .then(({ data }) => {
        const totalData = data.metadata.total || 0
        const resultData = data.content.map((val) => {
          return {
            ...(isAllData ? val : {}),
            value: val?.[valueKey],
            label: val?.[labelKey],
          }
        })
        return {
          options: resultData,
          hasMore: totalData > perPage * page,
          additional: {
            page: page + 1,
          },
        }
      })
      .catch(() => {
        return {
          options: [],
          hasMore: false,
        }
      })
  }

  return (
    <AsyncPaginate
      value={emptySelectValue(value as SelectValue)}
      loadOptions={loadOptions}
      components={{
        DropdownIndicator: SelectDropdownIndicator,
      }}
      styles={selectStyles as StylesConfig<SelectValue>}
      className={cn('w-full', className)}
      debounceTimeout={debounceTimeout}
      {...rest}
    />
  )
}

export default SelectPagination
