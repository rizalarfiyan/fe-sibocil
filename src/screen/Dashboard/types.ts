import { AuthMeResponse } from '../Auth/types'

export interface AuthState {
  user?: AuthMeResponse
  token?: string
}
