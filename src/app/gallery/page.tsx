'use client';

import Image from 'next/image';

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
  // Add more images and captions as needed
];

export default function GalleryPage() {
  return (
    <main className="py-16 min-h-screen bg-opacity-40 bg-soft-pink">
      <div className="container px-4 mx-auto">
        <h1 className="mb-12 font-serif text-4xl text-center">Our Magical Creations</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.src}
              className="overflow-hidden relative rounded-lg shadow-lg aspect-square group"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="flex absolute inset-0 justify-center items-center bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-60">
                <p className="px-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
