import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/constants";
import { ProjectDetail } from "@/components/ProjectDetail";

export async function generateStaticParams() {
  return projects.map((project) => ({
    project: project.slug,
  }));
}

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ project: string }> 
}) {
  const { project } = await params;
  const projectData = getProjectBySlug(project);

  if (!projectData) {
    notFound();
  }

  return <ProjectDetail project={projectData} />;
}