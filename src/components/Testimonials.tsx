import { Star } from 'lucide-react'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Sarah L.",
    rating: 5,
    text: "The Celestial Chocolate Cake was out of this world! Not only was it visually stunning, but the taste was divine. Kira's attention to detail and use of high-quality ingredients really shines through."
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "I ordered the Ethereal Cheesecake for my wife's birthday, and it was a hit! The texture was perfect, and the cosmic berry compote added just the right amount of tartness. Truly a masterpiece!"
  },
  {
    name: "Emma T.",
    rating: 5,
    text: "The Mystic Macarons were not only delicious but also a work of art. Each one was perfectly crafted, and the zodiac-inspired flavors were so unique. It was a delightful experience for all the senses!"
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-serif">What Our Customers Say</h2>
          <Link href="/testimonials" className="text-gold hover:underline">
            View All Testimonials
          </Link>
        </div>
        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                  <div className="flex mb-4 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-gold fill-current" />
                    ))}
                  </div>
                  <p className="mb-4 italic text-center text-lg">&quot;{testimonial.text}&quot;</p>
                  <p className="font-semibold text-center">{testimonial.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
