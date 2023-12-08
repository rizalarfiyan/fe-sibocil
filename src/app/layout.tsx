import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Suspense } from 'react'

import '../styles/globals.css'

import LoadingScreen from '@/components/LoadingScreen'
import { ToastProvider } from '@/components/Toast'
import ReactQueryProvider from '@/providers/ReactQueryProvider'

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'FE Revend',
  description: 'Frontend Recycle Vending Machine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Suspense fallback={<LoadingScreen reason='Loading...' />}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </Suspense>
        <ToastProvider />
      </body>
    </html>
  )
}
