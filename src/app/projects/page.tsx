import { ProjectCard } from "@/components/ProjectCard";

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
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              All Projects
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore my complete portfolio of web development projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
