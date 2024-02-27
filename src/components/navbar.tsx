import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-2 leading-loose border-b bg-background-color">
      <Image src="/logo.svg" alt="Logo" width={120} height={60} />

      <div className="flex gap-5 items-center">
        <Link href="#services">
          <p className="text-lg hover:underline hover:text-brand-orange underline-offset-2">
            Serviço
          </p>
        </Link>
        <Link href="/projetos">
          <p className="text-lg hover:underline hover:text-brand-orange underline-offset-2">
            Obras
          </p>
        </Link>
        <Link href="#">
          <p className="text-lg hover:underline hover:text-brand-orange underline-offset-2">
            Sobre
          </p>
        </Link>
        <Link href="#footer">
          <p className="text-lg hover:underline hover:text-brand-orange underline-offset-2">
            Contato
          </p>
        </Link>
        <Button className="text-md bg-orange-600 hover:bg-brand-orange rounded-xl h-10">
          Faça sua Proposta
        </Button>
      </div>
    </nav>
  )
}
