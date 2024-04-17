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
    <Card className="flex flex-col object-cover bg-background-color overflow-hidden border border-neutral-300">
      <Image
        src={src}
        alt={alt}
        width={1760}
        height={800}
        className="w-full rounded-se-lg rounded-sw-lg max-h-40 object-cover"
      />
      <CardTitle className="my-2 px-4">{title}</CardTitle>
      <CardDescription className="px-4 mb-2">{description}</CardDescription>
    </Card>
  )
}
