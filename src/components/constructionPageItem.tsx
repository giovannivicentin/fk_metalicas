import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

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
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <div className="flex flex-col">
            <Image
              src={src}
              alt={alt}
              width={1760}
              height={800}
              className="w-60 rounded-lg max-h-40"
            />
            <h2 className="mt-2 text-sm sm:text-lg">
              <strong>{title}</strong>
            </h2>
            <p className="mt-1 text-xs sm:text-sm">{description}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3/4 sm:max-w-[825px] p-6">
        <DialogTitle className="flex flex-col gap-4">
          <Image
            src={src}
            alt={alt}
            width={1760}
            height={800}
            className="w-full mt-4 rounded-lg"
          />
          {title}
        </DialogTitle>
        <DialogDescription>
          <p>{description}</p>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
