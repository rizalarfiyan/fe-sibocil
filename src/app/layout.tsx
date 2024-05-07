import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Suspense } from 'react'

import '../styles/globals.css'

import { cn } from '@/utils/classes'

import LoadingScreen from '@/components/LoadingScreen'
import { ToastProvider } from '@/components/Toast'
import ReactQueryProvider from '@/providers/ReactQueryProvider'

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'FE Sibocil',
  description:
    'Frontend Sibocil Sistem Pengelolaan Botol Cerdas Untuk Lingkungan',
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <body
        className={cn(
          poppins.className,
          'scroll-smooth bg-secondary-50 antialiased',
        )}
      >
        <Suspense fallback={<LoadingScreen reason='Loading...' />}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </Suspense>
        <ToastProvider />
      </body>
    </html>
  )
}
