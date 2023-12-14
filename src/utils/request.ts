import { HttpStatusCode } from 'axios'

import { BaseError, BaseRequest, BaseResponse } from '@/@types'

const errResponse = <V, E = BaseError<V>>(e: unknown) => {
  const err = e as BaseError<V>

  return {
    code:
      (err.response?.data.code as HttpStatusCode) ||
      err.response?.status ||
      err?.code ||
      500,
    message:
      err.response?.data.message || err.response?.statusText || err.message,
    data: err.response?.data.data as V,
    error: e as E,
  }
}

export const requestHandler = <T, V, E = BaseError<V>>(
  request: BaseRequest<T, V>,
) => {
  return async (params?: T): BaseResponse<V, E> => {
    try {
      const res = await request(params)
      return {
        code: res.data?.code || res.status,
        message: res.data?.message || res.statusText,
        data: res.data?.data,
      }
    } catch (error) {
      throw errResponse<V, E>(error)
    }
  }
}

export const saveRequestHandler = <T, V, E = BaseError<V>>(
  request: BaseRequest<T, V>,
) => {
  return async (params?: T): BaseResponse<V, E> => {
    try {
      const responseHandler = requestHandler<T, V, E>(request)
      const res = await responseHandler(params)
      return res
    } catch (error) {
      return errResponse<V, E>(error)
    }
  }
}
