import Image from 'next/image'

function AboutPage() {
  return (
    <div className="flex flex-col gap-4 items-center pt-[4.5rem] pb-8 bg-background-color">
      <div className="flex flex-col-reverse items-center justify-between xl:flex-row w-11/12 xl:w-3/4 gap-4 mt-4 xl:mt-20">
        <Image
          loading="lazy"
          src="/perfil.png"
          alt="perfil image"
          width={1536}
          height={2048}
          className="rounded-xl w-full h-auto mt-4 xl:mt-0 animate-fade-right animate-once delay-500"
          sizes="(max-width: 768px) 100vw, 
             (max-width: 1200px) 50vw, 
             33vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <div className="animate-fade-left animate-once delay-300">
          <h2 className="text-center leading-relaxed text-2xl font-extrabold">
            Sobre nós
          </h2>
          <p className="leading-relaxed text-center text-sm lg:text-xl xl:text-justify mt-4 xl:px-8">
            Fundada na capital de São Paulo, a Frank Metálicas vem para o
            interior do estado em 2000, se consolidando no mercado de estruturas
            metálicas, tendo o aço como a sua principal matéria-prima.
          </p>
          <p className="leading-relaxed text-center text-sm lg:text-xl xl:text-justify mt-4 xl:px-8">
            Frank Vicentin, engenheiro civil formado em 1992 pela Universidade
            Católica de Campinas (PUC-Campinas), é quem lidera toda a equipe da
            companhia, disponibilizando diversos tipos de serviços por conta de
            sua expertise conquistada pela longa trajetória.
          </p>
          <p className="leading-relaxed text-center text-sm lg:text-xl xl:text-justify mt-4 xl:px-8">
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
