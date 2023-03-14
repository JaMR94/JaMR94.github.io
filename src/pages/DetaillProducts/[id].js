import Layout from '../../components/Layouts/Layout'
import ImgProducts from '@/components/componentsDetaillProducts/imgProducts'
import DescriptionProdicts from '@/components/componentsDetaillProducts/descriptionProducts'
import SelectDescriptionProducts from '@/components/componentsDetaillProducts/selectDescriptionProducts'
import ButomSelectProducts from '@/components/componentsDetaillProducts/butomSelectProducts'
import styles from '../../styles/butomSelectProducts.module.css';

// Importamos el hook useRouter para poder obtener el id del query string de la URL
import { useRouter } from "next/router";
import fetch from 'isomorphic-fetch'

const DetaillProducts = ({user}) => {
    console.log(user)
    // Usamos el hook useRouter para obtener el id del query string de la URL
    const router = useRouter();
    console.log(router)
    const {id} =router.query;

    return (
        // Renderizamos el componente Layout
        <Layout>
            <div className='container'id={styles.FeatContainer}>
                <div className='row'>
                    <div className='col'>
                        <ImgProducts />
                    </div>
                    <div className='col'>
                        <h1>{id}{user.product_name}</h1>
                        <h1 className={styles.Letterh1}>${user.price} MNX</h1>
                        <p className={styles.LetterP}>{user.description}</p>
                        <hr className={styles.HrBlak}></hr>
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
        </Layout>
    )
}

DetaillProducts.getInitialProps = async (ctx) =>{
    try {
        // Hacemos una petición al API para obtener los detalles del producto con el id especificado en el query string de la URL
        const res = await fetch(`https://ecommerce-unid.000webhostapp.com/products/${ctx.query.id}`)
        const resJSON = await res.json();
        // Retornamos los detalles del producto como props
        return {user: resJSON}
    } catch (error) {
        console.error(error)
        // Si hay algún error, retornamos un mensaje de error
        return { errorMessage: 'Hubo un problema al cargar los datos' }
    }
}

export default DetaillProducts;
