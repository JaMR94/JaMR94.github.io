import Layout from '@/components/Layouts/Layout'
import Inicio from '@/components/homeblog/inicio'
import Features from '@/components/homeblog/features'
import Space from '@/components/homeblog/space'
// import Cardsection from '@/components/Products/cardsection'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Layout>
        <Inicio />
        <Space />
        <Features />
        {/* <Cardsection /> */}
      </Layout>
    </main>
  )
  
}
