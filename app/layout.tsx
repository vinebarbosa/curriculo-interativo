import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal CV - Vinícios Barbosa',
  description: 'This website is a interactive cv for Vinícios Barbosa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={clsx(inter.className, 'bg-slate-50')} data-theme="dark">
        {children}
      </body>
    </html>
  )
}
