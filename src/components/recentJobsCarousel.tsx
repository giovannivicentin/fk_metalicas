'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { RecentJobsItem } from './recentJobsItem'

export function RecentJobsCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 6000,
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
            <RecentJobsItem
              src="/recentJobs_18.png"
              alt="Estruturas Metálicas para Escadas"
              title="Estruturas Metálicas para Escadas"
              description="Durável e esteticamente agradável, ideal para ampliações futuras e uso frequente."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recentJobs_2.png"
              alt="Guarda-Corpo Metálico Ornamental para Escadas"
              title="Guarda-Corpo Ornamental"
              description="Complementa escadas brancas com ornamentos sofisticados e decorativos."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recentJobs_33.png"
              alt="Passarela Metálica e Guarda-Corpo Artístico"
              title="Passarela e Guarda-Corpo Artístico"
              description="Durável e resistente, combina segurança e design criativo."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recentJobs_26.png"
              alt="Cobertura de Garagem com Telha Termoacústica"
              title="Cobertura com Termoacústica"
              description="Tirantes rígidos para estabilidade e telhas termoacústicas para conforto e silêncio."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recentJobs_10.png"
              alt="Escada Metálica em L com Guarda-Corpo Normatizado"
              title="Escada Metálica Normatizada em L"
              description="Escada com pisadas antiderrapantes, oferecendo estabilidade e segurança."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recentJobs_4.png"
              alt="Escada Metálica Helicoidal preparada para Revestimento"
              title="Escada Helicoidal Estruturada"
              description="Economiza espaço e permite personalização futura."
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="sm:flex hidden" />
      <CarouselNext className="sm:flex hidden" />
    </Carousel>
  )
}
