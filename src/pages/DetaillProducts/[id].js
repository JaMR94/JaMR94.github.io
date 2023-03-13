import Layout from '../../components/Layouts/Layout'
import ImgProducts from '@/components/componentsDetaillProducts/imgProducts'
// import HeaderProducts from '@/components/componentsDetaillProducts/headerProducts'
import DescriptionProdicts from '@/components/componentsDetaillProducts/descriptionProducts'
import SelectDescriptionProducts from '@/components/componentsDetaillProducts/selectDescriptionProducts'
import ButomSelectProducts from '@/components/componentsDetaillProducts/butomSelectProducts'
import styles from '../../styles/butomSelectProducts.module.css';

import { useRouter } from "next/router";
import fetch from 'isomorphic-fetch'

const DetaillProducts = ({user}) => {
    // console.log(props)
    const router = useRouter();
    const {id} =router.query;

    return (
        <Layout>
        <div className='container'id={styles.FeatContainer}>
          <div className='row'>
            <div className='col'>
              <ImgProducts />
            </div>
            <div className='col'>
              {/* <HeaderProducts /> */}
                <h1>{user.id}{user.product_name}</h1>
                <h1 className={styles.Letterh1}>${user.price} MNX</h1>
                <p className={styles.LetterP}>{user.description}</p>
                <hr className={styles.HrBlak}>
                </hr>
              <div className='container'>
                <div className='row'>
                        <DescriptionProdicts />
                        <div class="col">
                            <p>{user.price}</p>
                            <p>{user.stock}</p>
                        </div>
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

DetaillProducts.getInitialProps = async (ctx) =>{
    try {
        const res = await fetch(`https://ecommerce-unid.000webhostapp.com/products/${ctx.query.id}`)
        const resJSON = await res.json();
        // console.log(resJSON)
        return {user: resJSON}
    } catch (error) {
        console.error(error)
        return { errorMessage: 'Hubo un problema al cargar los datos' }
    }
}

export default DetaillProducts;