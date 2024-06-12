import Nav from './(components)/Nav'
import './globals.css'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

// https://www.youtube.com/watch?v=H0vhkoXljq0
// 1:31:30

export const metadata: Metadata = {
  title: 'Ticketing App',
  description: 'Generated by Clarity Coders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <Nav/>
          <div className='flex-grow overflow-y-auto bg-page text-default-text'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
