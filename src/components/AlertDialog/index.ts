import { Portal, Root, Trigger } from '@radix-ui/react-alert-dialog'

import AlertDialogAction from './AlertDialogAction'
import AlertDialogCancel from './AlertDialogCancel'
import AlertDialogContent from './AlertDialogContent'
import AlertDialogDescription from './AlertDialogDescription'
import AlertDialogFooter from './AlertDialogFooter'
import AlertDialogHeader from './AlertDialogHeader'
import AlertDialogOverlay from './AlertDialogOverlay'
import AlertDialogTitle from './AlertDialogTitle'

const AlertDialog = Root
const AlertDialogTrigger = Trigger
const AlertDialogPortal = Portal

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}

export default Object.assign(AlertDialog, {
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
  Portal: AlertDialogPortal,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Overlay: AlertDialogOverlay,
  Header: AlertDialogHeader,
  Footer: AlertDialogFooter,
})
