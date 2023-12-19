import { requestHandler } from '@/utils/request'

import axios from '@/libs/axios'

import {
  HistoryStatistic,
  HistoryStatisticRequest,
  HistoryTopPerformance,
  HistoryTopPerformanceRequest,
} from './types'

const getStatistic = requestHandler<
  HistoryStatisticRequest,
  HistoryStatistic[]
>((params) => axios.get('/history/statistic', { params }))

const getTopPerformance = requestHandler<
  HistoryTopPerformanceRequest,
  HistoryTopPerformance[]
>((params) => axios.get('/history/top-performance', { params }))

export { getStatistic, getTopPerformance }
