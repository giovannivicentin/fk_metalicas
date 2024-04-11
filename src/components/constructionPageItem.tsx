import Image from 'next/image'

interface ConstructionPageItemProps {
  src: string
  alt: string
  title: string
  description: string
}

export function ConstructionPageItem({
  src,
  alt,
  title,
  description,
}: ConstructionPageItemProps) {
  return (
    <div className="flex flex-col">
      <Image
        src={src}
        alt={alt}
        width={1760}
        height={800}
        className="w-full rounded-lg max-h-40"
      />
      <h2 className="mt-2 font-semibold text-lg">{title}</h2>
      <p className="mt-1 text-md">{description}</p>
    </div>
  )
}
