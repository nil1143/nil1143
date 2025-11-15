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
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full bg-gradient-to-br from-background via-background to-accent/10 dark:from-background dark:via-background dark:to-accent/5 border-border/50">
      <Link href={`/projects/${project.slug}`}>
        <div className="relative rounded-2xl mx-4 mt-4 h-48 overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5 dark:from-accent/10 dark:to-accent/5">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <CardHeader className="flex-grow">
        <CardTitle className="line-clamp-1">{project.name}</CardTitle>
        <CardDescription className="line-clamp-none">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex gap-2 flex-wrap">
          {project.technologies.map((tech, idx) => {
            const TechIcon = tech.icon;
            return (
              <div
                key={idx}
                className="p-2 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 dark:from-accent/20 dark:to-accent/5 border border-border/50 hover:from-accent/50 hover:to-accent/20 dark:hover:from-accent/30 dark:hover:to-accent/10 transition-all duration-200"
                title={tech.name}
              >
                <TechIcon className="w-5 h-5" style={{ color: tech.color }} />
              </div>
            );
          })}
        </div>
      </CardContent>
      
      <CardFooter className="gap-2 mt-auto">
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