import React from "react"
import type { Metadata } from 'next'
import { Poppins, Dancing_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const _dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: 'I\'m Sorry ❤️',
  description: 'A heartfelt apology with love',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
