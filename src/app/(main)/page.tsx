'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Code2, Library, Database, Wrench } from 'lucide-react';

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
        images: [
          '/yucca2.jpg',
          '/yucca1.jpg',
          '/yucca.jpg',
        ]
    }
  },
  {
    id: 'project-2',
    title: 'Wireless Scoreboard',
    description: 'A wireless scoreboard project involves creating an electronic system where a controller wirelessly updates the game score and other data on a display, typically using an ESP32. The system includes a microcontroller, display screen, and power supply, offering flexibility and portability for various sports and events.',
    imageUrl: '/Project showcase.jpg',
    imageHint: 'task board',
    link: 'NO LINK',
    documentation: {
        introduction: "A wireless scoreboard is an innovative system that allows real-time score updates and game data to be displayed without the need for physical wires. By utilizing wireless communication technologies like ESP32, the scoreboard can be controlled remotely, offering flexibility, portability, and ease of setup for various sports and events.",
        images: [
          '/wireless scoreboard.jpg',
        ]
    }
  },
  {
    id: 'project-3',
    title: 'UV Cabinet',
    description: 'A UV cabinet is a device that uses ultraviolet (UV) light to disinfect and sterilize items such as tools, equipment, or personal items. It effectively kills bacteria, viruses, and other pathogens, ensuring a hygienic environment without the use of chemicals.',
    imageUrl: '/uvcabinet.jpg',
    imageHint: 'personal website',
    link: 'NO LINK',
    documentation: {
        introduction: "A UV cabinet is a sanitation device that uses ultraviolet light to disinfect and sterilize objects, providing a chemical-free method to eliminate harmful pathogens. It's commonly used in healthcare, laboratories, and other settings where cleanliness and hygiene are critical.",
        images: [
            '/uvcabinet1.jpg',
        ]
            
        

    }
  },
    {
    id: 'project-4',
    title: 'Mawala System',
    description: 'A dynamic flood control system is an adaptive infrastructure designed to manage and mitigate flood risks by adjusting in real-time to changing water levels and environmental conditions. It uses sensors, smart technology, and automated barriers to efficiently regulate water flow and prevent flooding, offering a flexible and responsive solution.',
    imageUrl: '/project showsace3.jpeg',
    imageHint: 'food app',
    link: 'mawalasystem.atwebpages.com',
    documentation: {
        introduction: "A dynamic flood control system is an advanced solution that uses real-time data and automated technology to manage flood risks. By adjusting to changing conditions, it helps protect areas from flooding, ensuring more effective and responsive water management.",

        images: [
            '/mawalasystem.jpeg',
            '/mawalasystem1.jpeg',
            '/mawalasystem2.jpeg',
        

    
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
    }
  },
  {
    id: 'project-7',
    title: 'Recipe Finder',
    description: 'A web app to discover new recipes based on ingredients you have.',
    imageUrl: 'https://picsum.photos/600/400?random=7',
    imageHint: 'cooking recipe',
    link: 'https://example.com/project-7',
    documentation: {
      introduction: 'Find recipes easily.',
      images: ['https://picsum.photos/800/600?random=7_1', 'https://picsum.photos/800/600?random=7_2'],
    },
  },
  {
    id: 'project-8',
    title: 'Fitness Tracker',
    description: 'Track your workouts and monitor your progress.',
    imageUrl: 'https://picsum.photos/600/400?random=8',
    imageHint: 'fitness workout',
    link: 'https://example.com/project-8',
    documentation: {
      introduction: 'Your personal fitness companion.',
      images: ['https://picsum.photos/800/600?random=8_1', 'https://picsum.photos/800/600?random=8_2'],
    },
  },
  {
    id: 'project-9',
    title: 'Movie Watchlist',
    description: 'Create and manage your personal movie watchlist.',
    imageUrl: 'https://picsum.photos/600/400?random=9',
    imageHint: 'movie theater',
    link: 'https://example.com/project-9',
    documentation: {
      introduction: 'Never forget a movie to watch again.',
      images: ['https://picsum.photos/800/600?random=9_1', 'https://picsum.photos/800/600?random=9_2'],
    },
  },
  {
    id: 'project-10',
    title: 'Personal Finance Manager',
    description: 'A tool to manage your budget and expenses.',
    imageUrl: 'https://picsum.photos/600/400?random=10',
    imageHint: 'finance chart',
    link: 'https://example.com/project-10',
    documentation: {
      introduction: 'Take control of your finances.',
      images: ['https://picsum.photos/800/600?random=10_1', 'https://picsum.photos/800/600?random=10_2'],
    },
  },
  {
    id: 'project-11',
    title: 'Travel Planner',
    description: 'Plan your next adventure with this travel planner app.',
    imageUrl: 'https://picsum.photos/600/400?random=11',
    imageHint: 'travel map',
    link: 'https://example.com/project-11',
    documentation: {
      introduction: 'Plan your trips seamlessly.',
      images: ['https://picsum.photos/800/600?random=11_1', 'https://picsum.photos/800/600?random=11_2'],
    },
  },
  {
    id: 'project-12',
    title: 'Real-time Chat App',
    description: 'A real-time chat application using WebSockets.',
    imageUrl: 'https://picsum.photos/600/400?random=12',
    imageHint: 'chat bubbles',
    link: 'https://example.com/project-12',
    documentation: {
      introduction: 'Connect with people in real-time.',
      images: ['https://picsum.photos/800/600?random=12_1', 'https://picsum.photos/800/600?random=12_2'],
    },
  },
  {
    id: 'project-13',
    title: 'Music Player',
    description: 'A simple music player with playlist functionality.',
    imageUrl: 'https://picsum.photos/600/400?random=13',
    imageHint: 'music notes',
    link: 'https://example.com/project-13',
    documentation: {
      introduction: 'Your favorite tunes, one click away.',
      images: ['https://picsum.photos/800/600?random=13_1', 'https://picsum.photos/800/600?random=13_2'],
    },
  },
  {
    id: 'project-14',
    title: 'Online Code Editor',
    description: 'A browser-based code editor for HTML, CSS, and JavaScript.',
    imageUrl: 'https://picsum.photos/600/400?random=14',
    imageHint: 'code editor',
    link: 'https://example.com/project-14',
    documentation: {
      introduction: 'Code on the go.',
      images: ['https://picsum.photos/800/600?random=14_1', 'https://picsum.photos/800/600?random=14_2'],
    },
  },
  {
    id: 'project-15',
    title: 'Social Media Dashboard',
    description: 'Manage all your social media accounts in one place.',
    imageUrl: 'https://picsum.photos/600/400?random=15',
    imageHint: 'social media',
    link: 'https://example.com/project-15',
    documentation: {
      introduction: 'Your social media command center.',
      images: ['https://picsum.photos/800/600?random=15_1', 'https://picsum.photos/800/600?random=15_2'],
    },
  },
  {
    id: 'project-16',
    title: 'E-Learning Platform',
    description: 'A platform for online courses and tutorials.',
    imageUrl: 'https://picsum.photos/600/400?random=16',
    imageHint: 'online learning',
    link: 'https://example.com/project-16',
    documentation: {
      introduction: 'Learn new skills online.',
      images: ['https://picsum.photos/800/600?random=16_1', 'https://picsum.photos/800/600?random=16_2'],
    },
  },
  {
    id: 'project-17',
    title: 'Job Board',
    description: 'A platform for posting and finding job opportunities.',
    imageUrl: 'https://picsum.photos/600/400?random=17',
    imageHint: 'job search',
    link: 'https://example.com/project-17',
    documentation: {
      introduction: 'Find your next career move.',
      images: ['https://picsum.photos/800/600?random=17_1', 'https://picsum.photos/800/600?random=17_2'],
    },
  },
  {
    id: 'project-18',
    title: 'Real Estate Listings',
    description: 'A site for browsing and listing properties for sale or rent.',
    imageUrl: 'https://picsum.photos/600/400?random=18',
    imageHint: 'real estate',
    link: 'https://example.com/project-18',
    documentation: {
      introduction: 'Your dream home is a click away.',
      images: ['https://picsum.photos/800/600?random=18_1', 'https://picsum.photos/800/600?random=18_2'],
    },
  },
  {
    id: 'project-19',
    title: 'Appointment Booking System',
    description: 'A system for scheduling and managing appointments.',
    imageUrl: 'https://picsum.photos/600/400?random=19',
    imageHint: 'calendar appointment',
    link: 'https://example.com/project-19',
    documentation: {
      introduction: 'Effortless appointment scheduling.',
      images: ['https://picsum.photos/800/600?random=19_1', 'https://picsum.photos/800/600?random=19_2'],
    },
  },
  {
    id: 'project-20',
    title: 'Event Management Platform',
    description: 'Plan, promote, and manage events of all sizes.',
    imageUrl: 'https://picsum.photos/600/400?random=20',
    imageHint: 'event management',
    link: 'https://example.com/project-20',
    documentation: {
      introduction: 'The ultimate tool for event organizers.',
      images: ['https://picsum.photos/800/600?random=20_1', 'https://picsum.photos/800/600?random=20_2'],
    },
  },
];

