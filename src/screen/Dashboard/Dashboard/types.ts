import { TimeFrequency } from '@/@types'

export interface HistoryStatisticRequest {
  time_frequency: TimeFrequency
}

export interface HistoryTopPerformanceRequest {
  time_frequency: TimeFrequency
  limit?: number
}

export interface HistoryStatistic {
  failed: number
  name: string
  success: number
}

export interface HistoryTopPerformance {
  failed: number
  first_name: string
  is_me: boolean
  last_name: string
  phone_number: string
  success: number
}
