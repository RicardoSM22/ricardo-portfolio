import {Navbar} from "@/components/portfolio/Navbar";
import {Hero} from "@/components/portfolio/Hero";
import {About} from "@/components/portfolio/About";
import {Projects} from "@/components/portfolio/Projects";
import {Skills} from "@/components/portfolio/Skills";
import {Experience} from "@/components/portfolio/Experience";
import {FutureTech} from "@/components/portfolio/FutureTech";
import {Contact} from "@/components/portfolio/Contact";
import {Footer} from "@/components/portfolio/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <FutureTech />
      <Contact />
      <Footer />
    </>
  );
}