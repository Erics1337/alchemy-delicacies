import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function OrderContact() {
  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif mb-8 text-center text-primary">Place Your Order</h2>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="text" placeholder="Name" required className="bg-white border-primary/20 focus:border-primary" />
            <Input type="email" placeholder="Email" required className="bg-white border-primary/20 focus:border-primary" />
            <Input type="tel" placeholder="Phone" required className="bg-white border-primary/20 focus:border-primary" />
            <Select>
              <SelectTrigger className="bg-white border-primary/20 focus:border-primary">
                <SelectValue placeholder="Select a product" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chocolate-cake">Celestial Chocolate Cake</SelectItem>
                <SelectItem value="cheesecake">Ethereal Cheesecake</SelectItem>
                <SelectItem value="macarons">Mystic Macarons</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Special requests" className="col-span-2 bg-white border-primary/20 focus:border-primary" />
            <div className="col-span-2">
              <Select>
                <SelectTrigger className="bg-white border-primary/20 focus:border-primary">
                  <SelectValue placeholder="Delivery or Pickup?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="delivery">Delivery</SelectItem>
                  <SelectItem value="pickup">Pickup</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="mt-6 w-full bg-secondary hover:bg-secondary-light text-white">Submit Order</Button>
        </form>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-serif mb-4 text-primary">Contact Us</h3>
          <p className="mb-2 text-primary-dark">Phone: (555) 123-4567</p>
          <p className="mb-2 text-primary-dark">Email: info@alchemydelicacies.com</p>
          <div className="mt-4">
            <a href="#" className="text-2xl mx-2"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-2xl mx-2"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-2xl mx-2"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}
