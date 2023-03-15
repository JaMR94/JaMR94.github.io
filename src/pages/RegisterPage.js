import { Inter } from '@next/font/google'
import RegisterPage from "@/components/login_register/RegisterPage";
import Layout2 from '@/components/Layouts/Layout2'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
            <Layout2>
            <RegisterPage/>
            </Layout2>
            )
        }