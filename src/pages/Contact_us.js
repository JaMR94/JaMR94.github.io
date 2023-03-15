import { Inter } from '@next/font/google'
import Layout from '@/components/Layouts/Layout'
import TituloContact from '@/components/Contact_us/titulo_contact'
import ContactForm from '@/components/Contact_us/contact_form'
import MainContacts from '@/components/Contact_us/main_contacts'
import Telefonos from '@/components/Contact_us/telefonos'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <Layout>
      <TituloContact/>
      <ContactForm/>
      <MainContacts/>
      <Telefonos/>
    </Layout>
  )
}