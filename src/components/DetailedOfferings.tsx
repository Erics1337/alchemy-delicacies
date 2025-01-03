import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const detailedOfferings = [
  {
    category: "Cashew Cheesecake",
    description: "Our signature dairy-free cheesecakes are crafted with organic cashews, creating a creamy, indulgent dessert that's both healthy and delicious.",
    dietaryInfo: [
      "Dairy free",
      "Gluten free",
      "No refined sugars",
      "Contains nuts",
      "Not made in gluten free kitchen"
    ],
    process: "Each cashew cheesecake is carefully crafted using organic cashews that are soaked and blended to create a smooth, creamy base. We sweeten naturally and add our unique flavor combinations to create these delightful treats.",
    products: [
      {
        name: "Lemon Berry Cashew Cheesecake",
        description: "A bright and refreshing combination of citrus and mixed berries, perfectly balanced with our creamy cashew base.",
        image: "/lemon-berry-cashew-cheesecake.jpg",
        customizationOptions: ["Berry selection", "Sweetness level", "Size options"]
      },
      {
        name: "Plain Cashew Cheesecake",
        description: "Our classic cashew cheesecake, showcasing the pure, creamy flavor of cashews with just the right touch of sweetness.",
        image: "/plain-cashew-cheesecake.jpg",
        customizationOptions: ["Sweetness level", "Size options"]
      },
      {
        name: "Mocha Cashew Cheesecake",
        description: "A coffee lover's dream, combining our creamy cashew base with organic coffee and rich chocolate notes.",
        image: "/mocha-cashew-cheesecake.jpg",
        customizationOptions: ["Coffee intensity", "Chocolate type", "Size options"]
      },
      {
        name: "Rosemary Orange Cashew Cheesecake",
        description: "An sophisticated blend of fresh rosemary and orange zest, creating an unexpected but delightful flavor combination.",
        image: "/rosemary-orange-cashew-cheesecake.jpg",
        customizationOptions: ["Herb intensity", "Citrus level", "Size options"]
      }
    ]
  },
  {
    category: "Gluten Free Cakes",
    description: "Our gluten-free cakes are made with a special blend of grain-free flours, ensuring a moist and delicious cake that everyone can enjoy.",
    dietaryInfo: ["Grain free", "Gluten free"],
    process: "We use a carefully crafted blend of alternative flours to create cakes that are indistinguishable from traditional grain-based cakes. Each recipe has been perfected to ensure the perfect texture and taste.",
    products: [
      {
        name: "Carrot Cake",
        description: "A moist and flavorful carrot cake made with fresh carrots, warm spices, and topped with dairy-free cream cheese frosting.",
        image: "/carrot-cake.jpg",
        customizationOptions: ["Nut inclusion", "Frosting type", "Size options", "Spice level"]
      },
      {
        name: "Dark Chocolate Espresso Cake",
        description: "A rich, decadent chocolate cake enhanced with espresso, creating an intensely satisfying chocolate experience.",
        image: "/chocolate-espresso-cake.jpg",
        customizationOptions: ["Coffee intensity", "Chocolate type", "Frosting options", "Size options"]
      }
    ]
  },
  {
    category: "Traditional Cheesecake",
    description: "Our traditional cheesecakes are made with premium cream cheese and can be adapted to be gluten-free upon request.",
    dietaryInfo: [
      "Contains dairy",
      "Available gluten free with gluten free graham cracker crust"
    ],
    process: "Using only the finest cream cheese and carefully selected ingredients, our traditional cheesecakes are baked low and slow to achieve the perfect texture and prevent cracking.",
    addons: [
      {
        name: "Homemade chocolate sauce",
        description: "Rich, dark chocolate sauce made from premium cocoa"
      },
      {
        name: "Berry coulis",
        description: "Fresh berry sauce made from seasonal fruits"
      },
      {
        name: "Caramel sauce",
        description: "Homemade caramel sauce with a perfect balance of sweetness"
      }
    ],
    products: [
      {
        name: "Plain Cheesecake",
        description: "Our classic New York style cheesecake with a graham cracker crust, perfect on its own or paired with your choice of toppings.",
        image: "/plain-traditional-cheesecake.jpg",
        customizationOptions: ["Crust type", "Size options", "Topping selection"]
      },
      {
        name: "Berry Coulis Cheesecake",
        description: "Our classic cheesecake topped with a fresh berry coulis made from seasonal fruits.",
        image: "/berry-coulis-cheesecake.jpg",
        customizationOptions: ["Berry selection", "Crust type", "Size options"]
      }
    ]
  },
  {
    category: "Glutenous Cakes",
    description: "Our traditional wheat-based cakes offer classic flavors at a more accessible price point without compromising on quality.",
    dietaryInfo: ["Contains gluten", "Traditional recipes"],
    process: "Made with high-quality wheat flour and traditional baking methods, these cakes offer the classic textures and flavors that many know and love.",
    products: [
      {
        name: "Custom Glutenous Cakes",
        description: "Available in various flavors and styles, our wheat-based cakes can be customized to your preferences.",
        image: "/custom-cake.jpg",
        customizationOptions: ["Flavor selection", "Frosting type", "Size options", "Decoration style"]
      }
    ]
  }
]

export default function DetailedOfferings() {
  return (
    <section className="py-16 bg-soft-pink bg-opacity-40">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif mb-8 text-center">Our Complete Delicacies Collection</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Each of our creations can be customized to your preferences. We take pride in crafting delicious treats that cater to various dietary needs without compromising on taste.
        </p>
        
        {detailedOfferings.map((category) => (
          <Card key={category.category} className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">{category.category}</CardTitle>
              <CardDescription className="text-lg">{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Dietary Information:</h4>
                <ul className="text-gray-600">
                  {category.dietaryInfo.map((info) => (
                    <li key={info} className="inline-block mr-4 mb-2">• {info}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Our Process:</h4>
                <p className="text-gray-600">{category.process}</p>
              </div>

              {category.addons && (
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Available Add-ons:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {category.addons.map((addon) => (
                      <Card key={addon.name} className="bg-white bg-opacity-50">
                        <CardHeader>
                          <CardTitle className="text-lg">{addon.name}</CardTitle>
                          <CardDescription>{addon.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.products.map((product) => (
                  <Card key={product.name} className="bg-white">
                    <CardHeader>
                      <div className="relative h-48 mb-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="customization">
                          <AccordionTrigger>Customization Options</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-4">
                              {product.customizationOptions.map((option) => (
                                <li key={option} className="text-gray-600">{option}</li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Button className="w-full mt-4">Request Custom Order</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
