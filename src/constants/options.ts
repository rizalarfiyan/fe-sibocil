import { SelectValue } from '@/@types'

import { AUTH_ROLE, DATATABLE_STATUS, TIME_FREQUENCY } from '.'

const AUTH_ROLE_OPTION: SelectValue[] = [
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

const TIME_FREQUENCY_OPTION: SelectValue[] = [
  {
    label: 'Today',
    value: TIME_FREQUENCY.today,
  },
  {
    label: 'Last Week',
    value: TIME_FREQUENCY.week,
  },
  {
    label: 'Last Month',
    value: TIME_FREQUENCY.month,
  },
  {
    label: 'Last 6 Months',
    value: TIME_FREQUENCY.quarter,
  },
  {
    label: 'Last Year',
    value: TIME_FREQUENCY.year,
  },
]

const DEFAULT_DATATABLE_STATUS = DATATABLE_STATUS_OPTION[0]
const DEFAULT_TIME_FREQUENCY = TIME_FREQUENCY_OPTION[0]

export {
  AUTH_ROLE_OPTION,
  DATATABLE_STATUS_OPTION,
  DEFAULT_DATATABLE_STATUS,
  DEFAULT_TIME_FREQUENCY,
  TIME_FREQUENCY_OPTION,
}
