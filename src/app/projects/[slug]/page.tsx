import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Github,
  Tag,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects: {
  [key: string]: {
    id: number;
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    image: string;
    gallery: string[];
    technologies: string[];
    category: string;
    duration: string;
    client: string;
    year: string;
    liveUrl?: string;
    githubUrl?: string;
    githubFrontendUrl?: string;
    githubBackendUrl?: string;
    features: string[];
    challenges: string[];
    learnings: string[];
  };
} = {
  "ecommerce-platform": {
    id: 1,
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    description:
      "A full-stack e-commerce platform built with Next.js and Stripe integration",
    longDescription:
      "This comprehensive e-commerce platform features a modern, responsive design with full shopping cart functionality, secure payment processing through Stripe, user authentication, order management, and an admin dashboard. The platform is built using Next.js 14 with TypeScript, Tailwind CSS for styling, and integrates with a PostgreSQL database for data persistence.",
    image: "/images/ecommerce/ecommerce.png",
    gallery: [
      "/images/ecommerce/CategoryPage.png",
      "/images/ecommerce/AdminPanel.png",
      "/images/ecommerce/AdminAddProduct.png",
      "/images/ecommerce/AddCategory.png",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "PostgreSQL",
      "Prisma",
    ],
    category: "Full Stack",
    duration: "2 months",
    client: "Personal Project",
    year: "2024",
    liveUrl: "https://qmmerce.vercel.app",
    githubFrontendUrl: "https://github.com/tanvirTheDev/ecommerce-frontend",
    githubBackendUrl: "https://github.com/tanvirTheDev/qmmerce-backend",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Secure payment processing with Stripe",
      "Order management system",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
      "SEO optimized pages",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Optimizing database queries for large product catalogs",
      "Creating a responsive design that works across all devices",
      "Ensuring proper error handling and user feedback",
    ],
    learnings: [
      "Advanced Next.js patterns and optimization techniques",
      "Payment gateway integration best practices",
      "Database design for e-commerce applications",
      "User experience design for conversion optimization",
    ],
  },
  "task-management-app": {
    id: 2,
    title: "Task Management App",
    slug: "task-management-app",
    description:
      "A collaborative task management application with real-time updates",
    longDescription:
      "A comprehensive task management solution designed for teams and individuals. Features real-time collaboration, drag-and-drop task organization, deadline tracking, file attachments, and detailed analytics. Built with modern web technologies to ensure fast performance and seamless user experience.",
    image: "/placeholder.svg?height=400&width=800",
    gallery: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express",
      "Material-UI",
    ],
    category: "Web Application",
    duration: "2 months",
    client: "Startup Company",
    year: "2024",
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/username/task-app",
    features: [
      "Real-time collaboration with Socket.io",
      "Drag-and-drop task organization",
      "Team management and permissions",
      "File attachments and comments",
      "Deadline tracking and notifications",
      "Progress analytics and reporting",
      "Mobile-responsive interface",
    ],
    challenges: [
      "Implementing real-time synchronization across multiple users",
      "Optimizing performance with large datasets",
      "Creating intuitive drag-and-drop interactions",
      "Managing complex state across components",
    ],
    learnings: [
      "Real-time application architecture",
      "WebSocket implementation and optimization",
      "Complex state management patterns",
      "User interface design for productivity tools",
    ],
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="mb-4 bg-gray-800 text-gray-300"
            >
              {project.category}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-1">Duration</h3>
                <p className="text-gray-400">{project.duration}</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <User className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-1">Client</h3>
                <p className="text-gray-400">{project.client}</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Tag className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-1">Year</h3>
                <p className="text-gray-400">{project.year}</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <ExternalLink className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-1">Status</h3>
                <p className="text-gray-400">Completed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Overview */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Project Overview
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.longDescription}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Key Features
                </h2>
                <div className="grid sm:grid-cols-1 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-accent rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Challenges & Solutions
                </h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <Card key={index} className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6">
                        <p className="text-gray-300">{challenge}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* What I Learned */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  What I Learned
                </h2>
                <div className="space-y-3">
                  {project.learnings.map((learning, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-accent rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-300">{learning}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-gray-700 text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project Links */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Project Links
                  </h3>
                  <div className="">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full mb-5">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live Site
                        </Button>
                      </Link>
                    )}
                    {project.githubFrontendUrl && (
                      <Link
                        href={project.githubFrontendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          className="w-full border-gray-600 text-gray-300 hover:bg-primary-accent bg-transparent hover:text-black mb-3"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Frontend Code
                        </Button>
                      </Link>
                    )}
                    {project.githubBackendUrl && (
                      <Link
                        href={project.githubBackendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          className="w-full border-gray-600 text-gray-300 hover:bg-primary-accent bg-transparent hover:text-black"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Backend Code
                        </Button>
                      </Link>
                    )}
                    {project.githubUrl &&
                      !project.githubFrontendUrl &&
                      !project.githubBackendUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            className="w-full border-gray-600 text-gray-300 hover:bg-primary-accent bg-transparent hover:text-black"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Source Code
                          </Button>
                        </Link>
                      )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">
              Project Gallery
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Interested in Working Together?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            {"Let's discuss your next project and bring your ideas to life."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="">
                Get In Touch
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:text-black hover:bg-primary-accent bg-transparent"
              >
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
