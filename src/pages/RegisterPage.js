import { Inter } from '@next/font/google'
import RegisterPage from "@/components/RegisterPage";
import Layout from '@/components/Layout'
import Layout2 from '@/components/Layouts/Layout2'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
            <Layout2>
            <RegisterPage/>
            </Layout2>
            )
        }