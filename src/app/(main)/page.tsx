import type { Metadata } from 'next';
import { ProjectCard } from '@/components/project-card';
import type { Project } from '@/types';

export const metadata: Metadata = {
  title: 'Home | DocuPort',
  description: 'Welcome to my portfolio documentation viewer.',
};

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website built with Next.js and Stripe.',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    imageHint: 'online store',
    link: 'https://example.com/project-1',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management tool for teams, using React and Firebase.',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    imageHint: 'task board',
    link: 'https://example.com/project-2',
  },
  {
    id: 'project-3',
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects, built with Astro.',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    imageHint: 'personal website',
    link: 'https://example.com/project-3',
  },
    {
    id: 'project-4',
    title: 'Recipe Finder',
    description: 'Discover new recipes based on ingredients you have at home. Uses a public API.',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    imageHint: 'food app',
    link: 'https://example.com/project-4',
  },
  {
    id: 'project-5',
    title: 'Weather Dashboard',
    description: 'A clean weather dashboard showing current and forecasted weather for any city.',
    imageUrl: 'https://picsum.photos/600/400?random=5',
    imageHint: 'weather forecast',
    link: 'https://example.com/project-5',
  },
  {
    id: 'project-6',
    title: 'Blog Platform',
    description: 'A lightweight blogging platform with Markdown support and static site generation.',
    imageUrl: 'https://picsum.photos/600/400?random=6',
    imageHint: 'writing blog',
    link: 'https://example.com/project-6',
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-16 md:py-24">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
          Jane Doe
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
          Portfolio Documentation Viewer
        </p>
      </section>

      <section className="pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
