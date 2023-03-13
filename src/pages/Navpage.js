import { Inter } from '@next/font/google'
import Navpage from "@/components/Navpage";
import Layout from '@/components/Layouts/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
            <Layout>
            <Navpage/>
            </Layout>
            )
        }