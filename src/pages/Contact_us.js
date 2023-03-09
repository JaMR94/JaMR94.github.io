import { Inter } from '@next/font/google'
import Layout from '@/components/Layouts/Layout'
import TituloContact from '@/components/Contact_us/titulo_contact'
import ContactForm from '@/components/Contact_us/contact_form'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <Layout>
      <TituloContact/>
      <ContactForm/>
    </Layout>
  )
}