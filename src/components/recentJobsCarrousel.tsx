'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { CardItem } from './cardItem'

export function RecentJobsCarrousel() {
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
      className="w-full mt-12"
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CardItem
              src="/construction_1.jpg"
              alt="Imagem de um trabalho feito no ibis hotel"
              title="Estrutura Ibis"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CardItem
              src="/construction_2.jpg"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CardItem
              src="/construction_3.jpg"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CardItem
              src="/construction_4.jpg"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CardItem
              src="/construction_5.jpg"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CardItem
              src="/construction_6.jpg"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CardItem
              src="/construction_7.jpg"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CardItem
              src="/construction_8.jpg"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CardItem
              src="/construction_9.jpg"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="sm:flex hidden" />
      <CarouselNext className="sm:flex hidden" />
    </Carousel>
  )
}
