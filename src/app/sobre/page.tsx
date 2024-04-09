import Image from 'next/image'

function AboutPage() {
  return (
    <div className="min-h-lvh flex flex-col gap-4 items-center justify-center pb-20 bg-background-color">
      <div className="animate-fade-right animate-once">
        <h1 className="pt-32 text-center sm:leading-relaxed text-2xl sm:text-3xl font-extrabold">
          Uma Trajetória Forjada em Aço
        </h1>
        <p className="text-center leading-relaxed w-11/12 sm:w-3/4 text-sm sm:text-lg m-auto mt-4 sm:mt-0">
          Frank Vicentin, nosso maestro das estruturas metálicas, com sua
          formação na prestigiosa Universidade Católica de Campinas, orquestra
          cada projeto com uma harmonia perfeita entre conhecimento técnico e
          criatividade sem limites. A cada desafio, a equipe da Frank Metálicas
          se supera, transformando o ordinário em extraordinário.
        </p>
      </div>
      <div className="flex flex-col-reverse sm:flex-row w-11/12 sm:w-3/4 gap-4 mt-4 sm:mt-20">
        <Image
          loading="lazy"
          src="/template.png"
          alt="template man"
          width="371"
          height="453"
          className="rounded-xl mt-4 sm:mt-0 animate-fade-right animate-once delay-500"
        ></Image>
        <div className="animate-fade-left animate-once delay-300">
          <h2 className="text-center leading-relaxed text-2xl font-extrabold">
            O Aço Como Você Nunca Viu
          </h2>
          <p className="leading-relaxed text-justify text-sm sm:text-lg sm:text-justify mt-4 sm:px-8">
            Na Frank Metálicas, transcendemos a mera construção para criar
            verdadeiros legados em aço. Aqui, cada peça é esculpida com arte,
            precisão e uma visão de futuro, elevando nossas criações a ícones de
            excelência e inovação no cenário nacional. Mais do que estruturas
            robustas, forjamos marcos de beleza e durabilidade, que não apenas
            materializam ideias, mas também tecem histórias e emoções
            duradouras. Convidamos você a embarcar nesta jornada conosco, onde
            cada novo projeto é uma oportunidade de transformar sonhos em
            realidades tangíveis, edificando não apenas espaços, mas legados que
            desafiam o tempo. Junte-se à Frank Metálicas, e vamos juntos
            construir o extraordinário.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
