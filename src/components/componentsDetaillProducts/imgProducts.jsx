import Image from "next/image";
import Ejemplo from "../../img/Ejemplo.jpg";
import styles from '../../styles/butomSelectProducts.module.css';

const ImgProducts = () => {
    return (
        <Image src={Ejemplo} class="img-fluid"  id={styles.featImg}/>        
    );
  }
  
  export default ImgProducts