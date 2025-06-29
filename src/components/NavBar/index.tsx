"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import oak from "@/assets/oak.svg";
import { useLiveTime } from "@/hooks/useLiveTime";
import { useScrollTop } from "@/hooks/useScrollTop";
import { Geist, Lato } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });

export function NavBar() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isAtTop = useScrollTop();
  const now = useLiveTime();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const dateString = `${now.getDate().toString().padStart(2, "0")}/${(
    now.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${now.getFullYear()}`;

  function handleClick() {
    console.log("click");
    setIsMenuOpen(!isMenuOpen);
  }

  if (!hasMounted) return null;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`border-main-opacity fixed top-8 left-1/2 z-1000 flex min-h-18 w-9/10 max-w-256 -translate-x-1/2 flex-col items-center justify-start rounded-[36px] border px-8 py-4.5 backdrop-blur-xl transition-all duration-500 ease-out lg:h-18 ${isHovered ? "lg:w-full" : !isAtTop ? "lg:w-fit lg:scale-75" : "lg:w-full"} `}
    >
      <div className="flex h-full w-full items-center justify-between">
        <Image
          src={oak}
          alt="logo"
          className="h-full w-16 md:w-18.75"
          priority
        />

        <nav
          className={`hidden gap-4 transition-all duration-200 lg:flex ${isHovered ? "" : !isAtTop ? "lg:w-0 lg:scale-0 lg:opacity-0" : ""}`}
        >
          {[
            {
              name: "Home",
              href: "#home",
            },
            {
              name: "Projetos",
              href: "#projects",
            },
            {
              name: "Serviços",
              href: "#services",
            },
            {
              name: "Habilidades",
              href: "#skills",
            },
            {
              name: "Sobre mim",
              href: "#about",
            },
            {
              name: "Contato",
              href: "#contact",
            },
          ].map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`${geist.className} hover:text-main-opacity flex w-fit items-center gap-4 p-1 pl-0 text-xl text-white transition-all duration-200`}

            >
              {item.name}
              {index !== 5 && (
                <span className="bg-main inline-block size-1 transition-all duration-200"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Botão hamburguer (mobile) */}
        <button onClick={handleClick} className="background size-6 lg:hidden" aria-label="Abrir menu">
          <div className="relative flex size-full flex-col items-end justify-center gap-1">
            <span
              className={`bg-main h-0.5 w-2/4 rounded transition-all duration-200 ${isMenuOpen && "absolute w-full rotate-45"} `}
            ></span>
            <span
              className={`bg-main h-0.5 w-full rounded transition-all duration-200 ${isMenuOpen && "opacity-0"} `}
            ></span>
            <span
              className={`bg-main h-0.5 w-2/4 rounded transition-all duration-200 ${isMenuOpen && "absolute w-full -rotate-45"} `}
            ></span>
          </div>
        </button>

        {/* Navegação e horário (desktop) */}
        <div className="text-main-opacity hidden flex-col items-end lg:flex">
          <span className={`${lato.className} flex items-center`}>
            <span className="bg-main shadow-main mr-2 inline-block size-1 animate-pulse rounded shadow-[0_0_3px_2px_rgba(255,255,255,0.8)]"></span>
            {timeString}
          </span>
          <span>{dateString}</span>
        </div>
      </div>

      <nav
        className={`w-full flex-col ${isHovered ? "lg:hidden" : !isAtTop ? "" : "lg:hidden"} overflow-hidden transition-all duration-200 ${isMenuOpen ? "mt-6 flex min-h-50" : "max-h-0 opacity-0"}`}
      >
        {[
          {
            name: "Home",
            href: "#home",
          },
          {
            name: "Projetos",
            href: "#projects",
          },
          {
            name: "Serviços",
            href: "#services",
          },
          {
            name: "Habilidades",
            href: "#skills",
          },
          {
            name: "Sobre mim",
            href: "#about",
          },
          {
            name: "Contato",
            href: "#contact",
          },
        ].map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="hover:text-main-opacity w-fit p-1 pl-0 text-base text-white transition-all duration-200"
            onClick={handleClick}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
