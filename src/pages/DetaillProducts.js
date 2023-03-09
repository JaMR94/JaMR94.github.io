import { Inter } from '@next/font/google'
import Layout from '../components/Layouts/Layout'
import ImgProducts from '@/components/componentsDetaillProducts/imgProducts'
import HeaderProducts from '@/components/componentsDetaillProducts/headerProducts'
import DescriptionProdicts from '@/components/componentsDetaillProducts/descriptionProducts'
import SelectDescriptionProducts from '@/components/componentsDetaillProducts/selectDescriptionProducts'
import ButomSelectProducts from '@/components/componentsDetaillProducts/butomSelectProducts'
import Navbar from '@/components/navbar'
import Monthly from '@/components/monthly'
import Footer from '@/components/footer'
import styles from '../styles/butomSelectProducts.module.css';

// import Ejemplo from '@/components/componentsDetaillProducts/ejemplo'


const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
      <Layout>
        <Navbar/>
        <div className='container'id={styles.FeatContainer}>
          <div className='row'>
            <div className='col'>
              <ImgProducts />
            </div>
            <div className='col'>
              <HeaderProducts />
              <div className='container'>
                <div className='row'>
                  <DescriptionProdicts />
                </div>  
              </div>
              <hr className={styles.HrGris} />
              <SelectDescriptionProducts />
              <ButomSelectProducts />
            </div>
          </div>
        </div>
        {/* <Ejemplo /> */}
        <Monthly/>
        <Footer/>
      </Layout>
  )
}
