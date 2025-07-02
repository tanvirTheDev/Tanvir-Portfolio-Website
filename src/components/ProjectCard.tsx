import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
    liveUrl?: string;
    githubUrl?: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-gray-600 transition-all duration-300">
      <div className="relative">
        <Link href={`/projects/${project.slug}`}>
          <div className="relative overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        </Link>
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-gray-900/80 text-gray-300">
            {project.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        </Link>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-gray-600 text-gray-300 text-xs"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge
              variant="outline"
              className="border-gray-600 text-gray-300 text-xs"
            >
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Link href={`/projects/${project.slug}`}>
            <Button className="">View Details →</Button>
          </Link>
          <div className="flex items-center space-x-2">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  <Github className="w-4 h-4" />
                </Button>
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
