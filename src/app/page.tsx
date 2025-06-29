import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
    </>
  );
}
