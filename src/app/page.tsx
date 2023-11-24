import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex h-full min-h-screen w-full flex-col items-center justify-center gap-3'>
      <h1 className='text-4xl font-semibold text-slate-800'>Hello World!</h1>
      <Link
        href='/login'
        className='inline-flex rounded-md border-2 border-slate-200 bg-white px-5 py-1.5 text-slate-900 transition-colors duration-300 ease-in-out hover:border-slate-500 hover:bg-slate-100'
      >
        Login
      </Link>
    </div>
  )
}
