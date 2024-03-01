import { Card, CardDescription, CardTitle } from '@/components/ui/card'

interface MainJobsItemProps {
  title: string
  description: string
}

export function MainJobsItem({ title, description }: MainJobsItemProps) {
  return (
    <Card className="aspect-square flex flex-col object-cover overflow-hidden border border-neutral-300">
      <CardTitle className="my-2 px-4">{title}</CardTitle>
      <CardDescription className="px-4 mb-2">{description}</CardDescription>
    </Card>
  )
}
