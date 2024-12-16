'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
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
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-90 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className={`text-2xl font-serif ${isScrolled ? 'text-gold' : 'text-white'}`}>
            Alchemy Delicacies
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`hover:text-gold transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Button className="hidden md:block">Order Now</Button>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className={isScrolled ? 'text-gray-800' : 'text-white'} /> : <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-90">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-800 hover:text-gold transition-colors"
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="mt-4 w-full">Order Now</Button>
          </div>
        </div>
      )}
    </nav>
  )
}

