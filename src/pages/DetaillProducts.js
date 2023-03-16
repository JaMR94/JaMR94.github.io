import { Inter } from '@next/font/google'
import Layout from '../components/Layouts/Layout'
import ImgProducts from '@/components/componentsDetaillProducts/imgProducts'
import HeaderProducts from '@/components/componentsDetaillProducts/headerProducts'
import DescriptionProdicts from '@/components/componentsDetaillProducts/descriptionProducts'
import SelectDescriptionProducts from '@/components/componentsDetaillProducts/selectDescriptionProducts'
import ButomSelectProducts from '@/components/componentsDetaillProducts/butomSelectProducts'
import styles from '../styles/butomSelectProducts.module.css';
import { useRouter } from 'next/router';
import DetaillProducts from './DetaillProducts/[id]'

// import Ejemplo from '@/components/componentsDetaillProducts/ejemplo'


const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  const router = useRouter();

  if (!props.users) {
    router.reload();
    return null;
  }


  return (
      <Layout>
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
      </Layout>
  )
}

DetaillProducts.getInitialProps = async (ctx) => {
  try {
    const res = await fetch('https://ecommerce-unid.000webhostapp.com/products');
    const data = await res.json();
    return { users: data };
  } catch (error) {
    console.error(error);
    return { users: null };
  }
};
