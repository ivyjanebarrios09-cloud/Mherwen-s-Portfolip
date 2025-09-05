'use client';

import { useEffect, useState } from 'react';
import { getProjectById } from '@/app/(main)/page';
import type { Project } from '@/types';
import { notFound, useParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProjectDocumentationPage() {
  const params = useParams();
  const [project, setProject] = useState<Project | null | undefined>(undefined);
  
  useEffect(() => {
    if (params.id) {
        const id = params.id as string;
        const fetchedProject = getProjectById(id);
        setProject(fetchedProject ?? null);
    }
  }, [params.id]);

  if (project === undefined) {
    return (
        <div className="container mx-auto px-4 py-16">
            <Card>
                <CardHeader>
                    <Skeleton className="h-8 w-1/2 mb-4" />
                    <Skeleton className="h-6 w-1/3" />
                </CardHeader>
                <CardContent>
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4 mt-2" />
                </CardContent>
            </Card>
        </div>
    );
  }

  if (project === null) {
    notFound();
  }
  
  const isLinkAvailable = project.link !== 'NO LINK';
  const projectUrl = isLinkAvailable && !project.link.startsWith('http') ? `https://${project.link}` : project.link;

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="overflow-hidden">
        <CardHeader className="p-6">
            <Link href="/" className="text-sm text-primary hover:underline mb-4">&larr; Back to all projects</Link>
            <CardTitle className="text-4xl font-headline mb-2">{project.title}</CardTitle>
            <a 
              href={isLinkAvailable ? projectUrl : undefined} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center text-base transition-colors mb-4 ${
                isLinkAvailable 
                  ? 'text-muted-foreground hover:text-primary' 
                  : 'text-muted-foreground cursor-not-allowed'
              }`}
              aria-disabled={!isLinkAvailable}
            >
                <LinkIcon className="mr-2 h-4 w-4" />
                {isLinkAvailable ? (
                  <>
                    <span>{project.link.replace(/^(https?:\/\/)?(www\.)?/, '')}</span>
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <span>Link not available</span>
                )}
            </a>
            <CardDescription className="text-lg">{project.documentation.introduction}</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
            {project.documentation.images && project.documentation.images.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-headline mb-4">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.documentation.images.map((img, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden border">
                      <Image
                        src={img}
                        alt={`${project.title} - Screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        data-ai-hint="project screenshot"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
