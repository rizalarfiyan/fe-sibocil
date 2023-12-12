export type HistoryResponse = {
  id: string
  success: number
  failed: number
  user: HistoryUserResponse
  device: HistoryDeviceResponse
}

export interface HistoryDeviceResponse {
  id: string
  name: string
}

export interface HistoryUserResponse {
  id: string
  first_name: string
  last_name: string
}
