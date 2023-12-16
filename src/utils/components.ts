import { AuthRole, SelectValue } from '@/@types'
import { ItemSidebar } from '@/components/Sidebar'

export const hasRole = (role: AuthRole, roles?: AuthRole[]) => {
  if (typeof roles === 'undefined') return true
  return roles.includes(role)
}

export const hasRoleNested = (role: AuthRole, items: ItemSidebar[]) => {
  for (const child of items) {
    if (hasRole(role, child?.roles)) return true
  }
  return false
}

export const emptySelectValue = (value?: SelectValue): SelectValue | null => {
  if (!value || (value.value === '' && value.label === '')) return null
  return value
}

export const dialogClose = (callback: () => void, time = 150) => {
  const timeout = setTimeout(() => {
    callback()
    clearTimeout(timeout)
  }, time)
}
