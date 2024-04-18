'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { MainJobsItem } from './mainJobsItem'

export function MainJobsCarrousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{
        align: 'center',
      }}
      className="w-full mt-4"
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <MainJobsItem
              title="Escadas e Guarda-Corpos"
              description="Nossas escadas e guarda-corpos combinam funcionalidade e design moderno, garantindo segurança e estilo para seu espaço, seja ele comercial ou residencial."
              src="/ladder.svg"
              alt="ladder icon"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <MainJobsItem
              title="Marquises e Gazebos"
              description="Desenvolvemos marquises e gazebos que oferecem proteção e elegância, perfeitos para embelezar e funcionalizar exteriores de residências e estabelecimentos comerciais."
              src="/marquee.svg"
              alt="marquee icon"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <MainJobsItem
              title="Portões e Portas"
              description="Oferecemos portões e portas robustos, disponíveis em diversos estilos, todos fabricados com materiais duráveis para maximizar a segurança e a estética da sua propriedade."
              src="/gate.svg"
              alt="gate icon"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <MainJobsItem
              title="Reforço Estrutural"
              description="Nossos serviços de reforço estrutural garantem a segurança e prolongam a vida útil de estruturas, utilizando tecnologias avançadas e materiais de alta qualidade."
              src="/structure.svg"
              alt="structure icon"
            />
          </div>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <MainJobsItem
              title="e Muito Mais!"
              description="Além dos serviços listados, a Frank Metálicas oferece uma vasta gama de soluções customizadas em metalurgia. Seja qual for sua necessidade, temos a expertise e a tecnologia para desenvolver o projeto perfeito para você."
              src="/more.svg"
              alt="more icon"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="sm:flex hidden" />
      <CarouselNext className="sm:flex hidden" />
    </Carousel>
  )
}
