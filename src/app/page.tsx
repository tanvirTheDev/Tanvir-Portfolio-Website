import Contact from "@/components/Homepage/Contact/Contact";
import HeroSection from "@/components/Homepage/HeroSection";
import ProjectsSection from "@/components/Homepage/Projects/Projects";
import Resume from "@/components/Homepage/Resume/Resume";
import Services from "@/components/Homepage/Services/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Resume />
      <ProjectsSection />
      <Contact />
    </>
  );
}
