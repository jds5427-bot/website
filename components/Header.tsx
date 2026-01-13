'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="excede"
            width={180}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/products" 
            className="relative flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            onMouseEnter={() => setHoveredLink('products')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Image
              src="/icon.png"
              alt=""
              width={20}
              height={20}
              className={`h-5 w-5 transition-opacity duration-200 ${hoveredLink === 'products' ? 'opacity-100' : 'opacity-0'}`}
            />
            Products
          </Link>
          <Link 
            href="/about" 
            className="relative flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            onMouseEnter={() => setHoveredLink('about')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Image
              src="/icon.png"
              alt=""
              width={20}
              height={20}
              className={`h-5 w-5 transition-opacity duration-200 ${hoveredLink === 'about' ? 'opacity-100' : 'opacity-0'}`}
            />
            About
          </Link>
          <Link 
            href="/contact" 
            className="relative flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            onMouseEnter={() => setHoveredLink('contact')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Image
              src="/icon.png"
              alt=""
              width={20}
              height={20}
              className={`h-5 w-5 transition-opacity duration-200 ${hoveredLink === 'contact' ? 'opacity-100' : 'opacity-0'}`}
            />
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button asChild>
            <Link href="/waitlist">Join Waitlist</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
