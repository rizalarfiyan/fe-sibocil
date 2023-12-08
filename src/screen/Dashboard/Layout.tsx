interface LayoutProps extends React.PropsWithChildren {}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props

  return (
    <>
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
