import { Star } from 'lucide-react'

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
        <h2 className="text-3xl font-serif mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
    </section>
  )
}

