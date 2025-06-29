"use client";

import { useEffect } from "react";
import { Lato } from "next/font/google";
import { BlurGradientBg } from "@/assets/jsm/BlurGradientBg.module";
import { Button } from "@/components/button";
import { Container } from "@/components/Container";
import SplitText from "@/components/splitText";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export function Hero() {
  useEffect(() => {
    const colorbg = new BlurGradientBg({
      dom: "box", // id do container
      colors: ["#f0f8ff", "#000000", "#111111", "#000000"], // suas cores
      loop: true,
    });

    // (opcional) limpar ao desmontar
    return () => colorbg?.destroy?.();
  }, []);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <section className="relative h-screen min-h-87.5 overflow-hidden">
      <div id="box" className="absolute inset-0 -z-10" />

      <Container className="z-10 flex h-screen min-h-87.5 flex-col items-center justify-center">
        <SplitText
          text="Front-End"
          text2="& UX Design"
          className={`bg-clip-text text-center text-5xl/[130%] font-semibold text-white md:text-7xl lg:text-8xl/[130%]`}
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <p
          className={`${lato.className} text-primary mt-1 max-w-82.5 text-center text-sm/[130%] font-medium tracking-[0.15%] md:max-w-2xl md:text-xl/[130%] lg:mt-0 lg:max-w-4xl`}
        >
          Criando experiências digitais marcantes unindo design funcional e
          tecnologia moderna, com foco na clareza, performance e usabilidade em
          cada detalhe do projeto.
        </p>
        <div className="mx-auto mt-16 flex gap-5">
          <Button type="primary">Projetos</Button>
          <Button type="secondary">Sobre mim</Button>
        </div>
      </Container>
    </section>
  );
}
