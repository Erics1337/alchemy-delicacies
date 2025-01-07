'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { InstagramFeed } from "@/components/ui/InstagramFeed"

const galleryItems = [
  {
    src: '/images/gallery2.png',
    caption: 'Celestial Chocolate Cake with Galaxy Mirror Glaze'
  },
  {
    src: '/images/gallery3.png',
    caption: 'Ethereal Cheesecake with Cosmic Berry Compote'
  },
  {
    src: '/images/gallery4.png',
    caption: 'Mystic Macarons with Zodiac-Inspired Flavors'
  },
  {
    src: '/images/gallery5.png',
    caption: 'Constellation Cookie Box Collection'
  },
  {
    src: '/images/gallery6.png',
    caption: 'Galaxy Mirror Glaze Cake'
  },
  {
    src: '/images/gallery7.png',
    caption: 'Zodiac Cake Pops Assortment'
  },
];

export default function Gallery() {
  return (
    <section className="py-16 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-serif text-primary">Our Creations</h2>
          <Link href="/gallery" className="text-secondary hover:text-secondary-dark hover:underline">
            View All Creations
          </Link>
        </div>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            <InstagramFeed limit={6} />
            {galleryItems.map((item) => (
              <CarouselItem key={item.src}>
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-primary/90 hover:bg-primary text-white" />
          <CarouselNext className="bg-primary/90 hover:bg-primary text-white" />
        </Carousel>
      </div>
    </section>
  );
}
