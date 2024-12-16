'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute top-0 left-0 min-w-full min-h-full object-cover z-0 ${
          isClient ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
      >
        <source src="/video/20241210_2154_Cheesecake Chaos Unleashed_simple_compose_01jet12t6ge7atxp33j1drs7s3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl md:text-6xl font-serif mb-4">
          Alchemy Delicacies
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Transforming Ingredients into Conscious Confections
        </p>
        <Button size="lg">Explore Our Creations</Button>
      </div>
    </section>
  )
}
