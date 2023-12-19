import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import { getFullName } from '@/utils/user'

import { SelectValue, TimeFrequency } from '@/@types'
import Spinner from '@/components/Spinner'
import Table from '@/components/Table'
import Typography from '@/components/Typography'
import { DEFAULT_LIMIT_STATISTIC, QUERY_KEY } from '@/constants'

import { getTopPerformance } from './service'
import { HistoryTopPerformanceRequest } from './types'
import AvatarInformation from '../Partials/AvatarInformation'

interface TopPerformanceProps {
  filter: SelectValue
  limit?: number
}

const TopPerformance: React.FC<TopPerformanceProps> = (props) => {
  const { filter, limit } = props

  const condition = useMemo((): HistoryTopPerformanceRequest => {
    return {
      time_frequency: filter.value as TimeFrequency,
      limit: limit || DEFAULT_LIMIT_STATISTIC,
    }
  }, [filter, limit])

  const { data, isPending } = useQuery({
    queryKey: [QUERY_KEY.Statistic, condition],
    queryFn: () => getTopPerformance(condition),
  })

  if (isPending) {
    return (
      <div className='flex h-[620px] w-full items-center justify-center rounded-md border border-slate-200 bg-white'>
        <Spinner className='h-10 w-10' />
      </div>
    )
  }

  const getData = data?.data || []

  return (
    <div className='w-full rounded-md border border-slate-200 bg-white'>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head className='w-6'>#</Table.Head>
            <Table.Head>Identity</Table.Head>
            <Table.Head className='text-center'>Success</Table.Head>
            <Table.Head className='text-center'>Failed</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {getData.map((val, idx) => {
            const fullName = getFullName(val.first_name, val.last_name)
            return (
              <Table.Row key={idx}>
                <Table.Cell className='font-medium'>{idx + 1}</Table.Cell>
                <Table.Cell className='flex items-center gap-3'>
                  <AvatarInformation fullName={fullName} />
                  <div className='block space-y-1'>
                    <Typography
                      variant='p'
                      as='h4'
                      className='max-w-[200px] truncate font-semibold'
                    >
                      {fullName}
                    </Typography>
                    <Typography variant='p' className='text-xs'>
                      {val.phone_number}
                    </Typography>
                  </div>
                </Table.Cell>
                <Table.Cell className='text-center text-success-600'>
                  {val.success}
                </Table.Cell>
                <Table.Cell className='text-center text-danger-600'>
                  {val.failed}
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
            Top Performance Not Found
          </Typography>
        </div>
      )}
    </div>
  )
}

export default TopPerformance
