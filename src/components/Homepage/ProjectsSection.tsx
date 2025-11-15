import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    description:
      "A full-stack e-commerce platform built with Next.js and Stripe integration",
    image: "/images/ecommerce/ecommerce.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "PostgreSQL",
      "Prisma",
    ],
    category: "Full Stack",
    liveUrl: "https://qmmerce.vercel.app",
    githubUrl: "https://github.com/tanvirTheDev/qmmerce",
  },
  {
    id: 2,
    title: "JAF Washing Plant Ltd. Corporate Website",
    slug: "jaf-washing-plant-corporate-site",
    description:
      "A fully responsive corporate website developed for JAF Washing Plant Ltd., featuring animated UI components, dynamic sections, and an integrated meeting booking system using EmailJS.",
    image: "/jaf-washing/jaf_washing_featured_image.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "EmailJS"],
    category: "Client Project",
    liveUrl: "https://jaf-washing-plant-ltd.vercel.app",
    githubUrl: "https://github.com/tanvirTheDev/jaf-washing-plant-ltd",
  },
  {
    id: 3,
    title: "Portfolio Website",
    slug: "portfolio-website",
    description: "A personal portfolio website to showcase my work and skills.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    category: "Personal",
    liveUrl: "https://portfolio.com",
    githubUrl: "https://github.com/username/portfolio",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-5xl font-bold text-primary-accent py-10 mx-auto mb-5">
          Featured Projects
          <div className="w-20 h-px bg-white/50 mx-auto my-5"></div>
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/projects">
            <Button className="text-black px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
