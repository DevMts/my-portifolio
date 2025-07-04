import { Container } from "@/components/Container";
import Image from "next/image";
import { Geist, Lato } from "next/font/google";
import my from "@/assets/my.jpg";
import blob from "@/assets/blob3.svg";

const geist = Geist({ subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });

export function About() {
  return (
    <Container size id="about" className="relative">
      <Image
        src={blob}
        unoptimized
        alt=""
        className="absolute top-1/2 left-1/2 -z-10 hidden -translate-x-1/2 -translate-y-1/2 blur-[120px] lg:block"
      />
      <h1
        className={`${geist.className} mb-6 text-left text-2xl font-semibold text-white lg:mb-25 lg:text-5xl`}
      >
        Sobre mim
      </h1>
      <div className="flex w-full items-center justify-between">
        <figure className="hidden h-120 w-90 overflow-hidden md:block">
          <Image
            src={my}
            alt="Foto do Mateus Carvalho"
            className="hidden w-full object-cover md:block"
          />
        </figure>
        <p
          className={`${lato.className} text-primary text-left text-base/[130%] font-medium md:w-1/2 lg:text-xl/[130%]`}
        >
          Minha paixão pela tecnologia nasce da curiosidade: uma vontade de
          entender profundamente como as coisas funcionam para, então, criar
          soluções que realmente ajudem as pessoas no seu dia a dia.
          <br />
          <br />
          Minha jornada na tecnologia começou com o desenvolvimento, durante o
          curso técnico no Instituto Federal (IF), onde rapidamente me apaixonei
          pelo universo do front-end. Com o tempo, percebi que um bom código não
          era o suficiente: eu sentia a necessidade de criar interfaces que
          fossem não apenas funcionais, mas também intuitivas e visualmente
          agradáveis. Foi essa busca pela excelência que me levou a mergulhar no
          mundo do UI/UX Design. Desde então, venho me aprimorando
          constantemente nas duas áreas.
          <br />
          <br />
          Quando não estou codando ou desenhando, você pode me encontrar
          resolvendo problemas de matemática, andando de bicicleta ou explorando
          algum jogo novo.
        </p>
      </div>
    </Container>
  );
}
