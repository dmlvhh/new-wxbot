export const Admin = '/api'
export const Net = '/jy'
export interface baseResponse<T> {
  code: number
  data: T
  msg: string
}

export interface listDataType<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
  menus?: any
  apis?: any
  paths?: any
  path?: string
}

export interface paramsType {
  total?: number
  page?: number
  pageSize?: number
  Sort?: string
}
export interface OptionType {
  label: string
  value: number
}
