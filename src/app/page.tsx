import { MainJobsCarrousel } from '@/components/mainJobsCarrousel'
import { RecentJobsCarrousel } from '@/components/recentJobsCarrousel'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { GoHome } from 'react-icons/go'
import { IoSettingsOutline } from 'react-icons/io5'
import { PiSuitcaseSimple } from 'react-icons/pi'

export default function Home() {
  return (
    <div className="min-h-screen py-8 flex flex-col items-center bg-background-color">
      <div className="mt-14 sm:mt-16 bg-apresentation bg-cover bg-center w-5/6 sm:w-3/4 min-h-64 sm:min-h-[26rem] xl:min-h-[30rem] rounded-xl flex flex-col justify-end px-4 sm:px-14 py-4 sm:py-8">
        <h1 className="text-white font-extrabold text-2xl sm:text-6xl mb-4 mt-4 sm:mt-0">
          Faça seu projeto virar aço!
        </h1>
        <p className="text-white mb-8 sm:mb-12 text-sm sm:text-xl">
          Realizando projetos com excelência desde 2000, a Frank Construções
          Metálicas destaca-se como referência em qualidade no mercado.
        </p>
        <Link href="/projetos">
          <Button className="w-full sm:w-1/4 h-12 text-md sm:text-lg text-white rounded-xl bg-orange-600 hover:bg-brand-orange">
            Estruturas Metálicas
          </Button>
        </Link>
      </div>
      <div className="w-5/6 sm:w-3/4 mt-12" id="servicos">
        <h2 className="font-extrabold text-2xl">Nossos Serviços</h2>
        <p className="text-sm sm:text-md mt-2">
          A Frank Metálicas disponibiliza uma extensa variedade de serviços
          destinados a atender às demandas dos nossos clientes. Unimos
          conhecimento especializado, inovação e maestria artesanal para
          proporcionar resultados excepcionais em cada projeto.
        </p>
        {/* I think if will be just divs, add a animation 3d hover or some animation */}
        <div className="flex flex-col sm:flex-row gap-3 mt-12">
          <div className="p-4 w-full sm:w-1/3 rounded-xl hover:bg-gradient-to-br from-white to-neutral-50 hover:shadow-ourServices transition duration-500 border">
            <GoHome className="h-6 w-6 mb-2" />
            <h3 className="font-bold text-lg">Construção</h3>
            <p className="text-orange-800 text-sm sm:text-md leading-relaxed mt-1">
              Somos especialistas na construção de edifícios comerciais e
              residenciais, empregando materiais de aço de alta qualidade para
              garantir durabilidade e sustentabilidade.
            </p>
          </div>
          <div className="p-4 w-full sm:w-1/3 rounded-xl hover:bg-gradient-to-br from-white to-neutral-50 hover:shadow-ourServices transition duration-500 border">
            <IoSettingsOutline className="h-6 w-6 mb-2" />
            <h3 className="font-bold text-lg">Fabricação customizada</h3>
            <p className="text-orange-800 text-sm sm:text-md leading-relaxed mt-1">
              Nossa equipe altamente qualificada de fabricantes possibilita a
              criação de produtos de metal exclusivos. Seja para peças
              decorativas ou itens funcionais, estamos aqui para auxiliar na
              concretização da sua visão.
            </p>
          </div>
          <div className="p-4 w-full sm:w-1/3 rounded-xl hover:bg-gradient-to-br from-white to-neutral-50 hover:shadow-ourServices transition duration-500 border">
            <PiSuitcaseSimple className="h-6 w-6 mb-2" />
            <h3 className="font-bold text-lg">Gestão de Projetos</h3>
            <p className="text-orange-800 text-sm sm:text-md leading-relaxed mt-1">
              Nossos serviços de gestão de projetos garantem que seu projeto de
              construção em metal seja concluído no prazo e dentro do orçamento.
              Cuidaremos de todos os detalhes para que você possa se concentrar
              no seu negócio.
            </p>
          </div>
        </div>
      </div>
      <div className="w-5/6 sm:w-3/4 mt-12">
        <h2 className="font-extrabold text-2xl">Principais Produtos</h2>
        <MainJobsCarrousel />
      </div>
      <div className="w-5/6 sm:w-3/4 mt-12">
        <h2 className="font-extrabold text-2xl">Obras Recentes</h2>
        <p className="text-sm sm:text-md mt-2">
          Apresentamos uma ampla gama de soluções especializadas para atender às
          necessidades na área de estruturas metálicas. Combinamos expertise
          técnica, inovação e habilidade artesanal para garantir resultados
          excepcionais em cada empreendimento.
        </p>
        <RecentJobsCarrousel />
      </div>
      <div className="w-5/6 sm:w-3/4 mt-12">
        <h2 className="font-extrabold text-2xl">Avaliações</h2>
        <p className="text-sm sm:text-md mt-2"></p>
        {/* connect with google API to show avaliations */}
      </div>
    </div>
  )
}
