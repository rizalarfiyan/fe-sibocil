import dayjs from 'dayjs'
import 'dayjs/locale/id'

import { DATETIME_FORMAT } from '@/constants'

export const parseDate = (date: string, format?: string): string => {
  format = format ?? DATETIME_FORMAT.date
  const datetime = dayjs(date)
  if (!datetime.isValid()) return '-'
  return datetime.locale('id').format(format)
}
