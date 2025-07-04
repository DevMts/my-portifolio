"use client";
import { Container } from "@/components/Container";
import { Card } from "@/components/ui/card";
import { Geist, Lato } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import blob from "@/assets/blob2.svg";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const geist = Geist({ subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });

interface ServicesCardProps {
  title: string;
  description: string;
}

function ServicesCard({ title, description }: ServicesCardProps) {
  return (
    <Card
      variant="shine"
      className="justify-beetween mx-auto mb-10 flex flex-col items-start gap-4 md:col-span-1 md:mb-0"
    >
      <h2
        className={`${geist.className} min-h-15.5 max-w-4/6 bg-gradient-to-b from-[#e6e6e6] to-[#c5c5c5] bg-clip-text text-left text-xl/[130%] font-semibold text-transparent md:max-w-9/10 lg:text-2xl`}
      >
        {title}
      </h2>
      <p className={`${lato.className} text-second text-left text-sm/[130%]`}>
        {description}
      </p>
    </Card>
  );
}
const services = [
  {
    title: "UI/UX Design",
    description:
      "Pesquisa de usuário, criação de wireframes, protótipos interativos e design de interfaces intuitivas e atraentes.",
  },
  {
    title: "Desenvolvimento Front-End",
    description:
      "Construção de sites e aplicações web responsivas, rápidas e modernas, utilizando as melhores tecnologias do mercado.",
  },
  {
    title: "Soluções Completas (Ponta a Ponta)",
    description:
      "Cuido de todo o processo, do design inicial da interface até o desenvolvimento e a publicação (deploy) final do site.",
  },
];

export function Services() {
  return (
    <Container className={`relative`} size id="services">
      <Image
        src={blob}
        unoptimized
        alt="blob"
        className="absolute -top-70 -right-40 -z-10 hidden blur lg:block"
      />
      <h1
        className={`${geist.className} text-left text-2xl font-semibold text-white lg:text-5xl`}
      >
        O que eu faço
      </h1>
      <p
        className={` ${lato.className} lg:text-base[130%] mt-3 text-left text-sm/[130%] text-white`}
      >
        Meu trabalho é transformar ideias em produtos digitais funcionais e
        agradáveis de usar.{" "}
        <span className="inline lg:block">
          Ofereço soluções completas que cobrem todo o ciclo de vida do projeto.
        </span>
      </p>
      {/* Mobile: Swiper */}
      <article className="mt-6 md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="pb-8"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <ServicesCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </article>

      {/* Desktop: Grid */}
      <article className="mt-6 hidden gap-5 md:mt-12 md:grid md:grid-cols-3">
        {services.map((service, index) => (
          <ServicesCard key={index} {...service} />
        ))}
      </article>
    </Container>
  );
}
