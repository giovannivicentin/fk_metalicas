'use client'
import Link from 'next/link'
import Image from 'next/image'

import { AiFillFacebook, AiFillInstagram, AiFillMail } from 'react-icons/ai'
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

const handleSubmit = (data: z.infer<typeof formSchema>) => {
  console.log(data)
}

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
  return (
    <div className="bg-neutral-800">
      <div className="xs:flex-col sm:flex justify-between px-12 py-4">
        <div className="w-full sm:w-1/3 p-4 flex flex-col justify-between">
          <p className="text-neutral-200 text-center mb-2 text-xl">
            Nossa Empresa
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d234649.4083385789!2d-46.903516!3d-23.228636!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x94cf2070efc55c2f%3A0xd394910ba4d351c4!2sFrank%20Constru%C3%A7%C3%B5es%20Met%C3%A1licas%20Ltda.%2C%20R.%20Paschoal%20Gimene%2C%20140%20-%20Aglomera%C3%A7%C3%A3o%20Urbana%20de%20Jundia%C3%AD%2C%20V%C3%A1rzea%20Paulista%20-%20SP%2C%2013225-325!3m2!1d-23.2453967!2d-46.83136!5e0!3m2!1spt-BR!2sbr!4v1708703593352!5m2!1spt-BR!2sbr"
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
            Av. Marginal Rio Jundiaí 1500, Várzea Paulista, SP, 13221-800
          </Link>
        </div>
        <div className="w-full sm:w-1/3 p-4 flex flex-col justify-between items-center gap-4 sm:gap-0">
          <p className="text-neutral-200 text-start text-xl">
            Conecte-se conosco
          </p>
          <div className="flex gap-4">
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
              href="mailto:frank@frankmetalicas.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillMail
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

          <Image
            src="/qrcode.png"
            alt="QR Code to rate the company in Google"
            width={200}
            height={240}
          />

          <Link
            href="https://g.page/r/CcRR06QLkZTTEBM/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="default"
              className="flex items-center text-md gap-1 text-neutral-200 hover:bg-brand-orange hover:text-neutral-900"
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
        <div className="w-full sm:w-1/3 p-4 flex flex-col justify-between">
          <p className="text-neutral-200 text-center mb-2 text-xl">
            Nos envie um e-mail
          </p>
          <Form {...form}>
            <form action="post" onSubmit={form.handleSubmit(handleSubmit)}>
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
                    <FormLabel className="text-neutral-300">Assunto</FormLabel>
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
                    <FormLabel className="text-neutral-300">Mensagem</FormLabel>
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

      <p className="text-muted-foreground text-center p-1 bg-neutral-600">
        © Todos os direitos reservados Frank Construções Metálicas.
      </p>
    </div>
  )
}
