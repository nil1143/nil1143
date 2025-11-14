import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/constants";
import { ProjectDetail } from "@/components/ProjectDetail";

export async function generateStaticParams() {
  return projects.map((project) => ({
    project: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { project: string } }) {
  const projectData = getProjectBySlug(params.project);

  if (!projectData) {
    notFound();
  }

  return <ProjectDetail project={projectData} />;
}