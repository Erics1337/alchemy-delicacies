import { Star } from 'lucide-react'

const allTestimonials = [
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
  },
  {
    name: "David W.",
    rating: 5,
    text: "The Galaxy Mirror Glaze Cake was absolutely spectacular! It looked like a piece of the cosmos on my table. The taste matched the presentation - simply incredible!"
  },
  {
    name: "Jennifer P.",
    rating: 5,
    text: "Ordered the Constellation Cookie Box for a special event and was blown away by the detail and taste. Each cookie was perfectly decorated and delicious!"
  },
  {
    name: "Alex M.",
    rating: 5,
    text: "The Zodiac Cake Pops were a huge hit at our party! Not only were they beautiful, but the flavors were unique and delightful. Will definitely order again!"
  }
]

export default function TestimonialsPage() {
  return (
    <main className="py-16 bg-cream min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif mb-8 text-center">Customer Testimonials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-gold fill-current" />
                ))}
              </div>
              <p className="mb-4 italic">&quot;{testimonial.text}&quot;</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
