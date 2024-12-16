'use client'

import { useState, useEffect } from 'react'

export default function VideoShowcase() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif mb-8 text-center">The Art of Baking</h2>
        <div className="aspect-w-16 aspect-h-9">
          {isClient && (
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          )}
        </div>
        <p className="text-center mt-8 text-xl italic">
          "Baking is alchemy—every ingredient, every moment matters."
        </p>
      </div>
    </section>
  )
}

