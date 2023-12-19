'use client'

import { useState } from 'react'
import { OnChangeValue } from 'react-select'

import { SelectValue } from '@/@types'
import Select from '@/components/Select'
import Typography from '@/components/Typography'
import {
  DEFAULT_TIME_FREQUENCY,
  TIME_FREQUENCY_OPTION,
} from '@/constants/options'

import LineStatistic from './LineStatistic'
import TableLatestHistory from './TableLatestHistory'
import TopPerformance from './TopPerformance'
import useDashboard from '../hooks'
import DashboardTitle from '../Partials/DashboardTitle'

const DashboardScreen: React.FC = () => {
  const [filter, setFilter] = useState<SelectValue>(DEFAULT_TIME_FREQUENCY)
  const { user } = useDashboard()

  return (
    <div className='space-y-10'>
      <div className='flex items-center justify-between gap-2'>
        <DashboardTitle
          title='Dashboard'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.'
        />
        <Select
          className='w-[220px]'
          value={filter}
          options={TIME_FREQUENCY_OPTION}
          placeholder='Status'
          onChange={(val: OnChangeValue<unknown, false>) => {
            setFilter(val as SelectValue)
          }}
        />
      </div>
      <LineStatistic filter={filter} />
      <div className='flex items-start justify-center gap-10'>
        <div className='w-full space-y-4'>
          <Typography variant='h3' as='h1' className='text-secondary-800'>
            Last Activity
          </Typography>
          <TableLatestHistory userId={user.id} />
        </div>
        <div className='w-full space-y-4'>
          <Typography variant='h3' as='h1' className='text-secondary-800'>
            Top Performance
          </Typography>
          <TopPerformance filter={filter} />
        </div>
      </div>
    </div>
  )
}

export default DashboardScreen
