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

export function EditedCarrousel() {
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
              src="/construction2.jpg"
              alt="aa"
              title="la ele"
              description="la ele"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CardItem
              src="/construction2.jpg"
              alt="aa"
              title="la ele"
              description="la ele"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CardItem
              src="/construction2.jpg"
              alt="aa"
              title="la ele"
              description="la ele"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CardItem
              src="/construction2.jpg"
              alt="aa"
              title="la ele"
              description="la ele"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CardItem
              src="/construction2.jpg"
              alt="aa"
              title="la ele"
              description="la ele"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CardItem
              src="/construction2.jpg"
              alt="aa"
              title="la ele"
              description="la ele"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="sm:flex hidden" />
      <CarouselNext className="sm:flex hidden" />
    </Carousel>
  )
}
