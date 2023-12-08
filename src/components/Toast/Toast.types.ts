import Toast from './Toast'
import ToastAction from './ToastAction'

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

export type ToastActionElement = React.ReactElement<typeof ToastAction>
