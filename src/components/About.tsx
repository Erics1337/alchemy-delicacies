import Image from 'next/image'

export default function About() {
  return (
    <section className="py-16 bg-cream bg-opacity-40">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/kira-alchemy-delicacies-profilepic.jpg"
            alt="Kira in her kitchen"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-serif mb-4">About Alchemy Delicacies</h2>
          <p className="mb-4">
            I, Kira, founded Alchemy Delicacies to share my passion for conscious baking. Inspired by the ancient art of alchemy, I believe that food can be a powerful tool for transformation. By infusing my creations with intention and love, I aim to nourish not just the body, but also the spirit. My journey began in my home kitchen, where I experimented with unique flavors and techniques, always striving to create something that would bring joy and wonder to those who tasted it. Today, I'm honored to share my creations with you, in the hopes that they will bring a little bit of magic into your life.
          </p>
          <p>
            At Alchemy Delicacies, we believe in the power of conscious baking. Each cake, each pastry, is crafted with intention, blending the finest ingredients with a touch of magic. Our creations are not just desserts; they&apos;re edible works of art that nourish the body and elevate the spirit.
          </p>
        </div>
      </div>
    </section>
  )
}

