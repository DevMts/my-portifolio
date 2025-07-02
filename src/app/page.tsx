import { NavBar } from "@/components/NavBar";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/Contact";
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
      <About />
      <Contact />
    </>
  );
}
