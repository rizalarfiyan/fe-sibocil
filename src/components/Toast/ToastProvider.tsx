'use client'

import { Provider } from '@radix-ui/react-toast'

import { useToast } from '@/hooks/useToast'

import Toast from './Toast'
import ToastClose from './ToastClose'
import ToastDescription from './ToastDescription'
import ToastTitle from './ToastTitle'
import ToastViewport from './ToastViewport'

const ToastProvider = () => {
  const { toasts } = useToast()

  return (
    <Provider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className='grid gap-1'>
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </Provider>
  )
}

export default ToastProvider
