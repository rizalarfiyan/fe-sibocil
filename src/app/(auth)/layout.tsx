export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex justify-center'>
      <div className='hidden h-full min-h-screen flex-1 bg-secondary-100 md:block'></div>
      <main className='relative h-full min-h-screen w-full max-w-xl lg:max-w-2xl'>
        <div className='flex min-h-screen w-full items-center justify-center p-10 py-24'>
          {children}
        </div>
      </main>
    </div>
  )
}
