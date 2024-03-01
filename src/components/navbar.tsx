'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { RiWhatsappFill } from 'react-icons/ri'
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
} from 'react-icons/ai'
import { Button } from './ui/button'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleNav() {
    setMenuOpen(!menuOpen)
  }

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed z-50 w-full px-2 sm:px-3 py-3 sm:py-2 shadow-md bg-background-color">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo Frank Metalicas"
              width={120}
              height={60}
              className="w-24 h-12 sm:w-36 sm:h-16 cursor-pointer"
              priority
            />
          </Link>
        </div>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex items-center gap-10">
            <Link href="/#servicos" onClick={handleClick('servicos')}>
              <li className="text-xl hover:text-brand-orange hover:border-b-brand-orange border-b border-b-background-color">
                Serviços
              </li>
            </Link>
            <Link href="/obras">
              <li className="text-xl hover:text-brand-orange hover:border-b-brand-orange border-b border-b-background-color">
                Casos de Sucesso
              </li>
            </Link>
            <Link href="/sobre">
              <li className="text-xl hover:text-brand-orange hover:border-b-brand-orange border-b border-b-background-color">
                Sobre
              </li>
            </Link>
            <Link href="/#contato" onClick={handleClick('contato')}>
              <li className="text-xl hover:text-brand-orange hover:border-b-brand-orange border-b border-b-background-color">
                Contato
              </li>
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=+5511994409000&text=Oi%20Frank!%20Estou%20interessado%20em%20realizar%20um%20or%C3%A7amento%20com%20voc%C3%AA.&source=&data="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="px-4 py-6 text-lg text-white rounded-xl bg-orange-600 hover:bg-brand-orange">
                Solicitar Orçamento
              </Button>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu
            className="text-black hover:text-brand-orange"
            size={25}
          />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-background-color/40 backdrop-blur-2xl p-10 ease-linear transition-all duration-300'
            : 'fixed left-[-100%] h-screen top-0 p-10 bg-background-color/40 backdrop-blur-2xl ease-linear transition-all duration-100'
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose
              className=" text-neutral-900 hover:text-brand-orange"
              size={25}
            />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/#servicos" onClick={handleClick('servicos')}>
              <li className="py-4 cursor-pointer uppercase text-neutral-900 hover:text-brand-orange">
                Serviços
              </li>
            </Link>
            <Link href="/obras">
              <li className="py-4 cursor-pointer uppercase text-neutral-900 hover:text-brand-orange">
                Casos de Sucesso
              </li>
            </Link>
            <Link href="/sobre">
              <li className="py-4 cursor-pointer uppercase text-neutral-900 hover:text-brand-orange">
                Sobre
              </li>
            </Link>
            <Link href="/contato">
              <li className="py-4 cursor-pointer uppercase text-neutral-900 hover:text-brand-orange">
                Contato
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
          <Link
            href="https://www.facebook.com/frankmetalicas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFacebook
              className="text-neutral-900 hover:text-brand-orange transition-transform transform hover:scale-110"
              size={30}
            />
          </Link>
          <Link
            href="https://www.instagram.com/frankmetalicas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram
              className="text-neutral-900 hover:text-brand-orange transition-transform transform hover:scale-110"
              size={30}
            />
          </Link>
          <Link href="" target="_blank" rel="noopener noreferrer">
            <AiFillMail
              className="text-neutral-900 hover:text-brand-orange transition-transform transform hover:scale-110"
              size={30}
            />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=+5511994409000&text=Oi%20Frank!%20Estou%20interessado%20em%20realizar%20um%20or%C3%A7amento%20com%20voc%C3%AA.&source=&data="
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiWhatsappFill
              className="text-neutral-900 hover:text-brand-orange transition-transform transform hover:scale-110"
              size={30}
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}
