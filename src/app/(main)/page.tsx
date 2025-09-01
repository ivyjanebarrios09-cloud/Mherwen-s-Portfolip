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
} from '@/components/ui/card';
import type { Project } from '@/types';

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A personal portfolio to showcase my skills and projects.',
    imageUrl: '/Project showcase.jpg',
    imageHint: 'online store',
    link: 'https://example.com/project-1',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A personal portfolio to showcase my skills and projects.',
    imageUrl: '/project showcase1.jpg',
    imageHint: 'task board',
    link: 'https://example.com/project-2',
  },
  {
    id: 'project-3',
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects.',
    imageUrl: '/project showcase2.jpg',
    imageHint: 'personal website',
    link: 'https://example.com/project-3',
  },
    {
    id: 'project-4',
    title: 'Recipe Finder',
    description: 'A personal portfolio to showcase my skills and projects.',
    imageUrl: '/project showsace3.jpeg',
    imageHint: 'food app',
    link: 'https://example.com/project-4',
  },
];


export default function HomePage() {
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
