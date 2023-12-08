import Sidebar, { SidebarData } from './Partials/Sidebar'

interface LayoutProps extends React.PropsWithChildren {
  sidebar: SidebarData[]
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { sidebar, children } = props

  const role = 'admin'

  return (
    <>
      <Sidebar
        userRole={role}
        sidebar={sidebar}
        className='fixed z-[51] hidden h-full min-h-screen w-64 border-r border-secondary-200 bg-white lg:block'
      />
      <header className='fixed top-0 z-50 w-full border border-secondary-200 bg-white'>
        <div className='ml-0 flex h-16 items-center justify-between p-3 lg:ml-64 lg:justify-end'>
          <div>User info</div>
        </div>
      </header>
      <main className='mb-0 max-w-[100vh_-_128px] pb-10 pt-24 md:pt-32 lg:ml-64'>
        <div className='container space-y-1 md:space-y-3'>{children}</div>
      </main>
    </>
  )
}

export default Layout
