'use client'

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen w-full">
      <div className="fixed inset-0 z-0 bg-[url('/bgpattern1.jpg')] bg-repeat opacity-15" />
      <Navbar />
      <main className="relative z-10 w-full">{children}</main>
      <Footer />
    </div>
  )
}
