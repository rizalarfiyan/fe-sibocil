import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex h-full min-h-screen w-full flex-col items-center justify-center gap-3'>
      <h1 className='text-4xl font-semibold text-secondary-800'>
        Hello World!
      </h1>
      <Link
        href='/login'
        className='inline-flex rounded-md border-2 border-secondary-200 bg-white px-5 py-1.5 text-secondary-900 transition-colors duration-300 ease-in-out hover:border-secondary-500 hover:bg-secondary-100'
      >
        Login
      </Link>
    </div>
  )
}
