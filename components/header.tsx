"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Download, Menu, Mountain, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [active, setActive] = useState("Home")
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-gray-900/90 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Mountain className="h-6 w-6 text-primary" />
          Utsav Mishra
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-gray-300 hover:text-primary transition-colors duration-200",
                active === item.name && "text-primary",
              )}
              onClick={() => setActive(item.name)}
            >
              {item.name}
            </Link>
          ))}
          <a href="/resume.pdf" download>
            <Button size="sm" className="ml-2">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-gray-300 hover:text-primary transition-colors duration-200 py-2",
                    active === item.name && "text-primary",
                  )}
                  onClick={() => {
                    setActive(item.name)
                    setMobileMenuOpen(false)
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <a href="/resume.pdf" download className="w-full">
                <Button size="sm" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
