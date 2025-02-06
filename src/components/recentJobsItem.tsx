import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

interface RecentJobsItemProps {
  src: string
  alt: string
  title: string
  description: string
}

export function RecentJobsItem({
  src,
  alt,
  title,
  description,
}: RecentJobsItemProps) {
  return (
    <Card className="flex flex-col h-auto min-h-[22rem] xl:min-h-[20rem] bg-background-color overflow-hidden border border-neutral-300">
      <div className="relative h-40 md:h-48">
        <Image
          src={src || '/placeholder.svg'}
          alt={alt}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="flex flex-col flex-grow p-4">
        <CardTitle className="mb-2 text-lg">{title}</CardTitle>
        <CardDescription className="text-sm line-clamp-3 md:line-clamp-none">
          {description}
        </CardDescription>
      </div>
    </Card>
  )
}
