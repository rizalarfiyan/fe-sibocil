const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || ''
const APP_NAME = 'Revend'

const COOKIE = {
  AuthTokenVerify: 'token-verify',
  AuthToken: 'auth',
}

const QUERY_KEY = {
  Me: 'auth-me',
  Statistic: 'statistic',
  History: 'history',
}

const AUTH_ROLE = {
  admin: 'admin',
  guest: 'guest',
} as const

const DATATABLE_STATUS = {
  active: 'active',
  deleted: 'deleted',
} as const

const TIME_FREQUENCY = {
  today: 'today',
  week: 'week',
  month: 'month',
  quarter: 'quarter',
  year: 'year',
} as const

const DATETIME_FORMAT = {
  date: 'DD MMMM YYYY',
  time: 'HH:mm:ss',
  datetime: 'DD MMMM YYYY HH:mm:ss',
}

const DEFAULT_LIMIT_STATISTIC = 6

export {
  API_BASE_URL,
  APP_NAME,
  AUTH_ROLE,
  COOKIE,
  DATATABLE_STATUS,
  DATETIME_FORMAT,
  DEFAULT_LIMIT_STATISTIC,
  QUERY_KEY,
  TIME_FREQUENCY,
}
