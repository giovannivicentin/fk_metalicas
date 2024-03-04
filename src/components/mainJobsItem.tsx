import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

interface MainJobsItemProps {
  title: string
  description: string
  src: string
  alt: string
}

export function MainJobsItem({
  title,
  description,
  src,
  alt,
}: MainJobsItemProps) {
  return (
    <Card className="sm:min-w-72 sm:min-h-72 sm:aspect-auto aspect-video flex flex-col object-cover overflow-hidden border border-neutral-300 p-4 bg-background-color">
      <Image
        src={src}
        alt={alt}
        width={50}
        height={50}
        className="text-black w-10 h-10 sm:w-12 sm:h-12"
      ></Image>
      <CardTitle className="my-2 sm:my-4 sm:text-4xl text-xl">
        {title}
      </CardTitle>
      <CardDescription className="mt-0 sm:mt-2">{description}</CardDescription>
    </Card>
  )
}
