import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/ParticlesBackground";
import Courses from "@/components/Courses";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Courses />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
