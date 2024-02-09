import Image from 'next/image';
import Link from 'next/link';
import { AiFillFacebook, AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';

export default function Home() {
  return (
    <main className="flex px-10 flex-col items-center justify-center min-h-screen bg-gradient-custom">
      <div className="w-full sm:w-1/3 flex flex-col gap-10 items-center sm:text-justify text-center mb-10 leading-relaxed">
        <Image
          src="/logo_white.png"
          alt="white logo"
          width="270"
          height="135"
        />
        <h1 className="text-l sm:text-xl text-white xs:w-1/3 sm:w-3/3">
          Estamos construindo um novo site para aprimorar sua experiência!
          Enquanto isso, conecte-se conosco nas redes sociais para ficar
          atualizado. Agradecemos pela compreensão e mal podemos esperar para
          revelar as novidades em breve!
        </h1>

        <div className="flex flex-row gap-6 sm:gap-10">
          <Link
            href="https://www.facebook.com/frankmetalicas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFacebook
              className="text-white hover:text-company-orange transition-transform transform hover:scale-110"
              size={30}
            />
          </Link>
          <Link
            href="https://www.instagram.com/frankmetalicas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram
              className="text-white hover:text-company-orange transition-transform transform hover:scale-110"
              size={30}
            />
          </Link>
          <Link href="" target="_blank" rel="noopener noreferrer">
            <AiFillMail
              className="text-white hover:text-company-orange transition-transform transform hover:scale-110"
              size={30}
            />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=+5511994409000&text=Oi%20Frank!%20Estou%20interessado%20em%20realizar%20um%20or%C3%A7amento%20com%20voc%C3%AA.&source=&data="
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiWhatsappFill
              className="text-white hover:text-company-orange transition-transform transform hover:scale-110"
              size={30}
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
