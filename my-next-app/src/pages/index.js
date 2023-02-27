import { Inter } from '@next/font/google'
import Content from '@/components/cotent'
import Footer from '@/components/footer'

const inter = Inter ({ subsets: ['latin']})

export default function Home() {
  return (
    <>
    <Content />
    <Footer />
    </>
  )
  
}
