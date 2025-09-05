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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/types';
import { ProjectCard } from '@/components/project-card';

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Yucca',
    description: 'A full-featured e-commerce website built with Next.js and Stripe.',
    imageUrl: '/yuccamain.jpg',
    imageHint: 'online store',
    link: 'yucca2.vercel.app',
    documentation: {
        introduction: "Yucca is a modern e-commerce platform that demonstrates a complete shopping experience, from browsing products to completing a purchase with Stripe.",
        steps: [
            {
                title: "Step 1: Homepage and Product Discovery",
                description: "The homepage features a curated selection of products. Users can easily navigate through categories and view featured items. The design is clean and focuses on high-quality product imagery.",
                imageUrl: "/yuccamain.jpg",
                imageHint: "e-commerce homepage"
            },
            {
                title: "Step 2: Product Details Page",
                description: "Clicking on a product leads to a detailed view with multiple images, description, price, and an 'Add to Cart' button. This page is designed to provide all necessary information to the user before making a purchase decision.",
                imageUrl: "https://picsum.photos/800/600?random=11",
                imageHint: "product details"
            },
            {
                title: "Step 3: Shopping Cart and Checkout",
                description: "The shopping cart allows users to review their selected items, update quantities, and proceed to checkout. The checkout process is streamlined and secure, powered by Stripe.",
                imageUrl: "https://picsum.photos/800/600?random=12",
                imageHint: "shopping cart"
            }
        ]
    }
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management tool for teams, using React and Firebase.',
    imageUrl: '/project showcase1.jpg',
    imageHint: 'task board',
    link: 'https://example.com/project-2',
    documentation: {
        introduction: "This is a comprehensive guide to the Task Management App, a tool designed for team collaboration.",
        steps: [
            {
                title: "Step 1: Dashboard",
                description: "The main dashboard gives you an overview of all your tasks, categorized by status (To Do, In Progress, Done).",
                imageUrl: "/project showcase1.jpg",
                imageHint: "task dashboard"
            },
            {
                title: "Step 2: Creating a New Task",
                description: "You can easily create a new task by clicking the 'Add Task' button. A modal will appear where you can enter the task details.",
                imageUrl: "https://picsum.photos/800/600?random=22",
                imageHint: "add new task"
            }
        ]
    }
  },
  {
    id: 'project-3',
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects, built with Astro.',
    imageUrl: '/project showcase2.jpg',
    imageHint: 'personal website',
    link: 'https://example.com/project-3',
    documentation: {
        introduction: "This portfolio website is designed to showcase my skills and projects in a clean and organized manner.",
        steps: [
            {
                title: "Step 1: The Landing Page",
                description: "The landing page provides a brief introduction and highlights key projects.",
                imageUrl: "/project showcase2.jpg",
                imageHint: "portfolio landing page"
            }
        ]
    }
  },
    {
    id: 'project-4',
    title: 'Recipe Finder',
    description: 'Discover new recipes based on ingredients you have at home. Uses a public API.',
    imageUrl: '/project showsace3.jpeg',
    imageHint: 'food app',
    link: 'https://example.com/project-4',
    documentation: {
        introduction: "The Recipe Finder helps you discover new meals you can make with the ingredients you already have.",
        steps: [
            {
                title: "Step 1: Search for Recipes",
                description: "Enter the ingredients you have on hand, and the app will fetch recipes you can make.",
                imageUrl: "/project showsace3.jpeg",
                imageHint: "recipe search"
            }
        ]
    }
  },
  {
    id: 'project-5',
    title: 'Weather Dashboard',
    description: 'A clean weather dashboard showing current and forecasted weather for any city.',
    imageUrl: 'https://picsum.photos/600/400?random=5',
    imageHint: 'weather forecast',
    link: 'https://example.com/project-5',
    documentation: {
        introduction: "A simple yet powerful weather dashboard.",
        steps: [
            {
                title: "Step 1: Check the Weather",
                description: "Enter a city to see the current weather and a 5-day forecast.",
                imageUrl: "https://picsum.photos/800/600?random=51",
                imageHint: "weather dashboard"
            }
        ]
    }
  },
  {
    id: 'project-6',
    title: 'Blog Platform',
    description: 'A lightweight blogging platform with Markdown support and static site generation.',
    imageUrl: 'https://picsum.photos/600/400?random=6',
    imageHint: 'writing blog',
    link: 'https://example.com/project-6',
    documentation: {
        introduction: "A guide to the blogging platform.",
        steps: [
            {
                title: "Step 1: Reading an Article",
                description: "The main view for reading a blog post.",
                imageUrl: "https://picsum.photos/800/600?random=61",
                imageHint: "blog post"
            }
        ]
    }
  },
];

const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Node.js', 'UI/UX Design'];

export default function HomePage() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div>
      <section id="about" className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0">
                <Image
                    src="https://picsum.photos/400/400"
                    alt="Profile Picture"
                    width={256}
                    height={256}
                    className="rounded-full object-cover border-4 border-primary/50 shadow-lg"
                    data-ai-hint="professional portrait"
                />
                </div>
                <div className="text-center md:text-left">
                <h2 className="font-headline text-4xl md:text-5xl font-bold">About Me</h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                    Hello! I&apos;m a passionate full-stack developer with a love for creating beautiful, functional, and user-centric web applications. My journey in tech started with a curiosity for how things work, and it has evolved into a career where I get to build amazing digital experiences.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    This portfolio viewer is a collection of my work, showcasing various projects and the documentation behind them. I believe in clean code, thoughtful design, and continuous learning.
                </p>
                </div>
            </div>
            
            <div className="mt-20">
                <h3 className="text-3xl font-headline font-bold text-center mb-8">My Skills</h3>
                <Card className="bg-secondary/30 border-primary/20">
                <CardContent className="p-6">
                    <div className="flex flex-wrap justify-center gap-3">
                    {skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-base px-4 py-2 bg-background border-primary/50 text-foreground hover:bg-primary/10 cursor-default">
                        {skill}
                        </Badge>
                    ))}
                    </div>
                </CardContent>
                </Card>
            </div>
        </div>
      </section>

      <section id="home" className="container mx-auto px-4 py-16">
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
      </section>

      <section id="projects" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
            <div className="text-center pb-16">
                <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
                Mherwen Wiel Romero
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                Portfolio Documentation Viewer
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
            </div>
        </div>
      </section>
    </div>
  );
}

export const getProjects = () => projects;

export const getProjectById = (id: string) => {
    return projects.find(p => p.id === id);
}
