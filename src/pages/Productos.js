import Cardsection from '@/components/Products/cardsection'
import Layout from '@/components/Layouts/Layout'
import ProductsTitle from '@/components/Products/Products_title'
import Menunav from '@/components/Products/menunav'

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Layout>
        <ProductsTitle />
        <Menunav />
        <Cardsection />
      </Layout>
    </main>
  )
  
}