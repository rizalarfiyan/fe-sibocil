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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type QueryParams<T = any> = {
  [key: string]: T
}

export type QuerySorting = {
  order: 'asc' | 'desc'
  order_by: string
}
