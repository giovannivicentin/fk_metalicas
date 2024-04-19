'use client'
import Link from 'next/link'
import Image from 'next/image'

import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { Button } from './ui/button'
import { ResendForm } from './resendForm'

export function Footer() {
  return (
    <footer className="bg-black">
      <div className="xs:flex-col sm:flex justify-between px-1 sm:px-12 py-4">
        <div className="w-full sm:w-1/3 p-4 flex flex-col justify-between">
          <p className="text-muted text-center sm:text-start text-2xl font-bold">
            Localização
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.936124870112!2d-46.834245960055014!3d-23.245411342672874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf2070efc55c2f%3A0xd394910ba4d351c4!2sFrank%20Constru%C3%A7%C3%B5es%20Met%C3%A1licas%20Ltda.!5e0!3m2!1spt-BR!2sbr!4v1708803740417!5m2!1spt-BR!2sbr"
            loading="lazy"
            className="rounded-xl border-2 border-brand-orange hover:border-brand-blue w-full h-64"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-200 text-sm hover:text-neutral-50"
            href="https://www.google.com.br/maps/dir//frank+metalicas/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94cf2070efc55c2f:0xd394910ba4d351c4?sa=X&ved=2ahUKEwjlpYWx7MGEAxWdA7kGHdfvDOwQ9Rd6BAg_EAA"
          >
            R. Paschoal Gimene, 140. Várzea Paulista - SP, 13225-325
          </Link>
        </div>

        <div className="w-full sm:w-1/3 p-4 flex flex-col justify-between">
          <div className="px-8">
            <ResendForm />
          </div>
        </div>
        <div
          className="w-full sm:w-1/4 p-4 flex flex-col justify-between items-center sm:items-end gap-4 sm:gap-0"
          id="contato"
        >
          <p className="text-muted text-center sm:text-end font-bold text-2xl mb-2">
            Fale conosco
          </p>
          <div className="text-muted m-0 p-0 text-center sm:text-end flex flex-col gap-4">
            <p>
              <span className="block"> Horário de Funcionamento:</span>
              <span className="block">Segunda a sexta</span>
              <span>7h às 17h</span>
            </p>

            <div>
              <a
                href="tel:+551145954585"
                className="block hover:text-brand-orange focus:text-brand-orange"
              >
                (11) 4595-4585
              </a>
              <a
                href="tel:+5511994409000"
                className="hover:text-brand-orange focus:text-brand-orange"
              >
                (11) 99440-9000{' '}
              </a>
            </div>

            <Link
              href="mailto:frank@frankmetalicas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-brand-orange focus:text-brand-orange"
            >
              frank@frankmetalicas.com
            </Link>
          </div>
          <div className="flex gap-4 sm:gap-3 mt-2">
            <Link
              href="https://www.facebook.com/frankmetalicas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook
                className="text-neutral-200 hover:text-brand-orange focus:text-brand-orange transition-transform transform hover:scale-110"
                size={30}
              />
            </Link>
            <Link
              href="https://www.instagram.com/frankmetalicas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram
                className="text-neutral-200 hover:text-brand-orange focus:text-brand-orange transition-transform transform hover:scale-110"
                size={30}
              />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=+5511994409000&text=Oi%2C%20Frank!%20Estou%20interessado%20em%20realizar%20um%20or%C3%A7amento.&source=&data=
"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiWhatsappFill
                className="text-neutral-200 hover:text-brand-orange focus:text-brand-orange  transition-transform transform hover:scale-110"
                size={30}
              />
            </Link>
          </div>
          <Link
            href="https://g.page/r/CcRR06QLkZTTEBM/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="default"
              className="flex items-center text-md gap-1 text-neutral-100 hover:bg-brand-orange hover:text-neutral-900 mt-2 sm:mt-0"
            >
              Nos avalie no
              <Image
                src="/google.png"
                alt="Google logo"
                width={60}
                height={20}
              />
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full bg-zinc-900">
        <p className="flex pt-1 text-muted-foreground w-full justify-center items-center">
          © Todos os direitos reservados Frank Construções Metálicas.
        </p>
        <Link
          href="https://www.giovannivicentin.com/"
          target="_blank"
          rel="noopener noreferrer
          "
          className="flex justify-center pb-1 items-center text-muted-foreground text-sm hover:text-purple-500 w-full"
        >
          Made by Giovanni Vicentin
        </Link>
      </div>
    </footer>
  )
}
