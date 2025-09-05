// To add a new project documentation, go to src/app/(main)/page.tsx
// Find the `projects` array and add a new object with the following structure:
// {
//   id: 'project-7', // Unique ID for the project
//   title: 'New Project',
//   description: 'A brief description of the new project.',
//   imageUrl: 'https://picsum.photos/600/400?random=7', // Main image for the project card
//   imageHint: 'new project',
//   link: 'https://example.com/project-7', // Live link to the project
//   documentation: {
//       introduction: "An introduction to the new project.",
//       steps: [
//           {
//               title: "Step 1: First action",
//               description: "Description of the first step.",
//               imageUrl: "https://picsum.photos/800/600?random=71", // Image for step 1
//               imageHint: "first step"
//           },
//           {
//               title: "Step 2: Second action",
//               description: "Description of the second step.",
//               imageUrl: "https://picsum.photos/800/600?random=72", // Image for step 2
//               imageHint: "second step"
//           }
//       ]
//   }
// }
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getProjectById } from '@/app/(main)/page';
import type { Project } from '@/types';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProjectDocumentationPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null | undefined>(undefined);
  
  useEffect(() => {
    const fetchedProject = getProjectById(params.id);
    setProject(fetchedProject ?? null);
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
                    <div className="space-y-12 mt-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <Skeleton className="h-8 w-1/3 mb-4" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6 mt-2" />
                            </div>
                            <Skeleton className="aspect-video w-full" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
  }

  if (project === null) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="overflow-hidden">
        <CardHeader className="p-6">
            <Link href="/" className="text-sm text-primary hover:underline mb-4">&larr; Back to all projects</Link>
            <CardTitle className="text-4xl font-headline mb-2">{project.title}</CardTitle>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-base text-muted-foreground hover:text-primary transition-colors mb-4">
                <LinkIcon className="mr-2 h-4 w-4" />
                <span>{project.link.replace('https://', '').replace('http://', '')}</span>
                <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
            <CardDescription className="text-lg">{project.documentation.introduction}</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
            <div className="space-y-12">
                {project.documentation.steps.map((step, index) => (
                    <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                        <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                        <div className={`relative aspect-video ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                            <Image
                                src={step.imageUrl}
                                alt={step.title}
                                fill
                                className="object-cover rounded-lg shadow-lg"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                data-ai-hint={step.imageHint}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
