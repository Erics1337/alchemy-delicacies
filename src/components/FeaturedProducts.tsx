import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const offerings = [
  {
    category: "Cashew Cheesecake",
    dietaryInfo: [
      "Dairy free",
      "Gluten free",
      "No refined sugars",
      "Contains nuts",
      "Not made in gluten free kitchen"
    ],
    products: [
      {
        name: "Lemon Berry Cashew Cheesecake",
        image: "/lemon-berry-cashew-cheesecake.jpg"
      },
      {
        name: "Plain Cashew Cheesecake",
        image: "/plain-cashew-cheesecake.jpg"
      },
      {
        name: "Mocha Cashew Cheesecake",
        image: "/mocha-cashew-cheesecake.jpg"
      },
      {
        name: "Rosemary Orange Cashew Cheesecake",
        image: "/rosemary-orange-cashew-cheesecake.jpg"
      }
    ]
  },
  {
    category: "Gluten Free Cakes",
    dietaryInfo: ["Grain free"],
    products: [
      {
        name: "Carrot Cake",
        image: "/carrot-cake.jpg"
      },
      {
        name: "Dark Chocolate Espresso Cake",
        image: "/chocolate-espresso-cake.jpg"
      }
    ]
  },
  {
    category: "Traditional Cheesecake",
    dietaryInfo: [
      "Contains dairy",
      "Available gluten free with gluten free graham cracker crust"
    ],
    addons: [
      "Homemade chocolate sauce",
      "Berry coulis",
      "Caramel sauce"
    ],
    products: [
      {
        name: "Plain Cheesecake",
        image: "/plain-traditional-cheesecake.jpg"
      },
      {
        name: "Berry Coulis Cheesecake",
        image: "/berry-coulis-cheesecake.jpg"
      }
    ]
  }
]

export default function FeaturedProducts() {
  // Flatten all products and add category information
  const allProducts = offerings.flatMap(category => 
    category.products.map(product => ({
      ...product,
      category: category.category,
      dietaryInfo: category.dietaryInfo
    }))
  );

  return (
    <section className="py-16 bg-soft-pink bg-opacity-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-serif">Featured Delicacies</h2>
          <Link href="/offerings" className="text-primary hover:underline">
            View All Offerings →
          </Link>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allProducts.map((product) => (
                <CarouselItem key={product.name} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-white bg-opacity-95 hover:shadow-lg transition-shadow duration-200">
                      <CardContent className="p-0">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover rounded-t-lg"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-gold mb-2">{product.category}</p>
                          <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
                          <div className="mb-4">
                            <ul className="text-gray-600 text-sm">
                              {product.dietaryInfo.slice(0, 2).map((info) => (
                                <li key={info} className="inline-block mr-2">• {info}</li>
                              ))}
                              {product.dietaryInfo.length > 2 && (
                                <li className="inline-block text-gray-400">+{product.dietaryInfo.length - 2} more</li>
                              )}
                            </ul>
                          </div>
                          <Button className="w-full bg-gold hover:bg-gold/90 text-white">Order Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-4 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="bg-white/90 hover:bg-white" />
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
              <CarouselNext className="bg-white/90 hover:bg-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
