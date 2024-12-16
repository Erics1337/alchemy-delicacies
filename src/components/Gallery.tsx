'use client';

import Image from 'next/image';

const images = [
  '/images/gallery1.png',
  '/images/gallery2.png',
  '/images/gallery3.png',
  '/images/gallery4.png',
  '/images/gallery5.png',
  '/images/gallery6.png',
  '/images/gallery7.png',
];

const getDelayClass = (index: number) => {
  const delays = [
    'delay-0',
    'delay-100',
    'delay-200',
    'delay-300',
    'delay-500',
    'delay-700',
    'delay-1000',
  ];
  return delays[index] || delays[0];
};

export default function Gallery() {
  return (
    <section className="py-16 bg-soft-pink bg-opacity-40">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-serif text-center mb-12">Our Creations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div
              key={src}
              className={`relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out animate-fadeIn ${getDelayClass(index)}`}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
