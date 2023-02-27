import { Inter } from '@next/font/google'
import Header from '@/components/header'
import Content from '@/components/content'
import Footer from '@/components/footer'
import Layout from '@/components/Layout'



const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>

  )
}
