import { Inter } from '@next/font/google'
import Layout from '@/components/Layouts/Layout'
import Pagos from '@/components/Checkout/pagos_form'
import Pagostitle from '@/components/Checkout/pagostitle'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <Layout>
        <Pagostitle/>
        <Pagos/>
    </Layout>
  )
}