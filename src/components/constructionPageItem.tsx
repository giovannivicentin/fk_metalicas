import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
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
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer hover:scale-105 sm:hover:scale-110 transition-transform duration-300 hover:text-orange-600">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              className="w-60 rounded-lg max-h-40"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
            <h2 className="mt-2 w-44 sm:w-40 text-center lg:w-60 text-[0.7rem] leading-[0.8rem] lg:leading-[1rem] lg:text-[1rem] font-medium">
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
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
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
