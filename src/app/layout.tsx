import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Alchemy Delicacies',
  description: 'Transforming Ingredients into Conscious Confections',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

