
'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Project } from '@/types';

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website built with Next.js and Stripe.',
    imageUrl: 'https://picsum.photos/1200/800?random=1',
    imageHint: 'online store',
    link: 'https://example.com/project-1',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management tool for teams, using React and Firebase.',
    imageUrl: 'https://picsum.photos/1200/800?random=2',
    imageHint: 'task board',
    link: 'https://example.com/project-2',
  },
  {
    id: 'project-3',
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects, built with Astro.',
    imageUrl: 'https://picsum.photos/1200/800?random=3',
    imageHint: 'personal website',
    link: 'https://example.com/project-3',
  },
    {
    id: 'project-4',
    title: 'Recipe Finder',
    description: 'Discover new recipes based on ingredients you have at home. Uses a public API.',
    imageUrl: 'https://picsum.photos/1200/800?random=4',
    imageHint: 'food app',
    link: 'https://example.com/project-4',
  },
  {
    id: 'project-5',
    title: 'Weather Dashboard',
    description: 'A clean weather dashboard showing current and forecasted weather for any city.',
    imageUrl: 'https://picsum.photos/1200/800?random=5',
    imageHint: 'weather forecast',
    link: 'https://example.com/project-5',
  },
  {
    id: 'project-6',
    title: 'Blog Platform',
    description: 'A lightweight blogging platform with Markdown support and static site generation.',
    imageUrl: 'https://picsum.photos/1200/800?random=6',
    imageHint: 'writing blog',
    link: 'https://example.com/project-6',
  },
];


export default function PreviewPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="container mx-auto px-4 py-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">Project Showcase</h1>
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-4xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
                loop: true,
            }}
        >
            <CarouselContent>
            {projects.map((project) => (
                <CarouselItem key={project.id}>
                <div className="p-1">
                    <Card className="overflow-hidden">
                        <CardContent className="p-0 relative aspect-video">
                             <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                data-ai-hint={project.imageHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                                <p className="text-lg text-white/90 mt-2">{project.description}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  );
}
