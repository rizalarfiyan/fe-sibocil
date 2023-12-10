export type GetAllRequest = {
  search?: string
  limit?: number
  page?: number
}

export type GetAllResponse = {
  first_name: number
  last_name: number
}
