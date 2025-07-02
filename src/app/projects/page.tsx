import { ProjectCard } from "@/components/ProjectCard";

// Sample projects data - replace with your actual data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    description:
      "A full-stack e-commerce platform built with Next.js and Stripe integration",
    image: "/images/ecommerce.png",
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
    title: "Task Management App",
    slug: "task-management-app",
    description:
      "A collaborative task management application with real-time updates",
    image: "/placeholder.svg?height=250&width=400",
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express",
      "Material-UI",
    ],
    category: "Web Application",
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/username/task-app",
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
