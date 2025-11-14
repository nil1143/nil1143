import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectDetailProps {
  project: Project;
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
        <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

        {/* Project Image */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex gap-4 flex-wrap">
            {project.technologies.map((TechIcon, index) => (
              <div key={index} className="flex items-center gap-2">
                {/* <TechIcon className="w-6 h-6" /> */}
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <Button asChild variant="default" size="lg">
            <Link href={project.live_link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={project.source_code_link} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Source Code
            </Link>
          </Button>
        </div>

        {/* Additional sections you can add */}
        {/* 
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Feature 1</li>
            <li>Feature 2</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
          // Add more images here
        </div>
        */}
      </div>
    </div>
  );
};