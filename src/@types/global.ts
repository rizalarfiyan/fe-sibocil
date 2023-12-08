export type RequiredPartial<T, K extends keyof T> = T & Required<Pick<T, K>>

export type PageProps = {
  params: object
  searchParams: { [key: string]: string | string[] | undefined }
}

export type AuthRole = 'admin' | 'guest'

export interface AuthToken {
  first_name: string
  last_name: string
  phone_number: string
  role: AuthRole
  exp: number
  nbf: number
  iat: number
}
