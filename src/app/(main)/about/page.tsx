import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'About | Mherwen\'s Portfolio',
  description: 'Learn more about me and my skills.',
};

const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Node.js', 'UI/UX Design'];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
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
          <h1 className="font-headline text-4xl md:text-5xl font-bold">About Me</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Hello! I&apos;m a passionate full-stack developer with a love for creating beautiful, functional, and user-centric web applications. My journey in tech started with a curiosity for how things work, and it has evolved into a career where I get to build amazing digital experiences.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            This portfolio viewer is a collection of my work, showcasing various projects and the documentation behind them. I believe in clean code, thoughtful design, and continuous learning.
          </p>
        </div>
      </div>
      
      <div className="mt-20">
        <h2 className="text-3xl font-headline font-bold text-center mb-8">My Skills</h2>
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
  );
}
