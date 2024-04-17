import Image from 'next/image'

function AboutPage() {
  return (
    <div className="min-h-lvh flex flex-col gap-4 items-center justify-center py-20 bg-background-color">
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row w-11/12 md:w-3/4 gap-4 mt-4 md:mt-20">
        <Image
          loading="lazy"
          src="/template.png"
          alt="template man"
          width="371"
          height="453"
          className="rounded-xl mt-4 md:mt-0 animate-fade-right animate-once delay-500"
        ></Image>
        <div className="animate-fade-left animate-once delay-300">
          <h2 className="text-center leading-relaxed text-2xl font-extrabold">
            Sobre nós
          </h2>
          <p className="leading-relaxed text-justify text-sm md:text-lg md:text-justify mt-4 md:px-8">
            Fundada na capital de São Paulo, a Frank Metálicas vem para o
            interior do estado em 2000, se consolidando no mercado de estruturas
            metálicas, tendo o aço como a sua principal matéria-prima.
          </p>
          <p className="leading-relaxed text-justify text-sm md:text-lg md:text-justify mt-4 md:px-8">
            Frank Vicentin, engenheiro civil formado em 1992 pela Universidade
            Católica de Campinas (PUC-Campinas), é quem lidera toda a equipe da
            companhia, disponibilizando diversos tipos de serviços por conta de
            sua expertise conquistada pela longa trajetória.
          </p>
          <p className="leading-relaxed text-justify text-sm md:text-lg md:text-justify mt-4 md:px-8">
            Na Frank Metálicas, unimos conhecimento especializado, inovação e
            maestria artesanal para proporcionar resultados excepcionais em cada
            necessidade. Conte conosco para fazer o seu projeto virar aço.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
