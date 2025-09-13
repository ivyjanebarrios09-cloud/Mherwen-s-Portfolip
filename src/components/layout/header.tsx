'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const handleScroll = () => {
    const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
      if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        setActiveLink(`#${section.id}`);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/') {
        e.preventDefault();
        const targetElement = document.getElementById(href.substring(1));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/icon.jpg" alt="Logo" width={24} height={24} className="rounded-full" />
            <span className="hidden font-bold sm:inline-block">Mherwen's Portfolio</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === '/' && activeLink === link.href ? 'text-foreground' : 'text-foreground/60',
                  pathname !== '/' && pathname.startsWith(link.href.substring(1)) && 'text-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Nav */}
        <div className="flex flex-1 items-center justify-between md:hidden">
            <Link href="/" className="flex items-center space-x-2">
                <Image src="/icon.jpg" alt="Logo" width={24} height={24} className="rounded-full" />
                <span className="font-bold">Mherwen's Portfolio</span>
            </Link>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="p-4">
                <Link href="/" className="mb-8 flex items-center space-x-2">
                    <Image src="/icon.jpg" alt="Logo" width={24} height={24} className="rounded-full" />
                    <span className="font-bold">Mherwen's Portfolio</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={cn(
                        'text-lg font-medium',
                        activeLink === link.href ? 'text-primary' : 'text-muted-foreground'
                        )}
                    >
                        {link.label}
                    </Link>
                    ))}
                </nav>
                </div>
            </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
