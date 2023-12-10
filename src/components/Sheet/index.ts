'use client'

import { Close, Portal, Root, Trigger } from '@radix-ui/react-dialog'

import SheetContent from './SheetContent'
import SheetOverlay from './SheetOverlay'
export * from './Sheet.styles'
export * from './Sheet.types'

const Sheet = Root
const SheetTrigger = Trigger
const SheetClose = Close
const SheetPortal = Portal

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTrigger,
}

export default Object.assign(Sheet, {
  Trigger: SheetTrigger,
  Close: SheetClose,
  Portal: SheetPortal,
  Content: SheetContent,
  Overlay: SheetOverlay,
})
