import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'

import AboutCard from './components/AboutCard'
import MainInfoCard from './components/MainInfoCard'
import InformationCard from './components/InformationCard'
import Navbar from './components/Nav'

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
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="jDiKgJavZNCYN4CsVpbIu0qz_QvS1wS_cUtveinBeZ4"
        />
      </head>
      <body className={clsx(inter.className, 'bg-slate-50')} data-theme="dark">
        <div className="p-4 w-100 max-w-100 md:max-w-[400px] lg:max-w-[1024px] flex flex-col lg:flex-row mx-auto gap-4">
          <div className="w-full lg:w-[486px] space-y-4">
            <MainInfoCard />
            <AboutCard />
            <InformationCard />
          </div>
          <div className="w-full space-y-4 relative">
            <Navbar />
            <main className="space-y-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
