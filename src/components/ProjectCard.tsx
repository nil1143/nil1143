import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <Link href={`/projects/${project.slug}`}>
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <CardHeader>
        <CardTitle className="line-clamp-1">{project.name}</CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex gap-2 flex-wrap">
          {project.technologies.map((tech, idx) => {
            const TechIcon = tech.icon;
            return (
              <div
                key={idx}
                className="p-2 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                title={tech.name}
              >
                <TechIcon className="w-5 h-5" style={{ color: tech.color }} />
              </div>
            );
          })}
        </div>
      </CardContent>
      
      <CardFooter className="gap-2">
        <Button asChild variant="outline" size="sm" className="flex-1">
          <Link href={project.source_code_link} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            Code
          </Link>
        </Button>
        <Button asChild size="sm" className="flex-1">
          <Link href={project.live_link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};