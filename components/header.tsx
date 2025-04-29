"use client"

import Link from "next/link"
import { AlertCircle, BarChart2, BookOpen, Code, Shield } from "lucide-react"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Dashboard", href: "/", icon: BarChart2 },
  { name: "Exploits", href: "/exploits", icon: AlertCircle },
  { name: "Resources", href: "/resources", icon: BookOpen },
  { name: "Contribute", href: "/contribute", icon: Code },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/live">
            <Button variant="outline" className="gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
              </span>
              Live Tracking
            </Button>
          </Link>
          <ThemeToggle />
          <Button asChild variant="default" size="sm" className="hidden md:flex">
            <Link href="https://github.com/kiralightyagami/SolanaSecure">
              <Shield className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}