import { SelectValue } from '@/@types'

import { AUTH_ROLE, DATATABLE_STATUS } from '.'

const USER_OPTION: SelectValue[] = [
  {
    label: 'Admin',
    value: AUTH_ROLE.admin,
  },
  {
    label: 'Guest',
    value: AUTH_ROLE.guest,
  },
]

const DATATABLE_STATUS_OPTION: SelectValue[] = [
  {
    label: 'Active',
    value: DATATABLE_STATUS.active,
  },
  {
    label: 'Deleted',
    value: DATATABLE_STATUS.deleted,
  },
]

const DEFAULT_DATATABLE_STATUS = DATATABLE_STATUS_OPTION[0]

export { DATATABLE_STATUS_OPTION, DEFAULT_DATATABLE_STATUS, USER_OPTION }
