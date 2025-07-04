import Image from "next/image";
import logo from "@/assets/oak.svg";
import { Container } from "@/components/Container";
import { Geist, Lato } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });

export function Footer() {
  return (
    <footer className="bg-details mt-25 h-100">
      <Container
        size
        className="flex h-full flex-col items-start justify-between pl-5 md:flex-row md:items-center"
      >
        <article className="flex h-full flex-col items-start justify-start gap-8 py-7.5 md:w-1/2 md:justify-between">
          <Image src={logo} alt="logo" className="w-25 md:w-30" />
          <div>
            <strong
              className={`${geist.className} text-primary text-left text-xl font-semibold`}
            >
              Onde me encontrar
            </strong>
            <div className="mt-2 flex items-center gap-4">
              <a
                href="https://github.com/devmts"
                target="_blank"
                rel="noreferrer"
                className={`${geist.className} text-primary hover:text-main-opacity text-base/[130%] transition-colors duration-300`}
              >
                GitHub
              </a>
              <span className="block size-1.25 bg-linear-to-b from-[#e6e6e6] to-[#c5c5c5]"></span>
              <a
                href="https://www.instagram.com/mts.rlx7/"
                target="_blank"
                rel="noreferrer"
                className={`${geist.className} text-primary hover:text-main-opacity text-base/[130%] transition-colors duration-300`}
              >
                Instagram
              </a>
              <span className="block size-1.25 bg-linear-to-b from-[#e6e6e6] to-[#c5c5c5]"></span>
              <a
                href="https://www.linkedin.com/in/mateuscarvalhopedro/"
                target="_blank"
                rel="noreferrer"
                className={`${geist.className} text-primary hover:text-main-opacity text-base/[130%] transition-colors duration-300`}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </article>
        <article className="border-second flex h-full flex-col items-center justify-end py-7.5 md:w-1/2 md:items-start md:justify-between md:border-l md:pl-8">
          <div className="">
            <strong
              className={`${geist.className} text-primary hidden text-left text-xl font-semibold md:block`}
            >
              Sobre
            </strong>
            <p
              className={`${lato.className} text-primary mt-1 text-center text-base/[130%] md:text-left`}
            >
              Design feito por Mateus Carvalho Pedro <br />
              Todos os direitos reservados <br />@{new Date().getFullYear()} -
              OAK
            </p>
          </div>
          <div className="hidden md:block">
            <strong
              className={`${geist.className} text-primary text-left text-xl font-semibold`}
            >
              Navegação
            </strong>
            <div className="mt-2 flex items-center gap-4">
              <a
                href="#home"
                className={`${geist.className} text-primary hover:text-main-opacity text-base/[130%] transition-colors duration-300`}
              >
                Inicio
              </a>
              <span className="block size-1.25 bg-linear-to-b from-[#e6e6e6] to-[#c5c5c5]"></span>
              <a
                href="#services"
                className={`${geist.className} text-primary hover:text-main-opacity text-base/[130%] transition-colors duration-300`}
              >
                Serviços
              </a>
              <span className="block size-1.25 bg-linear-to-b from-[#e6e6e6] to-[#c5c5c5]"></span>
              <a
                href="#about"
                className={`${geist.className} text-primary hover:text-main-opacity text-base/[130%] transition-colors duration-300`}
              >
                Sobre mim
              </a>
              <span className="block size-1.25 bg-linear-to-b from-[#e6e6e6] to-[#c5c5c5]"></span>
              <a
                href="#contact  "
                className={`${geist.className} text-primary hover:text-main-opacity text-base/[130%] transition-colors duration-300`}
              >
                Contato
              </a>
            </div>
          </div>
        </article>
      </Container>
    </footer>
  );
}
