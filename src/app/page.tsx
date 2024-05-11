import { MainJobsCarrousel } from '@/components/mainJobsCarrousel'
import { RecentJobsCarrousel } from '@/components/recentJobsCarrousel'
import Link from 'next/link'
import Image from 'next/image'
import { GoHome } from 'react-icons/go'
import { IoSettingsOutline } from 'react-icons/io5'
import { PiSuitcaseSimple } from 'react-icons/pi'

export default function Home() {
  return (
    <div className="min-h-screen py-8 flex flex-col items-center bg-background-color">
      <div className="mt-14 sm:mt-16 w-5/6 sm:w-3/4 min-h-64 sm:min-h-[26rem] xl:min-h-[30rem] rounded-xl flex flex-col justify-end px-4 sm:px-14 py-4 sm:py-8 relative">
        <h1 className="text-white font-extrabold text-2xl sm:text-6xl mb-4 mt-4 sm:mt-0 z-10 animate-fade-right animate-once delay-500">
          Faça seu projeto virar aço!
        </h1>
        <p className="text-white mb-8 sm:mb-12 text-sm sm:text-xl z-10 animate-fade-right animate-once delay-500">
          Desde 2000, atuando como referência no segmento de construções
          metálicas e se destacando pela excelência e segurança.
        </p>
        <Image
          src="/presentation.jpg"
          fill
          priority
          className="rounded-xl object-cover animate-fade-right animate-once delay-500"
          alt="Uma obra como plano de fundo para o titulo principal da pagina"
        />
      </div>

      <div
        className="w-5/6 sm:w-3/4 mt-12 animate-fade-left animate-once delay-1000"
        id="servicos"
      >
        <h2 className="font-extrabold text-2xl">Nossos Serviços</h2>
        <p className="text-sm sm:text-md mt-2">
          A Frank Metálicas está preparada para te apoiar do começo ao fim nas
          suas necessidades com estruturas metálicas. Confira como realizamos
          isso:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <div className="p-4 w-full sm:w-1/3 rounded-xl hover:bg-gradient-to-br from-background-color to-neutral-50 hover:shadow-ourServices transition duration-500 border">
            <IoSettingsOutline className="h-6 w-6 mb-2" />
            <h3 className="font-bold text-lg">Fabricação Personalizada</h3>
            <p className="text-orange-800 text-sm sm:text-md leading-relaxed mt-1">
              Desenvolvemos cada produto de maneira única, levando em
              consideração cada centímetro e etapa para garantir excelência e
              segurança.
            </p>
          </div>
          <div className="p-4 w-full sm:w-1/3 rounded-xl hover:bg-gradient-to-br from-background-color to-neutral-50 hover:shadow-ourServices transition duration-500 border">
            <GoHome className="h-6 w-6 mb-2" />
            <h3 className="font-bold text-lg">Instalação Completa</h3>
            <p className="text-orange-800 text-sm sm:text-md leading-relaxed mt-1">
              Transportamos o produto ao local de destino e realiazmos a
              instalação com muito cuidado e atenção em dia e horário a combinar
              com o cliente.
            </p>
          </div>

          <div className="p-4 w-full sm:w-1/3 rounded-xl hover:bg-gradient-to-br from-background-color to-neutral-50 hover:shadow-ourServices transition duration-500 border">
            <PiSuitcaseSimple className="h-6 w-6 mb-2" />
            <h3 className="font-bold text-lg">Consultoria Especializada</h3>
            <p className="text-orange-800 text-sm sm:text-md leading-relaxed mt-1">
              Avaliamos o contexto da sua obra, bem como as suas necessidades e
              desejos para recomendar a solução que mais possa te satisfazer
              dentro do prazo e orçamento possivel.
            </p>
          </div>
        </div>
      </div>
      <div className="w-5/6 sm:w-3/4 mt-12 animate-fade-right animate-once delay-1000">
        <h2 className="font-extrabold text-2xl">Principais Produtos</h2>
        <p className="text-sm sm:text-md mt-2">
          Os nossos produtos, que podem ser tanto de estilos mais artísticos
          quanto mais casuais, são desenvolvidos em nossa matriz pela Equepe da
          Frank Metálicas. Confira a seguir algumas das principais opções:
        </p>
        <MainJobsCarrousel />
      </div>
      <div className="w-5/6 sm:w-3/4 mt-12 animate-fade-left animate-once delay-1000">
        <div className="flex justify-around sm:justify-between items-center">
          <h2 className="font-extrabold text-2xl">Obras Recentes</h2>
          <Link
            href="/obras"
            className="text-orange-600 text-sm w-3/5 sm:w-auto sm:text-lg hover:text-brand-orange hover:border-b-brand-orange border-b border-b-orange-600"
          >
            Explorar mais
          </Link>
        </div>

        <RecentJobsCarrousel />
      </div>

      {/* connect with google API to show avaliations */}
    </div>
  )
}
