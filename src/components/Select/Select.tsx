import ReactSelect, { Props } from 'react-select'

import { cn } from '@/utils/classes'
import { emptySelectValue } from '@/utils/components'

import { SelectValue } from '@/@types'

import selectStyles from './Select.style'
import SelectDropdownIndicator from './SelectDropdownIndicator'

const Select: React.FC<Props> = (props) => {
  const { className, value, ...rest } = props
  return (
    <ReactSelect
      value={emptySelectValue(value as SelectValue)}
      components={{
        DropdownIndicator: SelectDropdownIndicator,
      }}
      styles={selectStyles}
      className={cn('w-full', className)}
      {...rest}
    />
  )
}

export default Select
