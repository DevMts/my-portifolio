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
        alt="blob"
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
            alt="my"
            className="hidden w-full object-cover md:block"
          />
        </figure>
        <p
          className={`${lato.className} text-primary text-left text-base/[130%] font-medium md:w-1/2 lg:text-xl/[130%]`}
        >
          Movido por uma curiosidade insaciável, meu trabalho é ser um tradutor
          entre dois mundos: o da lógica fria e precisa do código e o das
          experiências quentes e humanas. Desde o início da minha jornada,
          percebi que a excelência técnica por si só era vazia. De que adianta
          um código perfeito se ele não servir às pessoas de forma intuitiva e
          agradável?
          <br />
          <br />
          Essa pergunta guia meu processo até hoje. Para mim, por trás de cada
          clique e cada tela, existe uma pessoa buscando simplicidade. Por isso,
          dedico-me a entender não apenas a estrutura, mas o sentimento que a
          tecnologia provoca. Eu uno a precisão do desenvolvimento front-end à
          empatia profunda do UI/UX design, pois acredito que é nessa fusão que
          a verdadeira magia acontece.
          <br />
          <br />
          Meu objetivo final será sempre o mesmo: absorver a complexidade para
          entregar elegância e poder ao usuário.
        </p>
      </div>
    </Container>
  );
}