const skills = {
    "Languages": [
        "HTML",
        "CSS (Sass, Tailwind, Bootstrap)",
        "JavaScript (Vanilla, TypeScript)",
        "Java",
        "C++",
        "C#",
        "PHP (Native)",
        "Python",
        "SQL"
    ],
    "Frameworks and Library": [
        "React.js",
        "Next.js",
        "Express.js",
        "Laravel",
        ".NET",
        "ASP",
        "Flask",
        "Flutter",
        "Vite"
    ],
    "Databases": [
        "MySQL",
        "MariaDB",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "Supabase"
    ],
    "Environments & Tools": [
        "Node.js",
        "Docker",
        "MySQL Workbench"
    ]
};

const skillIcons: { [key: string]: React.ElementType } = {
    "Languages": Code2,
    "Frameworks and Library": Library,
    "Databases": Database,
    "Environments & Tools": Wrench
};

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
                    src="/about me.jpg"
                    alt="Mherwen Wiel Romero"
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
                <h3 className="text-3xl font-headline font-bold text-center mb-12">My Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, skillList]) => {
                        const Icon = skillIcons[category];
                        return (
                            <Card key={category} className="bg-secondary/30 border-primary/20">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-center flex items-center justify-center gap-2">
                                        {Icon && <Icon className="w-6 h-6" />}
                                        <span>{category}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {skillList.map((skill) => (
                                            <Badge key={skill} variant="outline" className="text-sm px-3 py-1 bg-background border-primary/50 text-foreground hover:bg-primary/10 cursor-default">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
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
                                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
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
