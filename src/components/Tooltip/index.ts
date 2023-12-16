import { Provider, Root, Trigger } from '@radix-ui/react-tooltip'

import TooltipContent from './TooltipContent'

const Tooltip = Root
const TooltipProvider = Provider
const TooltipTrigger = Trigger

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }

export default Object.assign(Tooltip, {
  Provider: TooltipProvider,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
})
