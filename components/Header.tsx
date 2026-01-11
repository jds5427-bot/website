import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            excede
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Products
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
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
