import { getProjectById, getProjects } from '@/app/(main)/page';
import { notFound } from 'next/navigation';
import ProjectDocumentationClientPage from './client-page';
import type { Metadata } from 'next';
import type { Project } from '@/types';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project: Project | undefined = getProjectById(params.id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Project Documentation`,
    description: project.documentation.introduction,
  };
}

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
