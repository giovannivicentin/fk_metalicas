import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const formSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  subject: z.string().nonempty(),
  message: z.string().nonempty(),
})

export function ResendForm() {
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
          className="w-full mt-3 font-semibold focus:bg-brand-orange hover:bg-brand-orange hover:text-neutral-900 focus:text-neutral-900"
        >
          Enviar
        </Button>
      </form>
    </Form>
  )
}
