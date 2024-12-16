import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const contactInfo = {
  address: "123 Bakery Lane",
  city: "Sweetville",
  state: "CA",
  zip: "90210",
  phone: "(555) 123-4567",
  email: "info@alchemydelicacies.com",
  fullAddress: () => `${contactInfo.address}, ${contactInfo.city}, ${contactInfo.state} ${contactInfo.zip}`,
}

export const socialLinks = {
  instagram: "https://www.instagram.com/alchemy_delicacies/",
  facebook: "#"
}
