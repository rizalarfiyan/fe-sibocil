const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || ''
const APP_NAME = 'Revend'

const COOKIE = {
  AuthTokenVerify: 'token-verify',
  AuthToken: 'auth',
}

const QUERY_KEY = {
  Me: 'auth-me',
}

export { API_BASE_URL, APP_NAME, COOKIE, QUERY_KEY }
