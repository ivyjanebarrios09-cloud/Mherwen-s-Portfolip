
'use client';

import Image from 'next/image';
import { ArrowUpRight, Link as LinkIcon } from 'lucide-react';
import { trackLinkClick } from '@/app/actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Project } from '@/types';
import NextLink from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (project.link && project.link !== 'NO LINK') {
      trackLinkClick(project.id);
    } else {
      e.preventDefault();
    }
  };

  const isLinkAvailable = project.link && project.link !== 'NO LINK';
  const projectUrl = isLinkAvailable && !project.link.startsWith('http') ? `https://${project.link}` : project.link;


  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={project.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <CardTitle className="mb-2 text-xl font-headline">{project.title}</CardTitle>
        {project.link && (
          <a 
            href={isLinkAvailable ? projectUrl : undefined} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={handleLinkClick} 
            className={`flex items-center text-sm mb-4 ${
              isLinkAvailable 
                ? 'text-muted-foreground hover:text-primary transition-colors' 
                : 'text-muted-foreground cursor-not-allowed'
            }`}
            aria-disabled={!isLinkAvailable}
          >
            <LinkIcon className="mr-2 h-4 w-4" />
            {isLinkAvailable ? (
              <span className="truncate">{project.link.replace(/^(https?:\/\/)?(www\.)?/, '')}</span>
            ) : (
              <span>Link not available</span>
            )}
          </a>
        )}
        <CardDescription className="text-base">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground">
          <NextLink href={`/projects/${project.id}`}>
            View Documentation
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </NextLink>
        </Button>
      </CardFooter>
    </Card>
  );
}
