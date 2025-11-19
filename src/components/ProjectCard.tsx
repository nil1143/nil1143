import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react"; // Changed Github to ArrowRight

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
            quality={95} // Higher quality for screenshots
            priority={index < 3} // Load first 3 images immediately
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes
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
        <div className="flex flex-wrap gap-2">
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
      
      <CardFooter className="flex flex-wrap gap-2 mt-auto">
        {/* Primary CTA - View Details (internal link) */}
        <Button asChild size="sm" className="flex-1 group/btn">
          <Link href={`/projects/${project.slug}`} className="flex items-center gap-2">
            View Details
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
        
        {/* Secondary CTA - Live Demo (external link) */}
        <Button asChild variant="outline" size="sm" className="flex-1 hover:dark:text-white">
          <Link href={project.live_link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};