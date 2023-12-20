import { useQuery } from '@tanstack/react-query'
import { Calendar, Clock } from 'lucide-react'
import { useMemo } from 'react'

import { parseDate } from '@/utils/datetime'

import Spinner from '@/components/Spinner'
import Table from '@/components/Table'
import Typography from '@/components/Typography'
import {
  DATETIME_FORMAT,
  DEFAULT_LIMIT_STATISTIC,
  QUERY_KEY,
} from '@/constants'

import { getAll } from '../History/service'

interface TableLatestHistoryProps {
  userId: string
  limit?: number
}

const TableLatestHistory: React.FC<TableLatestHistoryProps> = (props) => {
  const { userId, limit } = props

  const condition = useMemo(() => {
    return {
      limit: limit || DEFAULT_LIMIT_STATISTIC,
      user_id: userId,
    }
  }, [userId, limit])

  const { data, isPending } = useQuery({
    queryKey: [QUERY_KEY.Statistic, condition],
    queryFn: () => getAll(condition),
  })

  if (isPending) {
    return (
      <div className='flex h-[620px] w-full items-center justify-center rounded-md border border-slate-200 bg-white'>
        <Spinner className='h-10 w-10' />
      </div>
    )
  }

  const getData = data?.data?.content || []

  return (
    <div className='w-full rounded-md border border-slate-200 bg-white'>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head className='w-6'>#</Table.Head>
            <Table.Head>Device</Table.Head>
            <Table.Head className='text-center'>Success</Table.Head>
            <Table.Head className='text-center'>Failed</Table.Head>
            <Table.Head>Date</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {getData.map((val, idx) => {
            return (
              <Table.Row key={val.id}>
                <Table.Cell className='font-medium'>{idx + 1}</Table.Cell>
                <Table.Cell>{val.device.name}</Table.Cell>
                <Table.Cell className='text-center text-success-600'>
                  {val.success}
                </Table.Cell>
                <Table.Cell className='text-center text-danger-600'>
                  {val.failed}
                </Table.Cell>
                <Table.Cell>
                  <div className='flex flex-col gap-1 text-xs text-secondary-800'>
                    <div className='mr-auto flex items-center gap-1.5 whitespace-nowrap rounded-[5px] border border-secondary-300 bg-secondary-100 px-1.5 py-0.5'>
                      <Calendar className='h-4 w-4' />
                      <span>{parseDate(val.date, DATETIME_FORMAT.date)}</span>
                    </div>
                    <div className='mr-auto flex items-center gap-1.5 whitespace-nowrap rounded-[5px] border border-secondary-300 bg-secondary-100 px-1.5 py-0.5'>
                      <Clock className='h-4 w-4' />
                      <span>{parseDate(val.date, DATETIME_FORMAT.time)}</span>
                    </div>
                  </div>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
      {getData.length === 0 && (
        <div className='flex h-96 w-full items-center justify-center'>
          <Typography
            variant='p'
            className='text-center text-base text-secondary-400'
          >
            History Not Found
          </Typography>
        </div>
      )}
    </div>
  )
}

export default TableLatestHistory
