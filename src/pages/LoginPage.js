import { Inter } from '@next/font/google'
import LoginPage from "@/components/LoginPage";
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
            <Layout>
            <LoginPage/>
            </Layout>
            )
        }