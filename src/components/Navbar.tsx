'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const navItems = [
  {
    name: 'Home',
    href: '/',
    sections: [
      { name: 'About Us', href: '/#about' },
      { name: 'Featured Products', href: '/#products' },
      { name: 'Latest Gallery', href: '/#gallery' },
      { name: 'Customer Reviews', href: '/#testimonials' },
      { name: 'Contact', href: '/#contact' },
    ],
  },
  {
    name: 'Offerings',
    href: '/offerings',
    sections: [
      { name: 'Cashew Cheesecakes', href: '/offerings#cashew-cheesecakes' },
      { name: 'Gluten Free Cakes', href: '/offerings#gluten-free' },
      { name: 'Traditional Cheesecakes', href: '/offerings#traditional' },
      { name: 'Custom Orders', href: '/offerings#custom' },
    ],
  },
  {
    name: 'Gallery',
    href: '/gallery',
    sections: [
      { name: 'Latest Creations', href: '/gallery#latest' },
      { name: 'Seasonal Specials', href: '/gallery#seasonal' },
      { name: 'Custom Orders', href: '/gallery#custom' },
      { name: 'Events', href: '/gallery#events' },
    ],
  },
  {
    name: 'Testimonials',
    href: '/testimonials',
    sections: [
      { name: 'Customer Reviews', href: '/testimonials#reviews' },
      { name: 'Event Feedback', href: '/testimonials#events' },
      { name: 'Leave a Review', href: '/testimonials#leave-review' },
    ],
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    
    // Handle both full URLs and hash links
    if (href.startsWith('/') && !href.includes('#')) {
      window.location.href = href
    } else {
      const target = document.querySelector(href.split('#')[1])
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/90 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 relative">
              <Image
                src="/logos/alchemy-logo-02.svg"
                alt="Alchemy Delicacies Logo"
                fill
                className="object-contain filter-accent-color"
              />
            </div>
            <span className={`text-2xl font-serif ${isScrolled ? 'text-accent' : 'text-white'}`}>
              Alchemy Delicacies
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger
                      className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-accent`}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[200px] p-2 bg-primary">
                        <Link
                          href={item.href}
                          className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors text-white hover:bg-accent/20 hover:text-accent focus:bg-accent/20 focus:text-accent"
                        >
                          View all {item.name.toLowerCase()}
                        </Link>
                        <div className="h-px bg-secondary/20 my-2" />
                        {item.sections.map((section) => (
                          <Link
                            key={section.name}
                            href={section.href}
                            onClick={(e) => handleClick(e, section.href)}
                            className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors text-white hover:bg-accent/20 hover:text-accent focus:bg-accent/20 focus:text-accent"
                          >
                            {section.name}
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button className="ml-4 bg-secondary hover:bg-secondary-light text-white">Order Now</Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className={isScrolled ? 'text-white' : 'text-white'} /> : <Menu className={isScrolled ? 'text-white' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.name} className="mb-4">
                <Link
                  href={item.href}
                  className="block py-2 text-white font-medium hover:text-accent transition-colors"
                  onClick={(e) => handleClick(e, item.href)}
                >
                  {item.name}
                </Link>
                <div className="ml-4">
                  {item.sections.map((section) => (
                    <Link
                      key={section.name}
                      href={section.href}
                      className="block py-2 text-secondary hover:text-accent transition-colors"
                      onClick={(e) => handleClick(e, section.href)}
                    >
                      {section.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Button className="mt-4 w-full bg-secondary hover:bg-secondary-light text-white">Order Now</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
