"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Fabrica Fetish",
    description:
      "Fabrica Fetish is a modern e-commerce platform for smooth shopping and efficient admin management.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
    githubLink: "#",
    externalLink: "#",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Bikehub",
    description:
      "The Bikehub is a responsive app for hassle-free bike rentals, ensuring efficiency and security.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    githubLink: "#",
    externalLink: "#",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Regal Dragon",
    description:
      "Regal Dragon's app provides secure ordering, admin tools, and analytics in a responsive design.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    githubLink: "#",
    externalLink: "#",
    category: "Machine Learning",
  },
];

const categories = ["all", "Web Development", "Next.js"];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = projects.filter((project) => {
    return selectedCategory === "all" || project.category === selectedCategory;
  });

  return (
    <div
      id="work"
      className="bg-gray-900 min-h-screen text-white py-16 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-green-400 mb-2">
          Projects
        </h1>
        <p className="text-gray-400 text-center text-lg mb-16">
          A showcase of my best work
        </p>

        {/* Tabs */}
        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="mb-8"
        >
          <TabsList className="flex flex-wrap xl:flex-nowrap gap-12">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category === "all" ? "All" : category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-zinc-900 rounded-lg overflow-hidden"
                >
                  <div className="relative h-64">
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Link
                        href="#"
                        className="bg-green-400 text-black font-medium py-2 px-4 rounded-md flex items-center gap-2 hover:bg-green-300 transition-colors"
                      >
                        View Details <span className="text-xl">→</span>
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-black px-3 py-1 rounded text-green-400 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Link
                        href={project.githubLink}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={24} />
                      </Link>
                      <Link
                        href={project.externalLink}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={24} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
