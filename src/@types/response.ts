import { AxiosError, AxiosResponse, HttpStatusCode } from 'axios'

export type BaseApiResponse<T> = {
  code: HttpStatusCode
  message: string
  data: T
}

export type BaseSuccess<T> = AxiosResponse<BaseApiResponse<T>>
export type BaseError<T> = AxiosError<BaseApiResponse<T>>

export type BaseRequest<T, V> = (params?: T) => Promise<BaseSuccess<V>>

export type SuccessResponse<V> = {
  code: HttpStatusCode
  message: string
  data: V
}

export type ErrorResponse<V, E = BaseError<V>> = {
  code: HttpStatusCode
  message: string
  data: V
  error: E
}

export type BaseResponse<V, E> = Promise<
  SuccessResponse<V> | ErrorResponse<V, E>
>
