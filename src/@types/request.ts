export interface BaseRequestListPayload {
  search?: string
  limit?: number
  page?: number
}

export interface BaseRequestByIdPayload {
  id: string
}

export interface RequestWithHeaderAuth {
  headers: {
    Authorization: string
  }
}
