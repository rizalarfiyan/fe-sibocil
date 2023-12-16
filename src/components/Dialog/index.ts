import { Portal, Root, Trigger } from '@radix-ui/react-dialog'
import { Close } from '@radix-ui/react-toast'

import DialogContent from './DialogContent'
import DialogDescription from './DialogDescription'
import DialogFooter from './DialogFooter'
import DialogHeader from './DialogHeader'
import DialogOverlay from './DialogOverlay'
import DialogTitle from './DialogTitle'

const Dialog = Root
const DialogTrigger = Trigger
const DialogPortal = Portal
const DialogClose = Close

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}

export default Object.assign(Dialog, {
  Close: DialogClose,
  Content: DialogContent,
  Description: DialogDescription,
  Footer: DialogFooter,
  Header: DialogHeader,
  Overlay: DialogOverlay,
  Portal: DialogPortal,
  Title: DialogTitle,
  Trigger: DialogTrigger,
})
