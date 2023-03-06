import Layout from '@/components/Layout'
import Inicio from '@/components/homeblog/inicio'
import Features from '@/components/homeblog/features'
import Space from '@/components/homeblog/space'
import Cardsection from '@/components/homeblog/cardsection'
import Navbar from '@/components/navbar'
import Monthly from '@/components/monthly'
import Footer from '@/components/footer'
import menunav from '@/components/menunav'



export default function Home() {
  return (
    <main>
      <Layout>
        <Navbar/>
        <Inicio />
        <Space />
        <Features />
        <menunav />
        <Cardsection />
        <Monthly/>
        <Footer/>
      </Layout>
    </main>
  )
  
}
