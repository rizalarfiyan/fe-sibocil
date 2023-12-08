import AuthGraphic from '@/assets/graphics/auth.svg'

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex justify-center'>
      <div className='hidden h-full min-h-screen flex-1 bg-secondary-100 md:flex'>
        <AuthGraphic className='mx-auto hidden w-full max-w-3xl lg:block' />
      </div>
      <main className='relative h-full min-h-screen w-full max-w-xl md:max-w-3xl lg:max-w-2xl'>
        <div className='flex min-h-screen w-full items-center justify-center p-10 py-24'>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
