import { Container } from "@/components/Container";
import constructor from "@/assets/letterT.gif";
import five from "@/assets/fiveCapa.png";
import { Geist, Lato } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import { BlurCard } from "@/components/blueCard";
import { SquareArrowOutUpRight } from "lucide-react";
import blob from "@/assets/blob1.svg";
import weather from "@/assets/weather.webp";

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
              target="_blank"
              rel="noopener noreferrer"
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
    <Container className={`relative`} size id="projects">
      `
      <Image
        src={blob}
        unoptimized
        alt=""
        className="absolute top-1/2 -left-50 -z-10 hidden blur-[120px] lg:block"
      />
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
        <div className="relative flex items-end justify-center rounded-lg border border-white bg-black p-9">
          <Image
            src={constructor}
            unoptimized
            alt="Animação de construção representando que o projeto está em construção"
            className="absolute top-1/2 left-1/2 w-105 -translate-x-1/2 -translate-y-1/2 object-cover"
          />
          <span className={`z-10 text-white`}>Em construção</span>
        </div>
        <BlurCard
          image="/images/fiveCapa.png"
          title="Five - Landing Page"
          grid={2}
          demo="https://landing-page-meditation.vercel.app/"
          github="https://github.com/DevMts/landing-page-meditation"
        />

        <div className="relative col-span-2 row-start-2 flex items-end justify-center rounded-lg border border-white bg-black p-9">
          <Image
            src={constructor}
            unoptimized
            alt="Animação de construção representando que o projeto está em construção"
            className="absolute top-1/2 left-1/2 h-full w-105 -translate-x-1/2 -translate-y-1/2 border border-t-white object-cover"
          />
          <span className={`z-10 text-white`}>Em construção</span>
        </div>
        <BlurCard
          image="/images/weather.webp"
          title="Weather App"
          grid={1}
          demo="https://devmtsweather.vercel.app/"
          github="https://github.com/DevMts/WeatherApp"
        />
      </article>
      <article className="mt-5 flex flex-col gap-10 md:mt-10 md:hidden">
        <ProjectCard
          image={five}
          title="Five - Landing Page"
          links={[
            {
              href: "https://github.com/DevMts/landing-page-meditation",
              text: "Github",
            },
            {
              href: "https://landing-page-meditation.vercel.app/",
              text: "Prévia",
            },
          ]}
        />
        <ProjectCard
          image={weather}
          title="Weather App"
          links={[
            {
              href: "https://github.com/DevMts/WeatherApp",
              text: "Github",
            },
            {
              href: "https://devmtsweather.vercel.app/",
              text: "Prévia",
            },
          ]}
        />
      </article>
    </Container>
  );
}
