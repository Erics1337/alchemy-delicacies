import Image from 'next/image'
import { Button } from '@/components/ui/button'

const products = [
  {
    name: "Celestial Chocolate Cake",
    description: "A rich, moist chocolate cake infused with a hint of lavender and adorned with edible gold stars.",
    price: "$45",
    image: "/chocolate-cake.jpg"
  },
  {
    name: "Ethereal Cheesecake",
    description: "A light, creamy cheesecake with a graham cracker crust, topped with a swirl of cosmic berry compote.",
    price: "$40",
    image: "/cheesecake.jpg"
  },
  {
    name: "Mystic Macarons (Limited Edition)",
    description: "A set of 12 macarons in flavors inspired by the zodiac, each decorated with intricate sacred geometry patterns.",
    price: "$30",
    image: "/macarons.jpg"
  }
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-soft-pink bg-opacity-40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif mb-8 text-center">Our Signature Creations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-white bg-opacity-95 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{product.price}</span>
                  <Button>Order Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

