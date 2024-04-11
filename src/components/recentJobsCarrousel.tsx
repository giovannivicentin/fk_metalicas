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
      className="w-full mt-4"
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recent_jobs_1.png"
              alt="Imagem de um trabalho feito no ibis hotel"
              title="Estrutura Ibis"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recent_jobs_2.png"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recent_jobs_3.png"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recent_jobs_4.png"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recent_jobs_5.png"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recent_jobs_6.png"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recent_jobs_7.png"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recent_jobs_8.png"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recent_jobs_9.png"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recent_jobs_10.png"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recent_jobs_11.png"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recent_jobs_12.png"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recent_jobs_13.png"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recent_jobs_14.png"
              alt="aa"
              title="lorem ipsum dolor"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <RecentJobsItem
              src="/recent_jobs_15.png"
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
