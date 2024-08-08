import type { Metadata, Viewport } from 'next'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heebo, Montserrat } from 'next/font/google'
import './globals.css'

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
  authors: { name: 'Giovanni Vicentin', url: 'https://giovannivicentn.com' },
  generator: 'Next.js, React, Tailwind, Node, Vercel, Google Fonts',
  metadataBase: new URL('https://frankmetalicas.com'),
  creator: 'Giovanni Vicentin',
  openGraph: {
    type: 'website',
    url: 'https://www.frankmetalicas.com',
    title: 'Frank Metálicas',
    description:
      'Faça seu projeto virar realidade! Presente no mercado desde 2000, a Frank Metálicas é especializada em construções metálicas e está pronta para tornar seu projeto uma realidade em aço.',
    siteName: 'Frank Metálicas',
    images: [
      {
        url: '/websitePreview.png',
      },
    ],
  },
  robots: 'index, follow',
  category: 'Construção Metálica',
  keywords: [
    'Frank Vicentin',
    'Frank Metalicas',
    'Frank Metálicas',
    'Construção Metálica',
    'Construção Civil',
    'Construção de Galpões',
    'Construção de Mezaninos',
    'Construção de Escadas',
    'Construção de Passarelas',
    'Construção de Pontes',
    'Construção de Coberturas',
    'Construção de Telhados',
    'Ferro',
    'Aço',
    'Aço Carbono',
    'Escada Metálica',
    'Passarela Metálica',
    'Galpão Metálico',
    'Mezanino Metálico',
    'Cobertura Metálica',
    'Telhado Metálico',
    'Ponte Metálica',
    'Portão Metálico',
    'Corrimão Metálico',
    'Guarda-Corpo Metálico',
    'Estrutura Metálica',
    'Estrutura de Aço',
    'Construção de Estruturas Metálicas',
    'Construção de Estruturas de Ferro',
    'Construção de Estruturas de Aço Inox',
    'Construção de Estruturas de Aço Galvanizado',
    'Solda Metálica',
    'Projeto Estrutural Metálico',
    'Manutenção de Estruturas Metálicas',
    'Fabricação de Estruturas Metálicas',
    'Reformas Metálicas',
    'Pintura Industrial',
    'Reforço Estrutural',
    'Instalação de Estruturas Metálicas',
    'Consultoria em Estruturas Metálicas',
    'Galvanização de Aço',
    'Caldeiraria',
  ],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
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
