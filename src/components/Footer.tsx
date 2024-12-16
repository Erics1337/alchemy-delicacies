import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'
import { contactInfo, socialLinks } from '@/lib/utils'

export default function Footer() {
  return (
    <footer className="bg-gold bg-opacity-95 text-gray-800 py-12 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Alchemy Delicacies</h3>
            <p className="text-sm">Transforming Ingredients into Conscious Confections</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="#gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="#testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">{contactInfo.address}</p>
            <p className="mb-2">{contactInfo.city}, {contactInfo.state} {contactInfo.zip}</p>
            <p className="mb-2">Phone: {contactInfo.phone}</p>
            <p>Email: {contactInfo.email}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href={socialLinks.facebook} className="hover:text-white transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href={socialLinks.instagram} className="hover:text-white transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p> 2024 Alchemy Delicacies. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
