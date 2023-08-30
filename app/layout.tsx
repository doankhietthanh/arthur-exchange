import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const opensans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arthur Exchange',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={opensans.className}>{children}</body>
    </html>
  )
}