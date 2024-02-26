import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-2 leading-loose">
      <Image src="/logo.png" alt="Logo" width={127} height={63} />

      <div className="flex gap-5 items-center">
        <Link href="/services" className="">
          <p className="text-lg hover:underline hover:text-brand-orange underline-offset-2">
            Serviço
          </p>
        </Link>
        <Link href="/projects" className="">
          <p className="text-lg hover:underline hover:text-brand-orange underline-offset-2">
            Obras
          </p>
        </Link>
        <Link href="/about" className="">
          <p className="text-lg hover:underline hover:text-brand-orange underline-offset-2">
            Sobre
          </p>
        </Link>
        <Link href="/contact" className="">
          <p className="text-lg hover:underline hover:text-brand-orange underline-offset-2">
            Contato
          </p>
        </Link>
        <Button className="text-md bg-brand-orange hover:bg-orange-600">
          Faça sua Proposta
        </Button>
      </div>
    </nav>
  )
}
