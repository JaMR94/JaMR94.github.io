import Image from "next/image";
import Ejemplo from "../../img/Ejemplo.jpg";

const ImgProducts = () => {
    return (
        <Image src={Ejemplo} class="img-fluid" />        
    );
  }
  
  export default ImgProducts