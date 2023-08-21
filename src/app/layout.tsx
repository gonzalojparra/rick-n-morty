import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rick and Mort',
  description: 'Personajes de Rick y Morty',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='dark'>
      <body className={inter.className}>
        <Providers>
          {children}
        <footer className='flex items-center justify-center'>Con ♥️ por Gonza</footer>
        </Providers>
      </body>
    </html>
  )
}
