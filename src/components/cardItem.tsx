import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

interface CardItemProps {
  src: string
  alt: string
  title: string
  description: string
}

export function CardItem({ src, alt, title, description }: CardItemProps) {
  return (
    <Link href="obras">
      <Card className="flex flex-col object-cover overflow-hidden border border-neutral-300">
        <Image
          src={src}
          alt={alt}
          width={160}
          height={90}
          className="w-full rounded-se-lg rounded-sw-lg max-h-40 object-cover"
        />
        <CardTitle className="my-2 px-4">{title}</CardTitle>
        <CardDescription className="px-4 mb-2">{description}</CardDescription>
      </Card>
    </Link>
  )
}
