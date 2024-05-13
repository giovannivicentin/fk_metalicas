import type { Metadata } from 'next'
import { Heebo, Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const heebo = Heebo({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-heebo',
})

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {

  title: 'Frank Metálicas',
  description:
    'Faça seu projeto virar realidade! Presente no mercado desde 2000, a Frank Metálicas é especializada em construções metálicas e está pronta para tornar seu projeto uma realidade em aço.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <header className={heebo.className}>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
