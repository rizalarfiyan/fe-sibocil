import { UseMutationOptions } from '@tanstack/react-query'
import { AxiosError, AxiosResponse, HttpStatusCode } from 'axios'

export type BaseApiResponse<T> = {
  code: HttpStatusCode
  message: string
  data: T
}

export interface BaseApisMetadata {
  total: number
  page: number
  per_page: number
}

export type BaseResponseList<T> = {
  content: T[]
  metadata: BaseApisMetadata
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ExtractFnReturnType<FnType extends (...args: any) => any> = Awaited<
  ReturnType<FnType>
>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MutationOptions<MutationFnType extends (...args: any) => any> =
  UseMutationOptions<
    ExtractFnReturnType<MutationFnType>,
    AxiosError,
    Parameters<MutationFnType>[0]
  >
