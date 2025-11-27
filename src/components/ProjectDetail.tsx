import Link from "next/link";
import { Project } from "@/types/project";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { ImageCarousel } from "./ImageCarousel";


interface ProjectDetailProps {
  project: Project;
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const projectImages = project.images || [project.image];
  return (
    <div className="relative min-h-screen overflow-hidden">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "dark:opacity-30 opacity-20"
        )}
      />

      <div className="container mx-auto py-8 px-4 md:px-12 relative z-10">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto mb-6">
          <Button asChild variant="ghost" size="sm" className="hover:bg-accent/70 hover:dark:bg-secondary/70 hover:dark:text-white">
            <Link href="/projects" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Header + Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Header Info - 2/3 */}
            <div className="lg:col-span-2">
              <Badge variant="secondary" className="mb-3 capitalize">
                {project.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                {project.name}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="default" size="default">
                  <Link
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
                <Button asChild variant="outline" size="default" className="hover:dark:text-white">
                  <Link
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Link>
                </Button>
              </div>
            </div>

            {/* Project Image - 1/3 */}
            {/* <div className="lg:col-span-1">
              <div className="relative w-full h-[200px] lg:h-[250px] rounded-xl overflow-hidden border shadow-lg">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div> */}
            {/* Image Carousel - 1/3 */}
            <div className="lg:col-span-1">
              <ImageCarousel images={projectImages} projectName={project.name} />
            </div>
          
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Features & Highlights (2/3) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Key Features */}
              <Card className="bg-gradient-to-br from-background via-background to-accent/5">
                <CardHeader>
                  <CardTitle className="text-xl">Key Features</CardTitle>
                  <CardDescription>
                    Main functionalities and highlights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-sm">{feature.title}</span>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {feature.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Development Highlights */}
              <Card className="bg-gradient-to-br from-background via-background to-accent/5">
                <CardHeader>
                  <CardTitle className="text-xl">Development Highlights</CardTitle>
                  <CardDescription>
                    Key challenges and solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.highlights.map((highlight, index) => {
                      // Map colors to actual Tailwind classes
                      const colorClasses = {
                        orange: {
                          border: "border-orange-500",
                          text: "text-orange-500"
                        },
                        blue: {
                          border: "border-blue-500",
                          text: "text-blue-500"
                        },
                        purple: {
                          border: "border-purple-500",
                          text: "text-purple-500"
                        },
                        green: {
                          border: "border-green-500",
                          text: "text-green-500"
                        },
                        red: {
                          border: "border-red-500",
                          text: "text-red-500"
                        }
                      };

                      const colors = colorClasses[highlight.color];

                      return (
                        <div
                          key={index}
                          className={`border-l-4 ${colors.border} pl-4 py-1`}
                        >
                          <div className="flex items-start gap-2 mb-1">
                            <AlertCircle className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                            <h4 className="font-semibold text-sm">{highlight.title}</h4>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {highlight.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar (1/3) */}
            <div className="lg:col-span-1 space-y-6 md:space-y-16">
              {/* Technologies */}
              <Card className="bg-gradient-to-br from-background via-background to-accent/5">
                <CardHeader>
                  <CardTitle className="text-lg">Tech Stack</CardTitle>
                  <CardDescription className="text-xs">
                    Technologies used
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.map((tech, index) => {
                      const TechIcon = tech.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-br from-secondary/30 to-accent/10 dark:from-accent/20 dark:to-accent/5 border border-border/50 hover:from-accent/50 hover:to-accent/20 hover:dark:from-accent/50 hover:dark:to-accent/20 transition-all duration-200"
                          title={tech.name}
                        >
                          <TechIcon
                            className="w-4 h-4"
                            style={{ color: tech.color }}
                          />
                          <span className="text-xs font-medium">{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Project Info */}
              <Card className="bg-gradient-to-br from-background via-background to-accent/5">
                <CardHeader>
                  <CardTitle className="text-lg">Project Info</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-xs font-medium text-muted-foreground mb-1">
                        Category
                      </dt>
                      <dd className="text-sm">
                        <Badge variant="outline" className="capitalize text-xs">
                          {project.category}
                        </Badge>
                      </dd>
                    </div>
                    <Separator />
                    <div>
                      <dt className="text-xs font-medium text-muted-foreground mb-1">
                        Status
                      </dt>
                      <dd className="text-sm">
                        <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 hover:bg-green-500/20 text-xs">
                          ● Live & Deployed
                        </Badge>
                      </dd>
                    </div>
                    <Separator />
                    <div>
                      <dt className="text-xs font-medium text-muted-foreground mb-2">
                        Links
                      </dt>
                      <dd className="space-y-2">
                        <Link
                          href={project.source_code_link}
                          className="flex items-center gap-2 text-xs text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-3 h-3" />
                          View Source Code
                        </Link>
                        <Link
                          href={project.live_link}
                          className="flex items-center gap-2 text-xs text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Visit Live Site
                        </Link>
                      </dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Back to Projects */}
          <div className="mt-10 text-center pb-8">
            <Button asChild variant="outline" size="default" className="hover:bg-accent/70 hover:dark:text-white">
              <Link href="/projects" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to All Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
