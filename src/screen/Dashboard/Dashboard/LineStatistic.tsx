import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { SelectValue, TimeFrequency } from '@/@types'
import Spinner from '@/components/Spinner'
import { QUERY_KEY } from '@/constants'

import { getStatistic } from './service'
import { HistoryStatisticRequest } from './types'

interface LineStatisticProps {
  filter: SelectValue
}

const LineStatistic: React.FC<LineStatisticProps> = (props) => {
  const { filter } = props

  const condition = useMemo((): HistoryStatisticRequest => {
    return {
      time_frequency: filter.value as TimeFrequency,
    }
  }, [filter])

  const { data, isPending } = useQuery({
    queryKey: [QUERY_KEY.Statistic, condition],
    queryFn: () => getStatistic(condition),
  })

  if (isPending) {
    return (
      <div className='flex h-[420px] w-full items-center justify-center rounded-md border border-slate-200 bg-white'>
        <Spinner className='h-10 w-10' />
      </div>
    )
  }

  return (
    <div className='h-[420px] w-full rounded-md border border-slate-200 bg-white'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={data?.data || []}
          margin={{
            top: 40,
            right: 50,
            left: 10,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='success'
            name='Success'
            stroke='#059669'
            activeDot={{ r: 6 }}
          />
          <Line
            type='monotone'
            name='Failed'
            dataKey='failed'
            stroke='#dc2626'
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineStatistic
