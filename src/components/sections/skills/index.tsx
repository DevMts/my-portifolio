import figma from "@/assets/Icons/figma.svg";
import js from "@/assets/Icons/js.svg";
import react from "@/assets/Icons/react.svg";
import next from "@/assets/Icons/next.svg";
import tailwind from "@/assets/Icons/tailwind.svg";
import git from "@/assets/Icons/git.svg";
import typescript from "@/assets/Icons/ts.svg";
import node from "@/assets/Icons/node.svg";
import java from "@/assets/Icons/java.svg";
import arco from "@/assets/arco.svg";
import mongo from "@/assets/Icons/mongo.svg";
import firebase from "@/assets/Icons/firebase.svg";

import { Container } from "@/components/Container";
import Image, { StaticImageData } from "next/image";
import { Geist, Lato } from "next/font/google";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Skill {
  name: string;
  image: StaticImageData;
  position: {
    x?: number;
    y?: number;
  };
}

const skill: Skill[] = [
  {
    name: "Figma",
    image: figma,
    position: {
      x: 20,
      y: 300,
    },
  },
  {
    name: "JavaScript",
    image: js,
    position: {
      x: 150,
      y: 120,
    },
  },
  {
    name: "React",
    image: react,
    position: {
      x: 280,
      y: 120,
    },
  },
  {
    name: "Next",
    image: next,
    position: {
      x: 350,
      y: 10,
    },
  },
  {
    name: "Tailwind",
    image: tailwind,
    position: {
      x: 440,
      y: 150,
    },
  },
  {
    name: "Git",
    image: git,
    position: {
      x: 550,
      y: 10,
    },
  },
  {
    name: "TypeScript",
    image: typescript,
    position: {
      x: 600,
      y: 230,
    },
  },
  {
    name: "Node",
    image: node,
    position: {
      x: 780,
      y: 200,
    },
  },
  {
    name: "Java",
    image: java,
    position: {
      x: 850,
      y: 330,
    },
  },
  {
    name: "Mongo",
    image: mongo,
    position: {
      x: 670,
      y: 70,
    },
  },
  {
    name: "Firebase",
    image: firebase,
    position: {
      x: 180,
      y: 300,
    },
  },
];

const geist = Geist({ subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });

export function Skills() {
  return (
    <Container className={`mt-18 lg:mt-50`} size id="skills">
      <h1
        className={`${geist.className} mb-6 text-center text-2xl font-semibold text-white lg:mb-25 lg:text-5xl`}
      >
        Minhas Habilidades
      </h1>
      <article className="relative mx-auto flex w-9/10 flex-wrap justify-center gap-3 p-5">
        <Image src={arco} alt="arco" className="hidden w-full lg:block" />
        {skill.map((s) => (
          <div
            key={s.name}
            className="z-10 lg:absolute"
            style={{
              top: s.position.y,
              left: s.position.x,
            }}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Image src={s.image} alt={s.name} className="w-full" />
                </TooltipTrigger>
                <TooltipContent>
                  <span className={` ${lato.className}`}>{s.name}</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </article>
    </Container>
  );
}
