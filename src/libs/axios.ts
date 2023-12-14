import Axios from 'axios'
import Cookies from 'js-cookie'

import { API_BASE_URL, COOKIE } from '@/constants'

const axios = Axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${Cookies.get(COOKIE.AuthToken)}`
  return config
})

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    const statusCode = error.response?.data?.code || error.response?.status
    if (statusCode === 401) {
      Cookies.remove(COOKIE.AuthTokenVerify)
      Cookies.remove(COOKIE.AuthToken)
      window.location.href = '/login'
    }

    return Promise.reject(error)
  },
)

export default axios
