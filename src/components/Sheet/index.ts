import { Close, Portal, Root, Trigger } from '@radix-ui/react-dialog'

import SheetContent from './SheetContent'
import SheetOverlay from './SheetOverlay'

export const Sheet = Root
export const SheetTrigger = Trigger
export const SheetClose = Close
export const SheetPortal = Portal
export { SheetContent, SheetOverlay }

export default Object.assign(Sheet, {
  Trigger: SheetTrigger,
  Close: SheetClose,
  Portal: SheetPortal,
  Content: SheetContent,
  Overlay: SheetOverlay,
})
