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
        <div className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-orange-600">
          <div className="flex flex-col">
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              className="w-60 rounded-lg max-h-40"
            />
            <h2 className="mt-2 text-[0.7rem] leading-[0.8rem] sm:leading-[1rem] sm:text-[1rem] pr-5 font-medium sm:text-center">
              {title}
            </h2>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3/4 sm:max-w-[825px] p-6">
        <DialogTitle className="flex flex-col gap-4">
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            className="mt-4 rounded-lg"
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
