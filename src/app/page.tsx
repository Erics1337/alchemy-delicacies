import Hero from '@/components/Hero'
import About from '@/components/About'
import FeaturedProducts from '@/components/FeaturedProducts'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import VideoShowcase from '@/components/VideoShowcase'
import OrderContact from '@/components/OrderContact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <section id="about"><About /></section>
      <section id="products"><FeaturedProducts /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="gallery"><Gallery /></section>
      <VideoShowcase />
      <section id="contact"><OrderContact /></section>
    </main>
  )
}
