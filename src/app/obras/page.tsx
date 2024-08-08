import { ConstructionPageItem } from '@/components/constructionPageItem'
import constructionItems from './constructionItems'
import { ConstructionItem } from './interface'

function ConstructionPage() {
  return (
    <div className="w-full bg-background-color flex flex-col items-center justify-center">
      <div className="min-h-lvh mx-2 md:mx-32 pb-20 bg-background-color">
        <div className="animate-fade-right animate-once delay-200">
          <h1 className="pt-20 sm:pt-28 text-start text-2xl sm:text-3xl font-extrabold">
            Obras em destaque
          </h1>
          <p className="text-start leading-relaxed text-sm sm:text-lg mt-1">
            Explore alguns dos nossos trabalhos entregues. Para observar mais
            detalhes, clique sobre a imagem escolhida por você.
          </p>
        </div>
        <div className="mt-8 animate-fade-up grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 duration-1000 delay-400">
          {constructionItems.map((item: ConstructionItem) => (
            <ConstructionPageItem
              key={item.id}
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConstructionPage
