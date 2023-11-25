export type RequiredPartial<T, K extends keyof T> = T & Required<Pick<T, K>>

export type PageProps = {
  params: object
  searchParams: { [key: string]: string | string[] | undefined }
}
