import { HttpStatusCode } from 'axios'

import { BaseError, BaseRequest, BaseResponse } from '@/@types'

export const requestHandler = <T, V, E = BaseError<V>>(
  request: BaseRequest<T, V>,
) => {
  return async (params?: T): BaseResponse<V, E> => {
    try {
      const res = await request(params)
      return {
        code: res.data.code || res.status,
        message: res.data.message || res.statusText,
        data: res.data.data,
      }
    } catch (e) {
      const err = e as BaseError<V>
      return {
        code:
          (err.response?.data.code as HttpStatusCode) ||
          err.response?.status ||
          err.code,
        message:
          err.response?.data.message || err.response?.statusText || err.message,
        data: err.response?.data.data as V,
        // error: e as E,
      }
    }
  }
}
