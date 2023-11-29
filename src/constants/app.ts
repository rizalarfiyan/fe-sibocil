const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || ''
const APP_NAME = 'Revend'

const COOKIE = {
  AuthTokenVerify: 'token-verify',
  AuthToken: 'auth',
}

export { API_BASE_URL, APP_NAME, COOKIE }
