'use client'
import Link from 'next/link'
import Image from 'next/image'

import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { Button } from './ui/button'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const formSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  subject: z.string().nonempty(),
  message: z.string().nonempty(),
})

export function Footer() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const responseData = await response.json()
      console.log(responseData)
      form.reset({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      alert('Email was sent successfully')
    } catch (error) {
      console.error('Error:', error)
      alert('Email was not sent')
    }
  }
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
            className="text-muted-foreground text-sm hover:text-neutral-200"
            href="https://www.google.com.br/maps/dir//frank+metalicas/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94cf2070efc55c2f:0xd394910ba4d351c4?sa=X&ved=2ahUKEwjlpYWx7MGEAxWdA7kGHdfvDOwQ9Rd6BAg_EAA"
          >
            R. Paschoal Gimene, 140. Várzea Paulista - SP, 13225-325
          </Link>
        </div>

        <div className="w-full sm:w-1/3 p-4 flex flex-col justify-between">
          <p className="text-muted font-bold text-center text-2xl">
            Envie-nos um email
          </p>
          <div className="px-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-neutral-300">
                          Nome Completo
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="text-neutral-300 border-muted-foreground focus:border-brand-orange"
                            placeholder="Digite seu nome"
                            type="string"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-300">E-mail</FormLabel>
                      <FormControl>
                        <Input
                          className="text-neutral-300 border-muted-foreground focus:border-brand-orange"
                          placeholder="usuario@dominio.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-300">
                        Assunto
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="text-neutral-300 border-muted-foreground focus:border-brand-orange"
                          placeholder="Digite o assunto"
                          type="string"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-300">
                        Mensagem
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Digite sua mensagem..."
                          className="text-neutral-300 border-muted-foreground focus:border-brand-orange resize-none leading-relaxed overflow-hidden"
                          {...field}
                        ></Textarea>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full mt-3 text-md focus:bg-brand-orange hover:bg-brand-orange hover:text-neutral-900 focus:text-neutral-900"
                >
                  Enviar
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <div
          className="w-full sm:w-1/4 p-4 flex flex-col justify-between items-center sm:items-end gap-4 sm:gap-0"
          id="contato"
        >
          <p className="text-muted text-center sm:text-end font-bold text-2xl mb-2">
            Fale conosco
          </p>
          <p className="text-muted m-0 p-0 text-center sm:text-end flex flex-col gap-4">
            <div>
              <span className="block"> Horário de Funcionamento:</span>
              <span className="block">Segunda a sexta</span>
              <span>7h às 17h</span>
            </div>

            <div>
              <span className="block">(11) 4595-4585</span>
              <span>(11) 99440-9000 </span>
            </div>

            <Link
              href="mailto:frank@frankmetalicas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-brand-orange"
            >
              frank@frankmetalicas.com
            </Link>
          </p>
          <div className="flex gap-4 sm:gap-3 mt-2">
            <Link
              href="https://www.facebook.com/frankmetalicas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook
                className="text-neutral-200 hover:text-brand-orange transition-transform transform hover:scale-110"
                size={30}
              />
            </Link>
            <Link
              href="https://www.instagram.com/frankmetalicas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram
                className="text-neutral-200 hover:text-brand-orange transition-transform transform hover:scale-110"
                size={30}
              />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=+5511994409000&text=Oi%20Frank!%20Estou%20interessado%20em%20realizar%20um%20or%C3%A7amento%20com%20voc%C3%AA.&source=&data="
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiWhatsappFill
                className="text-neutral-200 hover:text-brand-orange transition-transform transform hover:scale-110"
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
              Avalie-nos no
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
      <div className="flex flex-col w-full bg-neutral-950 justify-center items-center">
        <p className="text-muted-foreground ">
          © Todos os direitos reservados Frank Construções Metálicas.
        </p>
        <Link
          href="https://www.giovannivicentin.com/"
          target="_blank"
          rel="noopener noreferrer
          "
          className="text-muted-foreground text-xs hover:text-purple-500"
        >
          Made by Giovanni Vicentin
        </Link>
      </div>
    </footer>
  )
}
