import Select from './Select'
import SelectDropdownIndicator from './SelectDropdownIndicator'
import SelectPagination from './SelectPaginaction'
export * from './Select.style'
export * from './Select.type'
export { Select, SelectDropdownIndicator, SelectPagination }

export default Object.assign(Select, {
  Pagination: SelectPagination,
  DropdownIndicator: SelectDropdownIndicator,
})
