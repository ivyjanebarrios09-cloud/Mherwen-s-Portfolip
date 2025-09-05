import { getProjectById, getProjects } from '@/app/(main)/page';
import { notFound } from 'next/navigation';
import ProjectDocumentationClientPage from './client-page';

export function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDocumentationPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDocumentationClientPage project={project} />;
}
