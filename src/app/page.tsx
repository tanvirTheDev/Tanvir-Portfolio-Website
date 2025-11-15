import Contact from "@/components/Homepage/Contact/Contact";
import HeroSection from "@/components/Homepage/HeroSection";
import ProjectsSection from "@/components/Homepage/ProjectsSection";
import Resume from "@/components/Homepage/Resume/Resume";
import Services from "@/components/Homepage/Services/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio of Tanvir Ahamed | Full-Stack Developer",
  description:
    "Welcome to the portfolio of Tanvir Ahamed (tanvirthedev) — a Full-Stack Developer specializing in Next.js, React, Node.js, and TypeScript. Explore my projects, skills, and contact details.",
  openGraph: {
    title: "Tanvir Ahamed | Full-Stack Developer",
    description:
      "Hi, I'm Tanvir Ahamed (tanvirthedev). Discover my portfolio, projects, and professional journey as a Full-Stack Developer.",
    url: "https://www.tanvirthedev.com",
    siteName: "Tanvir Ahamed Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tanvir Ahamed Portfolio",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://www.tanvirthedev.com",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <Services />
      <Resume />

      <Contact />
    </>
  );
}
