export interface BaseRequestPayload {
  search?: string
  limit?: number
  page?: number
}

export interface RequestWithHeaderAuth {
  headers: {
    Authorization: string
  }
}
