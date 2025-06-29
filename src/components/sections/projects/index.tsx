import { Container } from "@/components/Container";
import constructor from "@/assets/letterT.gif";
import five from "@/assets/fiveCapa.png";
import { Geist, Lato } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import { BlurCard } from "@/components/blueCard";
import { SquareArrowOutUpRight } from "lucide-react";

const geist = Geist({ subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });

interface ProjectCardProps {
  image: StaticImageData;
  title: string;
  links: {
    href: string;
    text: string;
  }[];
}

function ProjectCard({ image, title, links }: ProjectCardProps) {
  return (
    <div>
      <figure className="h-100 w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          className="h-full w-full scale-130 rounded-lg object-cover object-[25%_75%]"
        />
      </figure>
      <div className="relative z-20 mt-2 text-left text-white">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="mt-2 flex gap-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group hover:text-main-opacity text-main flex items-center gap-1 transition-colors duration-300"
            >
              {link.text} <SquareArrowOutUpRight className="inline size-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <Container className={`mt-2 py-20 lg:mt-10`} size id="projects">
      <h1
        className={`${geist.className} text-center text-2xl/[130%] font-semibold text-white lg:text-5xl`}
      >
        Meus Projetos
      </h1>
      <p
        className={`${lato.className} text-main-opacity mt-2 hidden text-center text-sm/[130%] tracking-[-0.5%] lg:block`}
      >
        “Passe o mouse sobre os cards”
      </p>

      <article className="mt-10 hidden h-163 grid-cols-3 grid-rows-2 gap-5 md:grid">
        <div className="relative flex items-end justify-center rounded-lg border border-white p-9">
          <Image
            src={constructor}
            alt="constructor"
            className="absolute top-1/2 left-1/2 w-105 -translate-x-1/2 -translate-y-1/2 object-cover"
          />
          <span className={`z-10 text-white`}>Em construção</span>
        </div>
        <BlurCard image="/fiveCapa.png" title="Five - Landing Page" grid={2} />

        <div className="relative col-span-2 row-start-2 flex items-end justify-center rounded-lg border border-white p-9">
          <Image
            src={constructor}
            alt="constructor"
            className="absolute top-1/2 left-1/2 h-full w-105 -translate-x-1/2 -translate-y-1/2 border border-t-white object-cover"
          />
          <span className={`z-10 text-white`}>Em construção</span>
        </div>
        <div className="col-start-3 row-start-2 rounded-lg border border-white">
          4
        </div>
      </article>
      <article className="mt-5 flex flex-col gap-10 md:mt-10 md:hidden">
        <ProjectCard
          image={five}
          title="Five - Landing Page"
          links={[
            {
              href: "",
              text: "Estudo de caso",
            },
            {
              href: "",
              text: "Github",
            },
            {
              href: "",
              text: "Prévia",
            },
          ]}
        />
      </article>
    </Container>
  );
}
