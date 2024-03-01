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
              description="Phasellus interdum felis metus,
sed feugiat mi scelerisque placerat.
Duis fermentum massa quis ante
egestas, varius consectetur lacus
molestie. Cras accumsan."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <MainJobsItem
              title="Marquises e Gazebos"
              description="Phasellus interdum felis metus,
sed feugiat mi scelerisque placerat.
Duis fermentum massa quis ante
egestas, varius consectetur lacus
molestie. Cras accumsan."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <MainJobsItem
              title="Portões
e Portas"
              description="Phasellus interdum felis metus,
sed feugiat mi scelerisque placerat.
Duis fermentum massa quis ante
egestas, varius consectetur lacus
molestie. Cras accumsan."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <MainJobsItem
              title="Reforço
Estrutural"
              description="Phasellus interdum felis metus,
sed feugiat mi scelerisque placerat.
Duis fermentum massa quis ante
egestas, varius consectetur lacus
molestie. Cras accumsan."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <MainJobsItem
              title="e Muito
Mais!"
              description="Phasellus interdum felis metus,
sed feugiat mi scelerisque placerat.
Duis fermentum massa quis ante
egestas, varius consectetur lacus
molestie. Cras accumsan."
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="sm:flex hidden" />
      <CarouselNext className="sm:flex hidden" />
    </Carousel>
  )
}
