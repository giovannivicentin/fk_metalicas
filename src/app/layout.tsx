import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const heebo = Heebo({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-heebo',
})

export const metadata: Metadata = {
  title: 'Frank Metálicas',
  description: 'Frank Metálicas | Faça seu projeto virar aço!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={heebo.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
