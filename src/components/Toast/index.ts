'use client'

import Toast from './Toast'
import ToastAction from './ToastAction'
import ToastClose from './ToastClose'
import ToastDescription from './ToastDescription'
import ToastProvider from './ToastProvider'
import ToastTitle from './ToastTitle'
import ToastViewport from './ToastViewport'
export * from './Toast.styles'
export * from './Toast.types'

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
}

export default Object.assign(Toast, {
  Action: ToastAction,
  Close: ToastClose,
  Description: ToastDescription,
  Provider: ToastProvider,
  Title: ToastTitle,
  Viewport: ToastViewport,
})
