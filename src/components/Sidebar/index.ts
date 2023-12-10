import Sidebar from './Sidebar'
import SidebarDevide from './SidebarDevide'
import SidebarItem from './SidebarItem'
import SidebarItemButton from './SidebarItemButton'
import SidebarItemLogout from './SidebarItemLogout'
import SidebarMobile from './SidebarMobile'
export * from './Sidebar.types'

export {
  Sidebar,
  SidebarDevide,
  SidebarItem,
  SidebarItemButton,
  SidebarItemLogout,
  SidebarMobile,
}

export default Object.assign(Sidebar, {
  Devide: SidebarDevide,
  Item: SidebarItem,
  ItemButton: SidebarItemButton,
  ItemLogout: SidebarItemLogout,
  Mobile: SidebarMobile,
})
