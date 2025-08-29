'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookCopy, Menu } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BookCopy className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">DocuPort</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === link.href ? 'text-foreground' : 'text-foreground/60'
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
                <BookCopy className="h-6 w-6 text-primary" />
                <span className="font-bold">DocuPort</span>
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
                    <BookCopy className="h-6 w-6 text-primary" />
                    <span className="font-bold">DocuPort</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                        'text-lg font-medium',
                        pathname === link.href ? 'text-primary' : 'text-muted-foreground'
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
