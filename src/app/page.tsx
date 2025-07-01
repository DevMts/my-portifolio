import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <Services />
      <Skills />
    </>
  );
}
