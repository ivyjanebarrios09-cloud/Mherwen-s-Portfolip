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

export default function ProjectDocumentationPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | undefined>(undefined);
  
  useEffect(() => {
    const fetchedProject = getProjectById(params.id);
    if (fetchedProject) {
        setProject(fetchedProject);
    } else {
        // Handle case where project is not found client-side
        // This might be redundant if notFound() works as expected on server for initial render
    }
  }, [params.id]);


  if (!project) {
    // This will be rendered on the server if the project is not found initially
    // and on the client while the project is being fetched.
    // To avoid flashing "not found" on the client, you could return a loading state.
    // For this example, we'll keep it simple. If a project is not found after client-side check,
    // we could redirect or show a 404 component.
    // Using Next.js's notFound() is preferred for server-side rendering.
    // However, since we fetch data on the client with useEffect, we need client-side handling.
    if (typeof window !== 'undefined') {
        // Return a loading or not found component for client-side
        return <div>Loading...</div>; // Or a more sophisticated loading component
    }
    // This should be called on the server if the initial fetch fails.
    // With client-side fetching, this line might not be reached as expected.
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
